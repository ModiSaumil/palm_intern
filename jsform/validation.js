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
    var gt = document.getElementById("giturl").value;

    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    var letters = /^[A-Za-z]*$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    var numbers = /^[6789][0-9]{9}$/;
    var passv = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    var fErr = lErr = eErr = pErr = cErr = aErr = ctErr = hbErr = gdErr = ppErr = lkErr = true;

    if (fname == "" | lname == "" | emailid == "" | pass == "" | cnum == "" | address == "") {
        alert("enter all details")
        return false;
    }
    else {

        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }

        if (fname == "" | fname == null) {
            printError("fErr", "Please enter your first name");
        } else {
            if (letters.test(fname)) {
            }
            else {
                printError("fErr", "first name must have alphabet characters only");
                fname.value = '';
                return false;
            }
        }

        if (lname == "" | lname == null) {
            printError("lErr", "Please enter your last name");
        } else {
            if (letters.test(lname)) {
            }
            else {
                printError("lErr", "last name must have alphabet characters only");
                lname.value = '';
                return false;
            }

        }

        if (emailid == "" | emailid == null) {
            printError("eErr", "Please enter emailid");
        } else {
            if (mailformat.test(emailid)) {
            }
            else {
                printError("eErr", "You have entered an invalid email address!");
                emailid.value = '';
                return false;
            }
        }

        if (pass == "" | pass == null) {
            printError("pErr", "Please enter password");
        } else {
            if (passv.test(pass)) {
            }
            else {
                printError("pErr", "Password Must Contain Atleast 8 Characters and One Number");
                pass.value == '';
                return false;
            }
        }

        if (cnum == "" | cnum == null) {
            printError("cErr", "Please enter contact number");
        } else {

            if (numbers.test(cnum)) {
            }
            else {
                printError("cErr", "Contact number must have numeric characters only AND 10 CHARACTERS ONLY");
                cnum.value = '';
                return false;
            }
        }

        if (address == "" | address == null) {
            printError("aErr", "Please enter address");
        } else {
        }


        if (city.value == "") {
            printError("ctErr", "Please select city from dropdown");
            return false;
        }
        else {
        }

        if (!s.checked && !n.checked && !o.checked) {
            printError("gdErr", "Please select your gender");
            return false;
        }
        else {
        }

        if (!allowedExtensions.exec(filePath)) {
            printError("ppErr", "Please select proper file type");
            fileInput.value = '';
            return false;
        } else {
        }

        if (gt == "" | gt == null) {
            printError("lkErr", "Please enter url");
        } else {
        }

    }
}