const getSth = () =>{
    return Promise.resolve("Anh Hoang dep trai");
    
};
getSth().then(str => console.log(str));
//? tra ve promise getSth()
//? muon lay value thi phai .then