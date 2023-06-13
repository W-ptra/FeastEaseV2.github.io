  class Account {//create class for store user information
    constructor(first_name, last_name, username, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
   }
}
  
var hashTable = {};//declare hash table
  

function insertToHashTable(first_name, last_name, username, password) {//function to insert to hash table
    const account = new Account(first_name, last_name, username, password);
    hashTable[username] = account;
}

// Example usage:
//insertToHashTable("John", "Doe", "johndoe", "password123");
//insertToHashTable("Jane", "Smith", "janesmith", "hello456");
  
function authentication(username_input,password_input) {//function 
    for (const username in hashTable) {
      const account = hashTable[username];
      if (account.username === username_input && account.password === password_input) {
        return true;
      }
    }
    return false;
}
 
/*  Example usage:

    const usernameInput = "johndoe";
    const passwordInput = "password123";
    const found = authentication(usernameInput, passwordInput);
    if (found) {
    console.log(`Account with username '${usernameInput}' and password '${passwordInput}' found.`);
    } else {
    console.log(`Account with username '${usernameInput}' and password '${passwordInput}' not found.`);
    }
*/
  
  // Access the hash table
  //console.log(hashTable);

  
  