const { exec } = require('child_process');
var nodemailer = require('nodemailer');

exports.dump_url = (req, res, next) => {
  let newsurl = req.body.newsurl;
  console.log(newsurl);
  let email = req.body.email;
  console.log(typeof email);
  console.log(email);
  exec(`lynx -dump ${newsurl}`, (err, stdout, stderr) =>{
    if(err){
      console.log(err);
      res.status(500).json({
        error: {
          message: err
        }
      });
    } else {
      console.log("Starting project");
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });
      transporter.verify(function(error, success) {
        console.log("Verifying Project");
        if (err) {
          console.log("Verification Error");
          res.status(500).json({
            error: {
              message: err
            }
          });
        } else {
          console.log("Verification Complete");
          console.log(typeof stdout);
          const message = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: "Requested Lynx Dump",
            text: stdout
          };

          transporter.sendMail(message, function(errror, info){
            console.log("Sending Email");
            if(error){
              console.log("Sending Email error");
              res.status(500).json({
                error: {
                  message: error
                }
              });
            } else {
              console.log("Email Sent");
              res.status(200).json({
                message: "Message Sent",
                content: message
              });
            };
          });
        };
      });
    };
  });
};
