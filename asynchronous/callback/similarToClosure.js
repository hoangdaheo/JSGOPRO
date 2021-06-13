function createPassword(callback) {
    return callback('freetuts.net');
}
 
// Sử dụng
var password = createPassword(function (secret_key) {
    return secret_key;
});
 
console.log(password);