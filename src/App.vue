<template>
    <div>
        <div id="app">
            <HomeBar></HomeBar>
            <div class="pr containerbox">
                <div class="bgw box pr">
                    <router-view></router-view>
                    <Footers></Footers>
                    <CopyRight></CopyRight>
                </div>
            </div>
            <NavRight></NavRight>
        </div>
    </div>
</template>

<script>

 import HomeBar from './pages/home/home-bar.vue'
 import Footers from './share/shared/footer/footer.vue'
 import CopyRight from './share/shared/copyright/copyright.vue'
 import NavRight from './share/shared/nav/nav-right/nav-right.vue'

 import './assets/css/CSSHelper.css'
 import './assets/css/ColorHelper.css'
 import './assets/css/HoverHelp.css'
 import './assets/font/iconfont.css'




export default {
  name: 'app',
  components:{
     HomeBar,
     Footers,
     CopyRight,
     NavRight

  }
}
</script>


<style scoped>

  /*栏目10格栅栏*/
.col-xs-10ths,
.col-sm-10ths,
.col-md-10ths,
.col-lg-10ths {
    position: relative;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

@media(max-width:767px) {
    .col-sm-10ths {
        width: 20%;
        float: left;
       
    }
}

@media ( min-width: 768px) {
    .col-sm-10ths {
        width: 10%;
        float: left;
    }
}

@media ( min-width: 992px) {
    .col-md-10ths {
        width: 10%;
        float: left;
    }
}

@media ( min-width: 1200px) {
    .col-lg-10ths {
        width: 10%;
        float: left;
    }
}

/*lanmu div top调整*/

.containerbox{
    height:1000px;top:480px;z-index:1
}

@media(max-width:768px){
    .containerbox{
        top:360px
    }
}

/*栏目栅栏*/
@media(max-width:767px) {
    .containerbox{
        top:395px
    }

    .col-sm-10ths>div>div{
        margin-top:2px;
    }
}

</style>



