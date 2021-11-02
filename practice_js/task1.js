function minSum(sum){
    let arr = [1000, 500, 200, 100, 50];
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        while (sum - arr[i] >= 0) {
            sum -= arr[i];
            k++;
        }
    }
    return k;
}
