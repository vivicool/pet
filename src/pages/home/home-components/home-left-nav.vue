<template>
    <div class="leftnavbox">
        <transition name="slideInDown">
            <div class="pf cr9-a sideBar bl1 bc2 bss" style="left:1.5%;z-index:999;height:600px;top:50%;margin-top:-180px" v-show="show" >
                <ul class="lh40 pr navul" style="left:-5px;top:-23px"  :class="[isSelected]">
                    <li class="active" >
                        <a class="w10px h10px br1000 dib bw1 bss bc3 mr10 bchr16 bgw"  @click="clickDots" id="aa01"></a>
                        <a class="crhr16">猫狗社区</a>  
                    </li>
                    <li v-for="(left,index) in leftnav" :key="index" >
                        <a class="w10px h10px br1000 dib bw1 bss bc3 mr10 bchr16 bgw" @click="clickDots" id="aa02"></a>
                        <a class="crhr16">{{ left.word }}</a>  
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    //import '../assets/js/index.js'
   // import BScroll from 'better-scroll'
    import animate from 'animate.css'
  
    export default {
        name:'leftnavbox',
        data ()　{
            return {
                leftnav :[
                    { word:'百萌争宠' },
                    { word:'曝光平台' },
                    { word:'萌宠领养' },
                    { word:'发起众筹' },
                    { word:'爱心捐赠' },
                    { word:'出租萌宠' },
                    { word:'购买萌宠' },
                    { word:'商品购买' },
                    { word:'萌宠壁纸' },      
                    { word:'搞笑视频' },  
                    { word:'寻找宠物' },   
                    { word:'宠物百科' },   
                    { word:'养宠常识' },    
                    { word:'萌宠资讯' },   
                    { word:'用户榜单' }                          
                ],
                show:false ,
                isSelected: ''                 
            }
        },
        mounted() {
             window.addEventListener('scroll', this.leftScroll);    
                          
        },
        methods: {
            leftScroll () {
                 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;    
                 if(scrollTop >=300) {
                     this.show = true;                   
                 }else{
                     this.show = false;
                 }                               
            },
            clickDots () {
                var top = document.getElementsByClassName('navul').offsetTop;
                console.log(top)                  
            }
      }
    }

    
</script>

<style>
    /*左侧边栏*/
    @media(max-width:1520px){
        .sideBar{
            display:none !important;
        }
    }

    .sideBar>ul>li.active>a{
        color: #fb1174 !important;
        border-color:#fb1174 !important;
    }

    .slideInDown-enter-active{
        animation:slideInDown .5s;
    }

    .slideInDown-leave-active{
         animation:slideInDown .5s reverse;
    }



</style>