const {handleMessage} =require("./lib/Telegram");

async function handler(req,method){
    const {body} = req;
    if(body){
        var messageObj;
        if(body.hasOwnProperty('edited_message')){
            
            messageObj =body.edited_message;
            console.log("value= "+messageObj);
        }else{
           messageObj=body.message;
        }
        
        console.log(messageObj.chat.first_name+" "+messageObj.chat.first_name+" entered the following message: "+messageObj);
        await handleMessage(messageObj);
    }return;

}
module.exports={handler}