const hamburger = document.querySelector(".burger");

let curr = "open";
hamburger.addEventListener("click", () => {
    
    if(curr == "open"){
    document.querySelector(".nav-bar").classList.remove("h-class");

    document.querySelector(".nav-list").classList.remove("hide");
    
    document.querySelector(".nav-right").classList.remove("hide");

    curr = "close"
    }
    else{
        document.querySelector(".nav-bar").classList.add("h-class");

    document.querySelector(".nav-list").classList.add("hide");
    
    document.querySelector(".nav-right").classList.add("hide");
    curr="open"
    }
});