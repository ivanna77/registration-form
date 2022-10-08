//alert("This alert box was called with the onload event")
document.getElementById("submit").onclick = function() {  
    register()  
}; 
function register() {  
    email = document.getElementById("email").value.trim();
    psw = document.getElementById("psw").value;
    psw_repeat = document.getElementById("psw-repeat").value;
    
    if (typeof email === 'string' && email.length === 0) {
        document.getElementById("email-error").innerHTML = "Please, enter an email.";  
        return;
    }
    if (typeof psw === 'string' && psw.length < 8) {
        document.getElementById("psw-error").innerHTML = "Password must be at least 8 symbols.";  
        return;
    }
    if (psw.localeCompare(psw_repeat) != 0) {
        document.getElementById("psw-repeat-error").innerHTML = "Password mismatch.";  
        return;
    }

    alert("email: " + email + "\npsw: " + psw+ "\npsw-repeat: " + psw_repeat);
    document.getElementById("submit").innerHTML = "Crimea is Ukraine <3!";  
    document.getElementById("submit").style.color = "blue";  
    document.getElementById("submit").style.backgroundColor = "yellow";  
    document.getElementById("submit").style.fontSize = "25px";  
    document.getElementById("submit").style.border = "4px solid red";
}

