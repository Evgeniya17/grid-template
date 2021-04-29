function click( obj, newTab ){
    var $this = obj,
        link = $this.find("a:first"),
        href = link.attr("href"),
        target = link.attr("target");

    if (href == undefined) {
        return;
    }
    if (target == "_blank" || newTab) {
        window.open(href);
    } else {
        window.location.href = href;
    }
}

(function($) {
$(".is-clickable").on("click", function (e) {
    if (!$(e.target).is("a")) {
        click($(this));
    }
});
})(jQuery);

$(document).ready(function(){
    $(".grid-item").hover(function(){
        $(this).css("filter", "brightness(60%)");
        $(this).find(".section-link").css("color", "#d53d27");
      }, function(){
        $(this).css("filter", "brightness(100%)");
        $(".section-link").css("color", "#fff");
    });
  });

  function menuDrop(){
    $(".nav-link").toggle();  
  }
