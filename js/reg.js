let email = document.getElementById('email'),
    password = document.getElementById('password'),
    fullname = document.getElementById('fullname'),
    country = document.getElementById('country'),
    birthday = document.getElementById('birthday'),
    form = document.getElementById('reg'),
    emailMes = document.getElementById('emailMes'),
    passwordMes = document.getElementById('passwordMes'),
    finish = document.getElementById("finish");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    function getUser() {
        let user = localStorage.getItem("users");
        if (user != null) {
            let userList = JSON.parse(user);
            return userList;
        }
        return [];
    }
    
    function addUser() {
        let userList = getUser();
        userList.push({
            "email": email.value,
            "password": password.value,
            "fullname": fullname.value,
            "country": country.value,
            "birthday": birthday.value
        });
        localStorage.setItem("users", JSON.stringify(userList))
    }
    function validate() {
        if (email.value.length == 0) {
            emailMes.innerHTML = "Write email";
        }
        else if (password.value.length < 8) {
            passwordMes.innerHTML = "Write more 8 letters";
            emailMes.innerHTML = "";
        }
        else {
            passwordMes.innerHTML = "";
            addUser();
            finish.innerHTML = "You registrated";
        }
        
    }
    validate();
    getUser();
})
