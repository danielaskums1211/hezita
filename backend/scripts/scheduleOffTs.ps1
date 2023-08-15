$SecurePassword = ConvertTo-SecureString -String "$env:PD_CLIENT_SECRET" -AsPlainText -Force
$TenantId = '$env:TENANT_ID'
$ApplicationId = '$env:PD_CLIENT_ID'
$Credential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $ApplicationId, $SecurePassword


Connect-AzAccount -ServicePrincipal -TenantId $TenantId -Credential $Credential

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
