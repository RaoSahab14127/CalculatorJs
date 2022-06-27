function ber(n){
    var num=(document.getElementById(n)).value
    var dis = document.getElementById('sc')
    dis.value += num
    
    
    
}

function cler(){
    var dis = document.getElementById('sc')
    dis.value=""
}

function calc(){
    var dis = document.getElementById('sc')
    dis.value=eval(dis.value)
}




