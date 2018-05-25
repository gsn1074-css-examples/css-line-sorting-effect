var container = document.getElementById('container');
var words = ["CSS", "CSS Line", "CSS Line Sorting", "CSS Line Sorting Effect", "CSS Line Sorting Effect Example", "CSS Line Sorting Effect", "CSS Line Sorting", "CSS Line"];
var counter = 0;
var timer;

initialize();

function addText() {

	var content = "";
	
	for (i = 0; i < 5; i++) {
	
		content += "<p>" + words[i] + "</p>"
	
	}
	
	container.innerHTML = content;
	
	if (counter == 4) {
	
		clearInterval(timer);
		timer = setTimeout(initialize, 1000);
	
	} else {

		var temp = words[0];
		words.splice(0, 1);
		words.push(temp);
		counter++;
	}
}

function initialize() {

	counter = 0;
	timer = setInterval(addText, 100);

}