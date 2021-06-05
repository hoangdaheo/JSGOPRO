const xinSoDt = ()=>{
    console.log('Xin so dt');
    console.log("Dang tim...");
    const thaoTacTimkiem = new Promise((res,rej) => {
        let daTimThay =false;
        setTimeout(()=>{
            daTimThay = false;
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
xinSoDt()
.then((a)=>console.log(a))
.catch(error=>console.log(error));
