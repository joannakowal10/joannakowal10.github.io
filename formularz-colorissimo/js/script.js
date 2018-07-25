$(function (){
    $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});
    
    $('#btn-remind').click(function (){
        $('#remind').show();
        $('#logandreg').hide();
//        return false;
    });
    
});