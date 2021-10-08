$( document ).ready(function() {
    // console.log( "ready!" );
    boom = 0;
    $(".button-submit").on('click',function(){

        // let date: $(".datepicker-here").val();
        // let period: ($(".period").val()) * ($(".timetype").val());
        // let depositAmount: $(".depositAmount").val();
        // let percent: $(".percent").val();
        // let timetype: $(".timetype").val();
        // let refillAmount: checker;

        let date1 = $(".datepicker-here").val();
        let period1 = ($(".period").val()) * ($(".timetype").val());
        let depositAmount1 = $(".depositAmount").val();
        let percent1 = $(".percent").val();
        let timetype1 = $(".timetype").val();

        let checker = 0;
        if ($('#checkbox_id').is(":checked")) {
            checker = $(".refillAmount").val();
        };
        let refillAmount1 = checker;
        // let date = $(".date").val();
        // let period = $(".period").val();
        // let depositAmount = $(".depositAmount").val();
        // let percent = $(".percent").val();
        // let refillAmount = $(".refillAmount").val();

        request = {
            date: date1,
            period: period1,
            depositAmount: depositAmount1,
            percent: percent1,
            timetype: timetype1,
            refillAmount: checker,
        };
        // let request = {
        //     date: $(".datepicker-here").val(),
        //     period: ($(".period").val()) * ($(".timetype").val()),
        //     depositAmount: $(".depositAmount").val(),
        //     percent: $(".percent").val(),
        //     timetype: $(".timetype").val(),
        //     refillAmount: checker,
        // };
      
      
        let jst = JSON.stringify(request);
        // console.log(jst);


        $.ajax({
            url: './calc.php',
            method: 'post',
            dataType: 'json',
            data: jst,
            success: function(data){ 
                let $sum = parseInt(JSON.parse($etp));
                console.log($sum);
                $(function (){ 
                    $('.boom').append("<p>Результат: </p>",[$sum]); 
                });
            },
        });
    });





    $(".is-refillable").on('click', function() {

        if ($(this).is(':checked')){
            $('.refillAmount').css("visibility", "visible");
        }
        else {
            $('.refillAmount').css("visibility", "hidden");
        }

    });

    $(function () {
        $(".datepicker-here").datepicker({
            onSelect: function (fd, d, calendar) {
                calendar.hide();
            },

        });
    });
   


});



