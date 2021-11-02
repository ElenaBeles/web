function minSum(sum){
    let k = 0;
    while (sum - 1000 >= 0) {
        sum -= 1000;
        k++;
    }
    while (sum - 500 >= 0) {
        sum -= 1000;
        k++;
    }
    while (sum - 200 >= 0) {
        sum -= 1000;
        k++;
    }
    while (sum - 100 >= 0) {
        sum -= 1000;
        k++;
    }
    while (sum - 50 >= 0) {
        sum -= 1000;
        k++;
    }
    return k;
}
