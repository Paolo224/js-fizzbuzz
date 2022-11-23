for (let i = 1; i <= 100; i = i + 1){
    let value = i;

    if ( (i % 3 === 0) && (i % 5 === 0) ){
        console.log(value = "FizzBuzz");
    }
    else if (i % 5 === 0){
        console.log(value = "Buzz");
    }
    else if (i % 3 === 0){
        console.log(value = "Fizz");
    }
    else{
        console.log(value);
    }
}