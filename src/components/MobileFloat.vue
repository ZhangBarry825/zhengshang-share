<template>
    <div class="float-bottom">
        <div class="left" @click="call">
            <img src="../assets/images/mobile/tel_m.png" alt="">
            <div class="text">拨打电话</div>
        </div>
        <div class="right" @click="dialog">
            <img src="../assets/images/mobile/talk_m.png" alt="">
            <div class="text">在线咨询</div>
        </div>
    </div>
</template>

<script>
    import {homeData} from "../../public/MockData";

    export default {
        name: "MobileFloat",
        data(){
            return{

            }
        },
        methods:{
            call(){
                window.location.href = "tel:" + homeData.dialogData.tel;
            },
            dialog(){
                this.$dia()
            }
        }
    }
</script>

<style scoped lang="scss">
    .float-bottom{
        z-index: 9;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        height: 1.293rem;
        .left{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0080FF;
            img{
                width: 0.48rem;
                height: 0.48rem;
                margin-right: 0.133rem;
            }
            .text{
                font-size: 0.453rem;
                font-weight: 400;
                color: #FFFFFF;
            }
        }
        .right{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #FF8000;
            img{
                width: 0.48rem;
                height: 0.48rem;
                margin-right: 0.133rem;
            }
            .text{
                font-size: 0.453rem;
                font-weight: 400;
                color: #FFFFFF;
            }
        }
    }
</style>