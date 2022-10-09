function encodeAndDecodeMessages() {
   let textAreas = document.querySelectorAll('textarea');
   let buttons = document.querySelectorAll('button');

   buttons[0].addEventListener('click',encode);
   buttons[1].addEventListener('click',decode);


   function encode(event) {
    let encodeMessage = '';
    let input = textAreas[0].value;
    for (let i = 0; i < input.length; i++) {
       
        encodeMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
    }
    textAreas[1].value = encodeMessage;
    textAreas[0].value = '';
   }

   function decode(event) {
    let dencodedMessage = '';
    let input = textAreas[1].value;
    for (let i = 0; i < input.length; i++) {
        
        dencodedMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
    }

    textAreas[1].value = dencodedMessage;
   }
}