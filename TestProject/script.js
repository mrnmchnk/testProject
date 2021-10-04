$( document ).ready(function() {
    // console.log( "ready!" );
    boom = 0;
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
            period: ($(".period").val()) * ($(".timetype").val()),
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
            

            success: function(data){ /* функция которая будет выполнена после успешного запроса. */
                // $('.result').text(data);
                // var txt = JSON.parse(JSON.stringify(result));
                // console.log(txt["first"]);
                let $boom = jQuery.parseJSON(data);
                // console.log($boom);
                // $("#chat_answer").html(result.message);
                // alert(data);

                // $(function (){ 
                //     $('.boom').append("<p>Результат: </p>",[$boom]);
                // });

                alert(jQuery.type($boom));
                
                // alert(data); /* В переменной data содержится ответ от index.php. */
            }
        });

        // console.log($boom);

        // $(function (){ 
        //     $('.boom').append(boom);
        // });

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



