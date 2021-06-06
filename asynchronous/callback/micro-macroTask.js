console.log('step 1');
setTimeout(()=>{
    console.log('setTimeout');
},0);
Promise.resolve().then(()=>{
    console.log('promise'); //microtask chay truoc eventloop tiep theo
});
console.log('step 2');
//? macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
//? microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver