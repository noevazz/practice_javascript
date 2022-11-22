


let number = 4;

function fibo(n) {
    if (n===1){
        return 1;
    }
    return fibo(n-1) * n;
}

console.log(fibo(number));

/*
fibo(4)
    return fibo(3) * 4
            return fibo(2) * 3
                    return fibo(1) * 2
                            return 1
*/