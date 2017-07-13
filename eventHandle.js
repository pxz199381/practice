/**
 * Created by Administrator on 2017/7/13.
 */
var EventUtil = {
    addHandler: function(dom,type,fn){
        if(addEventListener){
            return dom.addEventListener(type,fn,false)
        }else if(attachEvent){
            return dom.attachEvent('on'+type,fn)
        }else{
            return dom['on'+type] = fn;
        }
    },
    removeHandler: function(dom,type,fn){
        if(removeEventListener){
            return dom.removeEventListener(type,fn,false)
        }else if(detachEvent){
            return dom.detachEvent('on'+type,fn)
        }else{
            dom['on'+type] = null;
        }
    },
    getEvent: function(ev){
        return ev ? ev : window.event;
    },
    getTarget: function(ev){
        return ev.target || ev.srcElement;
    },
    preventDefault: function(ev){
        if(ev.preventDefault){
            ev.preventDefault();
        }else{
            ev.returnValue = false;
        }
    },
    stopPropagation: function(ev){
        if(ev.stopPropagation){
            ev.stopPropagation();
        }else{
            ev.cancelBubble = true;
        }
    },
    customDispatch: function(dom,eventType,event,ispD,issP){
        var evt = document.createEvent(eventType);
        evt.initEvent(event,ispD,issP);
        dom.dispatchEvent(evt);
    }
}