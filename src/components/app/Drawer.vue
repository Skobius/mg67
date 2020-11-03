<template>
    <div>
        <v-sheet
                class="overflow-hidden"
                style="position: relative;min-height: calc(100vh - 269px)"
        >

            <v-navigation-drawer
                    v-model="isSelectedChild"
                    absolute
                    temporary
            >
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img :src="infoUser.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="main-titile">{{infoUser.firstName}} {{infoUser.secondName}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense>

                    <v-list-item :to="item.link"
                             v-for="item in items"
                             :key="item.title"
                             link
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                                 link
                                 @click="exitButton"
                                 class="exit-btn"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-exit-to-app</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Выйти</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <div class="admin" v-if="status == 1">
                    <v-divider></v-divider>
                    <span class="admin__header">Для Администратора</span>

                    <v-list dense>

                        <v-list-item :to="item.link"
                                     v-for="item in adminItems"
                                     :key="item.title"
                                     link
                        >
                            <v-list-item-icon>
                                <v-icon>mdi-{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </div>
            </v-navigation-drawer>

            <main class="app-content">
                <div class="app-page">
                    <router-view/>
                </div>
            </main>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        props: ['drawer'],
        data () {
            return {
                items: [
                    { title: 'Профиль', icon: 'account-box', link: '/profile'},
                    { title: 'Ранги', icon: 'chevron-triple-up', link: '/rank'},
                    { title: 'Рейтинг', icon: 'podium', link: '/rating'},
                    { title: 'Турниры', icon: 'tournament', link: '/tournament'},
                ],
                adminItems: [
                    { title: 'Заявки', icon: 'application-import', link: '/applicationsranks'},
                    { title: 'Создать турнир', icon: 'folder-plus-outline', link: '/addtournament'},
                ],
                infoUser: [],
                isSelectedChild: this.drawer,
                status: 0
            }
        },
        methods: {
            async exitButton () {
                await this.$store.dispatch('logout')
                this.$router.push('/login')
            }
        },
        async mounted() {
            this.infoUser = await this.$store.dispatch('fetchInfoUser')
            this.status = await this.$store.dispatch('fetchStatus')
        },
        watch: {
            drawer: function(newVal, oldVal) {
                this.isSelectedChild = !this.isSelectedChild;
            }
        }
    }
</script>

<style scoped>
    .v-avatar, .v-list-item__icon {
        margin-right: 10px;
    }
    .v-avatar {
        border: 1px solid #ccc;
    }
    .admin__header {
        font-family: 'Lobster', Georgia, Times, serif;
        font-size: 14px;
        line-height: 16px;
        /*color: #76B7CA;*/
        text-align: center;
        width: 100%;
        display: block;
        margin-top: 20px;
    }

    .main-titile {
        font-family: 'Lobster', Georgia, Times, serif;
    }
</style>
