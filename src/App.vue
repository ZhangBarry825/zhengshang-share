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
        mounted() {
            let  device=localStorage.getItem('device')
            if(device == 'pc'){
                let script = document.createElement('script')
                script.type = 'text/javascript'
                script.text = `(function (w, d, s, h) {_s = d.createElement(s);_s.async = true;_s.charset = 'UTF-8';_s.src = h;d.body.appendChild(_s);})(window, document, 'script', 'https://chat02.kuailiankeji.com/chat/include/rRRLt%40AwGdSzybKiEGFYfA%24%24?lng=cn');`
                document.getElementsByTagName('head')[0].appendChild(script)
            }
        }
    }
</script>
<style lang="scss">
    .KLT-FLOAT{
        display: none !important;
    }
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
                    width: 80px;
                    height:  80px;
                    margin-left: -40px;
                    margin-top: -40px;
                    animation: spin 2s linear infinite;
                }

                .middle {
                    width: 50px;
                    height:  50px;
                    margin-left: -25px;
                    margin-top: -25px;
                    animation: spin 1.75s linear reverse infinite;
                }

                .inner {
                    width: 20px;
                    height:20px;
                    margin-left: -10px;
                    margin-top:  -10px;
                    animation: spin 1.5s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            }
            h2{
                font-size: 20px;
                margin-top: 80px;
            }
        }
    }
</style>
