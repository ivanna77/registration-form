document.getElementById("submit").onclick = function(e) {  
    register(e)  
}; 
function register(e) {
    email_error = document.getElementById("email-error");
    email_error.innerHTML = "";  // clear email error label

    psw_error = document.getElementById("psw-error");
    psw_error.innerHTML = "";  // clear psw error label

    psw_repeat_error = document.getElementById("psw-repeat-error");
    psw_repeat_error.innerHTML = "";  // clear psw-repeat error label

    email = document.getElementById("email").value.trim();
    psw = document.getElementById("psw").value.toString();
    psw_repeat = document.getElementById("psw-repeat").value.toString();
    
    if (typeof email === 'string' && email.length === 0) {
        email_error.innerHTML = "Please, enter an email.";  
        e.preventDefault();
        e.returnValue = '';
        return;
    }
    if (typeof psw === 'string' && psw.length < 8) {
        psw_error.innerHTML = "Password must be at least 8 symbols.";  
        e.preventDefault();
        e.returnValue = '';
        return;
    }
    if (psw !== psw_repeat) {
        psw_repeat_error.innerHTML = "Password mismatch.";  
        e.preventDefault();
        e.returnValue = '';
        return;
    }
    
    document.getElementById("submit").innerHTML = "Crimea is Ukraine <3!";  
    document.getElementById("submit").style.color = "blue";  
    document.getElementById("submit").style.backgroundColor = "yellow";  
    document.getElementById("submit").style.fontSize = "25px";  
    document.getElementById("submit").style.border = "4px solid red";
    
    e.preventDefault();
    e.returnValue = '';    
}

