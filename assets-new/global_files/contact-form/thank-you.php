<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<title>Contact Form</title>
</head>
<body style=" background-image: url('https://synergynature.com/assets/images/ashley-bg2.png'); background-repeat: no-repeat; background-position-x: right;">
    
    <div class="container" style="background-color: #2C77AE; text-align: center; margin-top: 20%; width: 40%; padding: 50px; border-radius: 30px; color: white; font-size: 30px;">
        <h1>THANK YOU!</h1>
        <?php
            if(isset($_GET['msg'])) echo $_GET['msg']; 
        ?>
        <p style="width: 60%; margin: 20px auto; border-radius: 20px; background-color: orange; color: white;"><a style="text-decoration: none; color: white;" href="https://synergynature.com/">Back to homepage</p>
    </div>
</body>
