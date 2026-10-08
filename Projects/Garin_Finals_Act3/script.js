// $("#title").text("jQueryyy0y")            

$(document).ready(function(){
    $("#title").text("jQueryyy0y") 
    $("p:even").css("color","pink")
    
    // $(".btn2").mouseover(function(){
    //     $(this).css("background", "green")
    // })

    // $(".btn2").mouseout(function(){
    //      $(this).css("background", "brown")
    // })

    $("ul li:first-child").css("color", "orange")

    $("[href]").css("color", "yellow")

    $("tr:odd").css("background", "lightgreen")
    
    $("tr:even").css("background", "lightblue")

    $("th").css("background", "aliceblue")

    $(".btn2").click(function(){
        $(this).css("background", "red")
        $("#message").text("click")  
    })

    $(".btn2").dblclick(function(){
        $(this).css("background", "brown")
        $("#message").text("db click") 
    })

    $(".btn2").mouseover(function(){
        $(this).css("background", "green")
        $("#message").text("mouse in") 
    })

    $(".btn2").mouseout(function(){
         $(this).css("background", "brown")
         $("#message").text("mouse out") 
    })

    $(".btn2").mousedown(function(){
        $(this).css("background", "brown")
        $("#message").text("mouse down") 
        $("body").css("background", "black") 
    })

    $(".btn2").mouseup(function(){
        $(this).css("background", "brown")
        $("#message").text("mouse up") 
        $("body").css("background", "white") 
    })

    $("#name").focus(function(){
        
        $("#message").text("typing") 
        $(this).css("background", "black") 
    })

    $("#name").blur(function(){
        
        $("#message").text("Output") 
        $(this).css("background", "white") 
    })

    $("#course").change(function(){     
        $("#message").text($(this).val()) 
        $(this).css("background", "white") 
    })

    $("#btn3").click(function(){     
        $("*").hide("slow")
    })

    $("#btn4").click(function(){     
        $("#table").show(2000)
    })
})         