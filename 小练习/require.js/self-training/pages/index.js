requirejs.config({
    baseUrl: './',
    paths: {
        jquery: './libs/jquery-3.2.0',
        API: './libs/API',
        request: './libs/request',
        less: './libs/less',
        calendar: './components/calendar',
        imgCenter: './components/imgCenter',
        Dialog: './components/Dialog',
        button: './components/button'
    }
})

define(function(require){
    var imgWrapperList = document.querySelectorAll('.img-center');
    for(var val of imgWrapperList){
        console.log(val);
    }
    var imgCenter = require('imgCenter');
    var $ = require('jquery');
    require('calendar');
    require('less');
    imgCenter(imgWrapperList,'wspectFill');
    require('button')
})