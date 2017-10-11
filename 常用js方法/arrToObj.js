// turn to {a:1,b:2,c:3}
var arr = ["a=1","b=2","c=3"];
var str = '{'+arr.join(',').replace(/(\w)=/g, '"$1":')+'}';
var obj = {};
function arrToObj1(arr){
    for(var i of arr){
        var [k,v] = i.split('=');
        obj[k] = v;
    }
    return obj;
}

// console.log(arrToObj1(arr));
