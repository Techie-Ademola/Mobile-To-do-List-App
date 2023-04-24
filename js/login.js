setInterval(() => {
    let clock = document.getElementById('clock');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    clock.innerHTML = h + ":" + m + ` <span id="ampm">${am}</span>`;
    ampm.innerHTML = am;
});

function display() {
    let password = document.getElementById("password_")
    let show = document.querySelector('.show')
    let hide = document.querySelector('.hide')
    if (password.type === "password") {
        password.type = "text";
        show.style.display = 'none';
        hide.style.display = 'block';

    } else {
        password.type = "password";
        show.style.display = 'block';
        hide.style.display = 'none';
    }
};


const form = document.querySelector('.signupform');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const emailInput = document.querySelector('#email_');
    const passwordInput = document.querySelector('#password_');
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const records = JSON.parse(localStorage.getItem('users'));
    const user = records.find(record => record.email === email && record.password === password);

    if (user) {
        localStorage.setItem('fullName', user.fullName);
        Toastify({
            text: "Login Successful! You made it!",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#52AB6E",
            },
            onClick: function(){} // Callback after click
        }).showToast();

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        Toastify({
            text: "Invalid email or password!",
            duration: 3000,
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#de3f53",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    }
});