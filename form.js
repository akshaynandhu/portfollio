var reg = $("#submit-form");
reg.validate({

  rules: {

    Username: {

      required: true,

      minlength: 4,

    },

    email: {

      required: true,

    },

    subject: {

      required: true,

    },

    message: {

      required: true,

    },

  },

  messages: {

    Username: {

      required: "This field is required.",

    },

  },
  submitHandler: function(form){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbx1rtbtvDtdM3fTZqUd7TF5Js4n2bhf7VnPjACD/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            },
        });
    }
    });