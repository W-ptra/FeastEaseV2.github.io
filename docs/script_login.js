function lupaPass(){
    alert("Waduh 😅☝️");
}

function authentication(username_input,password_input) {//authenticate username and password
    for (const username in hashTable) {
      const account = hashTable[username];
      if (account.username === username_input && account.password === password_input) {
        return true;
      }
    }
    return false;
}

function submit()
{
    var input_username = document.getElementById("user_username").value;
    var input_password = document.getElementById("user_password").value;

    if(input_username.trim().length === 0 || input_password.trim().length === 0 ){
        alert("📝Form harus terisi semua")
    }
    else if(input_username.trim().length > 64 || input_password.trim().length > 16 ||  input_password.trim().length < 8){
        alert("Email maximal 64 character dan password 8 - 16 character")
    }
    else{//input done sucessfully proceed further
        
        var username = "Aditya",password = "aditya123";

        if(input_username === username && input_password === password){
            alert("Selamat datang di feastEast")
            window.location.href = "menu-list_responsive.html";//redirect to menu list page
        }
        else{
            alert("Username atau Password anda salah");
        }
        /*
        
        
        const found = authentication(input_username, input_password);

        if (found) {
            alert("Selamat Anda Sudah Rerdaftar ✋😆🤚")
            window.location.href = "menu-list_responsive.html";//redirect to menu list page
        } else {
            alert("Username atau Password anda salah")
        }
        */        
    }
}

