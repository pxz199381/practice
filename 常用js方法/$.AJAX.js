function AJAX(url){

}
AJAX({
    url:"www.baidu.com",
    type:"GET",
    dataType:"json",
    data:{a:"123",b:"456"},
    success:function(response){},
    error:function(status){}
})