function formValidation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var emailid = document.getElementById("emailid").value;
    var cnum = document.getElementById("contactnumber").value;
    var pass = document.getElementById("pass").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("ddcity").value;
    var s = document.getElementById("male");
    var n = document.getElementById("female");
    var o = document.getElementById("other");

    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    var letters = /^[A-Za-z]*$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    var numbers = /^[6789][0-9]{9}$/;
    var passv = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


    if (fname == "" | lname == "" | emailid == "" | pass == "" | cnum == "" | address == "") {
        alert("enter all details")
        return false;
    }
    else {
        if (fname == "" | fname == null) {
            alert("enter fname")
        } else {
            if (letters.test(fname)) {
            }
            else {
                alert('first name must have alphabet characters only');
                fname.value = '';
                return false;
            }
        }

        if (lname == "" | lname == null) {
            alert("enter lname")
        } else {
            if (letters.test(lname)) {
            }
            else {
                alert('last name must have alphabet characters only');
                lname.value = '';
                return false;
            }

        }

        if (emailid == "" | emailid == null) {
            alert("enter emailid")
        } else {
            if (mailformat.test(emailid)) {
            }
            else {
                alert("You have entered an invalid email address!");
                emailid.value = '';
                return false;
            }
        }

        if (pass == "" | pass == null) {
            alert("enter password")
        } else {
            if (passv.test(pass)) {
            }
            else {
                alert("Password Must Contain Atleast 8 Characters and One Number");
                pass.value == '';
                return false;
            }
        }

        if (cnum == "" | cnum == null) {
            alert("enter contact number")
        } else {

            if (numbers.test(cnum)) {
            }
            else {
                alert('Contact number must have numeric characters only AND 10 CHARACTERS ONLY');
                cnum.value = '';
                return false;
            }
        }

        if (address == "" | address == null) {
            alert("enter address")
        } else {
        }


        if (city.value == "") {
            alert("Select City From Dropdown List");
            return false;
        }
        else {
        }

        if (!s.checked && !n.checked && !o.checked) {
            alert("select your gender");
            return false;
        }
        else {
        }

        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            return false;
        } else {
        }

    }
}
