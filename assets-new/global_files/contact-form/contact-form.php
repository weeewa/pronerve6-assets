
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<title>Contact Form</title>
</head>
<body>
<div class="text-center">
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalContactForm">
        Contact
      </button>
</div>
<div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="exampleModalLabel">Contact Us</h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <h5>
                For Order Support, please contact HERE. <br><a href="https://synergynature.com/global_files/contact_us.html#">Order Lookup - BuyGoods</a><br>
                For product support contact us using the contact form below.<br><br>
            </h5>
            <!--Form-->
            <form name="contact-form" action="validate-captcha.php" method="post" id="contact-form">
                <div class="form-group">
                    <label for="Name">First Name</label>
                    <input type="text" class="form-control" name="first_name" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="Name">Last Name</label>
                    <input type="text" class="form-control" name="last_name" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" name="email" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="Phone">Phone</label>
                    <input type="number" class="form-control" name="phone" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="shipping">Shipping Address</label>
                    <input type="text" class="form-control" name="shipping_address" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" class="form-control" name="state" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="zip_code">Zip Code</label>
                    <input type="number" class="form-control" name="zip_code" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="order_number">Order Number</label>
                    <input type="number" class="form-control" name="order_number" placeholder="" required>
                </div>
                <div class="form-group">
                    <label for="items">Items</label>
                    <textarea name="items" class="form-control" rows="3" cols="28" rows="5" placeholder="" required></textarea> 
                </div>
                <div class="form-group">
                    <label for="qty_items">Quantity of Items</label>
                    <input type="number" class="form-control" name="qty_items" placeholder="" required>
                </div>
                <div class="g-recaptcha" data-sitekey="6Lc7g0gfAAAAAHnGXCrUH83OHS9poiyTNDfG-Ckj"></div><br>
                <button type="submit" class="btn btn-primary" name="submit" value="Submit" id="submit_form">Submit</button>
            </form>
            
      </div>

    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> 

</body>
</html>