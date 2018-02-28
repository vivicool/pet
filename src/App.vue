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


/*lanmu div top调整*/

.containerbox{
    height:1000px;top:480px;z-index:1
}

@media(max-width:768px){
    .containerbox{
        top:580px
    }
}



</style>



