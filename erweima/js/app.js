var img = $("#img");
var imgWidth = img.width();
var imgHeight = img.height();

chrome.tabs.getSelected(null, function(w){
	var url = w.url;
	var title = w.title;

	$('#url').val(url);
	$('#title').val(title);

	img.qrcode({
		width: imgWidth,
		height: imgHeight,
		text: url
	});
})