define(function(require){
    var request = require('request');
    request.getTypeInfo()
        .then(res => {
            console.log(res);
        })
})