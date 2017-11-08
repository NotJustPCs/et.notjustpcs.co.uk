function pullQueryString() {
	var error = window.location.search;
	if (error.substring(0, 1) == "?") {
		error = error.substring(1);
	}
	return error;
}

function WriteOneLink(URLprefix,URLsuffix,TelNo,FAicon,LinkDesc) {
	return "<a class='list-group-item' target='_blank' href='" + URLprefix + TelNo + URLsuffix + "'><i class='fa fa-" + FAicon + " fa-fw' aria-hidden='true'></i>&nbsp; " + LinkDesc + "</a>";
}

function WriteLinks(IDtoWrite) {
	var PhoneNum = document.getElementById('PhoneNum').value;
	WLlinks = WriteOneLink("https://www.facebook.com/search/top/?q=","",PhoneNum,"facebook","Facebook");
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=","",PhoneNum,"google","Google")
	WLlinks = WLlinks + WriteOneLink("https://contacts.google.com/search/","",PhoneNum.substring(PhoneNum.length - 10),"address-book-o","Google Contacts")
	WLlinks = WLlinks + WriteOneLink("https://portal.aql.com/telecoms/network_lookup.php?number=","&nlSubmit=submit",PhoneNum,"sitemap","Current supplier")
	WLlinks = WLlinks + WriteOneLink("https://www.ukphoneinfo.com/area-code/","",PhoneNum.substring(0, 5),"map-pin","Area code lookup")
	WLlinks = WLlinks + WriteOneLink("tel:","",PhoneNum,"phone","Call number")
	WLlinks = WLlinks + WriteOneLink("http://pt.notjustpcs.co.uk/?","",PhoneNum,"link","Link to this page")
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}
