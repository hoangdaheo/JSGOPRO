var computer = {
    accessWeb: function(site) {
        console.log('Go to : '+site);
    }
};
computer.accessWeb('thiend*a.com');
var oldFunction = computer.accessWeb;
computer.accessWeb = function(){
    console.log('new func');
    console.log(this);
    console.log(arguments);
    oldFunction.apply(this,arguments);
    console.log('new func');
}
computer.accessWeb('a/com')