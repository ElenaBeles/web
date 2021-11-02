function newArr(arr){
    let newArray = [];
    let size = arr.length;
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            console.log(arr[i])
            newArray[k] = arr[i];
            console.log(newArray[k])
            k++;
            size--;
        }
    }
    for (let i = arr.length-size; i < arr.length; i++) {
        newArray[i] = 0;
    }
    return newArray;
}
