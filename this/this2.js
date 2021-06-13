var person ={
    fname:'hoang',
    lname:'daheo',
    friends:['toan','quoc','vien','tue'],
    showFriend: function(){
        for (let i=0;i<this.friends.length;i++){
            console.log(this.fname+' have a friend name '+ this.friends[i]);
        }
    }
    ,showFriendThis: function(){
        //this o ngoai van dung, chi sai khi o trong ham anony
        this.friends.forEach(function (fr) {
            console.log(this.fname+' have a friend name '+ fr);
        }) //this trong ham anoy se bien thanh window, this chi trong context cua this thoi
    },
    showFriendThisFixed:function(){
        var personObj = this; //gam this
        this.friends.forEach((fr)=>{
            console.log(personObj.fname+' have a friend name '+ fr);
        })
    }
};

person.showFriend ();
person.showFriendThis ();
person.showFriendThisFixed();
