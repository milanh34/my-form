const form = document.querySelector('form');
form.addEventListener('submit',checkerror);
form.addEventListener('reset',resetform)

function checkname(){                //function to check error in name
    const fullname = document.getElementById("full-name").value;
    const nameError = document.getElementById('nameError');
    if(fullname.length < 5){             //condition 
        nameError.textContent = 'Name must not be less than 5 characters';        
        fullname.focus();
    }
    else{
        nameError.textContent='';
        this.submit();
    }
}
function checkemail(){                //function to check error in email
    const emailid = document.getElementById("email-id").value;
    const emailError = document.getElementById('emailError');
    if(emailid.indexOf("@") == -1){                     //condition
        emailError.textContent = 'Email Id should have @ character in it';
        emailid.focus();
    }
    else{
        emailError.textContent='';
        this.submit();
    }
}
function checkphone(){                //function to check error in phone number
    const phoneno = document.getElementById("phone-no").value;
    const phoneError = document.getElementById('phoneError');
    if(phoneno == "123456789"){                //condition 1
        phoneError.textContent = 'Phone Number should not be 123456789';
        phoneno.focus();
    }
    else if(phoneno.length != 10){             //condition 2
        phoneError.textContent = 'Phone Number must be a 10-digit number';
        phoneno.focus();
    }
    else{
        phoneError.textContent='';
        this.submit();
    }
}
function checkpass(){                 //function to check erro in password
    const fullname = document.getElementById("full-name").value;
    const pass = document.getElementById("password").value;
    const passError = document.getElementById('passError');
    if(pass.length < 8){                  //condition 1
        passError.textContent = 'Password cannot be less than 8 characters';
        pass.focus();
    } 
    else if(pass == "password"){           //condition 2
        passError.textContent = 'Password cannot be "password"';
        pass.focus();
    }
    else if(pass === fullname){                 //condition 3
        passError.textContent = 'Password cannot be name of the user';
        pass.focus();
    }
    else{
        passError.textContent='';
        this.submit();
    }
}
function checkconf(){                         //function to check error in confirm password
    const pass = document.getElementById("password").value;
    const confpass = document.getElementById("confirm-pass").value;
    const confError = document.getElementById('confError');
    if(confpass != pass){                   //condition
        confError.textContent = 'Password and confirm password should match';
        confpass.focus();
    }
    else{
        confError.textContent='';
        this.submit();
    }
}
function validate(){                   //function to check all above conditions when submitting and submit form if all conditions are met
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passError = document.getElementById('passError');
    const confError = document.getElementById('confError');
    if(nameError.textContent == "" && emailError.textContent == "" && phoneError.textContent == "" && passError.textContent == "" && confError.textContent == ""){
        alert("Form Submitted Successfully!");
    }
}
function checkerror(e){                  //function to check all above conditions when submitting and give an alert pop up message if any condition is not met
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passError = document.getElementById('passError');
    const confError = document.getElementById('confError');
    if(nameError.textContent != "" || emailError.textContent != "" || phoneError.textContent != "" || passError.textContent != "" || confError.textContent != ""){
        e.preventDefault();
        alert("Please fill out the form in Proper Manner !");
    }
}
function resetform(){                   //function to resest form
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passError = document.getElementById('passError');
    const confError = document.getElementById('confError');
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passError.textContent= '';
    confError.textContent = '';
}