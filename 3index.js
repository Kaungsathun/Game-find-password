var password = "LeveL";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong Password, Try again');
        return false;
        }
            if(document.getElementById('pass1').value == password) {
                alert('Correct Password. Click Ok to enter Leve 5 ');
        }
    }
