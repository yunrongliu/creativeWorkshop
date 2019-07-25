window.onload = function(){
    document.body.addEventListener('touchstart',function(ev){
        ev.preventDefault()
    })
    var sign = document.getElementById('sign')
    var context = sign.getContext('2d')
    var pos = {
        x:0,
        y:0
    }
    sign.addEventListener('touchstart',function(ev){
        pos.x = ev.changedTouches[0].clientX
        pos.y = ev.changedTouches[0].clientY
        context.moveTo(pos.x,pos.y)
    })
    sign.addEventListener('touchend',function(ev){
        pos.x = ev.changedTouches[0].clientX
        pos.y = ev.changedTouches[0].clientY
        context.lineTo(pos.x,pos.y)
        cxt.stroke();
    })
}