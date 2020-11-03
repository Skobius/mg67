<template>
    <div class="profile"  data-app>
        <div class="container">
            <h1 class="profile__header">Профиль и личные данные</h1>
            <template>
                <v-simple-table>
                    <template>
                        <thead>
                        <tr>
                            <th class="text-left">
                                Фамилия
                            </th>
                            <th class="text-right">
                                <v-text-field
                                        v-model="secondName"
                                        :error-messages="secondNameErrors"
                                        required
                                        @input="$v.secondName.$touch()"
                                        @blur="$v.secondName.$touch()"
                                ></v-text-field>
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">
                                Имя
                            </th>
                            <th class="text-right">
                                <v-text-field
                                        v-model="firstName"
                                        :error-messages="firstNameErrors"
                                        required
                                        @input="$v.firstName.$touch()"
                                        @blur="$v.firstName.$touch()"
                                ></v-text-field>
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">
                                Отчество
                            </th>
                            <th class="text-right">
                                <v-text-field
                                        v-model="thirdName"
                                        :error-messages="thirdNameErrors"
                                        required
                                        @input="$v.thirdName.$touch()"
                                        @blur="$v.thirdName.$touch()"
                                ></v-text-field>
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">
                                Аватар
                            </th>
                            <th class="text-right">
                                <span class="block-avatar">
                                    <v-list-item-avatar style="margin-right: 10px;">
                                        <v-img :src="avatar"></v-img>
                                    </v-list-item-avatar>
                                    <v-text-field
                                            v-model="avatar"
                                            required
                                    ></v-text-field>
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">
                                Категория
                            </th>
                            <th class="text-right select-block">
                                <v-select
                                        v-model="category"
                                        :items="items"
                                ></v-select>
                            </th>
                        </tr>
                        <tr>
                            <th class="text-left">
                                Ранг
                            </th>
                            <th class="text-right">
                                {{infoUser.rank}}
                            </th>
                        </tr>
                        </thead>

                    </template>
                </v-simple-table>
            </template>
            <div class="profile__block-btn">
                <v-btn class="profile__btn" color="#ed4d34" to="/rank">
                    Подать заявку на повышение ранга
                </v-btn>
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="saveProfile">
                    Cохранить изменения
                </v-btn>
            </div>
            <div class="message-block message-block--none">Ваши данные успешно изменены!</div>
        </div>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        validations: {
            name: { required, maxLength: maxLength(10) },
            email: { required, email },
            select: { required },
            firstName: {required},
            secondName: {required},
            thirdName: {required},
            checkbox: {
                checked (val) {
                    return val
                },
            },
        },
        name: 'Profile',
        data () {
            return {
                fio: '',
                info: '',
                avatar: '',
                name: '',
                email: '',
                select: null,
                category: null,
                rank: '',
                firstName: '',
                secondName: '',
                thirdName: '',
                items: [
                    'N - если вы не имеете категории',
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
                checkbox: false,
                infoUser: []
            }
        },
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
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.name.required && errors.push('Name is required.')
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
            submit () {
                this.$v.$touch()
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = false
            },
            async saveProfile() {
                try {
                    const applycation = await this.$store.dispatch('changeProfile', {
                        firstName: this.firstName,
                        secondName: this.secondName,
                        thirdName: this.thirdName,
                        category: this.category,
                        avatar: this.avatar
                    })

                    this.fio = await this.$store.dispatch('fetchSecondName') + ' ' + await this.$store.dispatch('fetchFirstName')
                    this.info = 'Категория ' + await this.$store.dispatch('fetchCategory')
                    this.avatar = await this.$store.dispatch('fetchAvatar')

                    let message = document.getElementsByClassName('message-block')[0];
                    message.classList.remove('message-block--none');
                    setTimeout(function() {
                        message.classList.add('message-block--none');
                    }, 3500)
                } catch (e) {}
            }
        },
        async mounted() {
            this.infoUser = await this.$store.dispatch('fetchInfoUser')
            this.fio = await this.$store.dispatch('fetchSecondName') + ' ' + await this.$store.dispatch('fetchFirstName')
            this.info = 'Категория ' + await this.$store.dispatch('fetchCategory')
            this.avatar = await this.$store.dispatch('fetchAvatar')
            this.category = await this.$store.dispatch('fetchCategory')
            this.firstName = await this.$store.dispatch('fetchFirstName')
            this.secondName = await this.$store.dispatch('fetchSecondName')
            this.thirdName = await this.$store.dispatch('fetchThirdName')
        }
    }
</script>

<style scoped>
    .profile__header {
        text-align: center;
        margin-bottom: 20px;
    }

    .text-left,  {
        width: 50%;
    }

    .text-right {
        width: 50%;
    }

    .profile__block-btn {
        display: flex;
        justify-content: space-between;
        margin: 30px auto 0;
        max-width: 700px;
    }

    .profile__btn {
        color: #fff;
    }

    .v-data-table__wrapper {
        max-width: 800px;
        margin: 0 auto;
    }

    .message-block {
        text-align: center;
        font-size: 20px;
        color: green;
        margin-top: 20px;
    }

    .message-block--none {
        display: none;
    }

    .block-avatar {
        display: flex;
    }

    .v-list-item__content {
        background: #76B7CA;
        padding-left: 20px;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #cccc;
    }
</style>
