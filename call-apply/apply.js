function test(firstParam, secondParam, thirdParam){
    var args = Array.apply(null, arguments);
    var args1 = Array.call(null, arguments);
    console.log(args);
    console.log(args1);

  }
  
  test(1, 2, 3); 