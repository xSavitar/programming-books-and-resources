// MIT OpenCourseWare - Offline JS file

$(document).ready(function() {
    shuffled_sponsors_markup();
	setCopyrightText();
});


// Code Start for Shuffling sponsors Logos.

var sponsors_image_array = {
	img0 : [ 'http://ocw.mit.edu/images/logo_mathworks.png', 'Mathworks logo.', 'http://www.mathworks.com/'],
	img1 : [ 'http://ocw.mit.edu/images/logo_accenture.png', 'Accenture logo.', 'http://careers.accenture.com/'],
	img2 : [ 'http://ocw.mit.edu/images/logo_lockheed.png', 'Lockheed Martin logo.', 'http://www.lockheedmartin.com/'],
	img3 : [ 'http://ocw.mit.edu/images/logo_dow.png', 'Dow logo.', 'http://www.dow.com/'],
	img4 : [ 'http://ocw.mit.edu/images/logo_abinitio.png', 'Ab Initio logo.', 'http://www.abinitio.com/'],
    img5 : [ 'http://ocw.mit.edu/images/logo_telmex.png', 'Telmex logo.', 'http://www.academica.mx/']
	}
	
// This will return length of associative array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

//This function will shuffle the sponsors image array
function shuffle_sponsor_array(sponsors_image_array, len) {
	var shuffled_sponsors_array = sponsors_image_array;
 	var i = len;
	while (i--) {
	 	var random_position_no = parseInt(Math.random()*len);                                  //  This is 
		var current_sponsor = shuffled_sponsors_array['img'+i]                                 //  based on
		shuffled_sponsors_array['img'+i] = shuffled_sponsors_array['img'+random_position_no];  //  Fisher Yates algorithm
	  	shuffled_sponsors_array['img'+random_position_no] = current_sponsor;                   //  for shuffling
 	}
	return shuffled_sponsors_array;
}

// This will generate shuffled HTML markup for sponsors logos only for dspace site and for zips.
function shuffled_sponsors_markup()
{	
	var len = Object.size(sponsors_image_array);
	
	shuffled_sponsors_image_array = shuffle_sponsor_array(sponsors_image_array, len);
	
	shuffled_sponsors_html = '<h4 class="footer">Our Corporate Supporters</h4>';
	
	for (var i=0;i < len ;i++)
	{
		if (i%2 == 0) // Condition for checking whether logo will appear on left or right side and based on that inline styles will be applied.
		{
			if (shuffled_sponsors_image_array['img'+i][2] == '') // Checking whether logo has any anchor tag or not
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<img alt="'+ shuffled_sponsors_image_array['img'+i][1] + '" src="' + shuffled_sponsors_image_array['img'+i][0] + '" style="height: 53px; width: 145px; margin: 10px 10px 10px 0;" />';
			}
			else
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<a href="'+ shuffled_sponsors_image_array['img'+i][2] + '"><img alt="' + shuffled_sponsors_image_array['img'+i][1] + '" src="'+ shuffled_sponsors_image_array['img'+i][0] + '" style="height: 53px; width: 145px; margin: 10px 10px 10px 0;" /></a>';
			}
			
		}
		else
		{
			if (shuffled_sponsors_image_array['img'+i][2] == '')
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<img alt="'+ shuffled_sponsors_image_array['img'+i][1] + '" src="' + shuffled_sponsors_image_array['img'+i][0]  + '" style="height: 53px; width: 145px; margin: 10px 0;" /><br />';
			}
			else
			{
				shuffled_sponsors_html = shuffled_sponsors_html + '<a href="'+ shuffled_sponsors_image_array['img'+i][2] + '"><img alt="' + shuffled_sponsors_image_array['img'+i][1] + '" src="'+ shuffled_sponsors_image_array['img'+i][0] + '" style="height: 53px; width: 145px; margin: 10px 0;" /></a><br />';
			}
			
		}
	}
	$("#foot-support").empty();
	$("#foot-support").append(shuffled_sponsors_html);

}

// Code End for Shuffling sponsors Logos.


function clearSearchBox()
{
	if(document.getElementById("terms").value == "Search")
	{
		document.getElementById("terms").value = "";	
	}
}

function fillSearchBox()
{
	if(document.getElementById("terms").value == "")
	{
		document.getElementById("terms").value = "Search";	
	}
}

function clearEmailBox()
{
	if(document.getElementById("email").value == "Enter Email")
	{
		document.getElementById("email").value = "";	
	}	
} 

function fillEmailBox()
{
	if(document.getElementById("email").value == "")
	{
		document.getElementById("email").value = "Enter Email";	
	}
}

function OnTranslatedCoursesChange(url)
{
	if(url !="")
	{
		location = "http://ocw.mit.edu"+url;
	}
}

//Code to set the copyright text 
function setCopyrightText(){
$("p.copyright").html('');
present_date=new Date();
return $("p.copyright").append("&copy; 2001&ndash;"+ present_date.getFullYear() + "<br/> Massachusetts Institute of Technology");
}