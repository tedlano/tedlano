$(document).ready(function() {
  console.log("DOC READY");
  var _this = $(this);
  /*
  // scroll handler
  var scrollToAnchor = function( id ) {
 
    // grab the element to scroll to based on the name
    var elem = $("a[name='"+ id +"']");
 
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = $("#"+id);
    }
 
    // if the destination element exists
    if ( typeof( elem.offset() ) !== "undefined" ) {
 
      // do the scroll
      $('html, body').animate({
              scrollTop: elem.offset().top
      }, 1000 );
 
    }
  };
 
  // bind to click event
  $("a").click(function( event ) {
 
    // only do this if it's an anchor link
    if ( $(this).attr("href").match("#") ) {
 
      // cancel default event propagation
      event.preventDefault();
 
      // scroll to the location
      var href = $(this).attr('href').replace('#', '')
      scrollToAnchor( href );
 
    }
 
  });

  */
  var slideMenu, toggle;

  //Toggle 'active' class for menu button and slide menu
  _this.on("click", ".toggle-switch", function() {
    slideMenu = $('#slide-menu');
    toggle = $(this);

    if(toggle.hasClass('active')){
      toggle.removeClass('active');
      slideMenu.removeClass('active');
    }else{
      toggle.addClass('active');
      slideMenu.addClass('active');
    }
  });

  //Hide slide menu if window is resized large enough to display normal menu
  $(window).resize(function(){
      if($(this).width() > 900){
        slideMenu.removeClass('active');
        toggle.removeClass('active');
      }
  });

  //Keep menu on top
  $(window).scroll(function(){
    var sticky = $('.sticky');
    var scroll = $(window).scrollTop();

    if (scroll >= 5) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

});