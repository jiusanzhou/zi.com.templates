var whenReady = (function() {    //这个函数返回whenReady()函数
    var funcs = [];             //当获得事件时，要运行的函数
    var ready = false;          //当触发事件处理程序时,切换为true
    //当文档就绪时,调用事件处理程序
    function handler(e) {
        if(ready) return;       //确保事件处理程序只完整运行一次
        //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
        if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
            return;
        }
        //运行所有注册函数
        //注意每次都要计算funcs.length
        //以防这些函数的调用可能会导致注册更多的函数
       for(var i=0; i<funcs.length; i++) {
            funcs[i].call(document);
        }
        //事件处理函数完整执行,切换ready状态, 并移除所有函数

        ready = true;
        funcs = null;
    }
    //为接收到的任何事件注册处理程序
    if(document.addEventListener) {
        document.addEventListener('DOMContentLoaded', handler, false);
        document.addEventListener('readystatechange', handler, false);            //IE9+
        window.addEventListener('load', handler, false);
    }else if(document.attachEvent) {
        document.attachEvent('onreadystatechange', handler);
        window.attachEvent('onload', handler);
    }
    //返回whenReady()函数
    return function whenReady(fn) {
        if(ready) { fn.call(document); }
        else { funcs.push(fn); }
    }

})();
whenReady(function() {
    var header = document.querySelector('header')
    var headerImg = document.querySelector('header img')
    var h1 = document.querySelector('h1')
    var time = document.querySelector('time')
    var address = document.querySelector('address')
    var end = document.createElement('div')
    end.className='end';
    var image = document.createElement('div');
    image.className = 'image';
    end.appendChild(image);
    if(time) {
        var span = document.createElement('span')
        span.className='time'
        span.innerHTML = time.innerHTML
        end.appendChild(span)
    }
    if(headerImg && headerImg.getAttribute('src')) {
        var figure = document.createElement('figure')
        figure.appendChild(headerImg)
        if(header.nextElementSibling) {
          header.parentNode.insertBefore(figure,header.nextElementSibling)
        } else {
          header.parentNode.appendChild(figure)
        }
    }
    header.appendChild(h1)
    header.appendChild(address)
    document.body.appendChild(end)
})