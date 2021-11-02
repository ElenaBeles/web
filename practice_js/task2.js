function compare(a, b){
    let f = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] === b[j]) {
                f++;
                break;
            }
        }
    }
    return f === a.length;
}
