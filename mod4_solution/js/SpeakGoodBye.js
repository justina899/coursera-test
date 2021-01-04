(function(window){
var goodBye = {};
goodBye.speakWord = "Good Bye";
goodBye.byeSpeaker = 
	function speak(name) {
  		console.log(goodBye.speakWord + " " + name);
	}
	window.goodBye = goodBye;
})(window);
