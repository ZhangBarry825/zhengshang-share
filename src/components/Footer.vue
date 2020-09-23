<template>
    <div class="footer-page">
        <div class="center">
            <div class="top">
                <div class="left">
                    <div class="column">
                        <div class="title">服务</div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/business')">
                            APP开发
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/business')">
                            小程序开发
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/business')">
                            网站建设
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/business')">
                            系统集成
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/business')">
                            物联网
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/business')">
                            政务云
                        </div>
                    </div>
                    <div class="column">
                        <div class="title">关于</div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/about')">
                            公司简介
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/about')">
                            企业文化
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/contact')">
                            公司地址
                        </div>
                        <div class="item" @click="goTo('http://www.zhengshangwl.com/#/contact')">
                            联系方式
                        </div>
                    </div>
                </div>
                <div class="middle">
                    <div class="item">
                        <div class="item-left">
                            <img src="../assets/images/icon_contact1.png" alt="">
                        </div>
                        <div class="item-right">
                            <div class="line">邮箱</div>
                            <div class="line">{{footerData.email}}</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-left">
                            <img src="../assets/images/icon_contact2.png" alt="">
                        </div>
                        <div class="item-right">
                            <div class="line">电话</div>
                            <div class="line">{{footerData.tel}}</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-left">
                            <img src="../assets/images/icon_contact3.png" alt="">
                        </div>
                        <div class="item-right">
                            <div class="line">地址</div>
                            <div class="line">{{footerData.address}}</div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src="footerData.ewm" alt="">
                    <div class="text">扫码关注我们</div>
                </div>
            </div>
            <div class="bottom">
                <div class="left">{{footerData.info}}</div>
                <div class="right">
                    <div class="item">
                        <img :src="wxShwo?wx2:wx1" @mouseenter="wxShwo=true" @mouseout="wxShwo=false" alt="">
                    </div>
                    <div class="item">
                        <img :src="qqShow?qq2:qq1" @mouseenter="qqShow=true" @mouseout="qqShow=false" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {homeData} from "../../public/MockData";

    export default {
        name: "Footer",
        data() {
            return {
                wxShwo: false,
                qqShow: false,
                wx1: require('../assets/images/icon_footer_weixin1.png'),
                wx2: require('../assets/images/icon_footer_weixin2.png'),
                qq1: require('../assets/images/icon_footer_qq.png'),
                qq2: require('../assets/images/icon_footer_qq2.png'),
                footerData:homeData.footerData
            }
        },
        methods:{
            goTo(url){
                window.open(url,'_blank')
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer-page {
        width: 100%;
        min-width: 1200px;
        background-color: #222222;
        display: flex;
        justify-content: center;
        padding-top: 60px;
        padding-bottom: 30px;
        box-sizing: border-box;

        .center {
            width: 1200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .top {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .left {
                    display: flex;
                    flex-direction: row;

                    .column {
                        display: flex;
                        flex-direction: column;

                        .title {
                            font-size: 24px;
                            font-weight: 400;
                            color: #999999;
                            margin-bottom: 30px;
                        }

                        .item {
                            cursor: pointer;
                            font-size: 16px;
                            font-weight: 400;
                            color: #999999;
                            line-height: 2;
                        }
                    }

                    .column:nth-child(2) {
                        margin-left: 80px;
                    }
                }

                .middle {
                    max-width: 400px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 150px;

                    .item {
                        display: flex;
                        flex-direction: row;
                        margin: 10px 0;
                        .item-left {
                            img {
                                width: 50px;
                                height: 50px;
                            }
                        }

                        .item-right {
                            padding-left: 20px;
                            display: flex;
                            flex-direction: column;

                            .line {
                                font-size: 16px;
                                font-weight: 400;
                                color: #999999;
                                line-height: 30px;
                            }
                        }
                    }
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .text{
                        margin-top: 30px;
                        font-size: 16px;
                        font-weight: 400;
                        color: #999999;
                    }
                }
            }

            .bottom {
                margin-top: 40px;
                width: 100%;
                display: flex;
                justify-content: space-between;

                .left {
                    font-size: 16px;
                    font-weight: 400;
                    color: #999999;
                }

                .right {
                    display: flex;

                    .item {
                        cursor: pointer;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>