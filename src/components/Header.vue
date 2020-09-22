<template>
    <div class="header-page" id="fixed" :class="{'isFixed':isFixed}">
        <div class="center">
            <div class="logo">
                <img @click="goTo('/')" :src="isFixed?logo1:logo" >
            </div>
            <div class="menus">
                <div class="menu" v-for="(item,index) in menuList" @click="goAnchor(item.id)">{{item.title}}</div>
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
           .menus{
               display: flex;
               flex-direction: row;
               align-items: center;
               .menu{
                   color: #ffffff;
                   margin: 0 15px;
                   cursor: pointer;
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
                }
            }
        }

    }

</style>