function getEmail()
{
	var link = "";
	var encrypted = [30, 8, 65, 89, 49, 75, 79, 24, 0, 64, 31, 19, 120, 83, 51, 68, 8, 31, 79, 87, 2, 31];
	var key = [109, 114, 56, 52, 94, 37, 97, 115, 97, 52];
	var keyIterator = 0;
		
	for (var i = 0; i < encrypted.length; i++)
	{
		link += String.fromCharCode(encrypted[i] ^ key[keyIterator]);
		if (++keyIterator >= key.length) keyIterator = 0;
	}
	
	return link;
}

function writeEmail()
{
	document.write(getEmail());
	//document.write("<a href=\"mailto:" + link +"\">");
}