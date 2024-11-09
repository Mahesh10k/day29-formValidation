function validation(event){
    event.preventDefault();
   
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value.trim();
    let confirmPassword=document.getElementById("conPassword").value.trim()
    let errorMessage=document.getElementById("error")
    
    debugger;
    let n_pattern=/^[A-Za-z ]{3,}$/  
    let email_pattern=/^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let p_pattern=/^[a-zA-Z0-9!@#%^&*.]{8,}/

    if(!n_pattern.test(name)){  
        errorMessage.textContent="Name Should contains Capital and Small letters and length of minimum 3 characters."
    }
    else if(password.length<8){
        errorMessage.textContent="The Password should be length of minimum 8 characters."
    }
    else if(!email_pattern.test(email)){
        errorMessage.textContent="The Email Should contains Alphabets, Numbers only. Eg:me1@gmail.com"
    }
    else if(!p_pattern.test(password)){
        errorMessage.textContent="the Password Should contains Alphabets, Numbers and Special Characters like !@#$%^&* only."
    }
    else if(password!==confirmPassword){
        errorMessage.textContent="The Password doesn't matched, Please Enter again."
    }
    else{
        window.location.href="validate.html"                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    }
    
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("password").value=""
    document.getElementById("conPassword").value=""

}