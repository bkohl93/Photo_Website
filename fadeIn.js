
var peopleAddresses = ['http://cfritzphoto.com/people1_resize.jpg',
		    'http://cfritzphoto.com/people2_resize.jpg',
		    'http://cfritzphoto.com/people3_resize.jpg',
		    'http://cfritzphoto.com/people4_resize.jpg',
		    'http://cfritzphoto.com/people5_resize.jpg',
		    'http://cfritzphoto.com/people6_resize.jpg',
		    'http://cfritzphoto.com/people7_resize.jpg',
		    'http://cfritzphoto.com/people8_resize.jpg',
		    'http://cfritzphoto.com/people9_resize.jpg',
		    'http://cfritzphoto.com/people10_resize.jpg',
		    'http://cfritzphoto.com/people11_resize.jpg',
		    'http://cfritzphoto.com/people12_resize.jpg'];

var thingsAddresses = ['http://cfritzphoto.com/things1_resize.jpg',
		    'http://cfritzphoto.com/things2_resize.jpg',
		    'http://cfritzphoto.com/things3_resize.jpg',
		    'http://cfritzphoto.com/things4_resize.jpg',
		    'http://cfritzphoto.com/things5_resize.jpg',
		    'http://cfritzphoto.com/things6_resize.jpg',
		    'http://cfritzphoto.com/things7_resize.jpg',
		    'http://cfritzphoto.com/things8_resize.jpg',
		    'http://cfritzphoto.com/things9_resize.jpg',
		    'http://cfritzphoto.com/things10_resize.jpg',
		    'http://cfritzphoto.com/things11_resize.jpg',
		    'http://cfritzphoto.com/things12_resize.jpg',
		    'http://cfritzphoto.com/things14_resize.jpg',
		    'http://cfritzphoto.com/things13_resize.jpg'];

var placesAddresses = ['http://cfritzphoto.com/places1_resize.jpg',
		    'http://cfritzphoto.com/places2_resize.jpg',
		    'http://cfritzphoto.com/places3_resize.jpg',
		    'http://cfritzphoto.com/places4_resize.jpg',
		    'http://cfritzphoto.com/places5_resize.jpg',
		    'http://cfritzphoto.com/places6_resize.jpg',
		    'http://cfritzphoto.com/places7_resize.jpg',
		    'http://cfritzphoto.com/places8_resize.jpg',
		    'http://cfritzphoto.com/places9_resize.jpg',
		    'http://cfritzphoto.com/places10_resize.jpg',
		    'http://cfritzphoto.com/places11_resize.jpg',
		    'http://cfritzphoto.com/places12_resize.jpg',
		    'http://cfritzphoto.com/places13_resize.jpg',
		    'http://cfritzphoto.com/places14_resize.jpg',
		    'http://cfritzphoto.com/places15_resize.jpg',
		    'http://cfritzphoto.com/places16_resize.jpg',
		    'http://cfritzphoto.com/places17_resize.jpg',
		    'http://cfritzphoto.com/places18_resize.jpg',
		    'http://cfritzphoto.com/places19_resize.jpg',
		    'http://cfritzphoto.com/places20_resize.jpg',
		    'http://cfritzphoto.com/places21_resize.jpg'];


function switchPage(indicator)
{
    $("[id^='pic']").css('display','none');
    $("[id^='pic']").css('height','100%');
    $("[id^='pic']").css('width','100%');
    $('#col1').css('width', '8%');
    $("#rows").children().show(0);
    $("#rows").children().hide();
    $("#rows").children().children().show(0);
    $("#rows").children().children().hide();

    if (indicator === "home" || indicator === "about")
    {
    	if (indicator == "about")
    	{
		    $("#rows").hide();
		    $("#homepic").hide();
		    $("#tilleyhome").hide();
		    $("#clobox").fadeIn(300);
		    $("#clobio").show();
    	}
    	else if (indicator == "home")
    	{
		    $("#rows").hide();
		    $("#clobox").hide();
		    $("#clobio").hide();
		    $("#homepic").fadeIn(300);
		    $("#tilleyhome").show();
    	}
    	else {}
    }
    else 
    {
		$("#clobox").hide();
		$("#clobio").hide();
		$("#homepic").hide();
		$("#tilleyhome").hide();
		$("#rows").show();
		$("#rows").children().show();
		$("#rows").children().children().show();
	
		if (indicator == "people")
		{
		    var imgAddresses = peopleAddresses.slice();
	    }
	    else if (indicator == "places")
	    {
		    var imgAddresses = placesAddresses.slice();
	    }
	    else if (indicator == "things")
	    {
		    var imgAddresses = thingsAddresses.slice();
	    }
		else {}
	
	    for (i = 1; i <= imgAddresses.length; i++)
	    {
		    var img = $("#pic" + i);
	
		    img.attr('src', imgAddresses[i-1]);
		    img.bind("load", function () { $(this).fadeIn(300); });
    	}
    }
    window.scrollTo(0, 0);
}
