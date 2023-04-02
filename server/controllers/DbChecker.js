var cron = require("node-cron");

console.time("miFuncion");

function checkDb() {

    const arrayApi = [{number:"0981234567"}, {number:"0981234568"}, {number:"0981234569"}]
const ArrayDB = [{number:"0981234567"}, {number:"0981234568"}, {number:"0981234560"}]

    for (let i = 0; i < arrayApi.length; i++) {
  
        let counter = 0
        let number = arrayApi[i]
        
        for (let j = 0; j < ArrayDB.length; j++) {
          if(number.number === ArrayDB[j].number) {
          console.log(`Se esta comparando ${number.number} con ${ArrayDB[j].number}`)
          counter++
          }
        }
        
        if (counter !== 1) {
          EnviarMensaje()
        }
        
      }
}

function EnviarMensaje() {
  console.log("Se envio el mensaje")
}


cron.schedule("*/10 * * * * *", async () => {
    checkDb()
  });
  