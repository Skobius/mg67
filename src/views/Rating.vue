<template>
    <div class="container">
        <div class="schedule">
            <div>
                <h3 class="schedule__header">График Категорий</h3>
                <pie-chart></pie-chart>
            </div>
            <div>
                <h3 class="schedule__header">График Рангов</h3>
                <pie-chart2></pie-chart2>
            </div>
        </div>
        <div class="honor">
            <h3 class="schedule__header">Доска почета</h3>
            <p class="schedule__text">Победители и обладатели переходящего кубка - лучший джимханист города Смоленск</p>
            <v-simple-table class="schedule__table">
                <template>
                    <thead>
                        <tr>
                            <th class="schedule__table-left">
                                2019 год
                            </th>
                            <th class="schedule__table-middle">
                                Сафонов Дмитрий
                            </th>
                            <th class="schedule__table__right">
                                категория - D2
                            </th>
                        </tr>
                        <tr>
                            <th class="schedule__table-left">
                                2020 год
                            </th>
                            <th class="schedule__table-middle">
                                Сафонов Дмитрий
                            </th>
                            <th class="schedule__table__right">
                                категория - C3
                            </th>
                        </tr>
                    </thead>
                </template>
            </v-simple-table>
            <img src="../assets/cup.jpg" alt="cup" class="schedule__img">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Rating',
        data () {
            return {
                countCategories: [],
                countRanks: [],
            }
        },
    }

    import Vue from 'vue'
    import VueChartJs from 'vue-chartjs';
    import {Pie} from 'vue-chartjs'
    Vue.component('pie-chart', {
        extends: VueChartJs.Pie,
        async mounted () {
            this.countCategories = await this.$store.dispatch('fetchCategories')

            this.renderChart({
                labels: ['N', 'D4', 'D3', 'D2', 'D1', 'C3', 'C2', 'C1', 'B', 'A'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: ['#ececec', '#f7f989', '#f7f989', '#f7f989', '#f7f989', '#b5e4b6', '#b5e4b6', '#b5e4b6', '#d7edfd', '#fbe6ee'],
                        data: this.countCategories
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    })
    Vue.component('pie-chart2', {
        extends: VueChartJs.Pie,
        async mounted () {
            this.countRanks = await this.$store.dispatch('fetchRanks')

            this.renderChart({
                labels: ['Ранг0', 'Ранг1', 'Ранг2', 'Ранг3', 'Ранг4', 'Ранг5', 'Ранг6', 'Ранг7'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: ['#ececec', 'green', 'red', '#60110e', '#4c76ca', 'blue', 'black', '#efefef',],
                        data: this.countRanks
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    })
</script>

<style scoped>
    .schedule {
        display: flex;
        max-width: 1000px;
        margin: 20px auto 0;
        justify-content: space-between;
    }

    .schedule__header {
        font-family: 'Lobster', Georgia, Times, serif;
        font-size: 30px;
        line-height: 35px;
        color: #76B7CA;
        text-align: center;
        margin-bottom: 20px;
    }

    .schedule__text {
        font-family: 'Lobster', Georgia, Times, serif;
        font-size: 18px;
        line-height: 24px;
        color: #76B7CA;
        text-align: center;
        margin-bottom: 20px;
    }

    .schedule__table {
        max-width: 1000px;
        margin: 0 auto;
    }

    .schedule__table th {
        text-align: center;
    }

    .schedule__table-left {
        width: 30%;
    }

    .schedule__table-middle {
        width: 40%;
    }

    .schedule__table-right {
        width: 30%;
    }

    .schedule__img {
        max-width: 1000px;
        margin: 20px auto;
        display: block;
    }
</style>
