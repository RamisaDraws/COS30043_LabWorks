<template>
    <v-container>
        <v-card class="pa-4 mt-5">
            <h2>Login</h2>
            <v-form ref="form">
                <v-text-field v-model="username" label="Username" :rules="[v => !!v || 'Required']"></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" :rules="[v => !!v || 'Required']"></v-text-field>
                <p v-if="loginError">Invalid username or password.</p>
                <v-btn color="primary" @click="login">Login</v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            loginError: false
        }
    },
    methods: {
        async login() {
            const {valid} = await this.$refs.form.validate();
            if(!valid) return;
            
            fetch('http://localhost/resources/api_user.php/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            }).then(response => response.json())
              .then(data => {
                  if (data && data.username) {
                      this.$router.push('/dashboard')
                  } else {
                      this.loginError = true
                  }
              })
        }
    }
}
</script>