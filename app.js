require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question')

talk.intro();
talk.hello('Becca');

goodbye();

var answer = question.ask("What is the meaning of life?");
console.log(answer);

