var testStr = 'bbccaaddbba';
console.log(makeOrder1(testStr));
function makeOrder1(str){
    var obj = {};
    for(var i=0;i<str.length;i++){
        obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1;
    }
    console.log(obj);
    var resultArr = Object.keys(obj).sort(function(cur,next){
        var val1 = Number(obj[cur]);
        var val2 = Number(obj[next]);
        if(val1 > val2){
            return 1
        }else{
            return -1;
        }
    }).map(function(item){
        var resultObj = {
            name: item,
            count: obj[item]
        }
        return resultObj;
    })
    return resultArr;
}
