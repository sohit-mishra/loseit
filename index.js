function loginPage(){
    window.location.href = "login.html";
}

function startedPage(){
    window.location.href = "started.html";
}

function signup(){
    window.location.href = "signup.html";
}

function memberPage(){
    window.location.href = "memberstory.html";
}

function howitwork(){
    window.location.href = "howitworks.html";
}



function Message(){
    var display = document.querySelector("#contact #helpbox").style.display;
    if(display = "none"){
        document.querySelector("#contact #helpbox").style.display = "block";
    }else{
        document.querySelector("#contact #helpbox").style.display = "none";
    }
}


var close = document.querySelector("#close");
close.addEventListener("click", function(){
    document.querySelector("#contact #helpbox").style.display = "none";
});


var sumbit = document.querySelector("#contact #sendicon i");
sumbit.addEventListener("click", function(){
    var text = document.querySelector("#contact #helpbox input").value;
    if(text.length > 0){
        alert("Our team solved your problem in 24 hours!");
    }
    
})


var media = document.querySelector("#press .right button");
media.addEventListener("click", function(){
    window.location.href = "pdf/LoseItPressKit.pdf"; 
});

function writeoneword(){
    var text = document.querySelector("#contact #helpbox input").value;
    if(text.length < 0){
        document.querySelector("#contact #sendicon i").style.opacity = "0.5";
    }else{
        document.querySelector("#contact #sendicon i").style.opacity = "1";
    }
}
