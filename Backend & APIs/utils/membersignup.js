export const memberregister = ({ password, name }) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to XYZ</title>
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
            height: auto;
            text-align: center;
            margin: auto;
          "
        >
          <div
            style="
              background: #36f;
              height: 20%;
              padding-top: 20px;
            "
          >
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
                  Welcome to XYZ! A new account has been created for you. Below are your account details:
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
                  Your Password:
                  <button
                    style="
                      border-radius: 4px;
                      border: 2px solid #36f;
                      background: #36f;
                      font-size: 14px;
                      font-weight: 500;
                      padding: 10px 20px;
                      margin-top: 10px;
                    "
                  >
                    <span style="color: #fff; font-family: 'Inter'; font-size: 20px"
                      >${password}</span
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
                  Please use this password to log in to your account for the first time. We recommend that you change your password immediately after logging in for security reasons.
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
                  If you did not expect this email, please contact our support team at
                  <span
                    style="
                      color: #36f;
                      font-size: 16px;
                      font-weight: 600;
                      text-decoration-line: underline;
                    "
                    >support@xyz.com</span
                  >.
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
                  The XYZ Team
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
    </html>`;
  };
  