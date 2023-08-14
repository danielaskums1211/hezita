Connect-AzAccount

Set-AzContext -Subscription "turkiz-starfish-BSMH-ts-001"

$new_schedules = @();

$schedules = Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION | ForEach-Object{$_.Name}
foreach ($schedule in $schedules){
    if($schedule -like '*stop*'){
        $new_schedules += $schedule
    }
}

foreach ($schedule in $new_schedules){
    set-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION -Name $schedule -IsEnabled $false
}

set-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION -Name vm-shutdown-hourly -IsEnabled $false
Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION | Select-Object Name,IsEnabled,StartTime