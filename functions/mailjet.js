const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
)

exports.handler = async function (event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const data = JSON.parse(event.body)
  const sendEmail = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'obradovicnikola009@gmail.com',
          Name: 'Nikola',
        },
        To: [
          {
            Email: 'obradovicnikola009@gmail.com',
            Name: 'Nikola',
          },
        ],
        Subject: `${data.name} - ${data.email}`,
        TextPart: 'From obradovicnikola.com',
        HTMLPart: `<p>${data.message}</p><br /><p>${data.email}</p>`,
        CustomID: 'AppGettingStartedTest',
      },
    ],
  })

  try {
    sendEmail
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
        throw err
      })

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'ok' }),
    }
  } catch (err) {
    if (err.statusCode)
      return { statusCode: err.statusCode, body: err.toString() }
    else return { statusCode: 500, body: err.toString() }
  }
}
