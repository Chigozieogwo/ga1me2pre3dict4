import nodemailer from 'nodemailer'

// <ul>
//       <li>Name: ${req.body.name}</li>
//       <li>Company: ${req.body.company}</li>
//       <li>Email: ${req.body.email}</li>
//       <li>Phone: ${req.body.phone}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(to, name) {
  const output = `
  <div style="max-width: 700px; margin:auto; padding:font-size: 110%;">
  <div style="text-align: center;padding: 0.5px 5px;background-color: #2C3E50; ">
  <h1 style="color: #f8b133;font-size:60px ;text-transform: uppercase;">Xcess<span style="color: white;" >Win</span></h1>
  
  
  </div>
  <div style="padding: 10px 10px;  border: 3px solid #ddd;">
   <p>Dear ${name} ,</p> 
  <p>Please try to Renew your Suscription!
  </p>
  <p> Stop missing out on these easy to back ,profitable and well researched tips and become a member today</p>
  <p>login by clicking the button below .......</p>
  <div style="display:flex; justify-content:center;">
  <a href=${to} style="background:  #f8b133; display:block;text-align: center; text-decoration: none; color: white; padding: 20px 80px;border-radius: 2px; margin-bottom:10px; ">Login</a>
  </div>
  

  </div>
 
 

  </div>

  `

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  //  create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: 'mail.google.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: 'janehiggins42@gmail.com', // generated ethereal user
      pass: 'mantex123', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Xcesswin Subscription" <janehiggins42@gmail.com>', // sender address
    to: to, // list of receivers
    subject: 'Please Subscribe ', // Subject line
    // text: 'please renew your subscription', // plain text body
    html: output, // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', to, info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    res.render('contact', { msg: 'Email has been sent' })
  })
}
export async function sendEmailRegister(to, name) {
  const output = `
  <div style="max-width: 700px; margin:auto; padding:font-size: 110%;">
  <div style="text-align: center;padding: 0.5px 5px;background-color: #2C3E50; ">
  <h1 style="color: #f8b133;font-size:60px ;text-transform: uppercase;">Xcess<span style="color: white;" >Win</span></h1>
  
  
  </div>
  <div style="padding: 10px 10px;  border: 3px solid #ddd;">
   <p>Dear ${name} ,</p> 
  <p>Congratulations  and thank you for choosing to join Xcesswin. Woohoo!
  </p>
  <p>I know how much junk is out there so Xcesswin launched to give you a reliable source of tips and an open network of professional tipsters who are all vetted and verified for several months. To give you the best.</p>
  <p>Don't worry, your free tips are free forever and there are no obligations to join one of our tipsters.</p>
  <p>My aim, and the aim of Xcesswin Predictions, is to hopefully help you take some money off the bookies, for once! If you have questions, queries, complaints or concerns then you can reply to any email we send your way.</p>
  <p >This is the Start of Your Journey...</p>
  <p>login by clicking the button below .......</p>
  <div style="display:flex; justify-content:center;">
  <a href=${to} style="background:  #f8b133; display:block;text-align: center; text-decoration: none; color: white; padding: 20px 80px;border-radius: 2px; margin-bottom:10px; ">Login</a>
  </div>
  

  </div>
 
 

  </div>

  `

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  //  create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: 'mail.google.com',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: 'janehiggins42@gmail.com', // generated ethereal user
      pass: 'mantex123', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Xcesswin Registration" <janehiggins42@gmail.com>', // sender address
    to: to, // list of receivers
    subject: 'Welcome to Xcesswin ', // Subject line
    // text: 'please renew your subscription', // plain text body
    html: output, // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', to, info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    res.render('contact', { msg: 'Email has been sent' })
  })
}

export default sendEmail
