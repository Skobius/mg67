<template>
    <div data-app>
        <div v-if="countUsers <= 16">
            <section id="bracket" >
                <div class="container">
                    <div class="split split-one">
                        <div class="round round-one current">
                            <div class="round-details">Round 1</div>
                            <ul class="matchup"
                                v-for="(people, i) in firstBlock"
                                :key="i"
                            >
                                <li
                                        class="team team-top"
                                        v-for="(peopleNumber, j) in people"
                                        :key="j"
                                        @click.prevent="firstRoundLeft"
                                >{{peopleNumber.secondName}} {{peopleNumber.firstName}} <span class="score">{{i+1}}</span></li>
                            </ul>
                        </div>	<!-- END ROUND ONE -->

                        <div class="round round-two">
                            <div class="round-details">Round 2</div>
                            <!--<ul class="matchup"-->
                                <!--v-for="n in leftNumber2"-->
                                <!--:data-number="'r2left' + n"-->
                                <!--@click.prevent="secondRoundLeft"-->
                            <!--&gt;-->
                                <!--<li class="team team-top" v-html="this.champions.r2left1Top"></li>-->
                                <!--<li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>-->
                            <!--</ul>-->
                            <ul class="matchup"
                                data-number="r2left1"
                                @click.prevent="secondRoundLeft"
                            >
                                <li class="team team-top" v-html="this.champions.r2left1Top"></li>
                                <li class="team team-bottom" v-html="this.champions.r2left1Bot"></li>
                            </ul>
                            <ul class="matchup"
                                data-number="r2left2"
                                @click.prevent="secondRoundLeft"
                            >
                                <li class="team team-top" v-html="this.champions.r2left2Top"></li>
                                <li class="team team-bottom" v-html="this.champions.r2left2Top"></li>
                            </ul>
                        </div>	<!-- END ROUND TWO -->
                    </div>

                    <div class="champion">
                        <div class="semis-l">
                            <div class="round-details">west semifinals</div>
                            <ul
                                    class ="matchup championship west"
                                    data-number="r3left1"
                                    @click.prevent="thirdRoundLeft"
                            >
                                <li class="team team-top" v-html="this.champions.r3left1Top"></li>
                                <li class="team team-bottom" v-html="this.champions.r3left1Bot"></li>
                            </ul>
                        </div>
                        <div class="final">
                            <i class="fa fa-trophy"></i>
                            <div class="round-details">championship</div>
                            <ul
                                class ="matchup championship"
                                data-number="r4"
                                @click.prevent="final"
                            >
                                <li class="team team-top final__element" v-html="this.champions.r4Top"></li>
                                <li class="team team-bottom final__element" v-html="this.champions.r4Bot"></li>
                            </ul>
                        </div>
                        <div class="semis-r">
                            <div class="round-details">east semifinals</div>
                            <ul
                                    class ="matchup championship east"
                                    data-number="r3left2"
                                    @click.prevent="thirdRoundRight"
                            >
                                <li class="team team-top" v-html="this.champions.r3right1Top"></li>
                                <li class="team team-bottom" v-html="this.champions.r3right1Bot"></li>
                            </ul>
                        </div>
                    </div>


                    <div class="split split-two">
                        <div class="round round-two">
                            <div class="round-details">Round 2</div>
                            <!--<ul-->
                                    <!--class="matchup"-->
                                    <!--v-for="n in rightNumber2"-->
                                    <!--:data-number="'r2right' + n"-->
                                    <!--@click.prevent="secondRoundRight"-->
                            <!--&gt;-->
                                <!--<li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>-->
                                <!--<li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>-->
                            <!--</ul>-->
                            <ul
                                    class="matchup"
                                    data-number="r2right1"
                                    @click.prevent="secondRoundRight"
                            >
                                <li class="team team-top" v-html="this.champions.r2right1Top"></li>
                                <li class="team team-bottom" v-html="this.champions.r2right1Bot">></li>
                            </ul>
                            <ul
                                    class="matchup"
                                    data-number="r2right2"
                                    @click.prevent="secondRoundRight"
                            >
                                <li class="team team-top" v-html="this.champions.r2right2Top"></li>
                                <li class="team team-bottom" v-html="this.champions.r2right2Bot"></li>
                            </ul>
                        </div>	<!-- END ROUND TWO -->
                        <div class="round round-one current">
                            <div class="round-details">Round 1</div>
                            <ul class="matchup"
                                v-for="(people, i) in secondBlock"
                                :key="i"
                            >
                                <li
                                        class="team team-top"
                                        v-for="(peopleNumber, j) in people"
                                        :key="j"
                                        @click.prevent="firstRoundRight"
                                >{{peopleNumber.secondName}} {{peopleNumber.firstName}} <span class="score">{{i+1}}</span></li>
                            </ul>
                        </div>	<!-- END ROUND ONE -->
                    </div>
                </div>
            </section>

            <div class="container">
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
                <!--<v-btn class="profile__btn" color="#ed4d34" @click.prevent="randomPlace">-->
                    <!--Перемешать участников-->
                <!--</v-btn>-->
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="addPeople">
                    Добавить  участников
                </v-btn>
                <v-btn class="profile__btn" color="#ed4d34" @click.prevent="saveResults">
                    Cохранить результаты
                </v-btn>
            </div>
        </div>
        <section id="bracket" v-else>
            <div class="container">
                <div class="split split-one">
                    <div class="round round-one current">
                        <div class="round-details">Round 1<br/><span class="date">March 16</span></div>
                        <ul class="matchup"
                            v-for="(people, i) in firstBlock"
                            :key="i"
                        >
                            <li
                                    class="team team-top"
                                    v-for="(peopleNumber, i) in people"
                                    :key="i"
                            >{{peopleNumber.secondName}} {{peopleNumber.firstName}}</li>
                        </ul>
                    </div>	<!-- END ROUND ONE -->

                    <div class="round round-two">
                        <div class="round-details">Round 2<br/><span class="date">March 18</span></div>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                    </div>	<!-- END ROUND TWO -->

                    <div class="round round-three">
                        <div class="round-details">Round 3<br/><span class="date">March 22</span></div>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                    </div>	<!-- END ROUND THREE -->
                </div>

                <div class="champion">
                    <div class="semis-l">
                        <div class="round-details">west semifinals <br/><span class="date">March 26-28</span></div>
                        <ul class ="matchup championship">
                            <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
                        </ul>
                    </div>
                    <div class="final">
                        <i class="fa fa-trophy"></i>
                        <div class="round-details">championship <br/><span class="date">March 30 - Apr. 1</span></div>
                        <ul class ="matchup championship">
                            <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
                        </ul>
                    </div>
                    <div class="semis-r">
                        <div class="round-details">east semifinals <br/><span class="date">March 26-28</span></div>
                        <ul class ="matchup championship">
                            <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
                        </ul>
                    </div>
                </div>


                <div class="split split-two">


                    <div class="round round-three">
                        <div class="round-details">Round 3<br/><span class="date">March 22</span></div>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                    </div>	<!-- END ROUND THREE -->

                    <div class="round round-two">
                        <div class="round-details">Round 2<br/><span class="date">March 18</span></div>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                        <ul class="matchup">
                            <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                            <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                        </ul>
                    </div>	<!-- END ROUND TWO -->
                    <div class="round round-one current">
                        <div class="round-details">Round 1<br/><span class="date">March 16</span></div>
                        <ul class="matchup"
                            v-for="(people, i) in secondBlock"
                            :key="i"
                        >
                            <li
                                    class="team team-top"
                                    v-for="(peopleNumber, i) in people"
                                    :key="i"
                            >{{peopleNumber.secondName}} {{peopleNumber.firstName}}</li>
                        </ul>
                    </div>	<!-- END ROUND ONE -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'TournamentList',
        data () {
            return {
                tournament: {},
                firstBlock: [],
                secondBlock: [],
                countUsers: 0,
                leftNumber2: 0,
                rightNumber2: 0,
                items: [],
                value: [],
                valueCategory: [],
                champions: {}
            }
        },
        async mounted() {
            let id = this.$route.params.id
            let tournament = await this.$store.dispatch('fetchTournamentById', id)

            this.tournament = {
                ...tournament,
            }

            this.champions = tournament.champions

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

            this.countUsers = this.tournament.peopleInfo.length

            let member = this.tournament.peopleInfo

            let array = member; //массив, можно использовать массив объектов
            let size = 2; //размер подмассива
            let subarray = []; //массив в который будет выведен результат.
            for (let i = 0; i <Math.ceil(array.length/size); i++){
                subarray[i] = array.slice((i*size), (i*size) + size);
            }

            this.firstBlock = subarray.slice(0,subarray.length/2);
            this.secondBlock = subarray.slice(subarray.length/2,subarray.length);

            this.leftNumber2 = Math.round(this.firstBlock.length/2)
            this.rightNumber2 = Math.round(this.secondBlock.length/2)
        },
        methods: {
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

                let id = this.$route.params.id
                let tournament = await this.$store.dispatch('fetchTournamentById', id)

                this.tournament = {
                    ...tournament,
                }

                let name = await this.$store.dispatch('fetchUsers')
                // let user = await this.$store.dispatch('fetchAllUser')

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

                this.countUsers = this.tournament.peopleInfo.length

                let member = this.tournament.peopleInfo

                let array = member; //массив, можно использовать массив объектов
                let size = 2; //размер подмассива
                let subarray = []; //массив в который будет выведен результат.
                for (let i = 0; i <Math.ceil(array.length/size); i++){
                    subarray[i] = array.slice((i*size), (i*size) + size);
                }

                this.firstBlock = subarray.slice(0,subarray.length/2);
                this.secondBlock = subarray.slice(subarray.length/2,subarray.length);

                this.leftNumber2 = Math.round(this.firstBlock.length/2)
                this.rightNumber2 = Math.round(this.secondBlock.length/2)
            },
            async firstRoundLeft(e) {
                let number = e.target.childNodes[1].innerHTML
                let valueHtml = e.target.innerHTML

                if (number == 1) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2left1') {
                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2left1Top'] = valueHtml
                }

                if (number == 2) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2left1') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2left1Bot'] = valueHtml
                }

                if (number == 3) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2left2') {

                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2left2Top'] = valueHtml
                }

                if (number == 4) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2left2') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2left2Bot'] = valueHtml
                }
            },
            async firstRoundRight(e) {
                let number = e.target.childNodes[1].innerHTML
                let valueHtml = e.target.innerHTML

                if (number == 1) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2right1') {
                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2right1Top'] = valueHtml
                }

                if (number == 2) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2right1') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2right1Bot'] = valueHtml
                }

                if (number == 3) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2right2') {

                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2right2Top'] = valueHtml
                }

                if (number == 4) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r2right2') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r2right2Bot'] = valueHtml
                }
            },
            async secondRoundLeft(e) {
                let number = e.target.childNodes[1].innerHTML
                let valueHtml = e.target.innerHTML

                if (number == 1 || number == 2) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r3left1') {
                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r3left1Top'] = valueHtml
                }

                if (number == 3 || number == 4) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r3left2') {
                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r3left1Bot'] = valueHtml
                }
            },
            async secondRoundRight(e) {
                let number = e.target.childNodes[1].innerHTML
                let valueHtml = e.target.innerHTML

                if (number == 1 || number == 2) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r3left1') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r3right1Top'] = valueHtml
                }

                if (number == 3 || number == 4) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r3left2') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r3right1Bot'] = valueHtml
                }
            },
            async thirdRoundLeft(e) {
                let number = e.target.childNodes[1].innerHTML
                let valueHtml = e.target.innerHTML

                if (number == 1 || number == 2) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r4') {
                            all[i].childNodes[0].innerHTML = valueHtml
                        }
                    }

                    this.champions['r4Top'] = valueHtml
                }
            },
            async thirdRoundRight(e) {
                let number = e.target.childNodes[1].innerHTML
                let valueHtml = e.target.innerHTML

                if (number == 3 || number == 4) {
                    let all = document.getElementsByClassName("matchup");

                    for (let i=0, max=all.length; i < max; i++) {
                        if (all[i].dataset.number == 'r4') {
                            all[i].childNodes[1].innerHTML = valueHtml
                        }
                    }

                    this.champions['r4Bot'] = valueHtml
                }
            },
            async final(e) {
                let valueHtml = e.target.innerHTML

                let all = document.getElementsByClassName("matchup");

                for (let i=0, max=all.length; i < max; i++) {
                    all[i].classList.remove('active');
                }

                e.target.classList.add('active');

                this.champions['final'] = valueHtml
                this.champions['finalClass'] = 'active'
            },
            async saveResults() {
                let tournamentId = this.$route.params.id

                await this.$store.dispatch('updateTournamentPleiOff', {
                    champions: this.champions,
                    id: tournamentId
                })
            }
        }
    }
