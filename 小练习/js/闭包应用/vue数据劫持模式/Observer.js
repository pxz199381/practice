function observer(data){
    if(!data || typeof data != 'object'){
        return;
    }
    Object.keys(data).forEach(function(item){
        defineReactive(data,item,data[item]);
    })
    function defineReactive(data,key,value){
        //监听子属性
        observer(value);
        Object.defineProperty(data,key,{
            enumerable: true,
            configurable: false,
            get: function(){
                return value;
            },
            set: function(newValue){
                value = newValue;
            }
        })
    }
}