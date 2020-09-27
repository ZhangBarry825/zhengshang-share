<template>
    <div class="case-page">
        <div class="background">
            <div class="center">
                <div class="line1">
                    <div class="text text1">专业开发</div>
                    <div class="x">
                        <el-image
                                style="width: 100%;height: 100%"
                                fit="cover"
                                :src="require('../../assets/images/banner-x.png')"/>
                    </div>
                    <div class="text text2">高端定制</div>
                </div>
                <div class="line2">
                    全行业APP/小程序定制开发
                </div>
            </div>
        </div>
        <div class="content">
            <div class="right">
                <van-image
                        width="100%"
                        fit="contain"
                        :src="customerCase[typeIndex].items[itemIndex].img"
                />
            </div>
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
        name: "MobileCase",
        components:{
            Header,
            Footer,
            MobileFooter
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
        display: flex;
        flex-direction: column;
        align-items: center;
        .background{
            height: 4.8rem;
            width: 100%;
            background-image: url("../../assets/images/bg2.png");
            @include background-center;
            display: flex;
            justify-content: center;
            .center{
                width: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 0 0.4rem;
                box-sizing: border-box;

                .line1 {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;

                    .x {
                        margin: 0 0.4rem;
                        width: 0.227rem;
                        height: 0.227rem;
                    }

                    .text {
                        font-size: 0.52rem;
                        font-weight: bold;
                        color: #0080FF;
                    }

                    .text2 {
                        font-size: 0.52rem;
                        color: #FF8000;
                    }
                }

                .line2 {
                    text-align: left;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    font-size: 0.48rem;
                    font-weight: 400;
                    color: #FFFFFF;
                    letter-spacing: 0.067rem;
                }
            }
        }
        .content{
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .right{
                width: 100%;
            }
        }

    }
</style>