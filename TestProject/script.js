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
            date: $(".date").val(),
            period: $(".period").val(),
            depositAmount: $(".depositAmount").val(),
            percent: $(".percent").val(),
            refillAmount: checker,
        }
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
            

            success: function(result){ /* функция которая будет выполнена после успешного запроса. */
                // $('.result').text(data);
                // var txt = JSON.parse(JSON.stringify(result));
                // console.log(txt["first"]);
                console.log(result);
                // alert(data); /* В переменной data содержится ответ от index.php. */
            }
        });



          

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


   


});



