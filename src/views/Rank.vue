<template>
    <div data-app>
        <div class="container">
            <form @submit.prevent="submitHandler">
                <h1 class="header-main">Система рангов!</h1>
                <h2>Ваш ранг - {{youRank}}</h2>
                <v-select
                        v-model="selected"
                        :items="ranks"
                        label="Выберите ранг!"
                ></v-select>
                <div class="small-header" v-if="selected">Описание ранга:</div>
                <div v-html="showText(selected)" class="list-rank"></div>
                <span v-if="!selected">Выберите ранг, что бы увидеть его описание</span>
                <div v-if="selected && youNewRank == ''" style="margin-top: 20px;">Для того что бы вашу заявку успешно приняли, приложите ссылки с доказательствами ваших достижений, удовлетворяющих требованиям выше</div>
                <v-textarea
                        v-model="textarea"
                        v-if="selected && youNewRank == ''"
                        name="input-7-1"
                        value=""
                        hint="Введите описание"
                ></v-textarea>
                <div class="profile__block-btn" v-if="selected && youNewRank == ''">
                    <v-btn block class="profile__btn" color="#ed4d34" type="submit">
                        Подать заявку на повышение ранга
                    </v-btn>
                </div>
                <div class="message-block message-block--none">Ваша заявка успешно подана!</div>
                <div v-if="youNewRank != ''" class="error-block">Вы уже подали заявку, дождись ответа от администратора!</div>
                <div v-if="error != 0" class="error-block">Вы не прошли по требованиям, вашу заявку отменили, попробуйте подать позже, когда будете удовлетворять всем требованиям</div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Rank',
        data () {
            return {
                selected: '',
                selectedText: '',
                textarea: '',
                youRank: '',
                youNewRank: '',
                newRankInfo: '',
                error: 0,
                ranks: ['Зеленый шеврон', 'Красный шеврон', 'Краповый шеврон', 'Королевский синий шеврон', 'Синий шеврон', 'Черный шеврон', 'Белый шеврон'],
                texts: [
                    '- Провести 10 обычных тренировок (именно катать, а не стоять и смотреть)<br>\n' +
                    '- Одно участие в gumkhana GP или базовая фигура<br>\n' +
                    '- Получить класс D4 - D3<br>\n' +
                    '- Пройти посвящение (Для новеньких, кто катает первый сезон. О Посвящении читайте ниже)',
                    '- Получить класс D2<br>\n' +
                    '- 5 участий в соревнованиях (GP, базовые фигуры)<br>\n' +
                    '- Пройти симуляцию соревнования в реальных условиях (Читайте об это ниже)',
                    '- Получить класс D1<br>\n' +
                    '- Участие в реальных соревнованиях.<br>\n' +
                    '- Занять призовое место на любых соревнованиях<br>\n' +
                    '- 10 участий в соревнованиях (GP, базовые фигуры)',
                    '- Получить класс С3<br>\n' +
                    '- Взять в ученики 1-2 мотоциклистов<br>\n' +
                    '- Занять первое место на любых соревнованиях <br>- 15 участий в соревнованиях (GP, базовые фигуры)',
                    '- Получить класс С2<br>\n' +
                    '- Один из учеников должен взять Категорию D1',
                    '- Получить класс С1/B/A',
                    'Особый человек, который не занимается, но регулярно приезжает в гости и считается другом и талисманом нашей спортивной команды, который болеет за нас и помогает во всем.(только избранным, а не всем желающим выдается на усмотрение организаторов)'
                ]
            }
        },
        async mounted() {
            this.youRank = await this.$store.dispatch('fetchRank')
            this.youNewRank = await this.$store.dispatch('fetchNewRank');
            this.error = await this.$store.dispatch('fetchError');
        },
        methods: {
            showText: function(val) {
                for (var i = 0; i < this.ranks.length; i++) {
                    if (this.ranks[i] === val){
                        this.selectedText = this.texts[i];

                        return this.texts[i]
                    }
                }
                return '';
            },
            async submitHandler() {
                try {
                    const applycation = await this.$store.dispatch('addApplication', {
                        newRank: this.selected,
                        newRankInfo: this.textarea,
                        error: 0
                    })

                    this.selected = ''
                    this.youRank = await this.$store.dispatch('fetchRank')
                    this.youNewRank = await this.$store.dispatch('fetchNewRank');
                    this.error = await this.$store.dispatch('fetchError');
                    let message = document.getElementsByClassName('message-block')[0];
                    message.classList.remove('message-block--none');
                    setTimeout(function() {
                        message.classList.add('message-block--none');
                    }, 3500)
                } catch (e) {}
            }
        }
    }
</script>

<style scoped>
    .list-rank {
        color: #010101;
        font-size: 20px;
    }

    .profile__block-btn {
        max-width: 400px;
        margin: 30px auto 0;
    }

    .profile__btn {
        color: #fff;
    }

    .small-header {
        color: #010101;
        font-family: 'Cabin', Helvetica, Arial, sans-serif;
    }

    .message-block {
        text-align: center;
        font-size: 20px;
        color: green;
        margin-top: 20px;
    }

    .error-block {
        text-align: center;
        font-size: 20px;
        color: red;
        margin-top: 20px;
    }

    .message-block--none {
        display: none;
    }
</style>
