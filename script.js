function pullQueryString() {
	var error = window.location.search;
	if (error.substring(0, 1) == "?") {
		error = error.substring(1);
	}
	return error;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function WriteOneLink(URLprefix,URLsuffix,EmailAddress,FAicon,LinkDesc) {
	return "<a class='list-group-item' target='_blank' href='" + URLprefix + EmailAddress + URLsuffix + "'><i class='fa fa-" + FAicon + " fa-fw' aria-hidden='true'></i>&nbsp; " + LinkDesc + "</a>";
}

function WriteLinks(IDtoWrite,LocalLinks) {
	var EmailAdd = document.getElementById('EmailAdd').value;
	WLlinks = WriteOneLink("https://www.facebook.com/search/top/?q=","",EmailAdd,"facebook","Facebook");
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=","",EmailAdd,"google","Google");
	WLlinks = WLlinks + WriteOneLink("https://contacts.google.com/search/","",EmailAdd,"address-book-o","Google Contacts");
	WLlinks = WLlinks + WriteOneLink("mailto:","",EmailAdd,"envelope","Send Message");
	WLlinks = WLlinks + WriteOneLink("http://et.notjustpcs.co.uk/?","",EmailAdd,"link","Link to this page");
//	if (LocalLinks = 1) {
//		WLlinks = WLlinks + WriteOneLink("http://njn/njpctools/","",PhoneNum,"archive","Internal NJPC Tools")		
//	}
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}

function local_load(){
	WriteLinks('actions', 1);
}

function local_err(){
	WriteLinks('actions', 0);
}
