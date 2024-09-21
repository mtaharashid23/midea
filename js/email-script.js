jQuery.validator.addMethod("checkEmail", function(e, a) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
}, " Email is invalid."), jQuery.validator.addMethod("phoneNumber", function(e, a) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e)
}, "should contain only number."), $(document).on("submit", "form", function(e) {
    if ($(this).hasClass("no-submit")) return e.preventDefault(), !1
});
$(".newsletter").validate({
    rules: {
        name: {
            required: !0
        },
        phone: {
            number: !0,
            required: !0
        },
        email: {
            checkEmail: !0
        }
    },
    submitHandler: function(e) {
        var name = $(e).find("[name='name']").val(),
            email = $(e).find("[name='email']").val(),
            // phone = $(e).find("[name='phone']").val();
            msg = $(e).find("[name='msg']").val();
        return $.ajax({
            type: "POST",
            url: "email.php?action=send",
            data: {
                name: name,
                email: email,
                // phone: phone,
                msg: msg
            },
            success: function(a) {

                if (a == 'success') {
                    $('.newsletter').trigger("reset");
                    $("#signupFormResult").addClass("alert alert-success").html("Thank you! Your message has been successfully sent");
                    $("#signupFormResult").fadeIn();
                    $("#signupFormResult").delay(1500).fadeOut();
                }                
            }
        }), !1
    }
});
$("#pricingForm").validate({
    rules: {
        name: {
            required: !0
        },
        phone: {
            number: !0,
            required: !0
        },
        email: {
            checkEmail: !0
        }
    },
    submitHandler: function(e) {
        var ycompany = $(e).find("[name='ycompany']").val(),
            fname = $(e).find("[name='fname']").val(),
            email = $(e).find("[name='email']").val(),
            phone = $(e).find("[name='phone']").val(),
            locations = $('#locations').find(":selected").text();
            // msg = $(e).find("[name='msg']").val();
        return $.ajax({
            type: "POST",
            url: "email.php?action=price",
            data: {
                fname: fname,
                ycompany: ycompany,
                email: email,
                phone: phone,
                locations:locations
            },
            success: function(a) {

                if (a == 'success') {
                    $('#pricingForm').trigger("reset");
                    $("#signupFormResult12").addClass("alert alert-success").html("Thank you! Your message has been successfully sent");
                    $("#signupFormResult12").fadeIn();
                    $("#signupFormResult12").delay(1500).fadeOut();
                }                
            }
        }), !1
    }
});
$(".requestForm").validate({
    rules: {
        name: {
            required: !0
        },
        phone: {
            number: !0,
            required: !0
        },
        email: {
            checkEmail: !0
        }
    },
    submitHandler: function(e) {
        var cName = $(e).find("[name='cName']").val(),
            bName = $(e).find("[name='bName']").val(),
            email = $(e).find("[name='email']").val(),
            phone = $(e).find("[name='phone']").val(),
            date = $(e).find("[name='date']").val(),
            time = $(e).find("[name='time']").val();
            
            // msg = $(e).find("[name='msg']").val();
        return $.ajax({
            type: "POST",
            url: "email.php?action=request",
            data: {
                cName: cName,
                bName: bName,
                email: email,
                phone: phone,
                date:date,
                time:time
            },
            success: function(a) {
                if (a == 'success') {
                    $('.requestForm').trigger("reset");
                    $("#signupFormResult13").addClass("alert alert-success").html("Thank you! Your message has been successfully sent");
                    $("#signupFormResult13").fadeIn();
                    $("#signupFormResult13").delay(1500).fadeOut();
                }                
            }
        }), !1
    }
});
$(".msgForm").validate({
    rules: {
        name: {
            required: !0
        },
        phone: {
            number: !0,
            required: !0
        },
        email: {
            checkEmail: !0
        }
    },
    submitHandler: function(e) {
        var email = $(e).find("[name='email']").val();
            // msg = $(e).find("[name='msg']").val();
        return $.ajax({
            type: "POST",
            url: "email.php?action=watch",
            data: {
                email: email
            },
            success: function(a) {
                if (a == 'success') {
                    $('.msgForm').trigger("reset");
                    $("#signupFormResult14").addClass("alert alert-success").html("Thank you! Your message has been successfully sent");
                    $("#signupFormResult14").fadeIn();
                    $("#signupFormResult14").delay(1500).fadeOut();
                }                
            }
        }), !1
    }
});