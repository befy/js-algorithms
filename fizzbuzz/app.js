let fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++){
        if(i % 15 === 0)
            console.log("fizzbuzz");
        else if(i % 3 === 0)
            console.log("fizz");
        else if(i % 5 === 0)
            console.log("buzz");
        else
            console.log(i);
    }
}

fizzbuzz(30);

// output of line 14: fizzbuzz(30)

/*
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
17
fizz
19
buzz
fizz
22
23
fizz
buzz
26
fizz
28
29
fizzbuzz
*/