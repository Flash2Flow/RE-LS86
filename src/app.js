  new TypeIt("#section_name_project", {
    //strings: ["los santos 86"],
    speed: 90,
    waitUntilVisible: true,
    cursor: false,
  })
  .type("SW PROJECT :D",{delay:300})
  .delete(13)
  .type("los santos 86")
  .go();



$('#active_block_join_one').on('click', function(){
    $('#block_join').show();
    $('#burger-menu').hide();
    return false;
})
$('#close-menu-auth').on('click', function(){
  $('#block_join').hide();
  return false;
})
$('#close-menu-reg').on('click', function(){
  $('#block_created').hide();
  return false;
})
$('#close-menu').on('click', function(){
  $('#burger-menu').hide();
  return false;
})
$('#active_block_join_two').on('click', function(){
  $('#block_join').show();
  return false;
})
$('#burger-button').on('click', function(){
  $('#burger-menu').show();
  return false;
})
$('#reg').on('click', function(){
  $('#block_created').show();
  $('#block_join').hide();
  return false;
})

$(document).click( function(event){
    if( $(event.target).closest("#block_join").length ) return;
    $("#block_join").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#burger-menu").length ) return;
    $("#burger-menu").hide();
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block_created").length ) return;
    $("#block_created").hide(300);
    event.stopPropagation();
  });

  
    $('#various-actions').click(function(){
      $('#no-accepted-block').show(200).delay(3000).slideUp(1000);
      //$('#accepted').show(200).delay(3000).slideUp(1000);
    });

    function dev(){
      alert('В разработке, чё лезешь то?');
    }

window.addEventListener('scroll',function(){
  const scroll = window.scrollY;

  if(scrollY >= 222){
    $('location').ready(
      function(){
        $('#block_image').animate({
          "margin-left": "0",
          "opacity": "1"
        }, 800);

        $('#about_project').animate({
          "opacity": "1"
        },800);
      }
    )
  };
});