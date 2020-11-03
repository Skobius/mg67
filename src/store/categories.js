import firebase from 'firebase/app'

export default {
    actions: {
        async fetchCategories({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const users = (await firebase.database().ref(`/users`).once('value')).val() || {}

                const appl = []

                Object.keys(users).forEach(key => {
                    appl.push({
                        category: users[key].info.category,
                        id: key
                    })
                })

                let countN = 0
                let countD4 = 0
                let countD3 = 0
                let countD2 = 0
                let countD1 = 0
                let countC3 = 0
                let countC2 = 0
                let countC1 = 0
                let countB = 0
                let countA = 0

                for (let key in appl) {
                    if(appl.hasOwnProperty(key)){
                        if (appl[key].category == 'N') {
                            countN++
                        }
                        if (appl[key].category == 'D4') {
                            countD4++
                        }
                        if (appl[key].category == 'D3') {
                            countD3++
                        }
                        if (appl[key].category == 'D2') {
                            countD2++
                        }
                        if (appl[key].category == 'D1') {
                            countD1++
                        }
                        if (appl[key].category == 'C3') {
                            countC3++
                        }
                        if (appl[key].category == 'C2') {
                            countC2++
                        }
                        if (appl[key].category == 'C1') {
                            countC1++
                        }
                        if (appl[key].category == 'B') {
                            countB++
                        }
                        if (appl[key].category == 'A') {
                            countA++
                        }
                    }
                }

                let categories = [countN, countD4, countD3, countD2, countD1, countC3, countC2, countC1, countB, countA]

                return categories
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchRanks({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const users = (await firebase.database().ref(`/users`).once('value')).val() || {}

                const appl = []

                Object.keys(users).forEach(key => {
                    appl.push({
                        rank: users[key].info.rank,
                        id: key
                    })
                })

                let Rank0 = 0
                let Rank1 = 0
                let Rank2 = 0
                let Rank3 = 0
                let Rank4 = 0
                let Rank5 = 0
                let Rank6 = 0
                let Rank7 = 0

                for (let key in appl) {
                    if(appl.hasOwnProperty(key)){
                        if (appl[key].rank == 'ранга нет') {
                            Rank0++
                        }
                        if (appl[key].rank == 'Зеленый шеврон') {
                            Rank1++
                        }
                        if (appl[key].rank == 'Красный шеврон') {
                            Rank2++
                        }
                        if (appl[key].rank == 'Краповый шеврон') {
                            Rank3++
                        }
                        if (appl[key].rank == 'Королевский синий шеврон') {
                            Rank4++
                        }
                        if (appl[key].rank == 'Синий шеврон') {
                            Rank5++
                        }
                        if (appl[key].rank == 'Черный шеврон') {
                            Rank6++
                        }
                        if (appl[key].rank == 'Белый шеврон') {
                            Rank7++
                        }
                    }
                }

                let categories = [Rank0, Rank1, Rank2, Rank3, Rank4, Rank5, Rank6, Rank7]

                return categories
            } catch (e) {
                alert(e)
                throw e
            }
        },
        async fetchSelectsCategories({commit, dispatch}) {
            try {
                const uid = await dispatch('getUid')
                const users = (await firebase.database().ref(`/users`).once('value')).val() || {}

                const appl = []

                Object.keys(users).forEach(key => {
                    appl.push(users[key].info.category)
                })

                return appl
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
    }
}
