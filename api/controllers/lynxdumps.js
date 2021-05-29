const { exec } = require('child_process');
var nodemailer = require('nodemailer');

exports.dump_url = (req, res, next) => {
  let newsurl = req.body.newsurl;
  let email = req.body.email;
  exec(`lynx -dump ${newsurl}`, (err, stdout, stderr) =>{
    if(err){
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
        if (err) {
          res.status(500).json({
            error: {
              message: err
            }
          });
        } else {
          const message = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: "Requested Lynx Dump",
            text: stdout
          };

          transporter.sendMail(message, function(errror, info){
            if(error){
              res.status(500).json({
                error: {
                  message: error
                }
              });
            } else {
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
