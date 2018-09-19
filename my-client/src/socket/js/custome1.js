    $.validator.setDefaults( {
      submitHandler: function () {
        alert( "submitted!" );
      }
    } );

    $( document ).ready( function () { 
    
    // for referral starts
   var pageURL = $(location).attr("href");
   
   window.localStorage.setItem('url',pageURL);

   var res = pageURL.split("?referral=");

   if(res[1]){
    
    $('#inputReferral').val(res[1]);
   }
    // for referral ends

      $( "#signupForm" ).validate( {
        rules: {
          name: "required",
          country_code: "required",
          name: {
            required: true,
            minlength: 4
          },
          email: {
            required: true,
            email: true
          },
          mobile_number: {
            required: true,
            minlength: 7,
            digits: true
          },
          password: {
            required: true,
            minlength: 5
          },
          confirm_password: {
            required: true,
            minlength: 5,
            equalTo: "#inputPassword"
          }
        },
        messages: {
          name: "Please enter your name",
          country_code: "Select your country",
          mobile_number: {
            required: "Please enter mobile number",
            minlength: "Please enter valid mobile number"
          },
          password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 6 characters long"
          },
          confirm_password: {
            required: "Please reenter a password",
            minlength: "Your password must be at least 6 characters long",
            equalTo: "Please enter the same password as above"
          },
          email: "Please enter a valid email address"
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
          // Add the `help-block` class to the error element
          error.addClass( "help-block" );

            error.insertAfter( element );
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
        },
        submitHandler: function(form) {

        
        $.ajax({
            url: "https://www.tradedesk.zecoex.com/currency_api/?access_key=Zx2ar0as1ad8ss05ps31&action=signup", 
            type: "POST",             
            data: $(form).serialize(),      
            success: function(data) {
              var returnedData = JSON.parse(data);
              
              if(returnedData.status=='false')
              {
                $('p.error').html(returnedData.message);
              }else if(returnedData.status=='true')
              {
                var userID= returnedData.data['username'];
                window.location.href = "https://www.zecoex.com/mobile-otp.html?q="+userID;
              }
            }
        });
        return false;
      }
    }); 


    /// mobile otp validation code
   var pageURL = $(location).attr("href");
   
   window.localStorage.setItem('url',pageURL);

   var res1 = pageURL.split("?q=");
   console.log( res1);
   if(res1[1]){
    
    $('.username').val(res1[1]);
   }
    // for username ends
$("input[name=mobile_otp]").focus();

$("#mobileotpForm").validate( {
        rules: {          
          mobile_otp: {
            required: true,
            minlength: 6,
            digits: true
          }
        },
        messages: {
         mobile_otp: {
            required: "Please enter Mobile OTP",
            minlength: "Your OTP must 6 digit"
          }
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
          // Add the `help-block` class to the error element
          error.addClass( "help-block" );

            error.insertAfter( element );
        },
        highlight: function ( element, errorClass, validClass ) {
          $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
          $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
        },
        submitHandler: function(form) {
        $.ajax({
            url: "https://www.tradedesk.zecoex.com/currency_api/?access_key=Zx2ar0as1ad8ss05ps31&action=mobile_verify", 
            type: "POST",             
            data: $(form).serialize(),
            cache: false,             
            processData: false,      
            success: function(data) {
              var returnedData = JSON.parse(data);
              
              if(returnedData.status=='false')
              {
                $('p.error').html('Error occured.Please try again.');
              }else if(returnedData.status=='true'){
                window.location.href = "https://www.zecoex.com/success.html";
              }
            }
        });
        return false;
      }
    });
});
     