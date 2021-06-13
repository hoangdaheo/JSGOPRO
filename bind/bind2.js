var blog= {
    domain: 'asdasd.com',
    author:'hoangdaheo',
    showWebsite: function (callback){
        callback();
    },
    render: function () {
        // var _self = this; //?method 1: gan' this = _self
        // this.showWebsite(function(){
        //     console.log(_self.domain);
        //     console.log(_self.author);
        //     console.log(_self);
        // })
        this.showWebsite(function(){ //?method 2: bind (do not use arrow function)
            // console.log(this.domain);
            // console.log(this.author);
            console.log(this);
        }.bind('aloaloaloalo'));
    }
};
blog.render();