(function(window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i;
for (i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);
  if (firstLetter.toLowerCase() == 'j') {
    goodBye.byeSpeaker(names[i]);
  } else {
    hello.helloSpeaker(names[i]);
  }
}
})(window);