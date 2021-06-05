const xinSoDt = (callback)=>{
	let soDt;
	console.log('Xin sdt');
	console.log('dang xin...');
	setTimeout(()=>{
		soDt = 123456;
		console.log('da xin duoc!');
		callback(soDt);
	},1000);
};
xinSoDt((sdt)=>{console.log(sdt)});

