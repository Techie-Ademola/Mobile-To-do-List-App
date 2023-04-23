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
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        alert('Invalid email or password');
    }
});