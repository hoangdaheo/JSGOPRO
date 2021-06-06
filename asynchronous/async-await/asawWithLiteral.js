const getSth = async (name) =>{
    return name;
}

const arr = ['a','b','c','d','e'];
//? wrong
// const result = arr.map(async (item) => {
//     return await getSth(item);
// })
// console.log(result); // <pending> forever
//? V
 const listPromise = arr.map(item => getSth(item));
// (async () => {
//     console.log(await Promise.all(listPromise));
// })();
//? forEach
const a = async () =>{
    for (const item of arr){
        console.log(await getSth(item));
    }
};
a();

const b = async () =>{
    for await (const item of listPromise){
        console.log(item);
    }
    //? await in conditional
    if (await getSth('z') === 'z'){
        console.log("condition ok!");
    }
}
b();