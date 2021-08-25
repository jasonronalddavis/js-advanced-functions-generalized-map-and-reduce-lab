function map(myArray, funct){
    let newArr = []
    myArray.forEach(element => {
        newArr.push(funct(element))
    });
    return newArr
}

function reduce(myArray, funct, startPt) {
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
        total = funct(myArray[i], total);
    };
    return total;
} 