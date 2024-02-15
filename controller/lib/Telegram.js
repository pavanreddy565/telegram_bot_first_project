const {axiosInstance} =require("./axios")

function Even(n){
    if(!_.isNumber(num)){
        return "not an integer";
    }
   if(n%2===0){
    return "even";
   }return "odd";
}
function isPalindromeNumber(num) {
    // Convert the number to a string
    
    const numString = num.toString();
    
    // Reverse the string
    const reversedString = numString.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return numString === reversedString;
  }
function square(num){
    return num*num;
}
function isPrime(num) {
    // Check if the number is less than 2, as 0 and 1 are not prime
    if (num < 2) {
      return false;
    }
    
    // Loop through numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If the number is divisible by any number from 2 to its square root, it's not prime
      if (num % i === 0) {
        return false;
      }
    }
    
    // If no divisor is found, the number is prime
    return true;
  }
function sendMessage(messageObj,messageText){
    const requestData = {
        chat_id: messageObj.chat.id,
        text: messageText,
    };

    console.log("Sending message request data:", requestData);

    return axiosInstance.get("sendMessage", requestData);
}
var prev='';
function handleMessage(messageObj){
    //console.log("message text : ",messageObj);
    const messageText = messageObj.text || "";
    //console.log("message text : ",messageObj);
    if (messageText.charAt(0)==="/"){
        const command=messageText.substr(1);
        switch(command){
            case "start":
                // we want to send a message to the user
                return sendMessage(messageObj,"Hi! I'm pavan's bot. How can I help get you started? \n available commands:\n 1) /start :- start \n2) /even_or_odd :- to check weather given number is prime number or not\n3) /prime :- to check given number is prime or not \n4) /palindrome :- to check weather given number is palindrome or not\n 5) /square :- to find square of a number \n6) /end :- to end particular operation");
            case "even_or_odd":
                prev='eve';
                return sendMessage(messageObj,"Enter the value");
            case "palindrome":
                prev='pal';
                return sendMessage(messageObj,"Enter the value");
            case "square":
                prev='sqrt';
                return sendMessage(messageObj,"Enter the value");
            case "prime":
                    prev='prime';
                    return sendMessage(messageObj,"Enter the value");
            case "end":
                prev='';
                return sendMessage(messageObj,"Hi! I'm pavan's bot. How can I help get you started? \n available commands:\n 1) /start :- start \n2) /even_or_odd :- to check weather given number is prime number or not\n3) /prime :- to check given number is prime or not \n4) /palindrome :- to check weather given number is palindrome or not\n 5) /square :- to find square of a number \n6) /end :- to end particular operation");
            default:
                return  sendMessage(messageObj,"I don't recognize this command");
        }
    }else{
        if(prev){
            switch(prev){
                case "eve":
                    return sendMessage(messageObj,`${Even(parseInt(messageText))}`);
                case "pal":
                    return sendMessage(messageObj,`${(isPalindromeNumber(parseInt(messageText)))?"Palindrome number" : "not a Palindrome number"}`);
                case "sqrt":
                    return sendMessage(messageObj,`${square(parseInt(messageText))}`);
                    case "prime":
                        return sendMessage(messageObj,`${(isPrime(parseInt(messageText)))?"Prime number" : "not a Prime number"}`);
            }
        }
        return sendMessage(messageObj,messageText);
    }
}
module.exports = {handleMessage};