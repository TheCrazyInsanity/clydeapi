const axios = require("axios")

function getLastMessage(token, channelid){
    let promise = new Promise(function(resolve, reject) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=1`,
      headers: { 
        'X-Discord-Timezone': ' America/New_York', 
        'X-Discord-Locale': ' en-US', 
        'sec-ch-ua-platform': ' "Windows"', 
        'Accept': ' */*', 
        'Origin': ' https://discord.com', 
        'Sec-Fetch-Site': ' same-origin', 
        'Sec-Fetch-Mode': ' cors', 
        'Sec-Fetch-Dest': ' empty', 
        'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9013 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36', 
        'Host': 'discord.com', 
        'Authorization': token
      }
    };
    
    axios.request(config)
    .then((response) => {
      //console.log(JSON.stringify(response.data));
      response = response.data[0]
      if(response.author.username == "clyde"){
        console.log("pass")
        clyder = JSON.stringify(response.content)
        clyder = clyder.substr(1, clyder.length - 1)
        clyder = clyder.substr(0, clyder.length - 1)
        //console.log(clyder)
        //return clyder
        resolve(clyder)
    }else{
        //console.log("fail")
        reject("not clyde")
    }
    })
    .catch((error) => {
      console.log(error);
      reject("error " + error)
    });
    })
    return promise
}

function sendMessage(message, token, channelid){
    let promise = new Promise(function(resolve, reject) {
    random = Math.floor(Math.random() * 1519787823201779712);
    let data = JSON.stringify({
        "content": message,
        "nonce": random,
        "tts": false, //i want to set this to true so badly
        "flags": 0
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://discord.com/api/v9/channels/${channelid}/messages?limit=1`,
        headers: { 
          'X-Discord-Timezone': ' America/New_York', 
          'X-Discord-Locale': ' en-US', 
          'sec-ch-ua-platform': ' "Windows"', 
          'Accept': ' */*', 
          'Origin': ' https://discord.com', 
          'Sec-Fetch-Site': ' same-origin', 
          'Sec-Fetch-Mode': ' cors', 
          'Sec-Fetch-Dest': ' empty', 
          'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9013 Chrome/108.0.5359.215 Electron/22.3.2 Safari/537.36', 
          'Host': 'discord.com', 
          'Content-Type': 'application/json', 
          'Authorization': token
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        //return "success"
        resolve("success")
      })
      .catch((error) => {
        //console.log(error);
        //return "error"
        reject("error " + error)
      });
    })
    return promise
}

function askClyde(prompt, token, channelid){
    let promise = new Promise(function(resolve, reject) {
        sendMessage(prompt, token, channelid).then((response) =>{
            console.log("sent message")
            function dotheshit(){
                getLastMessage(token, channelid).then((response) => {
                    resolve(response)
                }).catch((error) => {
                    if(error == "not clyde"){
                        console.log("idk what to log here")
                        setTimeout(dotheshit, 2000)
                    }
                })
            }
            setTimeout(dotheshit, 2000)
        })
    })
    return promise //🤓
}

exports.askClyde = askClyde