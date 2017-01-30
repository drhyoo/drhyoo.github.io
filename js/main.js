jQuery(document).ready(function(){
  var accordionsMenu = $('.accordion-menu');

  if( accordionsMenu.length > 0 ) {

    accordionsMenu.each(function(){
      var accordion = $('.accordion-menu');
      //detect change in the input[type="checkbox"] value
      accordion.on('change', 'input[type="checkbox"]', checkAccordionsMenu);
    });
  }

  function checkAccordionsMenu(clicked){
      var checkbox = $(this);
      console.log(checkbox.prop('checked'));
      if ( checkbox.prop('checked')) {
          checkbox.siblings('ul').attr('style', 'display:none;').slideDown(600);
          checkboxSearchBox.siblings('ul').attr('style', 'display:none;').slideDown(600);
      }
      else {
          checkbox.siblings('ul').attr('style', 'display:block;').slideUp(600);
      }
  }

});

function hamburgerMenu() {
    var x = document.getElementById("topNavBarul");
    if (x.className === "navBarul") {
        x.className += " responsive";
    }
    else {
        x.className = "navBarul";
    }
}
