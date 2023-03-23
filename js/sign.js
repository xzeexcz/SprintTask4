let email = document.getElementById("email"),
    password = document.getElementById("password"),
    form = document.getElementById("sign");
let error = document.getElementById("error");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    function getUser() {
        let user = localStorage.getItem("users");
        let userList = JSON.parse(user);
        return userList;
    }

    function check() {
        let userList = getUser();
        for (let i = 0; i < userList.length; i++){
            if (userList[i]['email'] == email.value && userList[i]['password'] == password.value) {
                window.open("../html/profile.html");
            }
            else {
                error.innerHTML = "Write correct email or password";
            }
        }
    }
    check();


});
