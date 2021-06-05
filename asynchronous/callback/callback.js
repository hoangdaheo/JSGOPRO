//van de
const xinSoDt = ()=>{
	let soDt
	console.log('Xin so dien thoai');
	console.log('dang xin...');
	setTimeout(()=>{
		var soDt = 12345;
		console.log('da tim thay');
	},1000);
	return soDt;
}
let sdt = xinSoDt();
console.log(sdt);

