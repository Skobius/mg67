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

            <v-btn icon>
                <v-icon>mdi-motorbike</v-icon>
            </v-btn>

            <v-btn icon>
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
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
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
                drawer: false,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' },
                ],
            }
        },
        components: {
            Drawer
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
