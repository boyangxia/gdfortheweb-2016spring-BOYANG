$('[class*="spinner"]').on('click',funct­ion() {
if($(this).hasClass("fullRotate")){
return;
}
	$(this).addClass("fullRotate");
	var that = this;
	setTimeout(function(){
		$(that).removeClass('fullRotate');
	},1250);
});