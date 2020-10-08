<template>
    <div class="home" id="home">
        <Header></Header>
        <div class="swipe-box">
            <el-carousel indicator-position="50px">
                <el-carousel-item >
                    <div class="banner-item banner-item1" :style="'background-image: url('+swipeList[0].img+')'">
                        <div class="banner-context">
                            <div class="line1">
                                <div class="text text1">{{swipeList[0].leftText}}</div>
                                <div class="x">
                                    <img src="../assets/images/banner-x.png" alt="">
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
                              line-width="80px" line-height="4px">
                        <van-tab v-for="(item,index) in customerCase" :title="item.title">
                            <div class="tab-content">
                                <div class="case-item" v-for="(item2,index2) in item.items"
                                     @click="caseDetail(index,index2)"
                                     :style="'background-image: url('+item2.cover+')'">
                                    <div class="cover">
                                        <img src="../assets/images/search.png" alt="">
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
                    <van-image class="active-right-img" width="530" height="420" fit="cover"
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
                                        style="width: 30px; height: 30px"
                                        :src="item.img"
                                        :fit="'contain'"></el-image>
                                <div class="text">{{item.title}}</div>
                            </div>
                            <div class="line2">{{item.content}}</div>
                        </div>
                    </div>
                    <div class="middle">
                        <img src="../assets/images/advantage1.png" alt="">
                        <div class="button" @click="openDialog">立即咨询</div>
                    </div>
                    <div class="right">
                        <div :class="'item adv-right'+index" v-for="(item,index) in ourAdvantages.right">
                            <div class="line1">
                                <div class="text">{{item.title}}</div>
                                <el-image
                                        style="width: 30px; height: 30px"
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
                    <div class="title-line3">DO YOU HAVE THESE PROBLEMS?</div>
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
                    <div class="title-line3">CUSTOMIZE YOUR PRODUCTS</div>
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
                                <div class="line">{{aboutUs.description1}}</div>
                                <div class="line">{{aboutUs.description2}}</div>
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
                    <div class="title-line3">COOPERATIVE PARTNER</div>
                    <div class="title-line4">{{menuDescription.partner}}</div>
                </div>
                <div class="items">
                    <div class="item" v-for="(item,index) in partners" v-if="index<10" @mouseenter="changePic(index)">
                        <el-image
                                class="img1"
                                style="width: 10rem; height: 10rem"
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
        <transition name="fade">
            <div class="dialog-box" v-if="showDialog">
                <div class="top">
                    <img @click="showDialog=false" src="../assets/images/cccc.png" alt="" class="close">
                    <img src="../assets/images/kf.png" alt="" class="kf">
                    <div class="right">
                        <div class="line1">{{dialogData.title}}</div>
                        <div class="line2">{{dialogData.description}}</div>
                        <div class="line3">
                            <img src="../assets/images/kfdh.png" alt="" class="tel">
                            <div class="text">{{dialogData.tel}}</div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="line1">
                        <el-input v-model="name" placeholder="姓名："></el-input>
                        <el-input v-model="tel" placeholder="联系方式："></el-input>
                    </div>
                    <div class="line2">
                        <el-input
                                type="textarea"
                                placeholder="请输入您的需求："
                                v-model="message"
                                resize="none"
                                :rows="3"
                        ></el-input>
                        <el-button type="danger" @click="postForm">咨询</el-button>
                    </div>
                </div>
            </div>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
    import Parallax from 'parallax-js'
    import Header from "../components/Header";
    import {homeData} from "../../public/MockData";
    import Footer from "../components/Footer";
    import {formPost} from "../utils/api";

    export default {
        name: 'Home',
        components: {
            Header,
            Footer
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
                    path: '/news',
                    query: {
                        newsIndex: index,
                    }
                })
            },
            caseDetail(typeIndex, itemIndex) {
                this.$router.push({
                    path: '/case',
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

            var scene0 = document.getElementById('scene0');
            var parallaxInstance0 = new Parallax(scene0);
            var scene1 = document.getElementById('scene1');
            var parallaxInstance1 = new Parallax(scene1);
            var scene2 = document.getElementById('scene2');
            var parallaxInstance2 = new Parallax(scene2);
            var scene3 = document.getElementById('scene3');
            var parallaxInstance3 = new Parallax(scene3);
            var scene4 = document.getElementById('scene4');
            var parallaxInstance4 = new Parallax(scene4);
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
        min-width: 1200px;

        .swipe-box {
            width: 100%;
            height: 945px;
            background: #000000;

            ::v-deep .el-carousel__container {
                height: 945px;
            }

            ::v-deep .el-carousel__button {
                display: none;
            }

            ::v-deep .el-carousel__indicator {
                width: 16px !important;
                height: 16px !important;
                background: rgba(253, 253, 255, .5);
                border-radius: 50%;

                padding: 0;
                margin: 30px 5px;

            }

            ::v-deep .el-carousel__arrow {
                height: 60px;
                width: 60px;
                background-color: rgba(255, 255, 255, .2);

                i {
                    font-size: 20px;
                }
            }
            ::v-deep .is-active{
                background-color: #FF8000;
            }

            .banner-item1 {
                width: 100%;
                height: 100%;
                background-image: url("../assets/images/bg.png");
                @include background-center;

                .banner-context {
                    padding-top: 343px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .line1 {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .x {
                            margin: 0 50px;
                            animation: spin 10s linear infinite;
                        }

                        @keyframes spin {
                            to {
                                transform: rotate(360deg);
                            }
                        }

                        .text {
                            font-size: 100px;
                            font-weight: bold;
                            color: #0080FF;
                            line-height: 161px;
                        }

                        .text2 {
                            color: #FF8000;
                        }
                    }

                    .line2 {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        padding-left: 50px;
                        font-size: 48px;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 124px;
                        letter-spacing: 25px;
                    }

                    .line3 {
                        margin-top: 50px;
                        cursor: pointer;
                        width: 200px;
                        height: 60px;
                        border: 1px solid rgba(255, 255, 255, .5);
                        border-radius: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        font-size: 24px;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 24px;
                    }

                    .line3 {
                        z-index: 1;
                        position: relative;
                        font-size: inherit;
                        font-family: inherit;
                        color: white;
                        outline: none;
                        overflow: hidden;
                        transition: color 0.4s ease-in-out;
                    }

                    .line3::before {
                        content: '';
                        z-index: -1;
                        position: absolute;
                        top: 100%;
                        right: 100%;
                        width: 1em;
                        height: 1em;
                        border-radius: 50%;
                        background-color: #3cefff;
                        transform-origin: center;
                        transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
                        transition: transform 0.8s ease-in-out;
                    }

                    .line3:hover {
                        cursor: pointer;
                        color: #161616;
                    }

                    .line3:hover::before {
                        transform: translate3d(50%, -50%, 0) scale3d(30, 30, 30);
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
                    width: 1200px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .left{
                        .line1 {
                            .text {
                                letter-spacing: 3px;
                                font-size: 72px;
                                font-weight: bold;
                                color: #0ce2a1;
                            }
                        }

                        .line2 {
                            margin-top: 50px;
                            margin-bottom: 50px;
                            .text{
                                letter-spacing: 7px;
                                font-size: 36px;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }

                        .line3 {
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 24px;
                            font-weight: 400;
                            color: #FFFFFF;
                            width: 200px;
                            height: 60px;
                            border: 1px solid rgba(255, 255, 255, .5);
                            border-radius: 30px;
                        }

                        .line3 {
                            z-index: 1;
                            position: relative;
                            font-size: inherit;
                            font-family: inherit;
                            color: white;
                            outline: none;
                            overflow: hidden;
                            transition: color 0.4s ease-in-out;
                        }

                        .line3::before {
                            content: '';
                            z-index: -1;
                            position: absolute;
                            top: 100%;
                            right: 100%;
                            width: 1em;
                            height: 1em;
                            border-radius: 50%;
                            background-color: #3cefff;
                            transform-origin: center;
                            transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
                            transition: transform 0.8s ease-in-out;
                        }

                        .line3:hover {
                            cursor: pointer;
                            color: #161616;
                        }

                        .line3:hover::before {
                            transform: translate3d(50%, -50%, 0) scale3d(30, 30, 30);
                        }
                    }
                    .right{

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
                    width: 1200px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    .left{
                        .line1 {
                            .text {
                                letter-spacing: 3px;
                                font-size: 72px;
                                font-weight: bold;
                                color: #3485FF;
                            }
                        }

                        .line2 {
                            margin-top: 50px;
                            margin-bottom: 50px;
                            .text{
                                letter-spacing: 7px;
                                font-size: 36px;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }

                        .line3 {
                            cursor: pointer;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 24px;
                            font-weight: 400;
                            color: #FFFFFF;
                            width: 200px;
                            height: 60px;
                            border: 1px solid rgba(255, 255, 255, .5);
                            border-radius: 30px;
                        }

                        .line3 {
                            z-index: 1;
                            position: relative;
                            font-size: inherit;
                            font-family: inherit;
                            color: white;
                            outline: none;
                            overflow: hidden;
                            transition: color 0.4s ease-in-out;
                        }

                        .line3::before {
                            content: '';
                            z-index: -1;
                            position: absolute;
                            top: 100%;
                            right: 100%;
                            width: 1em;
                            height: 1em;
                            border-radius: 50%;
                            background-color: #3cefff;
                            transform-origin: center;
                            transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
                            transition: transform 0.8s ease-in-out;
                        }

                        .line3:hover {
                            cursor: pointer;
                            color: #161616;
                        }

                        .line3:hover::before {
                            transform: translate3d(50%, -50%, 0) scale3d(30, 30, 30);
                        }
                    }
                    .right{

                    }


                }
            }
        }

        .case {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: #ffffff;
            padding-bottom: 80px;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                position: relative;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
                            font-weight: bold;
                            color: #222222;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 18px;
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
                            height: 70px;

                            .van-tabs__nav {
                                /*padding-bottom: 50px;*/
                                .van-tab__text {
                                    font-size: 24px;
                                    font-weight: 400;
                                }
                            }
                        }

                    }

                    .tab-content {
                        margin-top: 30px;
                        height: 700px;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;

                        .case-item {
                            width: 380px;
                            height: 50%;
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
                        .case-item:nth-child(2),.case-item:nth-child(5){
                            margin: 0 30px;
                        }
                        .case-item:nth-child(-n+3){
                            margin-bottom: 30px;
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
            padding-bottom: 80px;
            background-image: url("../assets/images/service.png");
            @include background-center;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 100px;
                        font-size: 72px;
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
                        font-size: 18px;
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
                    margin-top: 100px;

                    .item {
                        cursor: pointer;
                        width: calc(25% - 10px);
                        height: 300px;
                        margin: 0 5px;
                        flex-shrink: 1;
                        background: #ffffff;
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        position: relative;
                        padding: 0 30px;
                        padding-top: 50px;
                        box-sizing: border-box;

                        .logo {
                            width: 100px;
                            height: 100px;
                            border-radius: 50%;
                            position: absolute;
                            top: -50px;

                            left:50%;
                            transform: translate(-50%,0);

                            img {
                                width: 100px;
                                height: 100px;
                            }
                        }

                        .item-title {
                            font-size: 24px;
                            font-weight: 400;
                            color: #222222;
                            margin: 20px 0;
                        }

                        .item-content {
                            width: 100%;
                            max-height: 130px;
                            text-align: justify;
                            font-size: 18px;
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

                    .item:nth-child(1), .item:nth-child(2), .item:nth-child(3), .item:nth-child(4) {
                        margin-bottom: 70px;
                    }
                }
            }
        }

        .project-process {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 80px;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 18px;
                        font-weight: 400;
                        color: #222222;
                        bottom: 10px;
                    }
                }

                .items {
                    margin-top: 70px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;
                    .item:first-child{
                        padding-left: 0;
                    }
                    .item:last-child{
                        padding-right: 0;
                    }
                    .item {
                        padding: 0 20px;
                        cursor: pointer;
                        z-index: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .logo {
                            width: 115px;
                            height: 115px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #CCCCCC;
                            border-radius: 50%;
                            transition: all .5s;
                        }

                        .item-title {
                            margin-top: 20px;
                            font-size: 18px;
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
                            transform: translate(0, -10px);
                        }
                    }

                    .connection {
                        position: absolute;
                        top: 57px;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: #CCCCCC;
                    }
                }

                .context {
                    width: 100%;
                    height: 336px;
                    background: #0080FF;
                    position: relative;
                    margin-top: 80px;
                    padding: 60px;
                    box-sizing: border-box;

                    .left {
                        width: 500px;
                        display: flex;
                        flex-direction: column;

                        .line1 {
                            font-size: 30px;
                            font-weight: bold;
                            color: #FFFFFF;
                        }

                        .line2 {
                            width: 36px;
                            height: 5px;
                            background-color: #ffffff;
                            margin: 30px 0;
                        }

                        .line3 {
                            font-size: 18px;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 36px;
                            @include line-hidden(3);
                        }
                    }

                    ::v-deep .van-image {
                        position: absolute;
                        right: 60px;
                        top: -40px;
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
            padding-bottom: 80px;
            background-image: url("../assets/images/advantage.png");
            @include background-center;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
                            font-weight: bold;
                            color: #ffffff;
                        }
                    }

                    .title-line3 {
                        position: absolute;
                        left:50%;
                        white-space: nowrap;
                        transform: translate(-50%,0);
                        top: 100px;
                        font-size: 72px;
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
                        font-size: 18px;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 10px;
                    }
                }

                .context {
                    width: 100%;
                    margin-top: 70px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    position: relative;

                    .left {
                        display: flex;
                        width: 288px;
                        flex-direction: column;

                        .item {
                            margin-bottom: 77px;

                            .line1 {
                                display: flex;
                                align-items: center;

                                img {
                                    width: 32px;
                                    height: 32px;
                                }

                                .text {
                                    font-size: 24px;
                                    font-weight: bold;
                                    color: #FFFFFF;
                                    margin-left: 20px;
                                }
                            }

                            .line2 {
                                margin-top: 18px;
                                font-size: 18px;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 36px;
                                text-align: left;
                            }
                        }

                        .item:last-child {
                            margin-bottom: 0;
                        }
                    }

                    .middle {
                        position: absolute;
                        left: calc(50% - 350px);
                        top: 10px;
                        display: flex;
                        justify-content: center;

                        img {
                            width: 700px;
                        }

                        .button {
                            width: 190px;
                            height: 60px;
                            background: #0080ff;
                            border-radius: 30px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: absolute;
                            bottom: 150px;
                            left:calc(50% - 95px);

                            font-size: 24px;
                            font-weight: 400;
                            color: #FFFFFF;
                            cursor: pointer;
                        }
                        .button:hover {
                            animation: jelly 0.5s;
                        }

                        @keyframes jelly {
                            0%,
                            100% {
                                transform: scale(1, 1);
                            }
                            25% {
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                transform: scale(0.95, 1.05);
                            }
                        }


                    }

                    .right {
                        display: flex;
                        width: 288px;
                        flex-direction: column;

                        .item {
                            margin-bottom: 77px;

                            .line1 {
                                display: flex;
                                align-items: center;
                                justify-content: flex-end;

                                img {
                                    width: 32px;
                                    height: 32px;
                                }

                                .text {
                                    font-size: 24px;
                                    font-weight: bold;
                                    color: #FFFFFF;
                                    margin-right: 20px;
                                }
                            }

                            .line2 {
                                margin-top: 18px;
                                font-size: 18px;
                                font-weight: 400;
                                color: #FFFFFF;
                                line-height: 36px;
                                text-align: right;
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
            padding-bottom: 30px;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 18px;
                        font-weight: 400;
                        color: #222222;
                        bottom: 10px;
                    }
                }

                .items {
                    margin-top: 60px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .item:nth-child(2n) {
                        margin-left: 70px;
                    }

                    .item {
                        transition: all .5s;
                        cursor: pointer;
                        width: 550px;
                        height: 220px;
                        margin-bottom: 30px;
                        border: 2px solid #EEEEEE;
                        position: relative;
                        padding: 40px;
                        padding-left: 70px;
                        box-sizing: border-box;

                        .number {
                            font-size: 70px;
                            padding: 10px;
                            box-sizing: border-box;
                            font-weight: 600;
                            letter-spacing: -1px;
                            color: #0080FF;
                            background-color: #ffffff;
                            position: absolute;
                            top: -30px;
                            left: -40px;
                        }

                        .item-title {
                            font-size: 24px;
                            font-weight: bold;
                            color: #222222;
                        }

                        .content {
                            margin-top: 10px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #666666;
                            line-height: 36px;
                            @include line-hidden(3)
                        }
                    }
                    .item:hover{
                        border: 2px solid gainsboro;
                        box-shadow: 0 0 15px #EEEEEE;
                    }


                }
            }
        }

        .products {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: grey;
            padding-bottom: 80px;
            background-image: url("../assets/images/products.png");
            @include background-center;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
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
                        top: 100px;
                        font-size: 72px;
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
                        font-size: 18px;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 10px;
                    }
                }

                .items {
                    margin-top: 50px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .item:nth-child(2), .item:nth-child(5) {
                        border-left: 1px solid rgba(0, 0, 0, .5);
                        border-right: 1px solid rgba(0, 0, 0, .5);
                    }

                    .item:nth-child(4), .item:nth-child(5), .item:nth-child(6) {
                        margin-top: 20px;
                    }

                    .item:nth-child(1), .item:nth-child(4) {
                        border-radius: 10px 0px 0px 10px;
                    }

                    .item:nth-child(3), .item:nth-child(6) {
                        border-radius: 0px 10px 10px 0px;
                    }

                    .item {
                        width: 33%;
                        display: flex;
                        flex-direction: column;
                        background-color: #ffffff;

                        .top {
                            width: 100%;
                            height: 200px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .bottom {
                            border-top: 1px solid rgba(0, 0, 0, .1);
                            height: 250px;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: space-around;
                            padding: 20px;
                            box-sizing: border-box;

                            .line1 {
                                font-size: 30px;
                                font-weight: 400;
                                color: #222222;

                                span {
                                    color: #FF7F00;
                                }
                            }

                            .line2 {
                                @include line-hidden(2);
                                text-align: center;
                                font-size: 20px;
                                font-weight: 400;
                                color: #999999;
                            }

                            .line3 {
                                transition: all .5s;
                                cursor: pointer;
                                width: 300px;
                                height: 60px;
                                border: 1px solid #CCCCCC;
                                border-radius: 30px;

                                font-size: 24px;
                                font-weight: 400;
                                color: #CCCCCC;
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
            padding-bottom: 30px;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 18px;
                        font-weight: 400;
                        color: #222222;
                        bottom: 10px;
                    }
                }

                .context {
                    margin-top: 50px;
                    width: 100%;
                    height: 850px;
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
                            left: 38px;
                            width: 470px;
                            height: 674px;
                        }

                        .img2 {
                            width: 261px;
                            height: 198px;
                            position: absolute;
                            right: 300px;
                            top: 30px;
                        }

                        .img3 {
                            width: 156px;
                            height: 198px;
                            position: absolute;
                            right: 120px;
                            top: 30px;
                        }

                        .img4 {
                            width: 404px;
                            height: 172px;
                            position: absolute;
                            right: 120px;
                            bottom: 30px;
                        }
                    }

                    .top {
                        width: 776px;
                        height: 332px;
                        border: 5px solid #0080FF;
                        position: absolute;
                        top: 135px;
                        left: 321px;
                    }

                    .bottom-box {
                        width: 1200px;
                        height: 465px;
                        position: absolute;
                        top: 270px;
                        .bottom {
                            width: 100%;
                            height: 100%;
                            background: #0080FF;
                            padding: 61px 52px 0 558px;
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
                                    font-size: 18px;
                                    font-weight: 400;
                                    color: #FFFFFF;
                                    line-height: 36px;
                                    @include line-hidden(5);
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
            padding-bottom: 80px;
            background-image: url("../assets/images/partner.png");
            @include background-center;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
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
                        top: 100px;
                        font-size: 72px;
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
                        font-size: 18px;
                        font-weight: 400;
                        color: #FFFEFE;
                        bottom: 10px;
                    }
                }

                .items {
                    width: 100%;
                    margin-top: 50px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .item {
                        cursor: pointer;
                        width: 235px;
                        height: 239px;
                        background: #FFFFFF;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid grey;
                        ::v-deep .el-image{
                            transition: all 1s;
                        }
                    }
                    .item:hover{
                        ::v-deep .el-image{
                            transform: rotateY(360deg);
                        }
                    }

                    .item:nth-child(1) {
                        border-top-left-radius: 10px;
                    }

                    .item:nth-child(5) {
                        border-top-right-radius: 10px;
                    }

                    .item:nth-child(6) {
                        border-bottom-left-radius: 10px;
                    }

                    .item:nth-child(10) {
                        border-bottom-right-radius: 10px;
                    }
                }
            }
        }

        .news {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-bottom: 50px;

            .center {
                width: 1200px;
                display: flex;
                flex-direction: column;
                align-items: center;

                .title {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;

                    .title-line {
                        z-index: 1;
                        display: flex;
                        flex-direction: row;

                        .title-line1 {
                            display: none;
                            width: 25px;
                            height: 5px;
                            background-color: #FF7F00;
                            margin-top: 20px;
                            margin-right: 10px;
                        }

                        .title-line2 {
                            font-size: 60px;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        left:50%;
                        width: 100%;
                        text-align: center;
                        transform: translate(-50%,0);
                        font-size: 18px;
                        font-weight: 400;
                        color: #222222;
                        bottom: 10px;
                    }
                }

                .items {
                    margin-top: 50px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;

                    .item:hover{
                        ::v-deep .el-image{
                            transform: scale(1.1);
                        }
                    }
                    .item {
                        cursor: pointer;
                        width: 373px;
                        height: 430px;
                        display: flex;
                        flex-direction: column;

                        .top {
                            width: 100%;
                            height: 260px;
                            overflow: hidden;
                            ::v-deep .el-image{
                                transition: all 1s;
                            }
                        }

                        .line1 {
                            font-size: 24px;
                            font-weight: bold;
                            color: #222222;
                            @include line-hidden(1);
                            margin: 30px 0;
                            max-height: 1.2em;
                        }

                        .line2 {
                            font-size: 18px;
                            font-weight: 400;
                            color: #666666;
                            line-height: 36px;
                            max-height: 80px;
                            @include line-hidden(2);
                        }
                    }

                    .item:nth-child(2), .item:nth-child(5) {
                        margin: 0 30px;
                    }

                    .item:nth-child(1), .item:nth-child(2), .item:nth-child(3) {
                        margin-bottom: 30px;
                    }
                }
            }
        }

        .dialog-box {
            z-index: 9;
            position: fixed;
            top: calc(50% - 250px);
            left: calc(50% - 275px);
            width: 550px;
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
                background-image: url("../assets/images/kfbj.png");
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
