// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://www.flickr.com/photos/tsingtsai/*
// @grant        none
// ==/UserScript==

var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js", function() {
    $("body").bind("keyup", function(event){
        console.debug(event.which);
        
        if (event.which == 86) // v
        {
	    console.debug("dele");
            $(".edit > a")[0].click();
            $(".delete-photo")[0].click();
        }
        if (event.which == 89) // v
	    $(".ui-dialog-button-negative")[0].click();

    });

});



