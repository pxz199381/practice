define(function(require){
    var API = require('API'),
        $ = require('jquery');

    var getDayInfo = function(){
        return $.get(API.dayInfo);
    }
    var getTypeInfo = function(){
        return $.get(API.typeInfo);
    }
    return {
        getDayInfo: getDayInfo,
        getTypeInfo: getTypeInfo
    };
})