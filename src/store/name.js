import firebase from 'firebase/app'

export default {
        actions: {
            async fetchInfoUser({commit, dispatch}) {
                try {
                    const uid = await dispatch('getUid')
                    const infoUser = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val() || {}


                    // console.log(infoUser)
                    // return Object.keys(infoUser).map(key => ({...infoUser[key], id: key}))
                    return infoUser
                } catch (e) {
                    commit('setError', e)
                    throw e
                }
            },
            async fetchUsers({commit, dispatch}) {
                try {
                    const uid = await dispatch('getUid')
                    const users = (await firebase.database().ref(`/users`).once('value')).val() || {}

                    const appl = []

                    Object.keys(users).forEach(key => {
                        appl.push(users[key].info.secondName + ' ' + users[key].info.firstName)
                    })

                    return appl
                } catch (e) {
                    commit('setError', e)
                    throw e
                }
            },
            async fetchAllUser({commit, dispatch}) {
                try {
                    const uid = await dispatch('getUid')
                    const users = (await firebase.database().ref(`/users`).once('value')).val() || {}

                    const appl = []

                    Object.keys(users).forEach(key => {
                        appl.push({
                            newRank: users[key].info.newRank,
                            newRankInfo: users[key].info.newRankInfo,
                            rank: users[key].info.rank,
                            firstName: users[key].info.firstName,
                            secondName: users[key].info.secondName,
                            category: users[key].info.category,
                            id: key
                        })
                    })

                    return appl
                } catch (e) {
                    commit('setError', e)
                    throw e
                }
            },
        }
}
