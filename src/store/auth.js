import firebase from 'firebase/app'

export default {
    actions: {
        async login ({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch(e) {
                commit('setError', e)
                // alert('Не верная комбинация логина и пароля')
                let element = document.getElementById("error-block");
                element.classList.remove("error-block--none");

                throw e
            }
        },
        async register({dispatch, commit}, {email, password, firstName, secondName, thirdName, category, rank, newRank, newRankInfo, error, avatar, status}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    email,
                    password,
                    firstName,
                    secondName,
                    thirdName,
                    category,
                    rank,
                    newRank,
                    newRankInfo,
                    error,
                    avatar,
                    status
                });
            } catch (e) {
                alert(e)
                commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            commit('clearInfo')
        }
    }
}
