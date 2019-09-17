function fibonacci(num){
    if (num <= 2) return 1;
    return fibonacci(num-1) + fibonacci(num-2);
}

function memFib(num, cache = []){
    if (cache[num] !== undefined) return cache[num];
    if (num <= 2) return 1;
    let res = memFib(num - 1, cache) + memFib(num - 2, cache);
    cache[num] = res;
    return res;
}

function tabFib(num){
    if (num <= 2) return 1;
    var fibNums = [0,1,1];
    for (var i = 3; i <= num; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[num];
}
