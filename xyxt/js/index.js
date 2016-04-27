$(document).ready(function() {

var sliderMinHight = Math.round(window.innerHeight*0.8);
var sliderHeight = Math.round(sliderMinHight*0.8);
$(".slides li").css("height",sliderHeight);
$(".onepage").css("min-height",sliderMinHight);

window.onresize = function () {
  sliderMinHight = Math.round(window.innerHeight*0.8);
  sliderHeight = Math.round(sliderMinHight*0.8);
  $(".slides li").css("height",sliderHeight);
  $(".onepage").css("min-height",sliderMinHight);
}

});

function add(){
    var feedback_title = $("#feedback_title").val();
    var feedback_mobile = $("#feedback_mobile").val();
    var feedback_content = $.trim($("#feedback_content").val());
    var hasError = false;
    if(feedback_title==""){
      hasError = true;
        swal("出错了...", "请填写您的称谓!", "error");        
    return false;
    }
    if(feedback_content==""){
      hasError = true;
        swal("出错了...", "请填写您的建议!", "error");
    return false;
    }
    if(!hasError){
      $.post("/pages/addFeedback",{"feedback_title":feedback_title,"feedback_mobile":feedback_mobile,"feedback_content":feedback_content},function(data){
        if(data=="success"){
          $("#feedbackPanel").html("<span style=\"padding:20px 10px;text-align:center;\"><i class=\"fa fa-comment\"></i> 谢谢您提出的宝贵建议！<br>我们会尽快跟进改善！</span>");
        }
  
      });
    }

}


$(function(){
 $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
                
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({scrollTop: targetOffset}, 1400);
                    //$('.tlt').textillate({ in: { effect: 'flipInY' } });
                    return false;
                }
            }
        });
    
    $(".toggleContactPanel").click(function(){
        $(".feedbackPanel").hide();
        $(".contactPanel").slideToggle();
    });

    $(".toggleBarcodePanel").hover(function(){
        $(".contactPanel").hide();
        $(".feedbackPanel").hide();
        $(".barcodePanel").slideToggle();
    });

    $(".toggleFeedbackPanel").click(function(){
        $(".contactPanel").hide();
        $(".feedbackPanel").slideToggle();
    });

    $(window).scroll(function(e) {
        e = e || window.event;
        var scroll_height = $(document).scrollTop();
        if (scroll_height > 800) {
            $("#gotoTop").css({
              opacity: 1
            })
          } else {
            $("#gotoTop").css({
              opacity: 0
            })
        }
    });

    $('#gotoTop').click(function (e) {//返回顶部
        e.preventDefault();
        $('html,body').animate({ scrollTop:0});
    });
    
    
    

});
