function profile(name,age) {
    console.log(name);
    console.log(age);
    return this;
    
}
var Hoang = profile.call(profile,'hoang',21);
//? giong voi 
// function profile(name,age) {
//     console.log(name);
//     console.log(age);
//     return this;
    
// }
// var Hoang = profile('hoang',21);
//? call dung de gan gia tri cho ham khoi tao
function initProduct(name,price) {
    this.name = name;
    this.price =price;
}
function food(name,price) {
    initProduct.call(this,name,price);// this = food
    console.log(this);
}
function shit(name,price) {
    initProduct.call(this,name,price);
}
const xoai = new food('xoai','19.000');
const sitty = new shit('sitty','00000');
console.log(xoai);
console.log(sitty);

//? call dung de goi ham anonymous
((name)=>{
    console.log(name);
}).call('hoangdaheo'); //it not have <this> =>  name = undefined boi vi ham anonymous

//?call dung thay doi gia tri cua this
function showMessage(msg){
    this.message = msg;
        return this;
}
var blog = showMessage.call(this,'hello world by call')
console.log(blog);