<script>
export default {
    data() {
        return {
            showTnc: false,
            valid: false,
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            phone: "",
            street: "",
            suburb: "",
            postcode: "",
            firstNameRules: [
                v => !!v || "First name is required",
                v => /^[a-zA-Z]+$/.test(v) || "First name must contain letters only"
            ],
            lastNameRules: [
                v => !!v || "Last name is required",
                v => /^[a-zA-Z]+$/.test(v) || "Last name must contain letters only"
            ],
            usernameRules: [
                v => !!v || "Username is required",
                v => v.length >= 3 || "Username must be at least 3 characters"
            ],
            passwordRules: [
                v => !!v || "Password is required",
                v => v.length >= 8 || "Password must be at least 8 characters",
                v => /[$%^&*]/.test(v) || "Password must contain at least one special character ($, %, ^, &, *)"
            ],
            emailRules: [
                v => !!v || "Email is required",
                v => /.+@.+\..+/.test(v) || "Email must be valid"
            ],
            streetRules: [
                v => v.length <= 40 || "Street address must be 40 characters or less"
            ],
            suburbRules: [
                v => v.length <= 20 || "Suburb must be 20 characters or less"
            ],
            postcodeRules: [
                v => !!v || "Postcode is required",
                v => /^\d{4}$/.test(v) || "Postcode must be exactly 4 digits"
            ],
            phoneRules: [
                v => !!v || "Mobile number is required",
                v => /^04\d{8}$/.test(v) || "Mobile must start with 04 and be 10 digits"
            ]
        }
    },
    computed: {
        confirmPasswordRules() {
            return [
                v => !!v || "Please confirm your password",
                v => v === this.password || "Passwords do not match"
            ]
        }
    },
    methods: {
        async submitForm() {
            const { valid } = await this.$refs.regForm.validate()
            if (valid) {
                this.$refs.regForm.$el.submit()
            }
        }
    }
}
</script>

<template>
<v-app>
    <v-main>
        <v-container>
            <h1>Registration Form</h1>
            <v-form
                ref="regForm"
                v-model="valid"
                method="post"
                action="http://mercury.swin.edu.au/it000000/formtest.php"
            >
                <!-- Personal Information -->
                <v-card class="mt-3">
                    <v-card-title>Personal Information</v-card-title>
                    <v-card-text>
                        <v-text-field
                            name="first_name"
                            v-model="firstName"
                            label="First Name"
                            :rules="firstNameRules"
                        ></v-text-field>
                        <v-text-field
                            name="last_name"
                            v-model="lastName"
                            label="Last Name"
                            :rules="lastNameRules"
                        ></v-text-field>
                    </v-card-text>
                </v-card>

                <!-- Account Information -->
                <v-card class="mt-3">
                    <v-card-title>Account Information</v-card-title>
                    <v-card-text>
                        <v-text-field
                            name="username"
                            v-model="username"
                            label="Username"
                            :rules="usernameRules"
                        ></v-text-field>
                        <v-text-field
                            name="password"
                            type="password"
                            v-model="password"
                            label="Password"
                            :rules="passwordRules"
                        ></v-text-field>
                        <v-text-field
                            name="confirm_password"
                            type="password"
                            v-model="confirmPassword"
                            label="Confirm Password"
                            :rules="confirmPasswordRules"
                        ></v-text-field>
                    </v-card-text>
                </v-card>

                <!-- Contact Information -->
                <v-card class="mt-3">
                    <v-card-title>Contact Information</v-card-title>
                    <v-card-text>
                        <v-text-field
                            name="email"
                            type="email"
                            v-model="email"
                            label="Email"
                            :rules="emailRules"
                        ></v-text-field>
                        <v-text-field
                            name="phone"
                            type="text"
                            v-model="phone"
                            label="Mobile Number"
                            :rules="phoneRules"
                        ></v-text-field>
                    </v-card-text>
                </v-card>

                <!-- Address Information -->
                <v-card class="mt-3">
                    <v-card-title>Address Information</v-card-title>
                    <v-card-text>
                        <v-text-field
                            name="street"
                            v-model="street"
                            label="Street Address (optional)"
                            :rules="streetRules"
                        ></v-text-field>
                        <v-text-field
                            name="suburb"
                            v-model="suburb"
                            label="Suburb (optional)"
                            :rules="suburbRules"
                        ></v-text-field>
                        <v-text-field
                            name="postcode"
                            v-model="postcode"
                            label="Postcode"
                            :rules="postcodeRules"
                        ></v-text-field>
                    </v-card-text>
                </v-card>

                <!-- Submit -->
                <v-btn
                    color="primary"
                    class="mt-3"
                    @click="submitForm"
                >
                    Submit
                </v-btn>

                <!-- Terms and Conditions Toggle -->
                <v-btn
                    @click="showTnc = !showTnc"
                    class="mt-3 ml-3"
                >
                    {{ showTnc ? 'Hide' : 'Show' }} Terms and Conditions
                </v-btn>
                <v-expand-transition>
                    <v-card v-show="showTnc" class="mt-3 pa-3">
                        <v-card-title>Terms and Conditions</v-card-title>
                        <v-card-text>
                            <p>By registering, you agree to our terms of service and privacy policy. Your personal information will be stored securely and used only for account management purposes.</p>
                            <p>Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </v-card-text>
                    </v-card>
                </v-expand-transition>
            </v-form>
        </v-container>
    </v-main>
</v-app>
</template>

<style scoped></style>