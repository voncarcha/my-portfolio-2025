export default function contactFormEmailToCompany(data: any) {
  return `
  <!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for contacting us!</title>
  <style type="text/css">
      body {
          margin: 0;
          background-color: #eceff1;
          font-family: sans-serif;
      }

      table {
          border-spacing: 0;
      }

      td {
          padding: 0;
      }

      img {
          border: 0;
      }

      .wrapper {
          width: 100%;
          table-layout: fixed;
          background-color: #eceff1;
          padding-bottom: 60px;
      }

      .main {
          background-color: #ffffff;
          margin: 0px auto;
          width: 600px;
          border-spacing: 0;
          color: #000000;
          border-radius: 10px;
          border-color: #ebebeb;
          border-width: 1px;
          border-style: solid;
          padding: 10px 30px;
          line-height: 20px;
      }

      .button {
          background-color: #000000;
          color: #ffffff;
          text-decoration: none;
          padding: 12px 20px;
          font-weight: bold;
          border-radius: 5px;
      }

      .logo {
          width: 600px;
          margin: 0px auto;
      }

      .link {
          color: #535353;
          text-decoration-color: #535353;
      }

      .footer {
          margin-top: 20px auto;
          width: 600px;
      }

      .content {
          line-height: 25px;
      }
  </style>
</head>

<body>
  <center class="wrapper">
    <table class="main" width="100%">
        <tr>
            <td style="text-align: start">
                <p style="font-size: 30px"><strong>Contact Form Message</strong></p>
            </td>
        </tr>
        <tr>
            <td>
                <table>
                    <tr>
                        <th style="text-align: start;">Name: </th>
                        <td>${data.name}</td>
                    </tr>
                    <tr>
                        <th style="text-align: start;">Email: </th>
                        <td>${data.email}</td>
                    </tr>
                    <tr>
                        <th style="text-align: start;">Message: </th>
                        <td>${data.message}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
  </center>
</body>

</html>
  `;
}
