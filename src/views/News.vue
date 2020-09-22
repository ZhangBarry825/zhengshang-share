<template>
    <div class="news-page">
        <Header :needFixed="true"></Header>
        <div class="background">
            <div class="center">
                <div class="line1">
                    <div class="text text1">专业开发</div>
                    <div class="x">
                        <van-image
                                width="28px"
                                height="28px"
                                fit="cover"
                                :src="require('../assets/images/banner-x.png')"
                        />
                    </div>
                    <div class="text text2">高端定制</div>
                </div>
                <div class="line2">
                    全行业APP/小程序定制开发
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">{{newsList[0].title}}</div>
            <div class="time">{{newsList[0].time}} 发布</div>
            <div class="text" v-for="(item,index) in newsList[newsIndex].content.description">{{item}}</div>
            <div class="img">
                <van-image
                        width="100%"
                        fit="contain"
                        :src="newsList[0].img"
                />
            </div>
            <div class="text" v-for="(item,index) in newsList[newsIndex].content.text">{{item}}</div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import {homeData} from "../../public/MockData";

    export default {
        name: "News",
        components:{
            Header,
            Footer
        },
        data(){
            return{
                newsList:homeData.newsList,
                newsIndex:0
            }
        },
        methods:{

        },
        mounted() {
            window.scroll(0,0)
            this.newsIndex=this.$route.query.index||0
        }
    }
</script>

<style scoped lang="scss">
    .news-page{
        width: 100%;
        min-width: 1200px;
        padding-top: 87px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .background{
            height: 320px;
            width: 100%;
            background-image: url("../assets/images/bg2.png");
            @include background-center;
            display: flex;
            justify-content: center;
            .center{
                width: 1200px;
                padding-right:600px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-bottom: 40px;

                .line1 {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .x {
                        margin: 0 30px;
                    }

                    .text {
                        font-size: 60px;
                        font-weight: bold;
                        color: #0080FF;
                        line-height: 161px;
                    }

                    .text2 {
                        color: #FF8000;
                    }
                }

                .line2 {
                    text-align: left;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    font-size: 36px;
                    font-weight: 400;
                    color: #FFFFFF;
                    letter-spacing: 5px;
                }
            }
        }
        .content{
            margin: 80px 0;
            width: 1200px;
            min-height: 500px;
            .title{
                width: 100%;
                text-align: center;
                font-size: 30px;
                font-weight: 400;
                color: #222222;
            }
            .time{
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-weight: 400;
                color: #CCCCCC;
                margin: 28px 0;
                margin-bottom: 50px;
            }
            .text{
                text-indent: 2em;
                font-size: 18px;
                font-weight: 400;
                color: #222222;
                line-height: 36px;
            }
            .img{
                width: 100%;
                margin: 20px 0;
            }
        }
    }
</style>