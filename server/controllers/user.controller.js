const accountSid = "ACbdd10afcee77082c5d7e866f5a0732c4";
const authToken = "f939dacfd4c32c8fd25ae904ada02255";
const client = require('twilio')(accountSid, authToken);

  const postAuthor = async (req, res) => {
    const { number } = req.body;
    console.log(number)
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
  
  module.exports = { postAuthor };
  