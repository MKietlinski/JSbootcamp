function getDate() {

	var date = new Date();
	var month = date.getMonth() + 1;
	
	if (month < 10) {
	
		month = "0" + month;
	
	}
	
	return console.log(date.getDate() + "." + month + "." + date.getFullYear());

}