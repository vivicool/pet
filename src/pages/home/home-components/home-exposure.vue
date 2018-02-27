<template>
            <div class="container column column1">
                <div class="row mb45">                    
                        <HomeTitle :title="title"></HomeTitle>                         
                    <div class="col-md-8">   
                        <ul>
                           <li >
                                <div class="row mtb10" >                                   
                                        <div class="col-md-6">    
                                            <HomeExposureList :turl="m.turl" :message="m.message" :content="m.content" :tubiao="m.tubiao" :browse="m.browse"
                                            :pinglun="m.pinglun" :comment="m.comment" :hour="m.hour" :time="m.time"
                                             v-for="(m,index) in title1" :key="index"></HomeExposureList>
                                        </div> 
                                        <div class="col-md-6">
                                            <HomeExposureList :turl="m.turl" :message="m.message" :content="m.content" :tubiao="m.tubiao" :browse="m.browse"
                                            :pinglun="m.pinglun" :comment="m.comment" :hour="m.hour" :time="m.time"
                                             v-for="(m,index) in titles" :key="index"></HomeExposureList>                                            
                                        </div>                                                                           
                                </div>                                                                                                             
                            </li>                                                                                 
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <!--幻灯片-->
                    <div class="swiper-container mt50 pr wipercontainer" >
                        <div class="swiper-wrapper">
                            <HomeSlide :url="tupian.url" :biaoti="tupian.biaoti"  v-for="(tupian,index) in picture" :key="index" class="swiper-slide" ></HomeSlide>  

                        </div>
                        <div class="swiper-pagination pr20"></div>
                    </div>  
                    </div>
                </div>
            </div>

</template>

<script>
    import '../../../assets/css/CSSHelper.css'
    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/css/HoverHelp.css'
    import '../../../assets/css/swiper.min.css'

    import HomeTitle from '../home-components/home-title/home-title.vue'
    import HomeSlide from '../home-components/home-slide/home-slide.vue'
    import HomeExposureList from '../home-components/home-exposure/home-exposure-list.vue'


    export default {
        components: {
            HomeTitle,
            HomeSlide,
            HomeExposureList
        },
        data () {
            return {
                title:'曝光平台',
                title1:[
                    {
                    message:'11我家猫咪为什么不吃饭',
                    content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                    browse:'282',
                    comment:'95',
                    time:'30分钟前',
                    turl:require('../../../assets/img/a.jpg'),
                    tubiao:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'
                    },
                    {
                    message:'33我家猫咪为什么不吃饭',
                    content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                    browse:'282',
                    comment:'95',
                    time:'30分钟前',
                    turl:require('../../../assets/img/a.jpg'),
                    tubiao:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'
                    },                                                                                                    
                ],   
                titles:[
                    {
                    message:'22我家猫咪为什么不吃饭',
                    content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                    browse:'282',
                    comment:'95',
                    time:'30分钟前',
                    turl:require('../../../assets/img/a.jpg'),
                    tubiao:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'
                    },
                    {
                    message:'44我家猫咪为什么不吃饭',
                    content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                    browse:'282',
                    comment:'95',
                    time:'30分钟前',
                    turl:require('../../../assets/img/a.jpg'),
                    tubiao:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'
                    },                                                                                                    
                ],                                        
                picture:[
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'进入暑假期间猫咪就整天不吃饭'
                     },                   
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'进入暑假期间猫咪就整天不吃饭2'

                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'进入暑假期间猫咪就整天不吃饭3'
                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg') ,
                        biaoti:'进入暑假期间猫咪就整天不吃饭4'
                    }
                ],
                items: [
                    { biaoti:'这里是写图片标题文字的0'},
                    { biaoti:'这里是写图片标题文字的1'}
                ]             
            }
        },
        mounted() {
            this.swiper();
        },
        methods: {
           swiper : function(){
                var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true
            });
        }

       }        
    }

</script>

<style>

/*幻灯片播放*/
.wipercontainer {
    width: 100%; max-width: 100%;
    height: 340px;
    max-height: 100%;
    margin: 20px auto;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

@media(min-width:1401px){
   .wipercontainer{
        height:325px
    }
}

@media(min-width:992px)and (max-width: 1199px){
    .wipercontainer{
        height: 374px
    }
}


@media(max-width:992px){
    .wipercontainer{
        height: 350px
    }
}



</style>