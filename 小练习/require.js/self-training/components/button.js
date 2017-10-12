define(function(require){
    var dialog = require('Dialog');
    $('button.aspect').on('click',function(){
        dialog({
            title: '通知',
            content: '晚上11点前必须睡觉'
        }).show().then(function(){
            console.log('早睡早起身体好');
        }).catch(function(){
            console.log('不听老人言，吃亏在眼前');
        })
    })
})