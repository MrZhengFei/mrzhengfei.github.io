function downApp(el){
    var u = navigator.userAgent,
    isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    urls = {
        'android':el.dataset.android,
        'ios':el.dataset.ios,
    };
    //三元运算
    window.location.href = isAndroid? urls.android : isiOS? urls.ios : urls.android;
}
function weixinTip(el) {
    var u = navigator.userAgent,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var ua = navigator.userAgent;
    var Browser = /Safari/.test(ua) && !/Chrome/.test(ua);
    if (isiOS && Browser == 0) {
        el.onclick = function(e) {
            window.event ? window.event.returnValue = false : e.preventDefault();
            document.getElementById('uaTip').style.display = 'block';
        }
    } else {
        $("#uaApp").click(function() {
            // $("#uaApp").attr("style", "display:none;");
            // $("#ul").attr("style", "display:none;");
            // $("#id").attr("style", "display:block;");
        });
    }
}