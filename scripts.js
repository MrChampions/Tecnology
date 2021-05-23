jQuery('document').ready(function($){
    var menuBoton = $('.menu-icono'),
        menu1 = $('.navegador ul');

    menuBoton.click(function(){
        if (menu1.hasClass('show')) {
            menu1.removeClass('show');
        }
        else{
            menu1.addClass('show');  
        }
    
    });
});


function copy(selector){
    var $temp = $("<div>");
    $("body").append($temp);
    $temp.attr("contenteditable", true)
         .html($(selector).html()).select()
         .on("focus", function() { document.execCommand('selectAll',false,null) })
         .focus();
    document.execCommand("copy");
    $temp.remove();
  }

