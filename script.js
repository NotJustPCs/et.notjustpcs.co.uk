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
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=","",EmailAdd + ' OR "' + EmailAdd.substring(0, 5) + " " + EmailAdd.substring(EmailAdd.length - 6) + '"',"google","Google");
	WLlinks = WLlinks + WriteOneLink("https://contacts.google.com/search/","",EmailAdd.substring(EmailAdd.length - 10),"address-book-o","Google Contacts");
	WLlinks = WLlinks + WriteOneLink("https://portal.aql.com/telecoms/network_lookup.php?number=","&nlSubmit=submit",EmailAdd,"sitemap","Current supplier");
	WLlinks = WLlinks + WriteOneLink("https://www.ukphoneinfo.com/area-code/","",EmailAdd.substring(0, 5),"map-pin","Area code lookup");
	WLlinks = WLlinks + WriteOneLink("tel:","",EmailAdd,"phone","Call number");
	WLlinks = WLlinks + WriteOneLink("https://api.whatsapp.com/send?phone=44","",EmailAdd.substring(EmailAdd.length - 10),"whatsapp","Send WhatsApp message (UK numbers only)");
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
