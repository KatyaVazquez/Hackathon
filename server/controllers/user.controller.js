const accountSid = "ACbdd10afcee77082c5d7e866f5a0732c4";
const authToken = "2c4ab05b5c4e7de1499d71b91a5885d1";
const client = require('twilio')(accountSid, authToken);

  const postNumber = async (number, mensaje) => {
    const message = "Esto es una prueba de la funcionalidad de notificacion por medio de SMS"
    try {
      const mensaje = await client.messages.create({
        body: `${message}`,
        from: "+15855132578",
        to: `${number}`,
  
      });
      console.log('Mensaje enviado con SID:', mensaje.sid);
      console.log(message);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
    }
  };
  
  module.exports = { postNumber };
  