const accountId = 144553
let accountEmail = "naveen@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2 // not allowed

accountEmail = "nk@nk.com"
accountPassword = "12345"
accountCity = "bengaluru"
let accountState;

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])