const crypto = require('crypto');

class account{
    constructor(first_name,last_name,username,hash_password){
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.hash_password = hash_password;
    }
}

var account1 = new account("jonathan","james","mermaidman1234","&gDO@!%dpKld0p?y");

console.log("First name: " + account1.first_name);