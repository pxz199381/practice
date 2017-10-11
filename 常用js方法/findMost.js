var arr = [1,2,3,4,1,2,3,4,1,2,2,2];
var obj = {};
var maxNum = 1;
var maxEle;
// console.log(findMost1(arr));
function findMost(){

}
//利用数组遍历的方法获取次数对象
function findMost1(arr){
    for(var i=0;i<arr.length;i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1;
        if(obj[arr[i]]>maxNum){
            maxNum++;
            maxEle = arr[i];
        }
    }
    return `次数最多元素:${maxEle}次数为:${obj[maxEle]}`;
}
//用数组reduce方法获取次数对象
function findMost2(arr){
    obj = arr.reduce(function(cur,next){
        cur[next] ? cur[next]++ : cur[next] = 1;
        if(cur[next]>maxNum){
            maxNum++;
            maxEle = next;
        }
        return cur;
    },{})
    return `次数最多元素:${maxEle}次数为:${obj[maxEle]}`;
}
//用正则replace方法获取次数对象
function findMost3(arr){
    arr.join('').replace(/(\w)/g,function(a,b){
        obj[b[0]] ? obj[b[0]]++ : obj[b[0]] = 1;
        if(obj[b[0]]>maxNum){
            maxNum++;
            maxEle = b[0];
        }
    })
    return `次数最多元素:${maxEle}次数为:${obj[maxEle]}`;
}
console.log(arr);