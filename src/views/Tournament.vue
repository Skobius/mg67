<template>
    <div class="container">
        <h1>Турниры</h1>
        <v-simple-table>
            <template>
                <thead>
                    <tr
                        v-for="(tournament, i) in tournaments"
                        :key="tournament.id"
                    >
                        <th class="text-left">
                            {{tournament.tournamentName}}
                        </th>
                        <th class="text-middle-left">
                            {{tournament.tournamentType}}
                        </th>
                        <th class="text-middle-right">
                            {{tournament.date}}
                        </th>
                        <th class="text-right">
                            <v-btn
                                    @click="$router.push('/detail_tournament/' + tournament.id)"
                            >
                                <v-list-item-icon>
                                    <v-icon>mdi-clipboard-list-outline</v-icon>
                                </v-list-item-icon>
                            </v-btn>
                        </th>
                    </tr>
                </thead>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: 'Tournament',
        data () {
            return {
                tournaments: {}
            }
        },
        async mounted() {
            this.tournaments = await this.$store.dispatch('fetchTournaments')
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>