</script>

<style scoped>
    .hero {position:relative; text-align: center; overflow: hidden; color: #fcfcfc; }
    .hero h1 {font-family: 'Holtwood One SC', serif;font-weight: normal;font-size: 5.4em;margin:0 0 20px; text-shadow:0 0 12px rgba(0, 0, 0, 0.5);text-transform: uppercase;letter-spacing:-1px;}
    .hero p {font-family: 'Abel', sans-serif;text-transform: uppercase; color: #5CCA87; letter-spacing: 6px;text-shadow:0 0 12px rgba(0, 0, 0, 0.5);font-size: 1.2em;}
    .hero-wrap {padding: 3.5em 10px;}
    .hero p.intro {font-family: 'Holtwood One SC', serif;text-transform: uppercase;letter-spacing: 1px;font-size: 3em;margin-bottom:-40px;}
    .hero p.year {color: #fff; letter-spacing: 20px; font-size: 34px; margin: -25px 0 25px;}
    .hero p.year i {font-size: 14px;vertical-align: middle;}
    #bracket {overflow:hidden;background-color: #e1e1e1;background-color:rgba(225,225,225,0.9);padding-top: 20px;font-size: 12px;padding: 40px 0;}
    .container {max-width: 1100px;margin: 0 auto;display:block;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: -webkit-flex;display: flex;-webkit-flex-direction:row;flex-direction: row;}
    .split {display:block;float:left;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display:flex;width: 42%;-webkit-flex-direction:row;-moz-flex-direction:row;flex-direction:row;}
    .champion {float:left;display:block;width: 16%;-webkit-flex-direction:row;flex-direction:row;-webkit-align-self:center;align-self:center;margin-top: -15px;text-align: center;padding: 230px 0\9;}
    .champion i {color: #a0a6a8; font-size: 45px;padding: 10px 0; }
    .round {display:block;float:left;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;width:95%;width:30.8333%\9;}
    .split-two {}
    .split-one .round {margin: 0 2.5% 0 0;}
    .split-two .round {margin: 0 0 0 2.5%;}
    .matchup {margin:0;width: 100%;padding: 10px 0;height:60px;-webkit-transition: all 0.2s;transition: all 0.2s;}
    .score {font-size: 11px;text-transform: uppercase;float: right;color: #2C7399;font-weight: bold;font-family: 'Roboto Condensed', sans-serif;position: absolute;right: 5px;}
    .team {padding: 0 5px;margin: 3px 0;height: 25px; line-height: 25px;white-space: nowrap; overflow: hidden;position: relative;}
    .round-two .matchup {margin:0; height: 60px; padding: 40px 0;margin-bottom: 37px;}
    .round-three .matchup {margin:0; height: 60px; padding: 130px 0;}
    .round-details {font-family: 'Roboto Condensed', sans-serif; font-size: 13px; color: #2C7399;text-transform: uppercase;text-align: center;height: 15px;}
    .champion li, .round li {background-color: #fff;box-shadow: none; opacity: 0.45;}
    .current li {opacity: 1;}
    .current li.team {background-color: #fff;box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);opacity: 1;}
    .vote-options {display: block;height: 52px;}
    .share .container {margin: 0 auto; text-align: center;}
    .share-icon {font-size: 24px; color: #fff;padding: 25px;}
    .share-wrap {max-width: 1100px; text-align: center; margin: 60px auto;}
    .final {margin: 2.5em 0;}

    @-webkit-keyframes pulse {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }

        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes pulse {
        0% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }

        50% {
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            transform: scale(1.3);
        }

        100% {
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }

    .share-icon {color: #fff; opacity: 0.35; }
    .share-icon:hover { opacity:1;  -webkit-animation: pulse 0.5s; animation: pulse 0.5s;}
    .date {font-size: 10px; letter-spacing: 2px;font-family: 'Istok Web', sans-serif;color:#3F915F;}



    @media screen and (min-width: 981px) and (max-width: 1099px) {
        .container {margin: 0 1%;}
        .champion {width: 14%;}
        .split {width:43%; }
        .split-one .vote-box {margin-left: 138px;}
        .hero p.intro {font-size: 28px;}
        .hero p.year {margin: 5px 0 10px;}

    }

    @media screen and (max-width: 980px) {
        .container {-webkit-flex-direction:column;-moz-flex-direction:column;flex-direction:column;}
        .split, .champion {width: 90%;margin: 35px 5%;}
        .champion {-webkit-box-ordinal-group:3;-moz-box-ordinal-group:3;-ms-flex-order:3;-webkit-order:3;order:3;}
        .split {border-bottom: 1px solid #b6b6b6; padding-bottom: 20px;}
        .hero p.intro {font-size: 24px;}
        .hero h1 {font-size: 3em; margin: 15px 0;}
        .hero p {font-size: 1em;}
    }


    @media screen and (max-width: 400px) {

        .split {width: 95%;margin: 25px 2.5%;}
        .round {width:21%;}
        .current {-webkit-flex-grow:1;-moz-flex-grow:1;flex-grow:1;}
        .hero h1 {font-size: 2.15em; letter-spacing: 0;margin:0; }
        .hero p.intro {font-size: 1.15em;margin-bottom: -10px;}
        .round-details {font-size: 90%;}
        .hero-wrap {padding: 2.5em;}
        .hero p.year {margin: 5px 0 10px; font-size: 18px;}

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

    .team {
        text-align: left;
    }

    .team.active {
        border: 1px solid green;
    }
</style>
