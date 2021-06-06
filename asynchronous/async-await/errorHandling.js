const getSth = async (name) =>{
    return name;
}

const testSpeed = async () =>{

   
    try {
        const personA = await getSth('a');
        const personB = await getSth('b');
        const personC = await getSth('c');
        throw new Error();
        return [personA, personB, personC];
    } catch (error) {
        return 'hoangdaheo'; 
        //? catch always throws error, if return catch become .then
    }
}

testSpeed().then(v => {
    console.log('this is not Promise.reject(): '+v);
})