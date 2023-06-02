document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
};

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀不要走嘛~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '🐖欢迎回来～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});

document.addEventListener("copy", (function (e) {
    toastr.options = {
        /*关闭按钮是否开启 */  
        closeButton: false,  
        debug: false,  
        /*是否出现进度条 */
        progressBar: true, 
        /*出现的位置，top与left可以进行更改  */ 
        positionClass: "toast-top-left",  
        /*点击触发的函数，懂js的同学可以自行设置 */
        onclick: null,  
        /**持续的实践，动画实践等等 */
        showDuration: "300",  
        hideDuration: "300",  
        timeOut: "2500",  
        extendedTimeOut: "1000",
        /**出现的方式 */  
        showEasing: "swing",  
        hideEasing: "linear",  
        showMethod: "fadeIn",  
        hideMethod: "fadeOut"  
    };
    /**点击复制之后出现的文本，后面是标题 */
    toastr.success("如果转载，请保留原文链接哦(●ˇ∀ˇ●)","复制成功！！！");  
}));