//closure co the thay doi gia tri bien : 
//? global
//? local
//? closure's variable
function Student() {
    var name='';
    var age='';
    return{ //?return multi closure
        set:(in_name,in_age)=>{
            name = in_name;
            age = in_age;
        },
        getName:()=>{
            return name;
        },
        getAge:()=>{
            return age;
        }
    }
}
var student = new Student();
student.set('hoang','21');
console.log(student.getName());
console.log(student.getAge());

//? do uu tien cac bien trong -> ngoai
var message = ' Bien Toan cuc';
function showMessage() {
    var message = 'Bien cuc bo ham cha';
    return function(){
        var message = 'Bien cuc bo cua closure';
        console.log(message);
    }
    
}
var messageFunc = showMessage();
messageFunc();