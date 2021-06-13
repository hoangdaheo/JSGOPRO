var domainInfo = {
    name:'gizen.net',
    setName: function(n){
        this.name = n;
    }
};
var test = (callback) => {
    callback('hoangdaheo.com');
}
var testFixed = (callback,thisObj) => {
    callback.apply(thisObj,['hoangdaheo.com']);
    //callback.call(thisObj,'hoangdaheo.com');
}
//test(domainInfo.setName);
testFixed(domainInfo.setName,domainInfo);
console.log(domainInfo.name); //gizen.net if fix => hoangdaheo.com
