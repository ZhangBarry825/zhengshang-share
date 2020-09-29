<template>
    <div class="footer-page">
        <div class="center">
            <div class="top">
                    <div class="column">
                        <div class="title">服务</div>

                        <div class="items">
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
                    </div>
                    <div class="column">
                        <div class="title">关于</div>
                        <div class="items">
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
            </div>
            <div class="middle">
                <div class="left">
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
        </div>
    </div>
</template>

<script>
    import {homeData} from "../../public/MockData";

    export default {
        name: "MobileFooter",
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
        background-color: #222222;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        padding: 0.4rem;
        padding-top: 0.507rem;
        padding-bottom: 2rem;

        .center {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .top {
                width: 100%;
                display: flex;
                flex-direction: column;
                    .column {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        margin-bottom: 0.4rem;
                        .title {
                            font-size: 0.453rem;
                            font-weight: 400;
                            color: #999999;
                        }
                        .items{
                            width: calc(100% - 1.333rem);
                            display: flex;
                            flex-wrap: wrap;
                            .item {
                                cursor: pointer;
                                font-size: 0.32rem;
                                font-weight: 400;
                                color: #999999;
                                margin: 0 0.267rem;
                                line-height: 2;
                            }
                        }


                    }
            }
            .middle{
                width: 100%;
                display: flex;
                flex-direction: row;
                position: relative;
                box-sizing: border-box;
                .left {
                    max-width: 5.333rem;
                    display: flex;
                    flex-direction: column;

                    .item {
                        display: flex;
                        flex-direction: row;
                        margin: 0.05rem 0;
                        align-items: center;
                        .item-left {
                            img {
                                width: 0.667rem;
                                height: 0.667rem;
                            }
                        }

                        .item-right {
                            padding-left: 0.267rem;
                            display: flex;
                            flex-direction: column;

                            .line {
                                font-size: 0.3rem;
                                font-weight: 400;
                                color: #999999;
                                line-height: 1.5;
                            }
                        }
                    }
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: absolute;
                    right: 0.667rem;
                    img{
                        width: 1.96rem;
                        height: 1.96rem;
                    }
                    .text{
                        margin-top: 0.4rem;
                        font-size: 0.3rem;
                        font-weight: 400;
                        color: #999999;
                    }
                }
            }
        }
    }
</style>