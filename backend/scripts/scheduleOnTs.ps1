Connect-AzAccount
set-azcontext -Subscription "turkiz-starfish-bsmh-ts-001"
$new_schedules = @();

$schedules = Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION | ForEach-Object{$_.Name}
foreach ($schedule in $schedules){
    if($schedule -like '*stop*'){
        $new_schedules += $schedule
    }
}

foreach ($schedule in $new_schedules){
    set-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION -Name $schedule -IsEnabled $true
}

set-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION -Name vm-shutdown-hourly -IsEnabled $true
Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-INFRA -AutomationAccountName BSMCH-START-STOP-AUTOMATION | Select-Object Name,IsEnabled,StartTime