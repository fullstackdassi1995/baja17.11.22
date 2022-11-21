const user = {
    first_name: null,
    last_name: null,
    over_18: false,
    address: null,
    gender: false
}


function tnay_error(){
    if (
        user.first_name == "" ||
        user.last_name == "" ||
        user.address == ""   
        ){
            try {
                const err = new Error();
                throw err;
            }
            catch (error){
                               
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill in the missing fields!',
                  })
            }
        }

        
}




function sendme1(){
    user.first_name = $('#first_name').val()  
    user.last_name = $('#last_name').val()
    user.over_18 = $('#over_18')[0].checked
    user.address = $('#address').val() 
    if ($('#gender1')[0].checked == false && $('#gender2')[0].checked == false){
        user.gender = ""
    }
    else{
        $('#gender1')[0].checked == true ? 
        user.gender = "male" :
        user.gender = "female"
    }  

    tnay_error()

}



function random1(){
    const users = [{
        first_name: 'david',
        last_name: 'or',
        over_18: true ,
        address: 'Alenbi 10 Tel-Aviv',
        gender: 'male'        
    },
    {
        first_name: 'sharon',
        last_name: 'noy',
        over_18: false  ,
        address: 'Yaleg 3 Raanana',
        gender: 'female' 

    }]

    $('#first_name').val( users[ Math.floor(Math.random() * users.length )].first_name)
    $('#last_name').val( users[ Math.floor(Math.random() * users.length )].last_name)
    $('#over_18')[0].checked = users[ Math.floor(Math.random() * users.length )].over_18
    $('#address').val( users[ Math.floor(Math.random() * users.length )].address)
    users[ Math.floor(Math.random() * users.length )].gender == "male" ? 
    $('#gender1')[0].checked = "male" :
    $('#gender2')[0].checked = "female" ;
}

function xhr1(){
    var xhr = new XMLHttpRequest();       

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let person = JSON.parse(xhr.responseText)
            $('#first_name').val( JSON.stringify(person.results[0].name.first));
            $('#last_name').val( JSON.stringify(person.results[0].name.last));
            $('#over_18')[0].checked = ( JSON.stringify(person.results[0].dob.age >= 18 ));
            $('#address').val( JSON.stringify(person.results[0].location.street.name + " " + person.results[0].location.street.number + " " + person.results[0].location.city  ));
            person.results[0].gender == "male"?
            $('#gender1')[0].checked = true:
            $('#gender2')[0].checked = true;
        }
    }

    xhr.open('GET', "https://randomuser.me/api" , true);
    xhr.send();

}

function jqwery1(){
    $.ajax({
        url: "https://randomuser.me/api",
        success: response => {
            $('#first_name').val(response.results[0].name.first);
            $('#last_name').val(response.results[0].name.last);
            $('#over_18')[0].checked = response.results[0].dob.age >= 18 
            $('#address').val(response.results[0].location.street.name + " " +
             response.results[0].location.street.number +" " +
              response.results[0].location.city);
            response.results[0].gender == "male" ?
            $('#gender1')[0].checked = "true" :
            $('#gender2')[0].checked = "true" ;      
        }});

}

function fetch1(){
    fetch("https://randomuser.me/api")
    .then(result => result.json())
        .then(result => {
            if (Array.isArray(result)){
                $('#first_name').val(JSON.stringify(result.results[0].name.first))
                $('#last_name').val(JSON.stringify(result.results[0].name.last))
                $('#over_18')[0].checked =  result.results[0].dob.age >= 18
                $('#address').val(JSON.stringify(result.results[0].location.street.name + " " +
                 result.results[0].location.street.number + " " +
                  result.results[0].location.city))
                result.results[0].gender == "male" ?
                $('#gender1')[0].checked = "true" :
                $('#gender2')[0].checked = "true" 
            }
            else{
                $('#first_name').val(JSON.stringify(result.results[0].name.first))
                $('#last_name').val(JSON.stringify(result.results[0].name.last))
                $('#over_18')[0].checked =  result.results[0].dob.age >= 18
                $('#address').val(JSON.stringify(result.results[0].location.street.name + " " +
                 result.results[0].location.street.number + " " 
                 + result.results[0].location.city))
                result.results[0].gender == "male" ?
                $('#gender1')[0].checked = "true" :
                $('#gender2')[0].checked = "true" 
            }
        })

    
}






