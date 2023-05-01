function saturdayFun(a = "roller-skate"){
    return `This Saturday, I want to ${a}!`;
}

const mondayWork = function (c = "go to the office"){
    return `This Monday, I will ${c}.`;
}

function wrapAdjective (d = "*")  {
    const innerFunction = function (g = "special"){
        return `You are ${d}${g}${d}!`;
    };
    return innerFunction;
}



