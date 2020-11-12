const mailjet = require('node-mailjet').connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
)

// exports.handler = async (event) => {
exports.handler = async function (event, context) {
  console.log('I"m running')
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  }
}

// Only allow POST
// if (event.httpMethod !== 'POST') {
//   return { statusCode: 405, body: 'Method Not Allowed' }
// }

// try {
//   const data = JSON.parse(event.body)
//   const request = mailjet.post('send', { version: 'v3.1' }).request({
//     Messages: [
//       {
//         From: {
//           Email: 'obradovicnikola009@gmail.com',
//           Name: 'Nikola',
//         },
//         To: [
//           {
//             Email: 'obradovicnikola009@gmail.com',
//             Name: 'Nikola',
//           },
//         ],
//         Subject: `${data.name} - ${data.email}`,
//         TextPart: 'From obradovicnikola.com',
//         HTMLPart: `<p>${data.message}</p><br /><p>${data.email}</p>`,
//         CustomID: 'AppGettingStartedTest',
//       },
//     ],
//   })
//   request()
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })
//   return {
//     statusCode: 200,
//     body: 'Email sent!',
//   }
// } catch (err) {
//   return {
//     statusCode: 500,
//     body: err.message || err,
//   }
// }
// }
