const add = (a,b)=>{
    return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

const mul = (a,b)=>{
    return a*b;
}


var name = 'prince';

// module.exports.name1 = add;
// module.exports.name2 = sub;
// module.exports.name3 = mul;

module.exports = { add , sub , mul , name}
