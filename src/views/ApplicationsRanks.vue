<template>
    <div>
        <div class="container">
            <h1>Список людей на повышение рангов</h1>
            <v-row justify="center">
                <v-expansion-panels accordion>
                    <v-expansion-panel
                            v-for="(applicationRank, i) in applicationsRank"
                            :key="i"
                            v-if="applicationRank.newRank != ''"
                    >
                        <v-expansion-panel-header>{{applicationRank.secondName}} {{applicationRank.firstName}}</v-expansion-panel-header>
                        <v-expansion-panel-content :dataId="applicationsRank.id">
                            <div class="info-block">
                                <div>
                                    текущий ранг - {{applicationRank.rank}}
                                    <br>
                                    <div
                                            class="new-rank-info"
                                    >
                                        Желаемый ранг - {{applicationRank.newRank}}
                                        <br>
                                        Доказательства - {{applicationRank.newRankInfo}}
                                    </div>
                                </div>
                                <div class="info-block__btn">
                                    <a href="#" class="profile__btn" :data-id="applicationRank.id" :data-newrank="applicationRank.newRank" color="#ed4d34" type="button" style="margin-bottom: 10px;" @click.prevent="addRank">
                                        Подтвердить
                                    </a>
                                    <a href="#" class="profile__btn" :data-id="applicationRank.id" color="#ed4d34" type="button" @click.prevent="noRank">
                                        Отменить
                                    </a>
                                </div>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            applicationsRank: '',
        }),
        async mounted() {
            this.applicationsRank = await this.$store.dispatch('fetchApplicationRank')
        },
        methods: {
            async addRank(e) {
                let userId = e.target.dataset.id
                let userNewRank = e.target.dataset.newrank
                try {
                    const newRank = await this.$store.dispatch('addNewRank', {
                        userId,
                        rank: userNewRank,
                        newRank: '',
                        newRankInfo: '',
                        error: 0
                    })
                    this.applicationsRank = await this.$store.dispatch('fetchApplicationRank')
                } catch (e) {}
            },
            async noRank(e) {
                let userId = e.target.dataset.id
                try {
                    const newRank = await this.$store.dispatch('noNewRank', {
                        userId,
                        newRank: '',
                        newRankInfo: '',
                        error: 1
                    })
                    this.applicationsRank = await this.$store.dispatch('fetchApplicationRank')
                } catch (e) {}
            }
        }
    }
</script>

<style scoped>
    .v-expansion-panel-header__icon {
        position: absolute;
        right: 11px;
        top: 13px;
    }

    .info-block {
        display: flex;
        justify-content: space-between;
    }

    .info-block__btn {
        display: flex;
        flex-direction: column;
    }

    .profile__btn {
        color: #fff;
        width: 200px;
        background-color: rgb(237, 77, 52);
        border-color: rgb(237, 77, 52);
        height: 36px;
        min-width: 64px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        text-transform: uppercase;
        text-decoration: none;
    }
</style>
