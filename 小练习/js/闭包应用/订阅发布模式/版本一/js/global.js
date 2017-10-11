var Event = (function(){
    //缓存列表 存放订阅者回调函数
    var list = {}, listen,trigger,remove;

    //添加订阅者
    listen = function(key,fn){
        //如果不存在该订阅分组，则新建一个分组
        if(!list[key]){
            list[key] = [];
        }
        list[key].push(fn);
    };

    //发布消息
    trigger = function(){
        var key = Array.prototype.shift.call(arguments); //获取消息类型名称
        var fns = list[key]; //获取订阅值分组
        //判断该分组是否存在
        if(!fns || fns.length === 0){
            return;
        }
        for(var i=0,fn;fn=fns[i++];){
            fn.apply(this,arguments); //此时amguments已经被移除第一项
        }
    };

    //取消订阅
    remove = function(key,fn){
        var fns = list[key];
        //如果没有该项订阅则返回
        if(!fns){
            return false;
        }
        //如果没有某个回调，则说明删除所有该订阅项
        if(!fn){
            fns.length = 0
        }else{
            fns.forEach(function(item,index,array){
                if(item == fn){
                    array.splice(index,1);
                }
            })
        }
    };

    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }
}())
