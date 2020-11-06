<template>
    <div>
        <v-app-bar
                color="deep-purple accent-4"
                dense
                dark
                class="header"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <router-link to="/" class="logo">MG67</router-link>

            <v-spacer></v-spacer>

            <v-btn icon to="/profile">
                <v-icon>mdi-motorbike</v-icon>
            </v-btn>

            <v-btn icon to="/tournament">
                <v-icon>mdi-traffic-cone</v-icon>
            </v-btn>

            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="exitButton">
                        <v-list-item-title>Выйти <v-icon>mdi-exit-to-app</v-icon></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <Drawer :drawer="drawer"/>
    </div>
</template>

<script>
    import Drawer from '@/components/app/Drawer'
    export default {
        data () {
            return {
                drawer: false
            }
        },
        components: {
            Drawer
        },
        methods: {
            async exitButton () {
                await this.$store.dispatch('logout')
                this.$router.push('/login')
            }
        },
    }
</script>

<style>
    .header {
        background-color: #57B0CA !important;
    }

    .logo {
        font-size: 1.25rem;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
        text-decoration: none;
    }
</style>
