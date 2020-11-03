<template>
    <v-card
            class="mx-auto main-enter"
            max-width="500"
    >
        <form class="form" @submit.prevent="submitHandler">
            <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    :counter="6"
                    label="Пароль"
                    required
                    type="password"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
            ></v-text-field>
            <div id="error-block" class="error-block--none">Не верная комбинация логина и пароля</div>
            <router-link to="/register" text color="deep-purple accent-4" tag="button" class="link">Регистрация</router-link>

            <v-btn class="mr-4" type="submit">Войти</v-btn>
            <v-btn @click="clear" class="btn-clear">Очистить</v-btn>
        </form>
    </v-card>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            password: { required, minLength: minLength(6) },
            email: { required, email },
            select: { required },
            checkbox: {
                checked (val) {
                    return val
                },
            },
        },

        data: () => ({
            password: '',
            email: '',
        }),

        computed: {
            checkboxErrors () {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors
                !this.$v.checkbox.checked && errors.push('You must agree to continue!')
                return errors
            },
            selectErrors () {
                const errors = []
                if (!this.$v.select.$dirty) return errors
                !this.$v.select.required && errors.push('Item is required')
                return errors
            },
            passwordErrors () {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                !this.$v.password.minLength && errors.push('Пароль должен быть минимум 6 символов')
                !this.$v.password.required && errors.push('Пароль обязателен')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Должен быть правильный e-mail')
                !this.$v.email.required && errors.push('E-mail обязателен')
                return errors
            },
        },

        methods: {
            clear () {
                this.$v.$reset()
                this.password = ''
                this.email = ''
                this.checkbox = false
            },
            async submitHandler() {
                const formData = {
                    email: this.email,
                    password: this.password
                }

                try {
                    await this.$store.dispatch('login', formData)
                    this.$router.push('/')
                } catch (e) {}
            }
        },
    }
</script>

<style scoped>
    .main-enter {
        padding: 1rem 2rem;
    }

    .form {
        width: 350px;
    }

    .link {
        display: block;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .btn-clear {
        float: right;
    }

    .error-block--none {
        display: none;
    }
</style>
