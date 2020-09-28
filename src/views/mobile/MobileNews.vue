<template>
    <div class="news-page">
        <div class="background">
            <div class="header-logo">
                <div class="left" @click="$router.push('/mobile')">
                    <img src="../../assets/images/mobile/logo.png" alt="">
                </div>
                <div class="right"></div>
            </div>
            <div class="title-box">
                <div class="line1">
                    <div class="text text1">专业开发</div>
                    <div class="img">
                        <img src="../../assets/images/mobile/banner-x.png" alt="">
                    </div>
                    <div class="text text2">高端定制</div>
                </div>
                <div class="line2">全行业APP/小程序定制开发</div>
            </div>
        </div>
        <div class="content">
            <div class="title">{{newsList[newsIndex].title}}</div>
            <div class="time">{{newsList[newsIndex].time}} 发布</div>
            <div class="img" v-if="newsList[newsIndex].content.img">
                <van-image
                        width="100%"
                        fit="contain"
                        :src="newsList[newsIndex].content.img"
                />
            </div>
            <div class="html" v-html="newsList[newsIndex].content.html"></div>
        </div>
        <MobileFooter></MobileFooter>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Footer from "../../components/Footer";
    import {homeData} from "../../../public/MockData";
    import MobileFooter from "../../components/MobileFooter";

    export default {
        name: "MobileNews",
        components:{
            Header,
            Footer,
            MobileFooter
        },
        data(){
            return{
                newsList:homeData.newsList,
                newsIndex:''
            }
        },
        methods:{

        },
        created() {
            this.newsIndex=this.$route.query.newsIndex
        },
        mounted() {
            window.scroll(0,0)
            let clientWidth = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = clientWidth / 10 + 'px';
        }
    }
</script>

<style scoped lang="scss">
    .news-page{
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;

        .background {
            width: 100%;
            height: 4.8rem;
            background-color: rgba(13, 13, 13, 0.54);
            padding: 0.4rem 0.267rem;
            box-sizing: border-box;
            background-image: url("../../assets/images/mobile/banner01.png");
            @include background-center;

            .header-logo {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .left {
                    img {
                        width: 2.133rem;
                        height: 0.64rem;
                    }
                }
            }

            .title-box {
                width: 100%;
                display: flex;
                flex-direction: column;

                .line1 {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-top: 0.4rem;
                    margin-bottom: 0.147rem;

                    .text {
                        font-size: 0.507rem;
                        font-weight: bold;
                        color: #0080FF;
                    }

                    .text2 {
                        color: #FF7F00;
                    }

                    .img {
                        width: 0.213rem;
                        height: 0.213rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0 0.267rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .line2 {
                    font-size: 0.24rem;
                    letter-spacing: 0.06rem;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
        }
        .content{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.267rem;
            box-sizing: border-box;
            .title{
                margin-top: 0.533rem;
                width: 100%;
                text-align: center;
                font-size: 0.453rem;
                font-weight: 400;
                color: #222222;
            }
            .time{
                font-size: 0.32rem;
                font-weight: 400;
                color: #CCCCCC;
                margin-top: 0.36rem;
                margin-bottom: 0.653rem;
            }
            .img{

            }
            .html{
                width: 100%;
                font-size: 0.4rem;
                img{
                    max-width: 100%;
                }
            }
        }
    }
</style>


































