// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}
// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function(){
    $("#buttonPersonal").click(function(){
        $("#personal").show("slow");
        $("#mySkill").hide();
        $("#contact").hide();
        $("#buttonPersonal").removeClass("w3-theme-d3");
        $("#buttonPersonal").addClass("w3-theme-d5");
        $("#buttonContact").removeClass("w3-theme-d5");
        $("#buttonContact").addClass("w3-theme-d3");
        $("#buttonSkill").removeClass("w3-theme-d5");
        $("#buttonSkill").addClass("w3-theme-d3");
        
    });
    $("#buttonSkill").click(function(){
        $("#personal").hide();
        $("#mySkill").show("slow");
        $("#contact").hide();
        $("#buttonPersonal").removeClass("w3-theme-d5");
        $("#buttonPersonal").addClass("w3-theme-d3");
        $("#buttonContact").removeClass("w3-theme-d5");
        $("#buttonContact").addClass("w3-theme-d3");
        $("#buttonSkill").removeClass("w3-theme-d3");
        $("#buttonSkill").addClass("w3-theme-d5");

    });
    $("#buttonContact").click(function(){
        $("#personal").hide();
        $("#mySkill").hide();
        $("#contact").show("slow");
        $("#buttonPersonal").removeClass("w3-theme-d5");
        $("#buttonPersonal").addClass("w3-theme-d3");
        $("#buttonContact").removeClass("w3-theme-d3");
        $("#buttonContact").addClass("w3-theme-d5");
        $("#buttonSkill").removeClass("w3-theme-d5");
        $("#buttonSkill").addClass("w3-theme-d3");
    });

    $("#profil").addClass("w3-animate-bottom");
    document.getElementById('profil').style.display='';
    setTimeout(function(){
        $("#fotoProfil").show("slow");
    },200);
    setTimeout(function(){
        $("#skill").addClass("w3-animate-bottom");
        document.getElementById('skill').style.display='';
    },300);
    setTimeout(function(){
        $("#tombol").addClass("w3-animate-bottom");
        document.getElementById('tombol').style.display='';
        
    },500);
    setTimeout(function(){
        $("#isiTombol").show("slow");
    },600);
    setTimeout(function(){
        $("#isi").addClass("w3-animate-right");
        document.getElementById('isi').style.display='';
    },800);
    setTimeout(function(){
        $("#personal").show("slow");
        
    },1000);
    setTimeout(function(){
        $("#buttonPersonal").removeClass("w3-theme-d3");
        $("#buttonPersonal").addClass("w3-theme-d5");
    },1200);
    setTimeout(function(){
        $("#footer").show("slow");
    },900);
    


    /* $("#profil").show("slow"); */
    /* 
     
    
    setTimeout(function(){
        $("#isi").show("slow");
    },600);
    setTimeout(function(){
        $("#footer").show("slow");
    },900);  */
});