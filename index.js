function map(myArray, funcOper){
    let newArr = []
    myArray.forEach(element => {
        newArr.push(funcOper(element))
    });
    return newArr
}

function reduce(myArray, funcOper, startPt) {
    let total;
    let i; 

    if (!!startPt) {
        total = startPt;
        i = 0;
    } else {
        total = myArray[0];
        i = 1;
    };

    for( ; i < myArray.length; i++) {
        total = funcOper(myArray[i], total);
    };
    return total;
} 