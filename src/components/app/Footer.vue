<template>
    <v-footer
            class="footer"
            dark
            padless
    >
        <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-center"
                style="width: 100%"
        >
            <v-card-text>
                <a href="https://vk.com/motogymhana67" v-for="social in socials" style="text-decoration: none;" target="_blank"><v-icon size="24px">{{ social.icon }}</v-icon></a>
            </v-card-text>

            <v-card-text class="white--text pt-0 footer__text">
                <span>Какие задачи выполняет Мото Джимхана?</span><br>
                - Улучшает навыки управления мотоциклом <br>
                - Помогает освоиться на своём мотоцикле после мотошколы<br>
                - Развивает навыки, необходимые для выживания в городе<br>
                - Призывает думать головой
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>MG67</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            socials: [
                {
                    icon: 'mdi-vk',
                    link: 'https://vk.com/motogymhana67'
                }
            ]
        }),
    }
</script>

<style scoped>
    .footer div {
        background-color: #247B94 !important;
    }

    .footer__text span {
        font-size: 18px;
    }

    .footer__text {
        font-family: 'Lobster', Georgia, Times, serif;
    }
</style>
