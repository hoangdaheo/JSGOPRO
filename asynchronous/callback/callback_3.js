//callback long` vao nhau
const xinSoDt = (callback)=>{
    let soDt ;
    console.log('Xin so');
    console.log('Dang xin...');
    setTimeout(()=>{
        soDt = 123456;
        console.log('Da xin duoc!');
        callback(soDt, call);

    },1000);
}
const sacPin = (soDt, callSauKhiSacPin)=>{
    console.log('Doi ti, dang sac pin...');
    setTimeout(()=>{
        console.log('Sac pin xong!');
        callSauKhiSacPin(soDt);
    },2000);
}
const call = (soDt)=>  {
    console.log(`Dang noi chuyen ${soDt}`);
};
xinSoDt(sacPin);