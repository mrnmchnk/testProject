<?
    // echo'111111';

    // $t = $_POST['id'];
    // $tmp = ['first'=>1, 'second' =>2];
    // echo json_encode($tmp);
    // echo json_encode($_POST['period']);
    $period = $_POST["period"];
    $date = $_POST["date"];
    $refillAmount = $_POST["refillAmount"];
    $depositAmount = $_POST["depositAmount"];
    $percent = $_POST["percent"];
    $timetype = $_POST[".timetype"];


    $daysNboom = explode("-", $date);
    // echo $daysNboom[0];
    // echo $daysNboom[1];
    $daysN = cal_days_in_month(CAL_GREGORIAN, $daysNboom[1], $daysNboom[0]);
    // echo $daysN;
    $daysY = (!(intval($daysNboom[0]) % 4)) ? 366 : 365;
    // echo $daysY;
    // echo gettype(intval($daysNboom[0]));
    $sumN = 0;

    for ($i = 0; $i < $period; $i++) {
        $sum = $depositAmount + ($depositAmount + $refillAmount) * $daysN * ($percent / $daysY);
        echo "Месяц ".($i+1)." = ".$sum;
        echo "<br>";
        $depositAmount = $sum;
        $sumN = intval($sum);
    };
    // echo $depositAmount;
    // echo "<br>";
    // echo $refillAmount;
    // echo "<br>";
    // echo $daysN;
    // echo "<br>";
    // echo $perio;
    // echo "<br>";
    // echo $daysY;
    echo $sumN;


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
