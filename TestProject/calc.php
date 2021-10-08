<?

$json = file_get_contents('php://input'); 
$obj = json_decode($json);

$date = ($obj->date);
$period = intval($obj->period);
$refillAmount = intval($obj->refillAmount);
$depositAmount = intval($obj->depositAmount);
$percent = intval($obj->percent);

$daysNboom = explode(".", $date);
$currentMonth = intval($daysNboom[1]);
$currentYear = intval($daysNboom[2]);
$daysY = (!(intval($currentYear) % 4)) ? 366 : 365;
$sumN = 0;
$sum = 0;

for ($i = 0; $i < $period; $i++) {
if ($currentMonth > 12) {
$currentMonth = 1;
$currentYear++;
$daysY = (!(intval($currentYear) % 4)) ? 366 : 365;
}
$sum = $depositAmount + ($depositAmount + $refillAmount) * (cal_days_in_month(CAL_GREGORIAN, $currentMonth, $currentYear)) * ($percent / $daysY);
$currentMonth++;

$depositAmount = $sum;
$sumN = intval($sum);
};
echo $sumN;
?>