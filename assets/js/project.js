//Check Off Specific Todos By Clicking
$("ul").on("click","li",function() {
  $(this).toggleClass("completed");
});
//Click on x to delete Todos
$("ul").on("click","span",function(){
  $(this).parent().fadeOut(function(){
      $(this).remove();
  });
  event.stopPropagation();
});
//Add new li
$("input[type='text']").keypress(function(event){
  if (event.which===13) {
    //Grabbing new todo text
    var todoText = $(this).val();
    $(this).val("");
    //Create new li add to todo
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>"+todoText+"</li>");
  }
});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
