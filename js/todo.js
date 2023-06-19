// Dashboard Analog Clock

let now = new Date();
let hour = now.getHours();
let greeting;

if (hour >= 0 && hour < 12) {
    greeting = "Good Morning 👋";
} else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon 👋";
} else {
    greeting = "Good Evening 👋";
}
document.getElementById('greeting').innerHTML = greeting;
console.log(greeting);

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();


// Dashboard To-do List J.Script

const tdlNew = document.querySelector('.tdl-new');
const tdlContent = document.querySelector('.tdl-content ul');
let tdlItems = JSON.parse(localStorage.getItem('tdlItems')) || [];

function createTodoItem() {
    const v = tdlNew.value;
    const s = v.replace(/ +?/g, '');
    if (s === '' || tdlItems.includes(v)) {
        if (s === '') {
            Toastify({
                text: "C-mon! To-do input cannot be empty",
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#de3f53",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        } else {
            Toastify({
                text: "Uhh Ohh! Duplicate to-do item detected",
                duration: 3000,
                newWindow: true,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#de3f53",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        }
        return false;
    } else {
        const newLi = document.createElement('li');
        const newLabel = document.createElement('label');
        const newCheckbox = document.createElement('input');
        const newI = document.createElement('i');
        const newSpan = document.createElement('span');
        const newA = document.createElement('a');
        newCheckbox.setAttribute('type', 'checkbox');
        newA.setAttribute('href', '#');
        newA.textContent = '–';
        newSpan.textContent = v;
        newLabel.appendChild(newCheckbox);
        newLabel.appendChild(newI);
        newLabel.appendChild(newSpan);
        newLabel.appendChild(newA);
        newLi.appendChild(newLabel);
        tdlContent.appendChild(newLi);
        tdlItems.push(v);
        tdlNew.value = '';
        localStorage.setItem('tdlItems', JSON.stringify(tdlItems));
    }
}

tdlNew.addEventListener('keypress', function (e) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
        createTodoItem();
    }
});

const tdlAddBtn = document.querySelector('.tdl-add-btn');
tdlAddBtn.addEventListener('click', function () {
    createTodoItem();
});

const tdlLinks = document.querySelectorAll('.tdl-content a');

for (let i = 0; i < tdlLinks.length; i++) {
    tdlLinks[i].addEventListener('click', function () {
        const li = this.parentElement.parentElement;
        const span = li.querySelector('span');
        const value = span.textContent;
        const index = tdlItems.indexOf(value);
        if (index !== -1) {
            tdlItems.splice(index, 1);
        }
        li.classList.add('remove');
        setTimeout(function () {
            li.remove();
        }, 100);

        localStorage.setItem('tdlItems', JSON.stringify(tdlItems));
    });
}

tdlContent.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const li = e.target.parentElement.parentElement;
        const span = li.querySelector('span');
        const value = span.textContent;
        const index = tdlItems.indexOf(value);
        if (index !== -1) {
            tdlItems.splice(index, 1);
        }
        li.classList.add('remove');
        setTimeout(function () {
            li.remove();
        }, 100);

        localStorage.setItem('tdlItems', JSON.stringify(tdlItems));
    }
});

for (let i = 0; i < tdlItems.length; i++) {
    const newLi = document.createElement('li');
    const newLabel = document.createElement('label');
    const newCheckbox = document.createElement('input');
    const newI = document.createElement('i');
    const newSpan = document.createElement('span');
    const newA = document.createElement('a');
    newCheckbox.setAttribute('type', 'checkbox');
    newA.setAttribute('href', '#');
    newA.textContent = '–';
    newSpan.textContent = tdlItems[i];
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newI);
    newLabel.appendChild(newSpan);
    newLabel.appendChild(newA);
    newLi.appendChild(newLabel);
    tdlContent.appendChild(newLi);
}


// Dashboard User Name Retriever

const fullName = localStorage.getItem('fullName');
console.log(fullName);

if (fullName) {
    const userName = document.createElement('span');
    userName.textContent = `Welcome, ${fullName}`;
    document.getElementById('user_name').appendChild(userName);
} else {
    console.log('Full name not found in localStorage.');
};


// Dashboard Digital Clock

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


// Dashboard Logout Button

const modal = document.querySelector("#modal");
function conflogout() {
    // window.location.href = "login.html";
    modal.style.transform = "scale(1)";
}

// function logout() {
//     Toastify({
//         text: "Successfully logged out! See you soon",
//         duration: 3000,
//         newWindow: true,
//         close: false,
//         gravity: "top", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "#52AB6E",
//         },
//         onClick: function(){} // Callback after click
//     }).showToast();

//     setTimeout(() => {
//         // Modify browser history
//         window.history.pushState({}, "Login", "login.html");
//         window.location.href = "login.html";
//     }, 2000);
// }

function logout() {
    Toastify({
        text: "Successfully logged out! See you soon",
        duration: 3000,
        newWindow: true,
        close: false,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        style: {
            background: "#52AB6E",
        },
        onClick: function () { }
    }).showToast();

    // Clear user's credentials from localStorage
    localStorage.removeItem('fullName');
    // localStorage.removeItem('users');

    setTimeout(() => {
        window.history.pushState({}, "Login", "login.html");
        window.location.href = "login.html";
    }, 2000);
}

// Listen for popstate event (back button pressed)
window.addEventListener('popstate', function(event) {
    // Check if user's data is in localStorage
    if (!localStorage.getItem('fullName') || !localStorage.getItem('users')) {
        window.location.href = "login.html";
    }
    event.preventDefault();
}, false);


function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.transform = "scale(0)";
}
