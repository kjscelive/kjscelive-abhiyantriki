// alert("Connected!")
// Array.prototype.forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
//     img.setAttribute('src', img.getAttribute('data-src'));
//     img.onload = function() {
//         img.removeAttribute('data-src');
//     };
// });
registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);

var lazy = [];

function setLazy(){
    lazy = document.getElementsByClassName('lazy');
    console.log('Found ' + lazy.length + ' lazy images');
}

function lazyLoad(){
    for(var i=0; i<lazy.length; i++){
        if(isInViewport(lazy[i])){
            if (lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }

    cleanLazy();
}

function cleanLazy(){
    lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
}

function isInViewport(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
     );
}

function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}
