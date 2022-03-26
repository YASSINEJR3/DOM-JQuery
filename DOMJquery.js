$('document').ready(()=>{
    const regix =/^[A-Z][a-zA-Z]{2,15}$/;
    var test = 0;
    
    $('#check-btn').click(()=>{
        const name = $('input#nom').val();
        validateString(regix,name,$('#nom-span'),"Name");
    });
    
    $('#add-btn').click(()=>{
        $('#DOM-container').toggle();

        if(test%2)
        {
            $('#add-btn').text('+ADD');

        }else{
            $('#check-btn').click(()=>{
                const prenom = $('input#prenom').val();
                validateString(regix,prenom,$('#prenom-span'),"Prenom");
            });

            $('#add-btn').text('-REMOVE');

        }
        test++;

    });
});

function validateString(Regix,String , Span ,inputName)
{
    if(Regix.test(String)){
        Span.text(inputName+" is valide");
        Span.css('color','green');
    }else{
        Span.text(inputName+" isn't valide");
        Span.css('color','red');
    }
}