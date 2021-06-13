const showMessage = (msg)=>{
    console.log(msg+' xin chao');
}
showMessage('hoangdaheo');

//?with closure
const showMessageClosure = (msg)=>{
    return (time)=>{
        setTimeout(()=>{
            console.log(msg+' chao xin');
        },time)
        
    };
}
let closure = showMessageClosure('hoangdaheo');
closure(1000);