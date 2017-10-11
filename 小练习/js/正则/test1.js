/* trim */

var str = '12';
function trim(str){
    return str.replace(/^\s+|\s+$/gm,'');
}

/* 是否带有小数 */

function hasDecimal(str){
    return /^\d\.\d$/.test(str);
}

/*检验是否中文名称组成*/

function isChina(str){
    return /^[\u4E00-\u9FA5]{2,4}$/.test(str);
}

/*校验是否全由8位数字组成 */

function twoNum(str){
    return /^[0-9]{2}$/.test(str);
}

/*校验电话码格式 */

function isTelCode(str){
    return /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/.test(str);
}

/*校验邮件地址是否合法 */

function IsEmail(){
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(str);
}
console.log(twoNum(str));