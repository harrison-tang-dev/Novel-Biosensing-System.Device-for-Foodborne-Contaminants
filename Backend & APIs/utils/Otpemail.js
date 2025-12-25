export const emailOTP=({otp,name})=>{
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Forgot Password OTP</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Courgette&family=Inter:wght@500&family=Lato:wght@300;400;700;900&family=Montserrat:wght@200;300;400;600;700;800&family=Poppins:wght@200;300;400;500&family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Courgette&family=Inter:wght@500&family=Lato:wght@300;400;700;900&family=Montserrat:wght@200;300;400;600;700;800&family=Poppins:wght@200;300;400;500&family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </head>
  
    <body>
      <div
        style="
          background: #f5f5f5;
          width: 640px;
          height: 750px;
          /* position: relative; */
          text-align: center;
          margin: auto;
        "
      >
        <div
          style="
            background: #36f;
            /* overflow: hidden; */
            height: 22%;
            padding-top: 20px;
          "
        >
        <!-- <img src="http://34.228.40.243/assets/Image/logo.svg" alt="logo" /> -->
      
          <div>
            <div
              style="
                width: 75%;
                margin: auto;
                background: #fff;
                transition: 0.3s;
                box-shadow: 0 6px 0px 0 #36f;
                padding: 20px;
              "
            >
              <h6
                style="
                  color: #000;
                  font-family: 'Inter';
                  font-size: 14px;
                  letter-spacing: 0.2px;
                  text-align: justify;
                "
              >
                Dear ${name},
              </h6>
              <p
                style="
                  color: #000;
                  font-family: 'Inter';
                  font-size: 15px;
                  font-weight: 300;
                  letter-spacing: 0.2px;
                  text-align: justify;
                "
              >
                A password reset request for your xyz account has been received.
                To complete the password reset process, please use the following
                OTP (One-Time Password):
              </p>
  
              <h6
                style="
                  color: #000;
                  font-family: 'Inter';
                  font-size: 14px;
                  letter-spacing: 0.2px;
                  text-align: justify;
                "
              >
                Your OTP:
                <button
                  style="
                    border-radius: 4px;
                    border: 2px solid #36f;
                    background: #36f;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 10px 20px;
                  "
                >
                  <span style="color: #fff; font-family: 'Inter'; font-size: 20px"
                    >${otp}</span
                  >
                </button>
              </h6>
              <p
                style="
                  color: #000;
                  font-family: 'Inter';
                  font-size: 15px;
                  font-weight: 300;
                  letter-spacing: 0.2px;
                  text-align: justify;
                "
              >
                This OTP is valid for the next 5 minutes. If you did not initiate
                this password reset, please ignore this email.
              </p>
              <p
                style="
                  color: #000;
                  font-family: 'Inter';
                  font-size: 15px;
                  font-weight: 300;
                  letter-spacing: 0.2px;
                  text-align: justify;
                "
              >
                To proceed with the password reset, click here to visit the
                password reset page and enter the provided OTP.
              </p>
              <p
                style="
                  color: #000;
                  font-family: Inter;
                  font-size: 15px;
                  font-weight: 300;
                  letter-spacing: 0.2px;
                  text-align: justify;
                "
              >
                Thank you for choosing xyz. Should you have any concerns or if you
                did not request this password reset, please promptly contact our
                support team at
                <span
                  style="
                    color: #36f;
  
                    font-size: 16px;
  
                    font-weight: 600;
  
                    text-decoration-line: underline;
                  "
                  >support@xyz.com</span
                >
              </p>
              <p
                style="
                  color: #000;
                  font-family: 'Inter';
                  font-size: 15px;
                  font-weight: 400;
                  letter-spacing: 0.2px;
                  text-align: justify;
                  margin-bottom: 36px;
                "
              >
                Best regards,
                <br />
                The xyz Team
              </p>
            </div>
  
            <div style="margin-top: 30px">
              <div
                style="
                  display: inline-flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 12px;
                "
              >
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                  "
                >
                  <img src="./assets/XFrame.png" alt="" />
                  <img src="./assets/Facebook.png" alt="" />
                  <img src="./assets/Frame.png" alt="" />
                </div>
                <div
                  style="background: #f5f5f5; margin: auto; text-align: center"
                >
                  <span
                    style="
                      color: #686868;
                      text-align: center;
                      font-family: 'Poppins';
                      font-size: 14px;
                      font-weight: 400;
                      letter-spacing: 0.026px;
                    "
                    >Copyright © 2023 XYZ LLC</span
                  >
                  <br />
                  <span
                    style="
                      color: #686868;
                      text-align: center;
                      font-family: 'Poppins';
                      font-size: 14px;
                      font-weight: 400;
                      letter-spacing: 0.026px;
                    "
                  >
                    Always Be In Control Of Your Data.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`
  
} 