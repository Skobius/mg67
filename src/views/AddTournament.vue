<template>
    <div class="container" data-app>
        <h1 class="tournamet__header">Создать Турнир</h1>
        <form class="form" @submit.prevent="submitHandler">
            <v-text-field
                    v-model="tournamentName"
                    :error-messages="tournamentNameErrors"
                    label="Название Турнира"
                    required
            ></v-text-field>

            <v-select
                    v-model="tournamentType"
                    :items="itemsType"
                    :error-messages="typeTournamentErrors"
                    label="Выберите тип турнира"
                    required
            ></v-select>
            <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                            v-model="date"
                            label="Выберите дату проведения"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                >
                    <v-spacer></v-spacer>
                    <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                    >
                        OK
                    </v-btn>
                </v-date-picker>
            </v-menu>
            <v-select
                    v-model="value"
                    :items="items"
                    label="Выберите участников"
                    multiple
            >
                <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index === 0">
                        <span>{{ item }}</span>
                    </v-chip>
                    <span
                            v-if="index === 1"
                            class="grey--text caption"
                    >(+{{ value.length - 1 }} others)   </span>
                </template>
            </v-select>

            <v-btn class="mr-4" type="submit">Создать Турнир</v-btn>
            <div class="message-block message-block--none">Турин успешно создан!</div>
        </form>
    </div>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    import { required} from 'vuelidate/lib/validators'

    export default {
        name: 'AddTournament',
        mixins: [validationMixin],

        validations: {
            tournamentName: {required},
            tournamentType: {required},
        },

        data: () => ({
            tournamentName: '',
            tournamentType: '',
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
            itemsType: [
                'Стандартный без разделений на категории',
                'Стандартный с разделением на категории',
                'Турнирная сетка'
            ],
            items: [],
            value: [],
            valueCategory: []
        }),

        computed: {
            tournamentNameErrors () {
                const errors = []
                if (!this.$v.tournamentName.$dirty) return errors
                !this.$v.tournamentName.required && errors.push('поле Название Турнира должно быть заполнены')
                return errors
            },
            typeTournamentErrors () {
                const errors = []
                if (!this.$v.tournamentType.$dirty) return errors
                !this.$v.tournamentType.required && errors.push('Тип Турнира должен быть выбран')
                return errors
            },
        },

        methods: {
            async submitHandler() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }

                let checkCategory = [];

                for (let i = 0; i < this.value.length; i++) {
                    for (let j = 0; j < this.valueCategory.length; j++) {

                        if( this.value[i] == (this.valueCategory[j].secondName + ' ' + this.valueCategory[j].firstName)) {
                            checkCategory.push(this.valueCategory[j].id)
                        }
                    }
                }


                let peopleInfo = []

                let user = await this.$store.dispatch('fetchAllUser')

                for (let i = 0; i < user.length; i++) {

                    for (let j = 0; j < checkCategory.length; j++) {
                        if (user[i].id == checkCategory[j]) {
                            if (this.tournamentType == 'Стандартный с разделением на категории') {
                                console.log(1)
                                if (user[i].category == 'N' || user[i].category == 'D4') {
                                    peopleInfo.push({
                                        id: user[i].id,
                                        firstName: user[i].firstName,
                                        secondName: user[i].secondName,
                                        category: user[i].category,
                                        firstTry: 0,
                                        secondTry: 0,
                                        award: 0,
                                    })
                                } else if (user[i].category == 'D3' || user[i].category == 'D2'){
                                    peopleInfo.push({
                                        id: user[i].id,
                                        firstName: user[i].firstName,
                                        secondName: user[i].secondName,
                                        category: user[i].category,
                                        firstTry: 0,
                                        secondTry: 0,
                                        award: 1,
                                    })
                                } else if (user[i].category == 'D1' || user[i].category == 'C3'){
                                    peopleInfo.push({
                                        id: user[i].id,
                                        firstName: user[i].firstName,
                                        secondName: user[i].secondName,
                                        category: user[i].category,
                                        firstTry: 0,
                                        secondTry: 0,
                                        award: 2,
                                    })
                                } else if (user[i].category == 'C2' || user[i].category == 'C1' || user[i].category == 'B' || user[i].category == 'A'){
                                    peopleInfo.push({
                                        id: user[i].id,
                                        firstName: user[i].firstName,
                                        secondName: user[i].secondName,
                                        category: user[i].category,
                                        firstTry: 0,
                                        secondTry: 0,
                                        award: 3,
                                    })
                                }
                            } else {
                                peopleInfo.push({
                                    id: user[i].id,
                                    firstName: user[i].firstName,
                                    secondName: user[i].secondName,
                                    category: user[i].category,
                                    firstTry: 0,
                                    secondTry: 0,
                                    award: 0
                                })
                            }
                        }
                    }
                }

                function byField(field) {
                    return (a, b) => a[field] > b[field] ? 1 : -1;
                }

                if (this.tournamentType == 'Стандартный с разделением на категории') {
                    peopleInfo.sort(byField('category'));
                }

                const formData = {
                    tournamentName: this.tournamentName,
                    tournamentType: this.tournamentType,
                    peopleInfo: peopleInfo,
                    date: this.date
                }

                try {
                    await this.$store.dispatch('createTournament', formData)

                    let message = document.getElementsByClassName('message-block')[0];
                    message.classList.remove('message-block--none');
                    setTimeout(function() {
                        message.classList.add('message-block--none');
                    }, 3500)
                } catch (e) {}
            }
        },
        async mounted() {
            let name = await this.$store.dispatch('fetchUsers')
            let user = await this.$store.dispatch('fetchAllUser')
            this.items = name
            this.valueCategory = user

            console.log(this.items)
        },
    }
</script>

<style scoped>
    .tournamet__header {
        text-align: center;
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
</style>
