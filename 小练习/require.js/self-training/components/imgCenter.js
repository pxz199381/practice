define(function(require){
    var imgLoad = function(img){
        return new Promise(function(resolve,reject){
            if(img.complete){
                resolve();
            }else{
                img.onload = function(event){
                    resolve(event);
                };
                img.onerror = function(err){
                    reject(err);
                }
            }
        })
    }
    var imgCenter = function(domList,mode){
        domList.forEach(function(item){
            var img = item.children[0];
            var itemW = item.offsetWidth;
            var itemH = item.offsetHeight;
            var itemR = itemW / itemH;
            imgLoad(img).then(function(){
                var imgW = img.naturalWidth,
                    imgH = img.naturalHeight,
                    imgR = imgW / imgH,
                    resultMode = null;
                switch(mode){
                    case 'aspectFill':
                        resultMode = imgR > 1 ? 'aspect-x' : 'aspect-y';
                        break;
                    case 'wspectFill':
                        resultMode = (itemR > imgR) ? 'aspect-x' : 'aspect-y';
                        break;
                    default:
                }
                img.classList.add(resultMode);
            })
        })
    }
    return imgCenter;
})