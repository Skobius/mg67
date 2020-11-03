<template>
    <div data-app>
        <v-card
                class="mx-auto main-enter"
                max-width="500"
        >
            <form class="form" @submit.prevent="submitHandler">
                <v-text-field
                        v-model="secondName"
                        :error-messages="secondNameErrors"
                        label="Фамилия"
                        required
                        @input="$v.secondName.$touch()"
                        @blur="$v.secondName.$touch()"
                ></v-text-field>
                <v-text-field
                        v-model="firstName"
                        :error-messages="firstNameErrors"
                        label="Имя"
                        required
                        @input="$v.firstName.$touch()"
                        @blur="$v.firstName.$touch()"
                ></v-text-field>
                <v-text-field
                        v-model="thirdName"
                        :error-messages="thirdNameErrors"
                        label="Отчество"
                        required
                        @input="$v.thirdName.$touch()"
                        @blur="$v.thirdName.$touch()"
                ></v-text-field>
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
                        type="password"
                        label="Пароль"
                        required
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                ></v-text-field>
                <v-select
                        v-model="category"
                        :items="items"
                        :error-messages="selectErrors"
                        label="Категория"
                        required
                        @change="$v.category.$touch()"
                        @blur="$v.category.$touch()"
                ></v-select>

                <v-btn class="mr-4" type="submit">Зарегистрироваться</v-btn>
                <v-btn @click="clear" class="btn-clear">Очистить</v-btn>
            </form>
        </v-card>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],

        validations: {
            password: { required, minLength: minLength(6) },
            email: { required, email },
            firstName: {required},
            secondName: {required},
            thirdName: {required},
            category: { required },
        },

        data: () => ({
            password: '',
            email: '',
            firstName: '',
            secondName: '',
            thirdName: '',
            category: null,
            items: [
                'N',
                'D4',
                'D3',
                'D2',
                'D1',
                'C3',
                'C2',
                'C1',
                'B',
                'A',
            ],
        }),

        computed: {
            selectErrors () {
                const errors = []
                if (!this.$v.category.$dirty) return errors
                !this.$v.category.required && errors.push('Item is required')
                return errors
            },
            passwordErrors () {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                !this.$v.password.maxLength && errors.push('password must be at most 10 characters long')
                !this.$v.password.required && errors.push('password is required.')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            },
            firstNameErrors () {
                const errors = []
                if (!this.$v.firstName.$dirty) return errors
                !this.$v.firstName.required && errors.push('поле Ф.И.О. должно быть заполнены')
                return errors
            },
            secondNameErrors () {
                const errors = []
                if (!this.$v.secondName.$dirty) return errors
                !this.$v.secondName.required && errors.push('поле Ф.И.О. должно быть заполнены')
                return errors
            },
            thirdNameErrors () {
                const errors = []
                if (!this.$v.thirdName.$dirty) return errors
                !this.$v.thirdName.required && errors.push('поле Ф.И.О. должно быть заполнены')
                return errors
            },
        },

        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }

                const formData = {
                    email: this.email,
                    password: this.password,
                    firstName: this.firstName,
                    secondName: this.secondName,
                    thirdName: this.thirdName,
                    category: this.category,
                    rank: 'ранга нет',
                    newRank: '',
                    newRankInfo: '',
                    error: 0,
                    avatar: 'https://neuronsk.ru/upload/medialibrary/771/771dad7444a2937b6085360951e048b1.png',
                    status: 0
                }

                try {
                    await this.$store.dispatch('register', formData)
                    this.$router.push('/')

                } catch (e) {}
            },
            clear () {
                this.$v.$reset()
                this.password = ''
                this.email = ''
                this.firstName = ''
                this.secondName = ''
                this.thirdName = ''
                this.category = null
                this.checkbox = false
            },
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

    .btn-clear {
        float: right;
    }
</style>
