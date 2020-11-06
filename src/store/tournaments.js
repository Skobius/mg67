import firebase from 'firebase/app'

export default {
    actions: {
        async createTournament({commit, dispatch}, {tournamentName, tournamentType, peopleInfo, date}) {
            try {
                await firebase.database().ref(`/tournaments`).push({tournamentName, tournamentType, peopleInfo, date})
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchTournaments({commit, dispatch}) {
            try {
                const tournaments = (await firebase.database().ref(`/tournaments`).once('value')).val() || {}

                return Object.keys(tournaments).map(key => ({...tournaments[key], id: key}))
                return tournaments
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchTournamentById({dispatch, commit}, id) {
            try {
                const tournament = (await firebase.database().ref(`/tournaments`).child(id).once('value')).val() || {}
                return {...tournament, id}
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async updateTournament({commit, dispatch}, {id, peopleInfo}) {
            try {
                await firebase.database().ref(`/tournaments`).child(id).update({peopleInfo})
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async updateTournamentPleiOff({commit, dispatch}, {id, champions}) {
            try {
                await firebase.database().ref(`/tournaments`).child(id).update({champions})
            } catch (e) {
                alert(e)
                throw e
            }
        },
    }
}
