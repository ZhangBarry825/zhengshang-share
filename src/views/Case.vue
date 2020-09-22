<template>
    <div class="case-page">
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
            <div class="left">
                <div class="item" v-for="(item,index) in customerCase[typeIndex].items" v-if="index<3" @click="changeItem(index)">
                    <van-image
                            width="100%"
                            height="100%"
                            fit="cover"
                            :src="item.cover"
                    />
                </div>
            </div>
            <div class="right">
                <van-image
                        width="100%"
                        fit="contain"
                        :src="customerCase[typeIndex].items[itemIndex].img"
                />
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    import {homeData} from "../../public/MockData";

    export default {
        name: "Case",
        components:{
            Header,
            Footer
        },
        data(){
            return{
                customerCase:homeData.customerCase,
                typeIndex:0,
                itemIndex:0
            }
        },
        methods:{
            changeItem(index){
               this.itemIndex=index;
                window.scroll(0,0)
            }
        },
        mounted() {
            window.scroll(0,0)
            this.typeIndex=this.$route.query.typeIndex||0
            this.itemIndex=this.$route.query.itemIndex||0
        }
    }
</script>

<style scoped lang="scss">
    .case-page{
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
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .left{
                width: 400px;
                display: flex;
                flex-direction: column;
                .item{
                    cursor: pointer;
                    margin-bottom: 20px;
                    width: 400px;
                    height: 320px;
                }
            }
            .right{
                width: 780px;

            }
        }

    }
</style>