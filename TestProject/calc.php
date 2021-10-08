<?





    $data = json_decode(file_get_contents('php://input'));
    // print_r($data);
    // $wtf = $_POST["jst"];
    // print_r($data);
    // echo is_null($data);

    $date = ($data->date);
    $period = intval($data->period);
    $depositAmount = intval($data->depositAmount);
    $percent = intval($data->percent);
    $timetype = intval($data->period);
    $refillAmount = intval($data->refillAmount);




    // $period = intval($_POST["period"]);
    // $date = $_POST["date"];
    // $refillAmount = intval($_POST["refillAmount"]);
    // $depositAmount = intval($_POST["depositAmount"]);
    // $percent = intval($_POST["percent"]);
    // $timetype = intval($_POST[".timetype"]);



    $daysNboom = explode(".", $date);
    $currentMonth = intval($daysNboom[1]);
    $currentYear = intval($daysNboom[2]);
    $daysN = cal_days_in_month(CAL_GREGORIAN, intval($currentMonth), intval($currentYear));
    $daysY = (!(intval($currentYear) % 4)) ? 366 : 365;

    $firstrefill = $refillAmount;
    
    $sumN = 0;
    $sum = 0;
    for ($i = 0; $i < $period; $i++) {
        if ($currentMonth > 12) {
            $currentMonth = 1;
            $currentYear++;
            $daysY = (!(intval($currentYear) % 4)) ? 366 : 365;
        }
        ($i == 0) ? ($refillAmount = 0) : ($refillAmount = $firstrefill);
        
        $sum = ($depositAmount + ($depositAmount + $refillAmount) * (cal_days_in_month(CAL_GREGORIAN, intval($currentMonth), intval($currentYear))) * ($percent / $daysY));
        
        $depositAmount = $sum;
        $sumN = intval($sum);
        // echo "Месяц ".($i+1)." = ".$sumN;
        // echo "<br>"; 
    };
    
    // $etp = json_encode($sumN);
    // var_dump($etp);
    $etp = array(
        "answer"=> "$sumN"
    );
    echo(json_encode($etp));
    




