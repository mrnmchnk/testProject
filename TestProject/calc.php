<?


$json = file_get_contents('php://input'); 
$obj = json_decode($json);
// echo($obj->date);



// $receiveData = $_POST['convertFormValueToJson'];

// $respond = json_decode($receiveData);
// print_r($receiveData);
// echo ($receiveData);



$date = ($obj->date);
$period = intval($obj->period);
$refillAmount = intval($obj->refillAmount);
$depositAmount = intval($obj->depositAmount);
$percent = intval($obj->percent);
// $timetype = intval($obj->timetype);

// echo $period;
// echo "<br>";
// echo $date;
// echo "<br>";
// echo $refillAmount;
// echo "<br>";
// echo $depositAmount;
// echo "<br>";
// echo $percent;



// $period = intval($_POST["period"]);
// $date = $_POST["date"];
// $refillAmount = intval($_POST["refillAmount"]);
// $depositAmount = intval($_POST["depositAmount"]);
// $percent = intval($_POST["percent"]);
// $timetype = intval($_POST[".timetype"]);

$daysNboom = explode(".", $date);
$currentMonth = intval($daysNboom[1]);
$currentYear = intval($daysNboom[2]);
// echo $daysNboom[0];
// echo $daysNboom[1];
// $daysN = cal_days_in_month(CAL_GREGORIAN, $daysNboom[1], $daysNboom[0]);
// echo $daysN;
$daysY = (!(intval($currentYear) % 4)) ? 366 : 365;
// echo $daysY;
// echo gettype(intval($daysNboom[0]));
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
// echo "Месяц " . ($i+1) . " = " . $sumN;
// echo "<br>";
};
echo $sumN;
// echo json_encode($sumN);

// $daysN++;
// if ($daysN > 12) {
// $daysN = 1;
// }
//daysNn = cal_days_in_month(CAL_GREGORIAN, $daysNboom[1]+1, $daysNboom[0])





// $number = cal_days_in_month(CAL_GREGORIAN, 8, 2003); // 31
// echo "Всего {$number} дней в Августе 2003 года";



// if(isset( $_GET["json"])) {
// echo "111";
// }
// else {
// echo "222";
// }

// echo json_encode(var_dump($_POST));

?>