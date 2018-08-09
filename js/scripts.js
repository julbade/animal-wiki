$(document).ready(function() {

var userInput = $("#frontpage img").click(function(){
  $(this).attr("id");
})

$("#dogclick").click(function() {
  $('#afterdogclick').show();
  $('#frontpage').hide();

});

$("#catclick").click(function() {
  $('#aftercatclick').show();
  $('#frontpage').hide();

});

  $("#spiderclick").click(function() {
    $('#afterspiderclick').show();
    $('#frontpage').hide();

});



$("#dogback").click(function() {
  $('#afterdogclick').hide();
  $('#frontpage').show();

});

$("#catback").click(function() {
  $('#aftercatclick').hide();
  $('#frontpage').show();

});

$("#spiderback").click(function() {
  $('#afterspiderclick').hide();
  $('#frontpage').show();

});


});
