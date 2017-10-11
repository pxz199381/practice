//b负责监听消息，并把信息更新到dom中
var b = (function(){
    var show = document.getElementById('show');
    Event.listen('add',function(count){
        show.value = count;
    })
}())