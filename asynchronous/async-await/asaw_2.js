
const sleep = (ms) =>{
    return new Promise(resolve => setTimeout(resolve,ms));
}

const getSth = async (name) =>{
    await sleep(1000);
    return name;
    //? async chinh la return promise
    
};
const getSthBig = async (name) =>{
    await sleep(3000);
    return name;
    //? async chinh la return promise
    
};
// getSth().then(str => console.log(str));
//? await chinh la thay .then, return thang value ra
// (async () =>{
//     console.log(await getSth());
// })

//? with promise
const testSpeedPromise = () =>{
    const arr = [];
    return getSth('a')
    .then((v)=>{
        
        arr.push(v);
        return getSth('b');
    })
    .then((v)=>{
        
        arr.push(v);
        return getSthBig('c');
    })
    .then((v)=>{

        arr.push(v);
        return new Promise((resolve, reject)=>{
            resolve(arr);
        });
    });
    

};
console.time('testSpeedPromise');
testSpeedPromise().then(v => {
    console.log(v);
    console.timeEnd('testSpeedPromise')
});


const testSpeed = async () =>{
    const personA = await getSth('a');
    const personB = await getSth('b');
    const personC = await getSthBig('c');
    return [personA, personB, personC];
}
console.time('test');
testSpeed()
.then(arr => {
    console.log(arr)
    console.timeEnd('test');
});
//? promise all
const testSpeedAll = async () =>{
    const personA =  getSth('a');
    const personB =  getSth('b');
    const personC =  getSthBig('c');
    const arr = Promise.all([personA, personB, personC]);
    return arr;
}
console.time('test1');
testSpeedAll()
.then(arr => {
    console.log(arr)
    console.timeEnd('test1');
});
