<template>
    <div class="header-page" id="fixed" :class="{'isFixed':isFixed}">
        <div class="center">
            <div class="logo">
                <img @click="goTo('/')" :src="isFixed?logo1:logo" >
            </div>
            <div class="menus">
                <div class="menu" v-for="(item,index) in menuList" @click="goAnchor(item.id)">
                    <span class="ch">{{item.title}}</span>
                    <span class="en">{{item.en_title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {homeData} from "../../public/MockData";

    export default {
        name: "Header",
        props: {
            needFixed: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return{
                menuList:homeData.menuList,
                isFixed:false,
                isMenuShow: false,
                logo: require('../assets/images/logo-pc.png'),
                logo1: require('../assets/images/logo1-pc.png'),
            }
        },
        methods:{
            showMenus() {
                this.isMenuShow = true
            },
            hideMenus() {
                this.isMenuShow = false
            },
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
                this.isFixed = scrollTop > 0 ? true : false;  // 如果滚动到顶部了，this.isFixed就为true

                window.onscroll = function () {
                    var sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
                    document.getElementById('fixed').style.left = sl + 'px';
                }
            },
            goAnchor(selector) {
                if(this.$route.fullPath != '/'){
                    this.$router.push({
                        path:'/'
                    })
                    setTimeout(()=>{
                        document.getElementById(selector).scrollIntoView({ block: 'start', behavior: 'smooth' })
                    })
                }else {
                    document.getElementById(selector).scrollIntoView({ block: 'start', behavior: 'smooth' })
                }
            },
            goTo(url){
                if(this.$route.fullPath != url){
                    this.$router.push({
                        path:url
                    })
                }else {
                    document.getElementById('home').scrollIntoView({ block: 'start', behavior: 'smooth' })
                }
            }
        },
        mounted() {
            this.isFixed=this.needFixed
            if(!this.needFixed){
                window.addEventListener('scroll', this.handleScroll)
            }
        }
    }
</script>

<style scoped lang="scss">

    .header-page{
        transition: background-color .5s;
        z-index: 9;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        padding: 10px 0;
        width: 100%;
        min-width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .center{
            width: 1200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .logo{
                cursor: pointer;

            }
            .logo {
                display: block;
                z-index: 1;
                position: relative;
                font-size: inherit;
                font-family: inherit;
                color: white;
                outline: none;
                border: none;
                overflow: hidden;
                cursor: pointer;
            }

            .logo::after {
                content: '';
                z-index: -1;
                background-color: hsla(0, 0%, 100%, 0.2);
                position: absolute;
                top: -700%;
                bottom: -100%;
                width: 1.25em;
                transform: translate3d(-700%, 0, 0) rotate(35deg);
            }

            .logo:hover::after {
                transition: transform 1s ease-in-out;
                transform: translate3d(1200%, 0, 0) rotate(35deg);
            }

           .menus{
               display: flex;
               flex-direction: row;
               align-items: center;
               .menu{
                   color: #ffffff;
                   margin: 0 15px;
                   cursor: pointer;
                   .ch{
                       display: block;
                   }
                   .en{
                       display: none;
                   }
                   span {
                       position: relative;
                       padding: 1px 0;
                   }

                   span::before, span::after {
                       content: '';
                       position: absolute;
                       left: 0;
                       right: 0;
                       height: 2px;
                       background-color: #fc2f70;
                       transform: scaleX(0);
                       transition: transform 0.5s ease;
                   }

                   span::before {
                       top: 0;
                       transform-origin: center right;
                   }

                   span:hover::before {
                       transform-origin: center left;
                       transform: scaleX(1);
                   }

                   span::after {
                       bottom: 0;
                       transform-origin: center left;
                   }

                   span:hover::after {
                       transform-origin: center right;
                       transform: scaleX(1);
                   }
               }
               .menu:hover{

                   .ch{
                       display: block;
                   }
                   .en{
                       display: none;
                   }
               }
           }
        }

    }
    .isFixed {
        position: fixed !important;
        background-color: #ffffff;
        box-shadow: 0 8px 20px 0 rgba(167, 176, 208, 0.4);
        z-index: 999 !important;
        .center{
            .menus{
                .menu{
                    color: #222222;
                    span::before, span::after {
                        background-color: #ff8000;
                    }
                }
            }
        }

    }

</style>