//? anonymous la ham vo danh, chung duoc goi va execute tai thoi diem chay cua ct
//? so voi ham thong thuong se luu vao bo nho trong luc bien dich 
//? vd:
showMessage('Truoc Khai bao');
function showMessage(msg) {
    console.log(msg);
}
showMessage('Sau khai bao');

//? nhung voi ham anony:
try {
    showMessageAnonymous('Line nay` se xay ra loi~');
} catch (error) {
    console.log(error);
}

var showMessageAnonymous = function (msg) {
    console.log(msg);
}
showMessageAnonymous('ok');
//? anony la ham khong ten
(()=> {
    console.log('ham khong ten');
}).call(this); //! su khac nhau giua call/apply va bind: call se execute ham luon, bind se dung san~ va cho` de goi;