<template>
    <div class="container">
        <h1>Турнир - {{tournament.tournamentName}}</h1>
        <h3>Дата проведения - {{tournament.date}}</h3>

        <PleiOff v-if="tournament.tournamentType == 'Турнирная сетка'"/>

        <ClassicWithCategory v-else-if="tournament.tournamentType == 'Стандартный с разделением на категории'"/>

        <Classic v-else/>

    </div>
</template>

<script>
    import Classic from '@/components/tournaments/Classic.vue'
    import ClassicWithCategory from '@/components/tournaments/ClassicWithCategory.vue'
    import PleiOff from '@/components/tournaments/PleiOff.vue'
    export default {
        name: 'TournamentList',
        data () {
            return {
                tournament: {},
            }
        },
        async mounted() {
            const id = this.$route.params.id
            const tournament = await this.$store.dispatch('fetchTournamentById', id)

            this.tournament = {
                ...tournament,
            }
        },
        components: {
            Classic, ClassicWithCategory, PleiOff
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }

    h3 {
        font-family: 'Lobster', Georgia, Times, serif;
        font-size: 24px;
        line-height: 28px;
        color: #76B7CA;
        text-align: center;
        margin: 20px 0;
    }
</style>
