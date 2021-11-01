const AWS = require('aws-sdk');
const SES = new AWS.SES();

exports.handler = async event => {
    const nombre = event.pathParameters.name;
    const subject = "prueba";

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `Hola ${nombre} !`,
          input: event

        }
      )
    }
};