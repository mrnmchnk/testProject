$(document).ready(function () {
    $(".button-submit").on("click", function (e) {
        e.preventDefault();
    let checker = 0;
    if ($("#checkbox_id").is(":checked")) {
        checker = $(".refillAmount").val();
    }
    
    const getValueFromNameField = (nameField) => $(`.${nameField}`).val();
    
    const formValue = {
    date: getValueFromNameField("datepicker-here"),
    period:
    getValueFromNameField("period") * getValueFromNameField("timetype"),
    depositAmount: getValueFromNameField("depositAmount"),
    percent: getValueFromNameField("percent"),
    refillAmount: checker,
    };
    
    const convertFormValueToJson = JSON.stringify(formValue);
    console.log("convertFormValueToJson: ", convertFormValueToJson);
    
    $.ajax({
        url: "./calc.php" ,
        method: "post",
        dataType: "json",
        data: convertFormValueToJson,
        success: (data) => {
            $('.line').css({display: "block"});
        $(".result").text(`Результат: ${data}`)},
        error: (data) => $(".result").text(`При запросе произошла ошибка : ${data}`),
    });
    });
    
    $(".is-refillable").on("click", function () {
    if ($(this).is(":checked")) {
    $(".refillAmount").css("visibility", "visible");
    } else {
    $(".refillAmount").css("visibility", "hidden");
    }
    });
    
  
    });

    // $('.period').change(function(e) {
    //     console.log('e: ', e.currentTarget.value);
    // })

    // const blockCharsInput = (e, regexp) => {
    //     const cursorPosition = e.target.selectionStart;
    //     const prevValue = e.target.value;
    //     const newValue = prevValue.slice(0, cursorPosition) +e.key + prevValue.slice(cursorPosition);
    //     if(!newValue.match(regexp)) {
    //         e.preventDefault();
    //     }
    // }

    const timeTypeValue = $(".timetype").val();
    console.log('timeTypeValue: ', timeTypeValue);

    $(".calculator-form").validate({
        submitHandler: function (formValue) {
            
        }
    });
    if ($calcForm) {
        $calcForm.validate({
        rules: {
        date: required,
        period: {
            required: true,
            digits: true,
            max: 60,
        },
        depositAmount: {
            required: true,
            digits: true,
            min: 1000,
            max: 3000000,
        },
        refillAmount: {
            required: true,
            digits: true,
            min: 0,
            max: 3000000,
        },
        percent: {
            required: true,
            digits: true,
            min: 3,
            max: 100,
        }
        },
        messages: {
        date: "ВВЕДИ",
        period: "Не более пяти лет",
        },
        });
    }