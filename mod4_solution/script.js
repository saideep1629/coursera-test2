var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i=0; i<names.length; i++) {
  var currentName = names[i];

  if (currentName.startsWith("J") || currentName.startsWith("j")) {
     function sayGoodbye (currentName) {
      console.log(johnGreeter.speakWord +" J"+ "" + currentName);
    };

  sayGoodbye(currentName);
    
  } else {
    cenaGreeter.sayHello(currentName);
  }
}
