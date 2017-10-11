var cache = (function () {
    var data = [], max = 3;
    function cache ( key, value ) {
        // 做判断, 如果超出范围, 则, 将最开始加入的 移除
        if ( data.length >= 3 ) {
            // 需要先移除
            var temp = data.shift();    // 移除第一项并获取 key
            delete cache[ temp ];   // 删除 cache对象中的 temp 属性
        }
        data.push( key );
        console.log( data );
        cache[ key ] = value;
    }
    return cache;
})();
