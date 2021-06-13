var person = {
    fname:'Hoang',
    lname:'daheo',
    showName:function(){
        console.log(this.fname+' '+this.lname);

    }
};
person.showName();
//? copy ham showname 
var showNameCopy = person.showName;
showNameCopy(); // loi~
var showNameCopyFixed = person.showName.bind(person);
showNameCopyFixed();
