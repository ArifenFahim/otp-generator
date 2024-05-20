const switchBtn = document.getElementById("switch-btn-toggoler")






//event  handler
switchBtn.addEventListener("click",function(){
    var root = document.querySelector(":root");
    var rootstyle = getComputedStyle(root);
    const isWhite =rootstyle.getPropertyValue("--theme-bg")
   

    if (isWhite == "#e0e0e0"){
        root.style.setProperty("--theme-bg", "#232121")
    } 
    else{
        root.style.setProperty("--theme-bg","#e0e0e0")
    }
    
});