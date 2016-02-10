$(document).ready(function()
{
    $("input").click(function()
    {
	var img = $("#"+$(this).attr('id'));
	
	var halfScreenWidth = $(window).width()/2;
	var largeWidth = $(window).width()*.83;
	var largeHeight = $(window).height()*.83;
	var picRatio = img.width()/img.height();
	var screenRatio = $(window).width()/$(window).height();
	
	if ($('#col5').is(':hidden'))
	{
	    img.animate({height: '100%', width: '100%'});
	
	    $('#col1').css('width', '8%');
	    img.parent().parent().siblings().show(0);
	    img.parent().siblings().show(0);

	    $('html, body').animate({scrollTop: img.offset().top-($(window).height())/3}, 0);
	}  
	else 
	{
	    img.parent().parent().siblings().hide();
	    $("#col1").show();
	    img.parent().siblings().hide();

	    if (picRatio > screenRatio)
	    {
                img.animate({height: largeWidth/picRatio, width: largeWidth});
	    	var centerPos = ($(window).width()-largeWidth)/2;
	    }
	    else 
	    {
                img.animate({height: largeHeight, width: largeHeight*picRatio});
	    	var centerPos = ($(window).width()-largeHeight*picRatio)/2;
	    }
            $('#col1').css('width', centerPos);
	    window.scrollTo(0, 0);
	}
    });
});

