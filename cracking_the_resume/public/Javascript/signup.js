$(document).ready(function(){

  function pngOnly(){
    var lastThree = $("#fileUpload").val().substr($("#fileUpload").val().length-3);
    if(lastThree == "png"){
      $("#checkResume").prop('checked', true);
    }else{
      $("#checkResume").prop('checked', false)
    }
  }

  $("#submitForm").click(function(){
    pngOnly();
  });
  $("#checkResume").click(function(){
    pngOnly();
  });

});
