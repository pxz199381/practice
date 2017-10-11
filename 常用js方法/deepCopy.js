var deepCopy = function(obj){
    var newObj = {};
    for(var i in obj){
        newObj[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i];
    }
    return newObj;
}