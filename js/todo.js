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

tdlNew.addEventListener('keypress', function(e) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
        const v = this.value;
        const s = v.replace(/ +?/g, '');
        if (s === '' || tdlItems.includes(v)) {
            if (s === '') {
                alert('C-mon! To-do item cannot be empty');
            } else {
                alert('Uhh Ohh! Duplicate to-do item detected');
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
            this.value = '';
            localStorage.setItem('tdlItems', JSON.stringify(tdlItems));
        }
    }
});

const tdlLinks = document.querySelectorAll('.tdl-content a');

for (let i = 0; i < tdlLinks.length; i++) {
    tdlLinks[i].addEventListener('click', function() {
        const li = this.parentElement.parentElement;
        const span = li.querySelector('span');
        const value = span.textContent;
        const index = tdlItems.indexOf(value);
        if (index !== -1) {
            tdlItems.splice(index, 1);
        }
        li.classList.add('remove');
        setTimeout(function() {
            li.remove();
        }, 100);

        localStorage.setItem('tdlItems', JSON.stringify(tdlItems));
    });
}

tdlContent.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        const li = e.target.parentElement.parentElement;
        const span = li.querySelector('span');
        const value = span.textContent;
        const index = tdlItems.indexOf(value);
        if (index !== -1) {
            tdlItems.splice(index, 1);
        }
        li.classList.add('remove');
        setTimeout(function() {
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

function logout() {
    window.location.href = "login.html";
}
