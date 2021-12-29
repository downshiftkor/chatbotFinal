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
  })

client.login("OTI1NjY3OTM3MTA3NDc2NTIw.Ycwdcg.FDTZ9aZpgz85yCtz1g49C4RaBp8")