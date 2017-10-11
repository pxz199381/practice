var test = (function(arr){
    return function(i){
        if( arr[i] != undefined ){
            if(i==1){
                return arr[i];
            }
            else if(i==3){
                return arr[i];
            }
            else if(i==6){
                return arr[i];
            }
            else if(i==7){
                return arr[i];
            }
            else if(i==8){
                return arr[i];
            }
            else{
                return "没有权限";
            }
        }else{
            return "错误的参数";
        }
    }
})([1,2,3,4,5,6,7,8,9,10]);
//利用短路运算将上例简化
var test1 = (function(arr){
    return function(i){
        return arr[i] != undefined &&
            (i==1 && arr[i] || i==3 && arr[i] || i==6 && arr[i] || '没有权限')
            || '错误参数';
    }
}([1,2,3,4,5,6,7,8,9,10]))

var test2 = (function(arr){
    return function(i){
        return i in arr &&
            ((i == 1 || i == 3 || i == 6) && arr[i] || '没有权限') || '错误参数'
    }
}([1,2,3,4,5,6,7,8,9,10]))

var a = 0;
var b;
function test3(i){
    if(i==3){
        b=10;
    }
    else if(i==4){
        b=23;
    }
    else if(i==6){
        b=44;
    }
    else{
        b=null;
    }
}
function test4(i){
    b = i == 3 && 10 || i == 4 && 23 || i==6 && 44 || null;
    return b;
}
function test5(i){
    b = {3:10,4:23,6:44}[i] || null;
    return b;
}
console.log(test5(6));