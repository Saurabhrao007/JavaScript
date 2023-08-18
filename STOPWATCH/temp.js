var hammingDistance = function (a, b) {

    let lengths = 0

    let x = a.toString(2)
    let y = b.toString(2)
    console.log(x, y)

    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = '0' + x
        }
    }
    else if (y.length < x.length) {
        while (x.length !== y.length) {
            y = '0' + y
        }
    }

    console.log(x, y)
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i]) {
            lengths++
        }
    }
    return lengths
};

console.log(hammingDistance(1, 4))