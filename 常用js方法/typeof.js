// 判断数据类型
function type(elem) {
    if(elem == null) {
        return elem + '';
    }
    return toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
}