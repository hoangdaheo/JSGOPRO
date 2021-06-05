const xinSoDt = ()=>{
    console.log('Xin so dt');
    console.log("Dang tim...");
    const thaoTacTimkiem = new Promise((res,rej) => {
        let daTimThay =true;
        setTimeout(()=>{
            daTimThay = true;
            if(daTimThay){
                soDt = 123456;
                console.log(`Sdt la : ${soDt}`);
                res(soDt);
            }else{
                rej('Khong tim ra!');
            }
        },1000);
    })
    return thaoTacTimkiem; //! chi khi return promise moi dc .then .catch
}
const sacPin =(soDt)=>{
    console.log('Dang sac...');
    let chayPin = true;
    const thaoTacSacPin = new Promise((res,rej)=>{
        setTimeout(()=>{
            chayPin = true;
            if(!chayPin){
                console.log('Sac pin ok, goi!');
                res(soDt);
            }else{
                rej('Chay pin r!!!');

            }
        },1000)
    });
    return thaoTacSacPin;
}
const call =(soDt)=>{
    console.log(`Dang noi chuyen voi so: ${soDt}`);
}
xinSoDt()
.then(soDt=>{
    sacPin(soDt)
    .then((sdt)=>{call(sdt)})
    .catch((err)=>{console.log(err)});
})
.catch(error => console.log(error))