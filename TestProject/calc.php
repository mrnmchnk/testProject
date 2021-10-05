<?
    // echo'111111';

    // $t = $_POST['id'];
    // $tmp = ['first'=>1, 'second' =>2];
    // echo json_encode($tmp);
    // echo json_encode($_POST['period']);
    $period = intval($_POST["period"]);
    $date = $_POST["date"];
    $refillAmount = intval($_POST["refillAmount"]);
    $depositAmount = intval($_POST["depositAmount"]);
    $percent = intval($_POST["percent"]);
    $timetype = intval($_POST[".timetype"]);

    
    $daysNboom = explode("-", $date);
    $currentMonth = intval($daysNboom[1]);
    $currentYear = intval($daysNboom[0]);
    // echo $daysNboom[0];
    // echo $daysNboom[1];
    $daysN = cal_days_in_month(CAL_GREGORIAN, intval($daysNboom[1]), intval($daysNboom[0]));
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
        $sum = ($depositAmount + ($depositAmount + $refillAmount) * (cal_days_in_month(CAL_GREGORIAN, intval($currentMonth), intval($currentYear))) * ($percent / $daysY));
        $currentMonth++;
        // echo "Месяц ".($i+1)." = ".$sum;
        // echo "<br>";
        $depositAmount = $sum;
        $sumN = intval($sum);
    };
    
    // echo "<br>";
    // echo $currentYear;
    // $transferr = is_int((intval($sumN)),
    echo json_encode($sumN);

    // $number = cal_days_in_month(CAL_GREGORIAN, 8, 2003); // 31
    // echo "Всего {$number} дней в Августе 2003 года"; 



    // if(isset( $_GET["json"])) {
    //     echo "111";
    // }
    // else {
    //     echo "222";
    // }
    
    // echo json_encode(var_dump($_POST));

?>
