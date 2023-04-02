var cron = require("node-cron");
const accountSid = "ACbdd10afcee77082c5d7e866f5a0732c4";
const authToken = "2c4ab05b5c4e7de1499d71b91a5885d1";
const client = require('twilio')(accountSid, authToken);

let arrayApi = ["1","2"]
const numeros = ["+595985173544"]

console.time("miFuncion");
const getData = () => {
  fetch('http://161.35.232.68:3000/api/', {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      query: `
        query {
           participatoryProcesses{
            id
            slug
            title{
              translations{
                text
              }
              }
          }
        }
      `
    })     
  }).then((res) => {
      return res.json();
    })
    .then((res) => {
      // console.log(JSON.stringify(res.data));
      // const datos = res.data.participatoryProcesses.map(algo => {
      //   arrayApi.push(algo.title.translations[0].text)
      // })
      const nuevos =  res.data.participatoryProcesses.filter(val => !arrayApi.some(old => old ===val.id));
      nuevos.forEach(element => {
        numeros.forEach(num => {
          EnviarMensaje(num, `Apoya el siguiente Proceso Participativo ${element.title.translations[0].text} para poder ir a ver la propuesta podes dirigirte al siguiente link http://161.35.232.68:3000/processes/${element.slug}`)
        })
      });
      arrayApi = [...arrayApi, ...nuevos.map(n => n.id)]
      console.log(arrayApi);
    });
}

getData()
function checkDb() {
  getData()
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
          EnviarMensaje("+595985173544", "Hola prueba")
        }
        
      }
}


const EnviarMensaje = async (numero, mesage )=> {
  try {
    const mensaje = await client.messages.create({
      body: `${mesage}`,
      from: "+15855132578",
      to: `${numero}`,
    });
    console.log('Mensaje enviado con SID:', mensaje.sid);
    console.log(mesage);
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
  }
  console.log("Se envio el mensaje")
}


cron.schedule("*/10 * * * * *", async () => {
    checkDb()
  });
  