<template>
    <div class="header-page">
        <div class="center">
            <div class="logo">
                <img src="../assets/images/logo-pc.png" alt="">
            </div>
            <div class="menus">
                <div class="menu" v-for="(item,index) in menuList">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {homeData} from "../../public/MockData";

    export default {
        name: "Header",
        data(){
            return{
                menuList:homeData.menuList
            }
        }
    }
</script>

<style scoped lang="scss">
    .header-page{
        z-index: 9;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        padding: 20px 0;
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

</style>