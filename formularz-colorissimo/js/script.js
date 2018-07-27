$(function (){
    $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
    
    $('#link-remind').click(function (){
        $('#remind').show();
        $('#remind-panel').show();
          $('#log').hide();
         $('#reg').hide();
      

//        return false;
    });
    
     $('#link-return').click(function (){
        $('#remind').hide();
        $('#remind-panel').hide();
          $('#log').show();
         $('#reg').show();
});
    });