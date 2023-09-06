
<template>
        <h2>Login</h2>    
        <form v-on:submit="login">    
            <input type="text" name="email" /><br>    
            <input type="password" name="password" /><br>    
            <input type="submit" value="Login" />
        </form>    
</template>

<script>
    import router from "../../router"    
    import axios from "axios"    
    export default {    
        name: "Login",
        methods: {    
            login: (e) => {

                e.preventDefault()    
                let email = 'email'
                let password = "password"    
                let login = () => {    
                    let data = {    
                        email: email,    
                        password: password    
                    }
                    console.log(data)
                    axios.post("/user/login", data)
                        .then((response) => {    
                            console.log("Logged in")    
                            router.push("/dashboard")
                        })    
                        .catch((errors) => {    
                            console.log("Cannot log in")    
                        })    
                }    
                login()    
            }    
        }    
    }
</script>