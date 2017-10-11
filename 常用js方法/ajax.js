var xhr = new XMLHttpRequest();
var url = 'index.php';
url = addURLParam(url,'name','pei');

//xhr1.0

//缺点：

/* 只支持文本数据的传送，无法用来读取和上传二进制文件。
*  传送和接收数据时，没有进度信息，只能提示有没有完成。
*  受到"同域限制"（Same Origin Policy），只能向同一域名的服务器请求数据。*/


//xhr.readyState

//0:未初始化（尚未调用open方法）
//1:启动（调用了open方法，但未调用send方法）
//2:发送（调用了send方法，但未得到响应）
//3:接收（已经接收到部分数据）
//4:完成（接收到所有数据，可以在客户端访问）

//xhr.staus

//200:相应的内容已经就绪
//304:代表请求的资源没有被修改，可以直接使用浏览器缓存的版本
//404:代表请求的资源在服务器并未找到
//500:服务器内部错误

//同步AJAX
xhr.open('get',url,false);
xhr.send(null);
if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
    console.log(xhr.responseText);
}else{
    console.log('error'+xhr.status);
}
//异步AJAX
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            console.log(xhr.responseText);
        }else{
            console.log('error'+xhr.status);
        }
    }
}
xhr.open('get',url,true);
//设置请求头信息
xhr.setRequestHeader('key','value');
//获取响应头信息
xhr.getResponseHeader('key');
xhr.getAllResponseHeaders();
xhr.send(null);
function addURLParam(url,name,value){
    url += (url.indexOf('?') == -1 ? '?' : '&');
    url += encodeURIComponent(name) +'='+ encodeURIComponent(value);
    return url;
}

//xhr2.0

//新版本的功能

/* 可以设置HTTP请求的时限。
*  可以使用FormData对象管理表单数据。
*  可以上传文件。
*  可以请求不同域名下的数据（跨域请求）。
*  可以获取服务器端的二进制数据。
*  可以获得数据传输的进度信息。*/

// （一）： FormData对象

var form = document.forms[0];
var data = new FormData();
xhr.open('post',url,true);
data.append('name',form);
xhr.send(data);

// （二）：超时设定
// Opera、Firefox和IE 10支持该属性，IE 8和IE 9的这个属性属于XDomainRequest对象，而Chrome和Safari还不支持

//表示请求在多长时间后被终止
xhr.onreadystatechange = function(){
    try{
        if(xhr.readyState === 4){
            if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
                console.log(xhr.responseText);
            }else{
                console.log('error'+xhr.status);
            }
        }
    }catch(ex){
        //避免浏览器报告错误
    }

}
xhr.open('get',url,true);
xhr.timeout = 3000;
xhr.ontimeout = function(){
    console.log('requset did not return in a second');
}
xhr.send(null);

//（三）：进度事件

//loadstart:在接受到响应数据的第一个字节时触发；
//progress:返回进度信息
//error:传输中出现错误
//abort:传输被用户取消
//load:传输成功完成
//loadend:传输结束，但是不知道成功还是失败

//progress事件分上传和下载两种情况
//下载的progress事件属于XMLHttpRequset对象
//上传的porgress事件属于XMLHttpRequset.upload对象
//在progress事件的对应的回调函数里，对应的event参数的target指向xhr对象实例
//event对象还有几个属性
//event.lengthComputable:表示进度信息是否可用的布尔值
//event.position或event.loaded:表示已经接收的字节数
//event.totalSize或event.total:表示根据Content-Length响应头确定的预期字节数

xhr.upload.onprogress = function(ev){
    console.log(ev.target);
    if(ev.lengthComputable){
        var percent = ev.loaded/ev.total;
    }
}

//（四）：跨域资源共享（CORS）

// 新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。这叫做"跨域资源共享"（简称CORS）。
// 使用"跨域资源共享"的前提，是浏览器必须支持这个功能，而且服务器端必须同意这种"跨域"。
// 如果能够满足上面的条件，则代码的写法与不跨域的请求完全一样。
// 目前，除了IE 8和IE 9，主流浏览器都支持CORS，IE 10也将支持这个功能。

//在express服务器中设置如下
//要想顺带发送COOKIE,要在AJAX打开 withCredientials属性（为true）
app.all('*',function(){
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requset-width',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,HEAD',
        'Access-Control-Allow-Credentials': 'true',
        'X-Powered-By': '3.2.1',
        'Content-Type': 'application/json;charset=utf-8'
    })
})