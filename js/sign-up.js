const fullName = document.getElementById("fullname_");
const email = document.getElementById("email_");
const password = document.getElementById("password_")
const conf_password = document.getElementById("conf_password");
const form = document.querySelector('.signupform');

form.addEventListener("submit", (e) => {
    e.preventDefault();

     const userinput = {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        conf_password: password.value,
        uniqueId: Math.round(Math.random() * 1000)
    
    }
   
    const users = [];
    const records = JSON.parse(localStorage.getItem('users')); 
    console.log(records)
    let duplicateStatus = false;
    if (records == null) {
        users.push(userinput)
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html';

    } else {
        for (var i = 0; i < records.length; i++){
            if (records[i].email == userinput.email) {
                duplicateStatus = true
            }
        }
        if (duplicateStatus == true) {
            alert("Oops!, User with this email already exists!")
            fullName.value = "";
            email.value = "";
            password.value = "";
            conf_password.value = "";
            return;
        } else {
            records.push(userinput)
            localStorage.setItem('users', JSON.stringify(records))
        }
        
    }

    window.location.href = 'login.html';
    // alert('success').then(() => {
    //     window.location.href = 'dashboard.html';
    // })

    fullName.value = "";
    email.value = "";
    password.value = "";
    conf_password.value = "";
    uniqueId.value = "";
    
})

function display() {
    let show1 = document.querySelector('.show1')
    let hide1 = document.querySelector('.hide1')
    if (password.type === "password") {
        password.type = "text";
        show1.style.display = 'none';
        hide1.style.display = 'block';

    } else {
        password.type = "password";
        show1.style.display = 'block';
        hide1.style.display = 'none';
    }
}

function display2() {
    let show2 = document.querySelector('.show2')
    let hide2 = document.querySelector('.hide2')
    if (conf_password.type === "password") {
        conf_password.type = "text";
        show2.style.display = 'none';
        hide2.style.display = 'block';

    } else {
        conf_password.type = "password";
        show2.style.display = 'block';
        hide2.style.display = 'none';
    }
}