$(function(){
    // dashboard

    $("#sidebarCollapse").click(function(){
    $("#sidebar").toggleClass('active');
    $(".content-wrapper").toggleClass('content-toggle')
    });
});