
function containsHTMLTags(input) {//function to detect html tag this function used to prevent script injection such as XSS 
    var htmlTagRegex = /<[a-z][\s\S]*>/i;
    return htmlTagRegex.test(input);
}

//when user click (submit button) it will trigger submit function
function submit(){

    //get value from user input
    var input_first_name = document.getElementById("first_name").value;
    var input_last_name = document.getElementById("last_name").value;
    var input_username = document.getElementById("username").value;
    var input_password = document.getElementById("password").value;
    var checkbox = document.getElementById("checkbox").checked;

    //input validation
    if(containsHTMLTags(input_first_name)===true || containsHTMLTags(input_last_name)===true || containsHTMLTags(input_username)===true || containsHTMLTags(input_password)===true){
        alert("trying to injecting script? nice try!")//prevent malicious script injection
    }
    else if(input_first_name.trim().length === 0 || input_last_name.trim().length === 0 || input_username.trim().length === 0 || input_password.trim().length === 0 || !checkbox){
        alert("📝Form harus terisi semua dan ✅checkbox ✔tercentang")
    }
    else if(input_username.trim().length > 64 || input_password.trim().length > 16 ||  input_password.trim().length < 8){
        alert("Email maximal 64 character dan password 8 - 16 character")
    }
    else{//input done sucessfully proceed further
        insertToHashTable(input_first_name,input_last_name,input_username,input_password);//inserting to hash table
        window.location.href = "login.html";//redirect to login page
    }
}