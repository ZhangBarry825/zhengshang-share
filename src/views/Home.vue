<template>
    <div class="home">
        <Header></Header>
        <div class="swipe-box">
            <el-carousel indicator-position="50px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="banner-item">
                        <div class="banner-context">
                            <div class="line1">
                                <div class="text text1">专业开发</div>
                                <div class="x">
                                    <img src="../assets/images/banner-x.png" alt="">
                                </div>
                                <div class="text text2">高端定制</div>
                            </div>
                            <div class="line2">
                                全行业APP/小程序定制开发
                            </div>
                            <div class="line3">立即咨询</div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="case">
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
        <div class="our-service">
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
                    <div class="item" v-for="(item,index) in ourService">
                        <div class="logo">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="project-process">
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
                    <van-image width="530" height="420" fit="cover" :src="projectProcess[projectProcessIndex].img"/>
                    <div class="left">
                        <div class="line1">{{projectProcess[projectProcessIndex].title}}</div>
                        <div class="line2"></div>
                        <div class="line3">{{projectProcess[projectProcessIndex].content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="our-advantage">
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
                        <div class="item" v-for="(item,index) in ourAdvantages.left">
                            <div class="line1">
                                <img :src="item.img" alt="">
                                <div class="text">{{item.title}}</div>
                            </div>
                            <div class="line2">{{item.content}}</div>
                        </div>
                    </div>
                    <div class="middle">
                        <img src="../assets/images/advantage1.png" alt="">
                        <div class="button">立即咨询</div>
                    </div>
                    <div class="right">
                        <div class="item" v-for="(item,index) in ourAdvantages.right">
                            <div class="line1">
                                <div class="text">{{item.title}}</div>
                                <img :src="item.img" alt="">
                            </div>
                            <div class="line2">{{item.content}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="problems">
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
                    <div class="item" v-for="(item,index) in problemList">
                        <div class="number">0{{index+1}}</div>
                        <div class="item-title">{{item.title}}</div>
                        <div class="content">{{item.content}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="products">
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
                            <div class="line3">立即咨询</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-us">
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
                    <div class="bottom">
                        <div class="right">
                            <div class="line">{{aboutUs.description1}}</div>
                            <div class="line">{{aboutUs.description2}}</div>
                        </div>
                    </div>
                    <div class="img img1">
                        <van-image
                                width="100%"
                                height="100%"
                                fit="cover"
                                :src="aboutUs.img1"
                        />
                    </div>
                    <div class="img img2">
                        <van-image
                                width="100%"
                                height="100%"
                                fit="cover"
                                :src="aboutUs.img2"
                        />
                    </div>
                    <div class="img img3">
                        <van-image
                                width="100%"
                                height="100%"
                                fit="cover"
                                :src="aboutUs.img3"
                        />
                    </div>
                    <div class="img img4">
                        <van-image
                                width="100%"
                                height="100%"
                                fit="cover"
                                :src="aboutUs.img4"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="partners">
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
                    <div class="item" v-for="(item,index) in partners" v-if="index<10">
                        <van-image
                                width="10rem"
                                height="10rem"
                                fit="contain"
                                :src="item.img"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="news">
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
                    <div class="item" v-for="(item,index) in newsList">
                        <div class="top">
                            <van-image
                                    width="100%"
                                    height="100%"
                                    fit="cover"
                                    :src="item.img"
                            />
                        </div>
                        <div class="line1">{{item.title}}</div>
                        <div class="line2">{{item.content}}</div>

                    </div>
                </div>
            </div>
        </div>
        <div class="dialog-box" v-if="showDialog">
            <div class="top">
                <img src="../assets/images/cccc.png" alt="" class="close">
                <img src="../assets/images/kf.png" alt="" class="kf">
                <div class="right">
                    <div class="line1">正尚科技</div>
                    <div class="line2">为您提供专业解决方案</div>
                    <div class="line3">
                        <img src="../assets/images/kfdh.png" alt="" class="tel">
                        <div class="text">0371-55150821</div>
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
                            placeholder="请输入内容"
                            v-model="message"
                            resize="none"
                            :rows="5"
                    ></el-input>
                    <el-button type="danger">咨询</el-button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "../components/Header";
    import {homeData} from "../../public/MockData";
    import Footer from "../components/Footer";

    export default {
        name: 'Home',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                projectProcessIndex: 0,
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
                name:'',
                tel:'',
                message:'',
                showDialog:true
            };
        },
        methods: {},
    }
</script>
<style lang="scss" scoped>
    .home {
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

            ::v-deep .is-active {
                background-color: #ff8000;
            }

            ::v-deep .el-carousel__arrow {
                height: 60px;
                width: 60px;
                background-color: rgba(255, 255, 255, .2);

                i {
                    font-size: 20px;
                }
            }

            .banner-item {
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
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
                        height: 640px;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;

                        .case-item {
                            width: 33.33%;
                            height: 50%;
                            background-color: #0d85f6;
                            @include background-center;
                            cursor: pointer;

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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
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
                            font-size: 18px;
                            font-weight: 400;
                            color: #666666;
                            line-height: 36px;
                            @include line-hidden(4)
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
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
                    position: relative;
                    justify-content: space-between;

                    .item {
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
                            transition: background-color .5s;
                        }

                        .item-title {
                            margin-top: 20px;
                            font-size: 18px;
                            font-weight: 400;
                            color: #222222;
                        }
                    }

                    .selected {
                        .logo {
                            background-color: #0080FF;
                        }
                    }

                    .connection {
                        position: absolute;
                        top: 57px;
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

                        .van-image__img {
                            transition: all 1s;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
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
                            font-size: 24px;
                            font-weight: 400;
                            color: #FFFFFF;
                            cursor: pointer;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
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
                            padding: 20px 0;
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
                                @include line-hidden(1);
                                font-size: 24px;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
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

                    .top {
                        width: 776px;
                        height: 332px;
                        border: 5px solid #0080FF;
                        position: absolute;
                        top: 135px;
                        left: 321px;
                    }

                    .bottom {
                        width: 1200px;
                        height: 465px;
                        background: #0080FF;
                        position: absolute;
                        top: 270px;
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

                    .img {
                        position: absolute;
                        z-index: 2;
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #FFFFFF;
                        opacity: 0.2;
                    }

                    .title-line4 {
                        position: absolute;
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
                        width: 235px;
                        height: 239px;
                        background: #FFFFFF;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid grey;
                    }
                    .item:nth-child(1){
                        border-top-left-radius: 10px;
                    }
                    .item:nth-child(5){
                        border-top-right-radius: 10px;
                    }
                    .item:nth-child(6){
                        border-bottom-left-radius: 10px;
                    }
                    .item:nth-child(10){
                        border-bottom-right-radius: 10px;
                    }
                }
            }
        }

        .news {
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
                        top: 100px;
                        font-size: 72px;
                        font-weight: bold;
                        color: #EEEEEE;
                    }

                    .title-line4 {
                        position: absolute;
                        font-size: 18px;
                        font-weight: 400;
                        color: #222222;
                        bottom: 10px;
                    }
                }
                .items{
                    margin-top: 50px;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    .item{
                        cursor: pointer;
                        width: 373px;
                        height: 430px;
                        display: flex;
                        flex-direction: column;
                        .top{
                            width: 100%;
                            height: 260px ;
                        }
                        .line1{
                            font-size: 24px;
                            font-weight: bold;
                            color: #222222;
                            @include line-hidden(1);
                            margin: 30px 0;
                        }
                        .line2{
                            font-size: 18px;
                            font-weight: 400;
                            color: #666666;
                            line-height: 36px;
                            @include line-hidden(2);
                        }
                    }
                    .item:nth-child(2),.item:nth-child(5){
                        margin: 0 30px;
                    }
                    .item:nth-child(1),.item:nth-child(2),.item:nth-child(3){
                        margin-bottom: 30px;
                    }
                }
            }
        }

        .dialog-box{
            z-index: 9;
            position: fixed;
            top: calc(50% - 250px);
            left:calc(50% - 340px);
            width: 680px;
            height: 500px;
            display: flex;
            flex-direction: column;
            .top{
                border-top-left-radius: 5px ;
                border-top-right-radius: 5px ;
                width: 100%;
                height: 270px;
                background-color: #0080ff;
                background-image: url("../assets/images/kfbj.png");
                @include background-center;
                padding: 40px 73px;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-end;
                position: relative;
                .close{
                    cursor: pointer;
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
                .kf{
                    position: absolute;
                    left: 73px;
                    top: -50px;
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    .line1{
                        font-size: 70px;
                        font-weight: 500;
                        color: #FFFFFF;
                        line-height: 80px;
                    }
                    .line2{
                        font-size: 29px;
                        font-weight: 400;
                        color: #FFFFFF;
                        margin: 10px 0;
                    }
                    .line3{
                        display: flex;
                        align-items: center;
                        .text{
                            font-size: 32px;
                            color: #FFFFFF;
                            margin-left: 20px;
                        }
                    }
                }
            }
            .bottom{
                width: 100%;
                height: 230px;
                background-color: #ffffff;
                border-bottom-left-radius: 5px ;
                border-bottom-right-radius: 5px ;
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                .line1{
                    width: 100%;
                    display: flex;
                    ::v-deep .el-input:nth-child(2){
                        margin-left: 10px;
                    }
                }
                .line2{
                    margin-top: 10px;
                    width: 100%;
                    display: flex;
                    ::v-deep .el-textarea{
                        margin-right: 10px;
                    }
                    .el-button--danger{
                        background-color: #ff7f00;
                    }
                }
            }
        }
    }

</style>
















