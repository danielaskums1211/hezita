$SecurePassword = ConvertTo-SecureString -String "$env:CLIENT_SECRET" -AsPlainText -Force
$TenantId = '$env:TENANT_ID'
$ApplicationId = '$env:CLIENT_ID'
$Credential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $ApplicationId, $SecurePassword


Connect-AzAccount -ServicePrincipal -TenantId $TenantId -Credential $Credential

Set-AzContext -Subscription "turkiz-starfish-BSMH-pd-001"
$new_schedules = @();

$schedules = Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-PROD-Main-RG -AutomationAccountName NEW-START-STOP-RUNBOOK-SPECIFIC-AA | ForEach-Object{$_.Name}
foreach ($schedule in $schedules){
    if($schedule -like '*stop*'){
        $new_schedules += $schedule
    }
}

foreach ($schedule in $new_schedules){
    set-AzAutomationSchedule -ResourceGroupName BASMACH-NE-PROD-Main-RG -AutomationAccountName NEW-START-STOP-RUNBOOK-SPECIFIC-AA -Name $schedule -IsEnabled $true
}

Get-AzAutomationSchedule -ResourceGroupName BASMACH-NE-PROD-Main-RG -AutomationAccountName NEW-START-STOP-RUNBOOK-SPECIFIC-AA | Select-Object Name,IsEnabled,StartTime
