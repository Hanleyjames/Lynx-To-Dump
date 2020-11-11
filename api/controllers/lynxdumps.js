const { exec } = require('child_process');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

exports.dump_url = (req, res, next) => {
  let newsurl = req.body.newsurl;
  console.log(newsurl);
  let email = req.body.email;
  exec(`lynx -dump ${newsurl}`, (err, stdout, stderr) =>{
    if(err){
      console.log(err);
      res.status(500).json({
        error: {
          message: err
        }
      });
    } else {
      const msg = {
        to: email,
        from: 'hanley.doth@outlook.com',
        subject: 'Requested Site Dump',
        text: stdout
      };
      sgMail
        .send(msg)
        .then(()=> {
          console.log('Email sent');
          res.status(200).json({
            message: 'Message Sent'
          })
        })
        .catch((error) => {
          res.status(500).json({error
          })
        })
    }
  });
};
