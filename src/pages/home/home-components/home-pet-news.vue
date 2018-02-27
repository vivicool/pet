<template>
    <div class="column">
            <div class="container">
                 <HomeTitle :title="title"></HomeTitle>     
                <div class="row mb50">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-xs-6" v-for="(pic,index) in tu" :key="index">
                                <div class="leftpicture h130px oh pr hrb-50 mb4">
                                    <a href="#" target="_blank">
                                        <img :src="pic.url" alt="" class="wh100 hr2d1">
                                    </a>
                                    <div class="container-fluid pa b0 w100  tac tno ptb10 bgb30 b-0 b-50" >
                                        <a href="" target="_blank" class="crw ">{{ pic.tit }}</a>
                                    </div>                                 
                                </div>
                            </div>                            
                        </div> 
                        <div class="tno ptb6 " v-for="(info,index) in head" :key="index">
                            <a href="" target="_blank" class="cr11 fs16">{{ info.title }}</a>
                        </div>
                        <div class="row">
                            <div class="col-xs-6" v-for="(pic,index) in tu" :key="index">
                                <div class="leftpicture h130px oh pr hrb-50 mb4">
                                    <a href="#" target="_blank">
                                        <img :src="pic.url" alt="" class="wh100 hr2d1">
                                    </a>
                                    <div class="container-fluid pa b0 w100  tac tno ptb10 bgb30 b-0 b-50" >
                                        <a href="" target="_blank" class="crw ">{{ pic.tit }}</a>
                                    </div>                                 
                                </div>
                            </div>                            
                        </div>
                        <div class="tno ptb6" v-for="(info,index) in head" :key="index">
                            <a href="" target="_blank" class="cr11 fs16">{{ info.title }}</a>
                        </div>                        
                    </div>
                    <div class="col-md-4">
                        <div class="middlepicture  h186px oh pr hrb-50  wh100 mb20" v-for="(picture,index) in ledge" :key="index" >
                            <a href="#" target="_blank">
                                <img :src="picture.url" alt="" class="wh100 hr2d1">
                            </a>                                                     
                             <div class="container-fluid pa b0 w100  tac tno ptb10  bgb30 b-0 b-50" >
                                <a href="" target="_blank" class="crw ">{{ picture.text }}</a>
                            </div>                            
                         </div>                                                   
                    </div>
                    <div class="col-md-4">
                        <div class="row">
                             <div>
                                     <div class=" col-xs-6 " v-for="(pic,index) in pian" :key="index">
                                        <div class="picture  h110px oh pr">
                                            <a href="#" target="_blank" >
                                                <img :src="pic.url" alt="" class="wh100 hr2d1">
                                            </a>   
                                        </div>                                                                    
                                     </div>  
                             </div>                            
                        </div> 
                        <div class="tno  mt20 lh19" v-for="(petinfo,index) in heading" :key="index"><a href="" target="_blank" class="cr11 fs16">{{ petinfo.titles }}</a></div>                                                    
                    </div>                                        
                </div>
           </div>       
    </div>
</template>

<script>
import "../../../assets/css/ColorHelper.css";
import "../../../assets/css/HoverHelp.css";
import "../../../assets/css/CSSHelper.css";
import HomeTitle from '../home-components/home-title/home-title.vue'

export default {
     components: {
        HomeTitle
     },
     data() {
         return {
         title:'萌宠资讯',
         tu: [
            {
            url: require("../../../assets/img/b.jpg"),
            tit: "猫咪喜欢晒太阳是为什么呢？"
            },
            {
            url: require("../../../assets/img/a.jpg"),
            tit: "猫咪喜欢晒太阳是为什么呢？猫咪喜欢晒太阳是为什么呢"
            }
         ],
         head: [
            { title: '猫有"洁癖"，是最讲究卫生的动物之一。每天猫要用爪子给自己洗好几次脸' },
            { title: '猫有"洁癖"，是最讲究卫生的动物之一。每天猫要用爪子给自己洗好几次脸' }
         ],
         tu2: [
            {
            url: require("../../../assets/img/a.jpg"),
            tit: "猫咪喜欢晒太阳是为什么呢？"
            },
            {
            url: require("../../../assets/img/a.jpg"),
            tit: "猫咪喜欢晒太阳是为什么呢？"
            }
         ],
         head2: [
            { title: '猫有"洁癖"，是最讲究卫生的动物之一。每天猫要用爪子给自己洗好几次脸' },
            { title: '猫有"洁癖"，是最讲究卫生的动物之一。每天猫要用爪子给自己洗好几次脸' }
         ],
         ledge: [
            {
            url: require("../../../assets/img/b.jpg"),
            text: "猫咪喜欢晒太阳是为什么呢？"
            },
            {
            url: require("../../../assets/img/b.jpg"),
            text: "猫咪喜欢晒太阳是为什么呢？"
            }
         ],
         pian: [
            { url: require("../../../assets/img/a.jpg") },
            { url: require("../../../assets/img/a.jpg") }
         ],
         heading: [
            { titles: "猫的睡眠时间，大约是人睡眠时间的两倍左右。但是猫不像人那样集中地睡." },
            { titles: "猫不像人那样集中地睡，而是分成数次睡，所以，猫在夜里的任何时候都可以起来。" },
            { titles: "猫科的大头领狮子，一天要睡20小时左右。研究表明，猫的睡眠中有四分之三是假睡" },
            { titles: "猫对睡觉场所的选择甚是小心，夏天，猫能准确无误地找到一个通风、凉快的地方" },
            { titles: "猫还跟随着太阳的移动多次移动睡觉的地方。像向日葵总是向着太阳一样。" },
            { titles: "猫对于睡觉的场所，总是努力地争取最舒适的地方。比如靠近取暖炉处睡，但往往使猫尾巴被烤焦" },
            { titles: "猫重视自身的卫生，具有自净皮毛的习性，经常用舌头舔擦体躯、四肢等部位的皮毛清除毛的污物" }
          ]
         };
      }
    };
</script>

<style>

    @media(min-width: 1401px){
        .middlepicture{
            height:188px;   
        }
        .picture {
        width:100%;height:118px;
        
        }        
    }


 @media(min-width:1199px)and (max-width: 1400px){
    .picture {
       width:100%;height:168px;
       
    }

    .middlepicture{
        height:213px;
        
    }
    .leftpicture{
        width:100%;height:155px
    }
}

@media(min-width:992px) and (max-width:1199px){
    .picture {
       width:100%;height:139px;
       
    }

    .leftpicture{
        width:100%;height:140px;       
    }
    .middlepicture{
        height:198px;
        
    }
  
}

</style>