import firebase from 'firebase/app'

export default {
    actions: {
        async fetchRank({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youRank = (await firebase.database().ref(`/users/${uid}/info/rank`).once('value')).val() || 'нет ранга'

                return youRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchCategory({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youRank = (await firebase.database().ref(`/users/${uid}/info/category`).once('value')).val() || 'нет ранга'

                return youRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchFirstName({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youRank = (await firebase.database().ref(`/users/${uid}/info/firstName`).once('value')).val()

                return youRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchSecondName({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youRank = (await firebase.database().ref(`/users/${uid}/info/secondName`).once('value')).val()

                return youRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchThirdName({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youRank = (await firebase.database().ref(`/users/${uid}/info/thirdName`).once('value')).val()

                return youRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchStatus({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const status = (await firebase.database().ref(`/users/${uid}/info/status`).once('value')).val()

                return status
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchAvatar({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youRank = (await firebase.database().ref(`/users/${uid}/info/avatar`).once('value')).val()

                return youRank
            } catch (e) {
                alert(e)
                throw e
            }
        },

        async fetchNewRank({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youNewRank = (await firebase.database().ref(`/users/${uid}/info/newRank`).once('value')).val()

                return youNewRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchError({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const youNewRank = (await firebase.database().ref(`/users/${uid}/info/error`).once('value')).val()

                return youNewRank
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchApplicationRank({commit, dispatch}) {
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
                        id: key
                    })
                })

                return appl
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async addApplication({commit, dispatch}, {newRank, newRankInfo, error}) {
            try {
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).update({newRank, newRankInfo, error})
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async changeProfile({commit, dispatch}, {firstName, secondName, thirdName, category, avatar}) {
            try {
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).update({firstName, secondName, thirdName, category, avatar})
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async addNewRank({commit, dispatch}, {userId, rank, newRank, newRankInfo, error}) {
            try {
                await firebase.database().ref(`/users/${userId}/info`).update({rank, newRank, newRankInfo, error})

                console.log(error)
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async noNewRank({commit, dispatch}, {userId, newRank, newRankInfo, error}) {
            try {
                await firebase.database().ref(`/users/${userId}/info`).update({newRank, newRankInfo, error})
            } catch (e) {
                alert(e)
                throw e
            }
        },

        async fetchStatus({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const status = (await firebase.database().ref(`/users/${uid}/info/status`).once('value')).val()

                return status
            } catch (e) {
                alert(e)
                throw e
            }
        },
    }
}
