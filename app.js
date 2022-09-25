import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getDatabase, set, ref } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const auth = getAuth()

const database = getDatabase();
const register = () => {

    let username = document.querySelector("#username")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    console.log(username.value);
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            let user = {
                name: username.value,
                email: email.value,
                password: password.value
            }
            alert("New User is registerred !")
            // database work
      const userRef= ref(database,"user/" + res.user.uid)
            set( userRef,user)
        })
        .catch((e) => {
            alert(e + "yeh hai")
        })
}
document.querySelector("#register").addEventListener("click", register)