(function(){
    function draw(timetemp){
        //timetemp作为回调的参数传入，值为下一次重绘的实际发生时间（moz浏览器下）
        //startTime为上次重绘发生的长时间
        var drawStart = timetemp || Date.now();
        //两次重绘的时间间隔
        var diff = drawStart - startTime;
        //使用diff确定下一步的绘画时间

        //把startTime重写为这一次动画的绘画时间
        startTime = drawStart;
        //重绘UI
        requsetAnimationFrame(draw);
    }
    var requsetAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame,
        startTime = window.mozAnimationStartTime || Date.now();
    requsetAnimationFrame(draw);
})();