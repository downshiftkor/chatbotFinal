const { Client, Intents} = require('discord.js')
const client = new Client({intents:32767})

client.once('ready',()=>{
    console.log("online")
})

client.on('messageCreate', (message) => {
    if (message.content.startsWith('!경매 ') || message.content == '!경매') {
      const arguments = message.content.split(/[ ]+/)
      arguments.shift()
  
      if (!arguments[0]) {
        return message.reply('값을 입력해주세요.')
      }
  
      if (arguments[0] % 1 !== 0 || arguments[0] < 1) {
        return message.reply('요청을 처리할 수 없습니다.')
      }
  
      message.reply(`4인 기준 ${arguments[0] * 0.65}원 까지`)
      message.reply(`8인 기준 ${arguments[0] * 0.75}원 까지`)
    }

    if(message.content == "인파이터" ){
        message.reply("상향필수")
    }
    ( Math.random () * (1 - 0) ) + 0
    if(message.content == "!10멸도박" ){
        var random = Math.floor(Math.random() * 10) + 1;
            if(random>5){
                message.reply("10레벨 멸화의 보석")
            }
            if(random<5){
                message.reply("10레벨 홍염의 보석")
            }        
    }    
    if(message.content == "!자살" ){
       message.reply("https://idfarm.co.kr/")
    }
    
    if (message.content.startsWith('!로아와 ') || message.content == '!로아와') {
      const arguments = message.content.split(/[ ]+/)
      arguments.shift()

      message.reply(`https://loawa.com/char/${arguments[0]}`)
    }
    
    
    
  })

client.login("OTI1NjY3OTM3MTA3NDc2NTIw.Ycwdcg.938jzoPCZKXSzRT1IBxM5RQ29k0")
