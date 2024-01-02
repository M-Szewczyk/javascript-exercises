const fibonacci = function(num) {
    num = Number(num);
    if (num == 0){
        return 0;
    }
    if (num == 1 || num == 2){
        return 1;
    }
    if (num < 0){
        return 'OOPS';
    }
    else {
        return fibonacci(num-2)+fibonacci(num-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
