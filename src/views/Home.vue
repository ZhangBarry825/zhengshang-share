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
          <div class="line1"></div>
          <div class="line2">客户案例</div>
          <div class="line3">CUSTOMER CASE</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import Header from "../components/Header";

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {

    };
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    min-width: 1200px;
    .swipe-box{
      width: 100%;
      height: 945px;
      background: #000000;

     ::v-deep  .el-carousel__container{
        height: 945px;
      }

      ::v-deep .el-carousel__button{
        display: none;
      }
     ::v-deep .el-carousel__indicator{
       width: 16px !important;
       height: 16px !important;
       background: rgba(253,253,255,.5);
       border-radius: 50%;

       padding: 0;
       margin: 30px 5px;

     }
      ::v-deep .is-active{
        background-color: #ff8000;
      }
      ::v-deep .el-carousel__arrow {
        height: 60px;
        width: 60px;
        background-color: rgba(255,255,255,.2);
        i{
          font-size: 20px;
        }
      }

      .banner-item{
        width: 100%;
        height: 100%;

        background-image: url("../assets/images/bg.png");
        @include background-center;
        .banner-context{
          padding-top: 343px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .line1{
            display: flex;
            justify-content: center;
            align-items: center;
            .x{
              margin: 0 50px;
            }
            .text{
              font-size: 100px;
              font-weight: bold;
              color: #0080FF;
              line-height: 161px;
            }
            .text2{
              color: #FF8000;
            }
          }
          .line2{
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
          .line3{
            cursor: pointer;
            width: 200px;
            height: 60px;
            border: 1px solid rgba(255,255,255,.5);
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
    .case{
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: #ffffff;
      .center{
        width: 1200px;
        display: flex;
        flex-direction: column;
      }
    }
  }

</style>
















