//a负责点击操作及发布消息
var a = (function(){
    var btn = document.getElementById('count');
    var show = document.getElementById('show');
    var count = 0;
    btn.onclick = function(){
        Event.trigger('add',++count);
    }
    show.onchange = function(){
        count = show.value;
    }
}())