new TypeIt("#section_name_project", {
    //strings: ["los santos 86"],
    speed: 90,
    waitUntilVisible: true,
  })
  .type("SW PROJECT :D",{delay:300})
  .delete(13)
  .type("los santos 86")
  .go();



$('#active_block_join').on('click', function(){
    $('#block_join').show();
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
    if( $(event.target).closest("#block_created").length ) return;
    $("#block_created").hide(300);
    event.stopPropagation();
  });

  
    $('#various-actions').click(function(){
      $('#accepted').show(200).delay(3000).slideUp(300);
    });

    function dev(){
      alert('В разработке, чё лезешь то?');
    }