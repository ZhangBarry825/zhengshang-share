<template>
    <div id="app">
        <transition name="fade">
            <div class="loading-page" v-if="isLoading">
                <div class="loading">
                    <div class="outer"></div>
                    <div class="middle"></div>
                    <div class="inner"></div>
                </div>
                <h2>loading...</h2>
            </div>
        </transition>
        <router-view/>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'APP',
        computed: {
            ...mapState(['isLoading']),
        },
    }
</script>
<style lang="scss">
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-leave-to {
        opacity: 0;
    }
    #app {
        /*font-family: "Alibaba-PuHuiTi";*/
        font-family: "Microsoft YaHei UI";
        .loading-page {
            position: fixed;
            z-index: 999999999;
            width: 100%;
            height: 100%;
            background-color: rgba(244,244,244,.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .loading {
                position: relative;
                .outer,
                .middle,
                .inner {
                    border: 3px solid transparent;
                    border-top-color: #fd8106;
                    border-right-color: #fd8106;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                }

                .outer {
                    width: 3.5em;
                    height: 3.5em;
                    margin-left: -1.75em;
                    margin-top: -1.75em;
                    animation: spin 2s linear infinite;
                }

                .middle {
                    width: 2.1em;
                    height: 2.1em;
                    margin-left: -1.05em;
                    margin-top: -1.05em;
                    animation: spin 1.75s linear reverse infinite;
                }

                .inner {
                    width: 0.8em;
                    height: 0.8em;
                    margin-left: -0.4em;
                    margin-top: -0.4em;
                    animation: spin 1.5s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            }
            h2{
                margin-top: 50px;
            }
        }
    }
</style>
