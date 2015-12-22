<?php $title = '13-0297-WC-Will-Rogers-Contact'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page page-contact">
<div class="outer-wrapper">
  <?php include 'tpl/layout/header.inc'; ?>
  <div class="inner-wrapper site-container">
    <div class="content-wrapper">
      <div class="content-top"></div>
      <div class="content-bottom">
        <div class="text-img-wrapper">
          <div class="b-text-img style-d">
            <div class="text">
              <h3>Location</h3>
              <p>4322 N. Western Avenue</p>
              <p>Oklahoma City, Oklahoma 73118</p>
              <p>(405) 604-3015</p>
              <h3>Hours</h3>
              <p>Monday-Friday:	9:00 am – 5:00 pm</p>
              <p>Saturday-Sunday: Closed</p>
            </div>
            <div class="img"><img src="theme/images/tmp/contact-map.jpg" alt=""/></div>
          </div>
        </div>

        <div class="b-cols col-one style-a">

          <div class="col col-c col-1">
            <div class="col-item">

              <h3><span>Contact us</span></h3>

              <div class="col-wrapper">

                <div>
                  <p>All the information requested below is to help provide you with the right package, we understand
                  each event is special and we will sti down with you to discuss the best options we can offer to make
                  your event memorable. Thank You.</p>
                </div>

                <div class="form form-contact">
                  <form action="#" method="post">

                    <div class="field-first-name field-item">
                      <div class="form-item form-type-text">
                        <label>First Name <span class="form-required">*</span></label>
                        <input type="text" class="form-text"/>
                      </div>
                    </div>

                    <div class="field-last-name field-item">
                      <div class="form-item form-type-text">
                        <label>Last Name <span class="form-required">*</span></label>
                        <input type="text" class="form-text required"/>
                      </div>
                    </div>

                    <div class="field-your-email-address field-item">
                      <div class="form-item form-type-email">
                        <label>Your Email Address <span class="form-required">*</span></label>
                        <input type="email" class="form-text required"/>
                      </div>
                    </div>

                    <div class="field-your-phone-number field-item">
                      <div class="form-item form-type-text">
                        <label>Your Phone Number <span class="form-required">*</span></label>
                        <input type="text" class="form-text required"/>
                      </div>
                    </div>

                    <div class="field-type-of-event field-item">
                      <div class="form-item form-type-select">
                        <label>Type of Event:</label>

                        <div class="select">
                          <select class="form-select">
                            <option>Business Meeting or Presentation</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="field-preferred-month field-item">
                      <div class="form-item form-type-select">
                        <label>Preferred Date:</label>

                        <div class="select">
                          <select class="form-select">
                            <option>Month</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="field-preferred-day field-item">
                      <div class="form-item form-type-select">
                        <label>Day</label>

                        <div class="select">
                          <select class="form-select">
                            <option>Day</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="field-preferred-year field-item">
                      <div class="form-item form-type-select">
                        <label>Year</label>

                        <div class="select">
                          <select class="form-select">
                            <option>Year</option>
                          </select>
                        </div>
                      </div>
                    </div>



                    <div class="field-date-flexible field-item">
                      <div class="form-item form-type-radio">
                      <label>Date Flexible?</label>
                        <div class="radio">
                          <label class="option"><input type="radio" class="form-radio"/>Yes</label>
                        </div>
                        <div class="radio">
                          <label class="option"><input type="radio" class="form-radio"/>No</label>
                        </div>
                      </div>
                    </div>






                    <div class="field-birthday-month field-item">
                      <div class="form-item form-type-text">
                        <label>Birthday</label>
                        <input type="text" placeholder="Month" class="form-text"/>
                      </div>
                    </div>

                    <div class="field-birthday-day field-item">
                      <div class="form-item form-type-text">
                        <label>Day</label>
                        <input type="text" placeholder="Day" class="form-text"/>
                      </div>
                    </div>

                    <div class="field-birthday-year field-item">
                      <div class="form-item form-type-text">
                        <label>Year</label>
                        <input type="text" placeholder="Year" class="form-text"/>
                      </div>
                    </div>

                    <!--Birthday left/end-->
                    <div class="field-address field-item">
                      <div class="form-item form-type-text">
                        <label>Address</label>
                        <input type="text" class="form-text"/>
                      </div>
                    </div>

                    <!--city left-->
                    <div class="field-city field-item">
                      <div class="form-item form-type-text">
                        <label>City</label>
                        <input type="text" class="form-text"/>
                      </div>
                    </div>

                    <div class="field-state field-item">
                      <div class="form-item form-type-select">
                        <label>State</label>

                        <div class="select">
                          <select class="form-select">
                            <option>Ok</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="field-zip field-item">
                      <div class="form-item form-type-text">
                        <label>Year</label>
                        <input type="text" class="form-text"/>
                      </div>
                    </div>

                    <!--city/end-->
                    <div class="field-captcha field-item">

                      <div class="captcha-img-container">
                        <a href="#">Generate new captcha</a>
                        <img src="theme/images/tmp/captcha.jpg" alt="">
                      </div>

                      <div class="form-item form-type-text">
                        <label>Enter the characters shown in the image.<span class="form-required">*</span></label>
                        <input type="text" class="form-text required"/>
                      </div>
                    </div>
                    <div class="btn-wrapper">
                      <input class="btn" id="edit-submit" type="submit" name="sub" value="Submit">
                    </div>
                  </form>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
  <?php include 'tpl/layout/footer.inc'; ?>
</div>
</body>
</html>

