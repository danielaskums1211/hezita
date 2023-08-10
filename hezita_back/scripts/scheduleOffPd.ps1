Connect-AzAccount

Set-AzContext -Subscription "turkiz-starfish-BSMH-pd-001"

$new_schedules = @();

$schedules = Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-PROD-Main-RG -AutomationAccountName NEW-START-STOP-RUNBOOK-SPECIFIC-AA | ForEach-Object{$_.Name}
foreach ($schedule in $schedules){
    if($schedule -like '*stop*'){
        $new_schedules += $schedule
    }
}

foreach ($schedule in $new_schedules){
    set-AzAutomationSchedule -ResourceGroupName BASMACH-NE-PROD-Main-RG -AutomationAccountName NEW-START-STOP-RUNBOOK-SPECIFIC-AA -Name $schedule -IsEnabled $false
}

Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-PROD-Main-RG -AutomationAccountName NEW-START-STOP-RUNBOOK-SPECIFIC-AA | Select-Object Name,IsEnabled,StartTime