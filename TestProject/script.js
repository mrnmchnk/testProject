$( document ).ready(function() {
    // console.log( "ready!" );
    $(".button-submit").on('click',function(){
        // let date = $(".date").val();
        // let period = $(".period").val();
        // let depositAmount = $(".depositAmount").val();
        // let percent = $(".percent").val();
        // let refillAmount = $(".refillAmount").val();
        let checker = 0;
        if ($('#checkbox_id').is(":checked")) {
            checker = $(".refillAmount").val();
        } 

        // alert(checker);

        let request = {
            date: $(".datepicker-here").val(),
            period: ( $(".period").val() * ($('.timetype').val()) ),
            depositAmount: $(".depositAmount").val(),
            percent: $(".percent").val(),
            refillAmount: checker,
        }

        // alert(request.period);
        // let json = JSON.stringify(request);

        // $.ajax({
        //     url: 'calc.php',
        //     success: function(data) {
                // var txt = JSON.parse(txt);
                
        //     //   $('.result').text(data);

        //     alert(JQuery.type(txt));

        //     }
        //   });

        $.ajax({
            url: './calc.php', /* Куда пойдет запрос */
            method: 'post', /* Метод передачи (post или get) */
            dataType: 'json', /* Тип данных в ответе (xml, json, script, html). */
            // data: json, /* Параметры передаваемые в запросе. */
            // data: 'name=Andrew&nickname=Aramis',
            data: request,
            
            success: function(data){ /* функция которая будет выполнена после успешного запроса. */
                // $('.result').text(data);
                // console.log(txt["first"]);
                let $boom = jQuery.parseJSON(data);

                // alert(data); /* В переменной data содержится ответ от index.php. */
                // JSON.parse($sumN),
                // $getJSON($sumN); не то
                alert(jQuery.type($boom));
            },
            
        });
        // let whatr = request.date.split(".")  сплитим массив из поля даты
        // alert(whatr[1]);



        // alert(json);
    });


    

    $(".is-refillable").on('click', function() {

        if ($(this).is(':checked')){
            $('.refillAmount').css("visibility", "visible");
        }
        else {
            $('.refillAmount').css("visibility", "hidden");
        }

    });


//     $timetype: $(".timetype").val(),
//    $timetype.on('click', function() {
//     ($('.timetype').val())
//     });
    // $(".btn-container").on('click', function() {
    //     alert($('.timetype').val());
    // });

    

});


