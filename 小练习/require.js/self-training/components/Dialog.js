define(function(require){
    function Dialog(config){
        this.title = config.title ? config.title : '这是标题';
        this.content = config.content ? config.content : '这是内容';
        this.html = `<div class="dialog-dropback">
                        <div class="container">
                            <div class="header">${this.title}</div>
                            <div class="content">${this.content}</div>
                            <div class="footer">
                                <button class="cancel">取消</button>
                                <button class="confirm">确认</button>
                            </div>
                        </div>
                     </div>`
    }
    Dialog.prototype = {
        constructor: Dialog,
        show: function(){
            var self = this;
            $(document.body).append(this.html);
            return new Promise(function(resolve,reject){
                $('.cancel').on('click',function(ev){
                    self.hide();
                    reject(ev);
                });
                $('.confirm').on('click',function(ev){
                    self.hide();
                    resolve(ev);
                });
            })
        },
        destory: function(){
            $('.cancel').off('click');
            $('.confirm').off('click');
            $('.dialog-dropback').remove();
        },
        hide: function(){
            this.destory();
        }
    }
    return function(config){
       return new Dialog(config);
    }
})