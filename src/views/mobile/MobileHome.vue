<template>
    <div class="home" id="home">
        <div class="header-logo">
            <div class="left">
                <img src="../../assets/images/mobile/logo.png" alt="">
            </div>
            <div class="right"></div>
        </div>
        <div class="swipe-box">
            <el-carousel indicator-position="0.667rem">
                <el-carousel-item >
                    <div class="banner-item banner-item1" :style="'background-image: url('+swipeList[0].img+')'">
                        <div class="banner-context">
                            <div class="line1">
                                <div class="text text1">{{swipeList[0].leftText}}</div>
                                <div class="x">
                                    <img src="../../assets/images/mobile/banner-x.png" alt="">
                                </div>
                                <div class="text text2">{{swipeList[0].rightText}}</div>
                            </div>
                            <div class="line2">
                                {{swipeList[0].description}}
                            </div>
                            <div class="line3" @click="openDialog">立即咨询</div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="banner-item banner-item2">
                        <div class="banner-context">
                            <div class="left">
                                <div class="line1">
                                    <div class="text">{{swipeList[1].leftText}}</div>
                                </div>
                                <div class="line2">
                                    <div class="text">{{swipeList[1].description}}</div>
                                </div>
                                <div class="line3" @click="openDialog">立即咨询</div>
                            </div>
                            <div class="right">
                                <el-image
                                        style="width: 5.093rem;height: 3.8rem;"
                                        :src="swipeList[1].img"
                                        :fit="'contain'"></el-image>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
                <el-carousel-item >
                    <div class="banner-item banner-item3">
                        <div class="banner-context">
                            <div class="left">
                                <div class="line1">
                                    <div class="text">{{swipeList[2].leftText}}</div>
                                </div>
                                <div class="line2">
                                    <div class="text">{{swipeList[2].description}}</div>
                                </div>
                                <div class="line3" @click="openDialog">立即咨询</div>
                            </div>
                            <div class="right">
                                <el-image
                                        style="width: 4.44rem;height: 4.093rem;"
                                        :src="swipeList[2].img"
                                        :fit="'contain'"></el-image>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="case" id="case">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">客户案例</div>
                    </div>
                    <div class="title-line3">CUSTOMER CASE</div>
                </div>
                <div class="menus">
                    <van-tabs animated title-inactive-color="#cccccc" color="#0080FF" title-active-color="#0080FF"
                              line-width="1.067rem" line-height="0.053rem">
                        <van-tab v-for="(item,index) in customerCase" :title="item.title">
                            <div class="tab-content">
                                <div class="case-item" v-for="(item2,index2) in item.items"
                                     @click="caseDetail(index,index2)"
                                     :style="'background-image: url('+item2.cover+')'">
                                    <div class="cover">
                                        <img src="../../assets/images/search.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
        </div>
        <div class="our-service" id="our-service">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">我们的服务</div>
                    </div>
                    <div class="title-line3">OUR SERVICE</div>
                    <div class="title-line4">{{menuDescription.service}}</div>
                </div>
                <div class="items">
                    <div :class="'item service-item'+index" v-for="(item,index) in ourService">
                        <div class="logo">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-process" id="project-process">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">项目流程</div>
                    </div>
                    <div class="title-line3">PROJECT PROCESS</div>
                    <div class="title-line4">{{menuDescription.process}}</div>
                </div>
                <div class="items">
                    <div class="item" :class="{'selected':projectProcessIndex==index}"
                         @mouseenter="projectProcessIndex=index" v-for="(item,index) in projectProcess">
                        <div class="logo">
                            <img :src="item.logo" alt="">
                        </div>
                        <div class="item-title">{{item.title}}</div>
                    </div>
                    <div class="connection"></div>
                </div>
                <div class="context">
                    <el-image class="active-right-img" style="width: 5.333rem;height: 4.227rem;" fit="cover"
                               :src="projectProcess[projectProcessIndex].img"/>
                    <div class="left">
                        <div class="line1">{{projectProcess[projectProcessIndex].title}}</div>
                        <div class="line2"></div>
                        <div class="line3">{{projectProcess[projectProcessIndex].content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="our-advantage" id="our-advantage">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">我们的优势</div>
                    </div>
                    <div class="title-line3">OUR STRENGTHS</div>
                    <div class="title-line4">{{menuDescription.advantage}}</div>
                </div>
                <div class="context">
                    <div class="left">
                        <div :class="'item adv-left'+index" v-for="(item,index) in ourAdvantages.left">
                            <div class="line1">
                                <el-image
                                        style="width: 0.4rem; height: 0.4rem"
                                        :src="item.img"
                                        :fit="'contain'"></el-image>
                                <div class="text">{{item.title}}</div>
                            </div>
                            <div class="line2">{{item.content}}</div>
                        </div>
                    </div>
                    <div class="middle">
                        <img src="../../assets/images/mobile/adv-center.png" alt="">
                    </div>
                    <div class="right">
                        <div :class="'item adv-right'+index" v-for="(item,index) in ourAdvantages.right">
                            <div class="line1">
                                <div class="text">{{item.title}}</div>
                                <el-image
                                        style="width: 0.4rem; height: 0.4rem"
                                        :src="item.img"
                                        :fit="'contain'"></el-image>
                            </div>
                            <div class="line2">{{item.content}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="problems" id="problems">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">您是否有这些困扰？</div>
                    </div>
                    <div class="title-line3">PROBLEMS</div>
                    <div class="title-line4">{{menuDescription.problem}}</div>
                </div>
                <div class="items">
                    <div :class="'item active-problem'+index" v-for="(item,index) in problemList">
                        <div class="number">0{{index+1}}</div>
                        <div class="item-title">{{item.title}}</div>
                        <div class="content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="products" id="products">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">定制适合您的产品</div>
                    </div>
                    <div class="title-line3">CUSTOMIZE</div>
                    <div class="title-line4">{{menuDescription.product}}</div>
                </div>
                <div class="items">
                    <div class="item" v-for="(item,index) in productList">
                        <div class="top">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="bottom">
                            <div class="line1">
                                {{item.title}} <span>￥{{item.price}}起</span>
                            </div>
                            <div class="line2">{{item.description}}</div>
                            <div class="line3" @click="openDialog">立即咨询</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-us" id="about-us">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">关于我们</div>
                    </div>
                    <div class="title-line3">ABOUT US</div>
                    <div class="title-line4">{{menuDescription.about}}</div>
                </div>
                <div class="context">
                    <div class="top"></div>
                    <div class="bottom-box" id="scene0">
                        <div class="bottom" data-depth="0.05">
                            <div class="right" >
                                <div class="line line1">{{aboutUs.description1}}</div>
                                <div class="line line2">{{aboutUs.description2}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="about-images-box">
                        <div class="img img1">
                            <div class="img-box" id="scene1">
                                <van-image
                                        data-depth="0.3"
                                        width="100%"
                                        height="100%"
                                        fit="cover"
                                        :src="aboutUs.img1"
                                />
                            </div>
                        </div>
                        <div class="img img2">
                            <div class="img-box" id="scene2">
                                <van-image
                                        data-depth="0.2"
                                        width="100%"
                                        height="100%"
                                        fit="cover"
                                        :src="aboutUs.img2"
                                />
                            </div>
                        </div>
                        <div class="img img3">
                            <div class="img-box" id="scene3">
                                <van-image
                                        data-depth="0.3"
                                        width="100%"
                                        height="100%"
                                        fit="cover"
                                        :src="aboutUs.img3"
                                />
                            </div>
                        </div>
                        <div class="img img4">
                            <div class="img-box" id="scene4">
                                <van-image
                                        data-depth="0.3"
                                        width="100%"
                                        height="100%"
                                        fit="cover"
                                        :src="aboutUs.img4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="partners" id="partners">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">合作伙伴</div>
                    </div>
                    <div class="title-line3">PARTNER</div>
                    <div class="title-line4">{{menuDescription.partner}}</div>
                </div>
                <div class="items">
                    <div class="item" v-for="(item,index) in partners" v-if="index<10" @mouseenter="changePic(index)">
                        <el-image
                                style="width: 90%; height: 90%"
                                :src="item.img1"
                                :fit="'contain'"></el-image>
                    </div>
                </div>
            </div>
        </div>
        <div class="news" id="news">
            <div class="center">
                <div class="title">
                    <div class="title-line">
                        <div class="title-line1"></div>
                        <div class="title-line2">新闻动态</div>
                    </div>
                    <div class="title-line3">NEWS</div>
                    <div class="title-line4">{{menuDescription.news}}</div>
                </div>
                <div class="items">
                    <div class="item" v-for="(item,index) in newsList" @click="newsDetail(index)">
                        <div class="top">
                            <el-image
                                    class="img1"
                                    style="width: 100%; height: 100%"
                                    :src="item.img"
                                    :fit="'cover'"></el-image>
                        </div>
                        <div class="line1">{{item.title}}</div>
                        <div class="line2">{{item.content.description[0]}}</div>
                    </div>
                </div>
            </div>
        </div>
        <MobileFloat></MobileFloat>
        <MobileFooter></MobileFooter>
    </div>
</template>

<script>
    import Parallax from 'parallax-js'
    import Header from "../../components/Header";
    import {homeData} from "../../../public/MockData";
    import Footer from "../../components/Footer";
    import {formPost} from "../../utils/api";
    import MobileFooter from "../../components/MobileFooter";
    import MobileFloat from "../../components/MobileFloat";

    export default {
        name: 'MobileHome',
        components: {
            Header,
            Footer,
            MobileFooter,
            MobileFloat
        },
        data() {
            return {
                projectProcessIndex: 0,
                swipeList: homeData.swipeList,
                menuDescription: homeData.menuDescription,
                customerCase: homeData.customerCase,
                ourService: homeData.ourService,
                projectProcess: homeData.projectProcess,
                problemList: homeData.problemList,
                ourAdvantages: homeData.ourAdvantages,
                productList: homeData.productList,
                aboutUs: homeData.aboutUs,
                partners: homeData.partners,
                newsList: homeData.newsList,
                dialogData: homeData.dialogData,
                name: '',
                tel: '',
                message: '',
                showDialog: false,
                timer: '',
            };
        },
        methods: {
            changePic(index){
                this.partners[index].img1=this.partners[index].img2
            },
            newsDetail(index) {
                this.$router.push({
                    path: '/mobile/news',
                    query: {
                        newsIndex: index,
                    }
                })
            },
            caseDetail(typeIndex, itemIndex) {
                this.$router.push({
                    path: '/mobile/case',
                    query: {
                        typeIndex: typeIndex,
                        itemIndex: itemIndex,
                    }
                })
            },
            openDialog() {
                this.$dia()
            },
            autoAlertDialog() {
                let that = this
                that.timer = setInterval(() => {
                    that.showDialog = true
                    clearInterval(that.timer)
                    that.autoAlertDialog()
                }, 30000)
            },
            postForm() {
                let that = this
                formPost({
                    name: this.name,
                    mobile: this.tel,
                    remark: this.message,
                }).then((res) => {
                    if (res.code == 1) {
                        that.$message.success('提交成功，我们会尽快与您联系！')
                        setTimeout(() => {
                            that.showDialog = false
                        }, 2000)
                    }
                })

            }
        },
        mounted() {
            let clientWidth = document.documentElement.clientWidth;
            document.documentElement.style.fontSize = clientWidth / 10 + 'px';

            //自动咨询弹窗 30s
            this.autoAlertDialog()
            setTimeout(()=>{
              this.showDialog=true
            },3000)

            this.$ami('.service-item0', 200, 'bottom', '30%', .8, true)
            this.$ami('.service-item1', 300, 'bottom', '30%', .8, true)
            this.$ami('.service-item2', 400, 'bottom', '30%', .8, true)
            this.$ami('.service-item3', 500, 'bottom', '30%', .8, true)
            this.$ami('.service-item4', 200, 'bottom', '30%', .8, true)
            this.$ami('.service-item5', 300, 'bottom', '30%', .8, true)
            this.$ami('.service-item6', 400, 'bottom', '30%', .8, true)
            this.$ami('.service-item7', 500, 'bottom', '30%', .8, true)

            this.$ami('.active-right-img', 300, 'right', '100%', 1, true)

            this.$ami('.adv-left0', 200, 'right', '30%', .8, true)
            this.$ami('.adv-left1', 200, 'right', '30%', .8, true)
            this.$ami('.adv-left2', 200, 'right', '30%', .8, true)
            this.$ami('.adv-right0', 200, 'left', '30%', .8, true)
            this.$ami('.adv-right1', 200, 'left', '30%', .8, true)
            this.$ami('.adv-right2', 200, 'left', '30%', .8, true)

            this.$ami('.active-problem0', 300, 'bottom', '20%', .9, true)
            this.$ami('.active-problem1', 300, 'bottom', '20%', .9, true)
            this.$ami('.active-problem2', 300, 'bottom', '20%', .9, true)
            this.$ami('.active-problem3', 300, 'bottom', '20%', .9, true)
            this.$ami('.active-problem4', 300, 'bottom', '20%', .9, true)
            this.$ami('.active-problem5', 300, 'bottom', '20%', .9, true)

        }
    }
</script>
<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .home {
        overflow: hidden;
        width: 100%;
        height: 100%;

        .header-logo{
            width: 100%;
            display: flex;
            position: absolute;
            z-index: 8;
            top:0;
            padding: 0.267rem 0.267rem;
            box-sizing: border-box;
            .left{
                img{
                    width: 100px;
                    height: 30px;
                }
            }
        }
        .swipe-box {
            width: 100%;
            height: 6.147rem;
            background: #000000;


            ::v-deep .el-carousel__container {
                height: 6.147rem;
            }

            ::v-deep .el-carousel__button {
                display: none;
            }

            ::v-deep .el-carousel__indicator {
                width: 0.213rem !important;
                height: 0.213rem !important;
                background: rgba(253, 253, 255, .5);
                border-radius: 50%;

                padding: 0;
                margin: 0.2rem 0.067rem;

            }

            ::v-deep .el-carousel__arrow {
                display: none;
                height: 0.8rem;
                width: 0.8rem;
                background-color: rgba(255, 255, 255, .2);

                i {
                    font-size: 0.267rem;
                }
            }
            ::v-deep .is-active{
                background-color: #FF8000;
            }

            .banner-item1 {
                width: 100%;
                height: 100%;
                background-image: url("../../assets/images/bg.png");
                @include background-center;

                .banner-context {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 1.6rem;

                    .line1 {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .x {
                            margin: 0 0.667rem;
                            animation: spin 10s linear infinite;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            img{
                                width: 0.333rem;
                                height: 0.333rem;
                            }
                        }

                        @keyframes spin {
                            to {
                                transform: rotate(360deg);
                            }
                        }

                        .text {
                            font-size: 0.787rem;
                            font-weight: bold;
                            color: #0080FF;
                        }

                        .text2 {
                            color: #FF8000;
                        }
                    }

                    .line2 {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        padding-left: 0.33rem;
                        font-size: 0.387rem;
                        font-weight: 400;
                        color: #FFFFFF;
                        letter-spacing: 0.267rem;
                        margin-top: 0.213rem;
                    }

                    .line3 {
                        margin-top:0.467rem;
                        cursor: pointer;
                        border: 1px solid rgba(255, 255, 255, .5);
                        opacity: .8;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 2.667rem;
                        height: 0.813rem;
                        border-radius: 0.4rem;
                        font-size: 0.32rem;
                        font-weight: 400;
                        color: #FFFFFF;
                    }


                }
            }
            .banner-item2 {
                width: 100%;
                height: 100%;
                background-color: #21172b;
                display: flex;
                justify-content: center;

                .banner-context {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 0.8rem;
                    .left{
                        padding-left: 0.4rem;
                        .line1 {
                            .text {
                                letter-spacing: 0.04rem;
                                font-size: 0.507rem;
                                font-weight: bold;
                                color: #0ce2a1;
                                white-space: nowrap
                            }
                        }

                        .line2 {
                            margin-top: 0.187rem;
                            margin-bottom: 0.267rem;
                            .text{
                                letter-spacing: 0.01rem;
                                font-weight: 400;
                                color: #FFFFFF;
                                white-space: nowrap;
                                font-size: 0.32rem;
                            }
                        }

                        .line3 {
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 0.32rem;
                            font-weight: 400;
                            color: #FFFFFF;
                            width: 2.667rem;
                            height: 0.8rem;
                            border: 1px solid rgba(255, 255, 255, .5);
                            border-radius: 0.4rem;
                        }
                    }
                    .right{
                        margin-right: 0.4rem;
                    }


                }
            }
            .banner-item3 {
                width: 100%;
                height: 100%;
                background-color: #07074a;
                display: flex;
                justify-content: center;

                .banner-context {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 0.8rem;
                    .left{
                        padding-left: 0.4rem;
                        .line1 {
                            .text {
                                letter-spacing: 0.04rem;
                                font-size: 0.507rem;
                                font-weight: bold;
                                color: #3485ff;
                                white-space: nowrap
                            }
                        }

                        .line2 {
                            margin-top: 0.187rem;
                            margin-bottom: 0.267rem;
                            .text{
                                letter-spacing: 0.01rem;
                                font-weight: 400;
                                color: #FFFFFF;
                                white-space: nowrap;
                                font-size: 0.32rem;
                            }
                        }

                        .line3 {
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 0.32rem;
                            font-weight: 400;
                            color: #FFFFFF;
                            width: 2.667rem;
                            height: 0.8rem;
                            border: 1px solid rgba(255, 255, 255, .5);
                            border-radius: 0.4rem;
                        }
                    }
                    .right{
                        /*margin-right: 0.4rem;*/
                    }


                }
            }
        }

        .case {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #ffffff;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                position: relative;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0.8rem 0;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #222222;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.147rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 10px;
                    }


                }

                .menus {
                    width: 100%;

                    ::v-deep .van-tabs {
                        max-width: 100%;

                        .van-tabs__wrap {
                            height: 0.933rem;

                            .van-tabs__nav {
                                /*padding-bottom: 50px;*/
                                .van-tab__text {
                                    font-size: 0.4rem;
                                    font-weight: 400;
                                }
                            }
                        }

                    }

                    .tab-content {
                        margin-top: 0.4rem;
                        min-height: 4.907rem;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        padding: 0 0.4rem;
                        box-sizing: border-box;
                        margin-bottom: 0.667rem;

                        .case-item:nth-child(2n-1){
                            margin-right: 0.267rem;
                        }
                        .case-item {
                            margin-bottom: 0.267rem;
                            width: 4.46rem;
                            height: 4.5rem;
                            background-color: #0d85f6;
                            @include background-center;
                            cursor: pointer;
                            overflow: hidden;

                            .cover {
                                width: 100%;
                                height: 100%;
                                background-color: rgba(0, 128, 255, .8);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                opacity: 0;
                                transition: all .5s;
                            }

                        }

                        .case-item:hover {
                            .cover {
                                opacity: 1;
                                animation: slideDownReturn 1s 1;
                                -webkit-animation-name: slideDownReturn;
                                animation-name: slideDownReturn;
                            }

                            @-webkit-keyframes slideDownReturn {
                                0% {
                                    -webkit-transform-origin: 0 0;
                                    transform-origin: 0 0;
                                    -webkit-transform: translateY(100%);
                                    transform: translateY(100%);
                                }

                                100% {
                                    -webkit-transform-origin: 0 0;
                                    transform-origin: 0 0;
                                    -webkit-transform: translateY(0%);
                                    transform: translateY(0%);
                                }
                            }
                            @keyframes slideDownReturn {
                                0% {
                                    -webkit-transform-origin: 0 0;
                                    transform-origin: 0 0;
                                    -webkit-transform: translateY(100%);
                                    transform: translateY(100%);
                                }

                                100% {
                                    -webkit-transform-origin: 0 0;
                                    transform-origin: 0 0;
                                    -webkit-transform: translateY(0%);
                                    transform: translateY(0%);
                                }
                            }
                        }
                    }
                }
            }
        }

        .our-service {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: grey;
            background-image: url("../../assets/images/service.png");
            @include background-center;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0.8rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.2rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.133rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        top: 2.333rem;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 10px;
                    }
                }

                .items {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-top: 1.333rem;
                    padding: 0 0.2rem;
                    box-sizing: border-box;

                    .item:nth-child(2n-1){
                        margin-right: 0.267rem;
                    }
                    .item {
                        flex-shrink: 1;
                        cursor: pointer;
                        width: 4.66rem;
                        height: 4.5rem;
                        flex-shrink: 1;
                        background: #ffffff;
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        position: relative;
                        padding: 0 0.4rem;
                        padding-top: 0.667rem;
                        box-sizing: border-box;
                        margin-bottom: 1.067rem;
                        .logo {
                            width: 1.333rem;
                            height: 1.333rem;
                            border-radius: 50%;
                            position: absolute;
                            top: -0.667rem;

                            left:50%;
                            transform: translate(-50%,0);

                            img {
                                width: 1.333rem;
                                height: 1.333rem;
                            }
                        }

                        .item-title {
                            font-size: 0.4rem;
                            font-weight: 500;
                            color: #222222;
                            margin: 0.267rem 0;
                        }

                        .item-content {
                            width: 100%;
                            text-align: justify;
                            font-size: 0.35rem;
                            font-weight: 400;
                            color: #666666;
                            line-height: 1.5;
                            @include line-hidden(4);

                        }
                    }

                    .item:hover {
                        .logo {
                            img{
                                border-radius: 50%;
                                animation: spin 3s linear infinite;
                            }
                        }

                        @keyframes spin {
                            to {
                                transform: rotate(360deg);
                            }
                        }
                    }

                }
            }
        }

        .project-process {
            width: 100%;
            display: flex;
            justify-content: center;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #222222;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.333rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #222222;
                        bottom: 0.133rem;
                    }
                }
                .items::-webkit-scrollbar{
                    display: none;
                }
                .items {
                    width: 100%;
                    padding: 0.8rem 0.4rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    overflow-x: scroll;
                    box-sizing: border-box;
                    .item:first-child{
                        padding-left: 0;
                    }
                    .item:last-child{
                        padding-right: 0;
                    }
                    .item {
                        padding: 0 0.267rem;
                        cursor: pointer;
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .logo {
                            width: 1.533rem;
                            height: 1.533rem;
                            img{
                                width:50%;
                                height: 50%;
                            }
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #CCCCCC;
                            border-radius: 50%;
                            transition: all .5s;
                        }

                        .item-title {
                            margin-top: 0.267rem;
                            font-size: 0.3rem;
                            font-weight: 400;
                            color: #222222;
                        }
                    }

                    .item:hover {
                        .logo {
                            transform: translate(0, -10px);
                        }
                    }

                    .selected {
                        .logo {
                            background-color: #0080FF;
                            transform: translate(0, -0.133rem);
                        }
                    }

                    .connection {
                        position: absolute;
                        top: 1.5rem;
                        left: 0.4rem;
                        width: 150%;
                        height: 0.027rem;
                        background: #CCCCCC;
                    }
                }

                .context {
                    width: 100%;
                    height: 5.7rem;
                    position: relative;
                    box-sizing: border-box;

                    .left {
                        background: #0080FF;
                        width: 8.68rem;
                        height: 4.747rem;
                        display: flex;
                        flex-direction: column;
                        padding: 0.52rem 0.4rem;
                        padding-right: 4.32rem;
                        box-sizing: border-box;

                        .line1 {
                            font-size: 0.4rem;
                            font-weight: bold;
                            color: #FFFFFF;
                        }

                        .line2 {
                            width: 0.48rem;
                            height: 0.067rem;
                            background-color: #ffffff;
                            margin: 0.4rem 0;
                        }

                        .line3 {
                            font-size: 0.3rem;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 2;
                            @include line-hidden(3);
                        }
                    }

                    ::v-deep .active-right-img {
                        position: absolute;
                        right: 0;
                        top: 1rem;
                        overflow: hidden;
                        cursor: pointer;

                        .van-image__img {
                            transition: all 1s;
                        }
                    }

                    ::v-deep .van-image:hover {
                        .van-image__img {
                            transform: scale(1.1);
                        }
                    }

                }
            }
        }

        .our-advantage {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: grey;
            background-image: url("../../assets/images/advantage.png");
            @include background-center;

            .center {
                width: 100%;
                padding-bottom: 0.4rem;
                display: flex;
                flex-direction: column;
                align-items: center;


                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.147rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 0.133rem;
                    }
                }

                .context {
                    width: 100%;
                    margin-top: 0.933rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    padding: 0 0.267rem;
                    box-sizing: border-box;
                    .left {
                        display: flex;
                        width: 3.84rem;
                        flex-direction: column;

                        .item {
                            margin-bottom: .53rem;

                            .line1 {
                                display: flex;
                                align-items: center;
                                .text {
                                    font-size: 0.35rem;
                                    font-weight: bold;
                                    color: #FFFFFF;
                                    margin-left: 0.1rem;
                                }
                            }

                            .line2 {
                                margin-top: 0.24rem;
                                font-size: 0.3rem;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 0.48rem;
                                text-align: left;
                                @include line-hidden(3)
                            }
                        }

                        .item:last-child {
                            margin-bottom: 0;
                        }
                    }

                    .middle {
                        position: absolute;
                        left: calc(50% - 1.25rem);
                        display: flex;
                        top: .2rem;
                        justify-content: center;
                        height: 5.3rem;
                        width: 2.5rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }

                    }

                    .right {
                        display: flex;
                        width: 3.84rem;
                        flex-direction: column;
                        .item {
                            margin-bottom: .53rem;
                            .line1 {
                                display: flex;
                                align-items: center;
                                justify-content: flex-end;

                                img {
                                    width: 0.4rem;
                                    height: 0.4rem;
                                }

                                .text {
                                    font-size: 0.35rem;
                                    font-weight: bold;
                                    color: #FFFFFF;
                                    margin-right: 0.1rem;
                                }
                            }

                            .line2 {
                                margin-top: 0.24rem;
                                font-size: 0.3rem;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 0.48rem;
                                text-align: right;
                                @include line-hidden(3)
                            }
                        }

                        .item:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }

        .problems {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 0.4rem;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #222222;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.333rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #222222;
                        bottom: 0.133rem;
                    }
                }

                .items {
                    margin-top: 0.8rem;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 0 0.8rem;
                    box-sizing: border-box;

                    .item {
                        transition: all .5s;
                        cursor: pointer;
                        width: 100%;
                        height: 2.933rem;
                        margin-bottom: 0.4rem;
                        border: 2px solid #EEEEEE;
                        position: relative;
                        padding: 0.533rem;
                        padding-left: 0.933rem;
                        box-sizing: border-box;

                        .number {
                            font-size: 0.933rem;
                            padding: 0.133rem;
                            box-sizing: border-box;
                            font-weight: 600;
                            letter-spacing: -1px;
                            color: #0080FF;
                            background-color: #ffffff;
                            position: absolute;
                            top: -0.4rem;
                            left: -0.533rem;
                        }

                        .item-title {
                            font-size: 0.4rem;
                            font-weight: bold;
                            color: #222222;
                        }

                        .content {
                            margin-top: 0.133rem;
                            font-size: 0.35rem;
                            font-weight: 400;
                            color: #666666;
                            line-height: 1.5;
                            @include line-hidden(3)
                        }
                    }
                    .item:hover{
                        border: 2px solid gainsboro;
                        box-shadow: 0 0 0.2rem #EEEEEE;
                    }


                }
            }
        }

        .products {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: grey;
            padding-bottom: 0.4rem;
            background-image: url("../../assets/images/products.png");
            @include background-center;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.333rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 0.133rem;
                    }
                }

                .items {
                    margin-top: 0.667rem;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 0 0.4rem;
                    box-sizing: border-box;


                    .item:nth-child(2n){
                        border-left: 1px solid rgba(0, 0, 0, .5);
                    }

                    .item:nth-child(2n-1){
                        border-radius: 0.133rem 0rem 0rem 0.133rem;
                    }

                    .item:nth-child(2n) {
                        border-radius: 0rem 0.133rem 0.133rem 0rem;
                    }

                    .item {
                        width: 49.5%;
                        display: flex;
                        flex-direction: column;
                        background-color: #ffffff;
                        margin-bottom: 0.133rem;

                        .top {
                            width: 100%;
                            height: 2.667rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            img{
                                width: 1.333rem;
                                height: 1.333rem;
                            }
                        }

                        .bottom {
                            border-top: 1px solid rgba(0, 0, 0, .1);
                            height: 3.333rem;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-around;
                            padding: 0.267rem;
                            box-sizing: border-box;

                            .line1 {
                                font-size: 0.4rem;
                                font-weight: 400;
                                color: #222222;

                                span {
                                    color: #FF7F00;
                                }
                            }

                            .line2 {
                                @include line-hidden(2);
                                text-align: center;
                                font-size: 0.3rem;
                                font-weight: 400;
                                color: #999999;
                            }

                            .line3 {
                                transition: all .5s;
                                cursor: pointer;
                                width: 4rem;
                                height: 0.8rem;
                                border: 1px solid #0080FF;
                                border-radius: 0.4rem;

                                font-size: 0.36rem;
                                font-weight: 400;
                                color: #0080FF;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }

                            .line3:hover {
                                color: #0080FF;
                                border: 1px solid #0080FF;

                            }
                        }
                    }
                }
            }
        }

        .about-us {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 0.4rem;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #222222;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.333rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #222222;
                        bottom: 0.133rem;
                    }
                }

                .context {
                    margin-top: 0.667rem;
                    width: 100%;
                    height: 11.333rem;
                    position: relative;

                    .about-images-box {
                        width: 100%;
                        height: 100%;
                        position: absolute;

                        .img {
                            cursor: pointer;
                            position: absolute;
                            z-index: 2;

                            .img-box {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .img1 {
                            left:0;
                            width: 4.147rem;
                            height: 5.947rem;
                        }

                        .img2 {
                            width: 2.4rem;
                            height: 1.813rem;
                            position: absolute;
                            right: 2.667rem;
                        }

                        .img3 {
                            width: 1.44rem;
                            height: 1.813rem;
                            position: absolute;
                            right: 1.027rem;
                        }

                        .img4 {
                            width: 5.387rem;
                            height: 2.293rem;
                            position: absolute;
                            right: 1.6rem;
                            bottom: -0.2rem;
                        }
                    }

                    .top {
                        width: 100%;
                        height: 4.427rem;
                        border: 5px solid #0080FF;
                        position: absolute;
                        top: .8rem;
                    }

                    .bottom-box {
                        width: 100%;
                        height: 8rem;
                        position: absolute;
                        top: 2.5rem;
                        .bottom {
                            width: 100%;
                            height: 100%;
                            background: #0080FF;
                            padding: 0.533rem 0.4rem;
                            padding-bottom: 0;
                            box-sizing: border-box;
                            display: flex;
                            justify-content: flex-end;

                            .right {
                                width: 100%;
                                max-height: 100%;
                                display: flex;
                                flex-direction: column;

                                .line {
                                    text-indent: 2em;
                                    font-size: 0.33rem;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 0.48rem;
                                    @include line-hidden(8);
                                }
                                .line1{
                                    padding-left: 4rem;
                                }
                                .line2{
                                    margin-top: 0.267rem;
                                }
                            }
                        }
                    }
                }
            }
        }

        .partners {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: grey;
            padding-bottom: 0.6rem;
            background-image: url("../../assets/images/partner.png");
            @include background-center;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.333rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 0.133rem;
                    }
                }

                .items {
                    width: 100%;
                    margin-top: 0.667rem;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding:  0 0.267rem;
                    box-sizing: border-box;
                    overflow: hidden;
                    border-radius: 0.133rem;

                    .item {
                        cursor: pointer;
                        width: 1.86rem;
                        height: 1.8rem;
                        background: #FFFFFF;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        ::v-deep .el-image{
                            transition: all 1s;
                        }
                    }
                    .item:hover{
                        ::v-deep .el-image{
                            transform: rotateY(360deg);
                        }
                    }
                    .item:nth-child(1),.item:nth-child(2),.item:nth-child(3),.item:nth-child(4),.item:nth-child(5),{
                        border-left: 1px solid rgba(0,0,0,0.1) !important;
                    }
                    .item:nth-child(n+6){
                        border-left: 1px solid rgba(0,0,0,0.1) !important;
                        border-top: 1px solid rgba(0,0,0,0.1) !important;
                    }
                }
            }
        }

        .news {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 0.4rem;

            .center {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {

                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1.067rem 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            width: 0.333rem;
                            height: 0.067rem;
                            background-color: #FF7F00;
                            margin-top: 0.267rem;
                            margin-right: 0.133rem;
                        }

                        .title-line2 {
                            font-size: 0.8rem;
                            font-weight: bold;
                            color: #222222;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 1.333rem;
                        font-size: 0.96rem;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        padding: 0 0.267rem;
                        box-sizing: border-box;
                        position: absolute;
                        top: 2.5rem;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 0.35rem;
                        font-weight: 400;
                        color: #222222;
                        bottom: 0.133rem;
                    }
                }

                .items {
                    margin-top: 0.667rem;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    padding: 0 0.4rem;
                    justify-content: space-between;
                    box-sizing: border-box;
                    .item {
                        cursor: pointer;
                        width: 4.4rem;
                        height: 5.733rem;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 0.4rem;

                        .top {
                            width: 100%;
                            height: 3.467rem;
                            overflow: hidden;
                            ::v-deep .el-image{
                                transition: all 1s;
                            }
                        }

                        .line1 {
                            font-size: 0.35rem;
                            font-weight: bold;
                            color: #222222;
                            @include line-hidden(1);
                            margin: 0.4rem 0;
                            max-height: 1.2em;
                        }

                        .line2 {
                            font-size: 0.3rem;
                            font-weight: 400;
                            color: #666666;
                            line-height: 1.5;
                            max-height: 1.067rem;
                            @include line-hidden(2);
                        }
                    }
                }
            }
        }



        .dialog-box {
            z-index: 9;
            position: fixed;
            top: 20%;
            width: 10rem;
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 10px rgba(151, 151, 151, 0.47);
            border-radius: 5px;

            .top {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                width: 100%;
                height: 250px;
                background-color: #0080ff;
                background-image: url("../../assets/images/kfbj.png");
                padding: 40px 40px;
                background-position: top center;
                background-repeat: no-repeat;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-end;
                position: relative;

                .close {
                    cursor: pointer;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }

                .kf {
                    position: absolute;
                    left: 40px;
                    top: -50px;
                    transform: scale(.9);
                }

                .right {
                    display: flex;
                    flex-direction: column;

                    .line1 {
                        font-size: 50px;
                        font-weight: 500;
                        color: #FFFFFF;
                        line-height: 80px;
                    }

                    .line2 {
                        font-size: 25px;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin: 15px 0;
                    }

                    .line3 {
                        display: flex;
                        align-items: center;
                        img{
                            width: 30px;
                        }
                        .text {
                            font-size: 25px;
                            color: #FFFFFF;
                            margin-left: 20px;
                        }
                    }
                }
            }

            .bottom {
                width: 100%;
                height: 160px;
                background-color: #ffffff;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;

                .line1 {
                    width: 100%;
                    display: flex;

                    ::v-deep .el-input:nth-child(2) {
                        margin-left: 10px;
                    }
                }

                .line2 {
                    margin-top: 10px;
                    width: 100%;
                    display: flex;

                    ::v-deep .el-textarea {
                        margin-right: 10px;
                    }
                    ::v-deep .el-textarea__inner{
                        overflow-y:hidden
                    }

                    .el-button--danger {
                        background-color: #ff7f00;
                    }
                }
            }
        }

        .dialog-box {
            animation: twisterInUp 2s 1;
            -webkit-animation-name: twisterInUp;
            animation-name: twisterInUp;
        }

        @-webkit-keyframes twisterInUp {
            0% {
                opacity: 0;
                -webkit-transform-origin: 100% 0;
                transform-origin: 100% 0;
                -webkit-transform: scale(0, 0) rotate(180deg) translateY(100%);
                transform: scale(0, 0) rotate(90deg) translateY(100%);
            }

            30% {
                -webkit-transform-origin: 100% 0;
                transform-origin: 100% 0;
                -webkit-transform: scale(0, 0) rotate(180deg) translateY(100%);
                transform: scale(0, 0) rotate(90deg) translateY(100%);
            }

            100% {
                opacity: 1;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scale(1, 1) rotate(0deg) translateY(0);
                transform: scale(1, 1) rotate(0deg) translateY(0);
            }
        }
        @keyframes twisterInUp {
            0% {
                opacity: 0;
                -webkit-transform-origin: 100% 0;
                transform-origin: 100% 0;
                -webkit-transform: scale(0, 0) rotate(90deg) translateY(100%);
                transform: scale(0, 0) rotate(90deg) translateY(100%);
            }

            30% {
                -webkit-transform-origin: 100% 0;
                transform-origin: 100% 0;
                -webkit-transform: scale(0, 0) rotate(90deg) translateY(100%);
                transform: scale(0, 0) rotate(90deg) translateY(100%);
            }

            100% {
                opacity: 1;
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-transform: scale(1, 1) rotate(0deg) translateY(0);
                transform: scale(1, 1) rotate(0deg) translateY(0);
            }
        }

    }

</style>
