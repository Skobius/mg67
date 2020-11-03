<template>
    <div data-app>
        <div v-if="status == 1">
            <v-simple-table>
                <template>
                    <thead>
                    <tr>
                        <th v-if="result == 1">Место</th>
                        <th>Участник</th>
                        <th>Категория</th>
                        <th>Заезд I</th>
                        <th>Заезд II</th>
                    </tr>
                    <tr
                            class="infoUserTr"
                            v-for="(people, i) in tournament.peopleInfo"
                            :key="i"
                            :data-id="people.id"
                    >
                        <td v-if="result == 1">{{i + 1}}</td>
                        <td>
                            {{people.secondName}} {{people.firstName}}
                        </td>
                        <td>
                            {{people.category}}
                        </td>
                        <td>
                            <input
                                    class="input-time"
                                    type="number"
                                    :value="people.firstTry"
                            >
                        </td>
                        <td>
                            <input
                                    class="input-time"
                                    type="number"
                                    :value="people.secondTry"
                            >
                        </td>
                    </tr>
                    </thead>
                </template>
            </v-simple-table>
            <div class="container">
                <v-divider></v-divider>
                <v-select
                        v-model="value"
                        :items="items"
                        label="Добавить новых участников"
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
            </div>
            <div class="profile__block-btn">
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="randomPlace">
                    Перемешать участников
                </v-btn>
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="addPeople">
                    Добавить  участников
                </v-btn>
            </div>
            <div class="profile__block-btn">
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="resultAll">
                    Посчитать  результаты
                </v-btn>
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="saveTournament">
                    Cохранить изменения
                </v-btn>
            </div>
            <div class="message-block message-block--none">Данные Турнира успешно изменены!</div>
            <div class="message-block2 message-block2--none">Участник успешно добавлен</div>
            <div class="message-block3 message-block3--none">Результаты посчитаны!</div>
        </div>
        <div v-else>

            <v-simple-table>
                <template>
                    <thead>
                    <tr>
                        <th v-if="result == 1">Место</th>
                        <th>Участник</th>
                        <th>Категория</th>
                        <th>Заезд I</th>
                        <th>Заезд II</th>
                    </tr>
                    <tr
                            class="infoUserTr"
                            v-for="(people, i) in tournament.peopleInfo"
                            :key="i"
                            :data-id="people.id"
                    >
                        <td v-if="result == 1">{{i + 1}}</td>
                        <td>
                            {{people.secondName}} {{people.firstName}}
                        </td>
                        <td>
                            {{people.category}}
                        </td>
                        <td>
                            {{people.firstTry}}
                        </td>
                        <td>
                            {{people.secondTry}}
                        </td>
                    </tr>
                    </thead>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TournamentList',
        data () {
            return {
                tournament: {},
                peopleInfo: [],
                oldPeopleInfo: {},
                firstTry: null,
                secondTry: null,
                status: 0,
                items: [],
                value: [],
                valueCategory: [],
                result: 0
            }
        },
        async mounted() {
            let id = this.$route.params.id
            let tournament = await this.$store.dispatch('fetchTournamentById', id)
            this.status = await this.$store.dispatch('fetchStatus')

            this.oldPeopleInfo = tournament.peopleInfo

            this.tournament = {
                ...tournament,
            }

            let name = await this.$store.dispatch('fetchUsers')
            let user = await this.$store.dispatch('fetchAllUser')

            let nameNew = name
            let userNew = user

            for (let i = 0; i < user.length; i++) {
                for (let j = 0; j < this.tournament.peopleInfo.length; j++) {
                    if (user[i].id == this.tournament.peopleInfo[j].id) {
                        userNew = userNew.filter(item => item !== user[i])
                        nameNew = nameNew.filter(item => item !== user[i].secondName + ' ' + user[i].firstName)
                    }
                }
            }

            this.items = nameNew
            this.valueCategory = userNew
        },
        methods: {
            async saveTournament() {
                try {
                    let all = document.getElementsByClassName("infoUserTr");

                    let newPeopleInfo = []

                    for (let i=0, max=all.length; i < max; i++) {
                        for (let j = 0; j < this.oldPeopleInfo.length; j++) {
                            if (all[i].dataset.id == this.oldPeopleInfo[j].id) {
                                newPeopleInfo.push({
                                    id: this.oldPeopleInfo[j].id,
                                    firstName: this.oldPeopleInfo[j].firstName,
                                    secondName: this.oldPeopleInfo[j].secondName,
                                    category: this.oldPeopleInfo[j].category,
                                    firstTry: String(all[i].childNodes[3].childNodes[0].value),
                                    secondTry: String(all[i].childNodes[4].childNodes[0].value),
                                    award: this.oldPeopleInfo[j].award,
                                })
                            }
                        }
                    }

                    let tournamentId = this.$route.params.id

                    this.tournament.peopleInfo = newPeopleInfo

                    await this.$store.dispatch('updateTournament', {
                        peopleInfo: newPeopleInfo,
                        id: tournamentId
                    })

                    let message = document.getElementsByClassName('message-block')[0];
                    message.classList.remove('message-block--none');
                    setTimeout(function() {
                        message.classList.add('message-block--none');
                    }, 3500)
                } catch (e) {}
            },
            async addPeople() {

                let checkCategory = [];

                for (let i = 0; i < this.value.length; i++) {
                    for (let j = 0; j < this.valueCategory.length; j++) {

                        if( this.value[i] == (this.valueCategory[j].secondName + ' ' + this.valueCategory[j].firstName)) {
                            checkCategory.push(this.valueCategory[j].id)
                        }
                    }
                }

                let peopleInfo = this.tournament.peopleInfo

                let user = await this.$store.dispatch('fetchAllUser')

                for (let i = 0; i < user.length; i++) {

                    for (let j = 0; j < checkCategory.length; j++) {
                        if (user[i].id == checkCategory[j]) {

                            peopleInfo.push({
                                id: user[i].id,
                                firstName: user[i].firstName,
                                secondName: user[i].secondName,
                                category: user[i].category,
                                award: user[i].award,
                                firstTry: 0,
                                secondTry: 0
                            })
                        }
                    }
                }

                this.tournament.peopleInfo = peopleInfo

                try {
                    let tournamentId = this.$route.params.id

                    await this.$store.dispatch('updateTournament', {
                        peopleInfo: peopleInfo,
                        id: tournamentId
                    })

                    let message = document.getElementsByClassName('message-block2')[0];
                    message.classList.remove('message-block2--none');
                    setTimeout(function() {
                        message.classList.add('message-block2--none');
                    }, 3500)
                } catch (e) {}

                let name = await this.$store.dispatch('fetchUsers')

                let nameNew = name
                let userNew = user

                for (let i = 0; i < user.length; i++) {
                    for (let j = 0; j < this.tournament.peopleInfo.length; j++) {
                        if (user[i].id == this.tournament.peopleInfo[j].id) {
                            userNew = userNew.filter(item => item !== user[i])
                            nameNew = nameNew.filter(item => item !== user[i].secondName + ' ' + user[i].firstName)
                        }
                    }
                }

                this.items = nameNew
                this.valueCategory = userNew
            },
            async randomPlace() {
                this.tournament.peopleInfo.sort(() => Math.random() - 0.5);

                let tournamentId = this.$route.params.id

                let applycation = await this.$store.dispatch('updateTournament', {
                    peopleInfo: this.tournament.peopleInfo,
                    id: tournamentId
                })
            },
            async resultAll() {
                this.result = 1;

                let bestPeopleInfo = this.tournament.peopleInfo

                for (let i = 0; i < bestPeopleInfo.length; i++) {
                    if (String(bestPeopleInfo[i].firstTry) >= String(bestPeopleInfo[i].secondTry)) {
                        bestPeopleInfo[i].bestTry = String(bestPeopleInfo[i].secondTry)
                    } else {
                        bestPeopleInfo[i].bestTry = String(bestPeopleInfo[i].firstTry)
                    }
                }

                function byField(field) {
                    return (a, b) => a[field] > b[field] ? 1 : -1;
                }

                function byFieldBig(field) {
                    return (a, b) => a[field] < b[field] ? 1 : -1;
                }

                bestPeopleInfo.sort(byFieldBig('bestTry'));
                bestPeopleInfo.sort(byFieldBig('award'));

                try {
                    let tournamentId = this.$route.params.id

                    await this.$store.dispatch('updateTournament', {
                        peopleInfo: bestPeopleInfo,
                        id: tournamentId
                    })

                    let message = document.getElementsByClassName('message-block3')[0];
                    message.classList.remove('message-block3--none');
                    setTimeout(function() {
                        message.classList.add('message-block3--none');
                    }, 3500)
                } catch (e) {}
            }
        }
    }
</script>

<style scoped>
    td {
        text-align: center;
    }

    .profile__block-btn {
        display: flex;
        justify-content: space-between;
        margin: 30px auto 0;
        max-width: 700px;
    }

    .profile__btn {
        color: #fff;
        min-width: 260px !important;
    }

    .input-time {
        width: 50px;
        border: 1px solid #76B7CA;
        outline: none;
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

    .message-block2 {
        text-align: center;
        font-size: 20px;
        color: green;
        margin-top: 20px;
    }

    .message-block2--none {
        display: none;
    }

    .message-block3 {
        text-align: center;
        font-size: 20px;
        color: green;
        margin-top: 20px;
    }

    .message-block3--none {
        display: none;
    }
</style>
