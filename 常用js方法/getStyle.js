function getSyle(obj){
    return obj.currentStyle ? obj.currentStyle : window.getComputedStyle(obj,null);
}