let Username = document.getElementById("welcome");
let email = document.getElementById('email'),
    password = document.getElementById('password'),
    fullname = document.getElementById('fullname'),
    country = document.getElementById('country'),
    birthday = document.getElementById('birthday'),
    link = document.getElementById('username');


let user = localStorage.getItem("users");
let userList = JSON.parse(user);
Username.innerHTML =  `Welcome ${userList[0]['fullname']}`;
email.innerHTML = `${userList[0]['email']}`;
fullname.innerHTML = `${userList[0]['fullname']}`;
country.innerHTML = `${userList[0]['country']}`;
birthday.innerHTML = `${userList[0]['birthday']}`;
link.innerHTML = `${userList[0]['fullname']}`;

