var arr = [5, 6, 3, 1, 8, 7, 2, 4];

// console.log(insertSort(arr));
//插入排序

/*  解法：
    arr[1]开始，与arr[0]进行比较，最大值放后边，以此类推
    后面每次的插入值都会依次与当前从小到大顺序的数组进行比较，
    进而从前至后形成了规则数组。
    在每次判断时只需要设置内层循环的最大值。
*/
function insertSort(arr){
    for(var i=1;i<arr.length;i++){
        var temp = arr[i];
        for(var j=i;j>=0;j--){
            if(temp<arr[j-1]){
                arr[j] = arr[j-1];
            }else{
                arr[j] = temp;
                break;
            }
        }
    }
    return arr;
}

// console.log(selectSort(arr));
//选择排序

/*
    解法：
    从第一项开始，依次与后面的所有项进行比较，获取最小值
    并把找到的项与开始匹配的项调换位置
*/


function selectSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// console.log(quickSort1(arr));
//快速排序1
//会造成堆栈溢出
function quickSort1(arr){
    if(arr.length<=1){
        return arr;
    }
    var index = Math.floor(arr.length/2);
    var temp = arr[index];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<temp){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort1(left).concat(temp,quickSort1(right));
}

// console.log(bubbleSort(arr));
//冒泡排序
/*
 解法：
 内层循环遍历数组，每次找到最大值并放至最后一位
 同时数组的长度减一（通过外循环）
 */
function bubbleSort(arr){
    for(var i=arr.length-1;i>0;i--){
        for(var j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//归并排序

/*解法：
    这一种解法不太容易理解
    思路上大体是：
    将数组一直等分，分成若干个两项数组，然后进行合并
    每次合并都会进行排序
*/
// console.log(mergeSort(arr));
function merge(left,right){
    var tmp = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            tmp.push(left.shift());
        }else{
            tmp.push(right.shift());
        }
    }
    return tmp.concat(left,right);
}
function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }else{
        var mid = arr.length/2,
            left = arr.slice(0,mid),
            right = arr.slice(mid,arr.length);
    }
    return merge(mergeSort(left),mergeSort(right));
}




