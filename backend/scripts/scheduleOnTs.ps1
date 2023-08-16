$SecurePassword = ConvertTo-SecureString -String "$env:CLIENT_SECRET" -AsPlainText -Force
$TenantId = '$env:TENANT_ID'
$ClientId = '$env:CLIENT_ID'
$Credential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $ClientId, $SecurePassword

Connect-AzAccount -ServicePrincipal -TenantId $TenantId -Credential $Credential

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
