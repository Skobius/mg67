<template>
    <div>
        <div class="profile__info">
            <div class="profile__bg" :style="styleObj"></div>
            <v-card
                    class="mx-auto"
                    max-width="434"
                    tile
            >
                <v-img
                        height="100%"
                        :src="bg"
                >
                    <v-row
                            align="end"
                            class="fill-height"
                    >
                    </v-row>
                </v-img>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data () {
            return {
                bg: 'https://sun9-59.userapi.com/c857620/v857620486/2b10b/eKtnurrPoUo.jpg',
            }
        },
        computed: {
            styleObj: function() {
                return {
                    'background-image': 'url(' + this.bg + ')',
                }
            },

        },
    }
</script>

<style scoped>
    .profile__info {
        position: relative;
    }

    .profile__bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-size: cover;
        filter: blur(8px);
        background-position: center center;
    }

    .profile__info .v-card {
        margin: 0 auto;
    }
</style>
