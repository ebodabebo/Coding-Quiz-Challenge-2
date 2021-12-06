function startTimer(){
    var sec = 75
    document.getElementById("timer").innerHTML = sec
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML= sec
        sec--
        if (sec == 0){
            //timeOut()    
        }
    }) 
}

function timeOut(){
    window.location.href = "endpage.html"
}

var startbutton = document.getElementById("startbutton")
startbutton.addEventListener("click",function(){

})