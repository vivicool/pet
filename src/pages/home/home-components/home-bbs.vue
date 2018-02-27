<template>
    <div>
            <!--猫狗社区-->
            <div class="container pt50 column column1">
                <div class="row mb20">
                    <div class="col-lg-8">
                        <div class="bb1 bsd bc2 oh pb30 mb60">
                            <h4 class="dib">
                                <a href="" class="crb fs18 mr30 crhr43">猫咪社区</a>
                                <a href="" class="cr9 fs18 crhr43">狗狗社区</a>
                            </h4>
                            <a href="" target="_blank" class="fs16 cr9 fr btn bc1 bghr43 tran crhrw bchr43" style="padding:6px 25px">+ 发贴</a>
                        </div>
                        <!--社区列表内容组件-->
                        <HomeBbsObj :message="item.message" :content="item.content" :browse="item.browse" :comment="item.comment" :time="item.time" :text="item.text"
                        :url="item.url"  :turl="item.turl" :tubiao="item.tubiao" :pinglun="item.pinglun"  :hour="item.hour"
                         v-for="(item,index) in title" :key="index"></HomeBbsObj >
                    </div>
                    <div class="col-lg-4">
                        <div class="bb1 bsd bc2 pb30">
                            <h4 class="tac cr11 fs18">免费发布信息</h4>
                        </div>
                        <div class="row mt60 mb20 mb10all tac crw-a">
                            <div class="col-sm-4" v-for="(k,index) in item" :key="index">
                                <a href="" target="_blank" class="db bg42 bghr43 tranbackground crhrw br4 ptb10">{{ k.message }}</a>
                            </div>
                        </div>

                        
                        <!--幻灯片-->
                    <div class="swiper-container mt50 pr" >
                        <div class="swiper-wrapper">
                            <HomeSlide :url="tupian.url" :biaoti="tupian.biaoti"  v-for="(tupian,index) in picture" :key="index" class="swiper-slide" ></HomeSlide>  

                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination pr20"></div>
                    </div>                          
                    <!--小栏目-->        
                        <div class="row mtb10">
                            <div class="col-xs-2  tac" v-for="(tit,index) in icon" :key="index">
                                <div>
                                    <a href="" target="_blank"><i class="iconfont cr7 fs20" v-html="tit.tubiao"></i></a>
                                    <div class="mt10"><a href="#" class=" cr11 fs16 crhr43">{{ tit.content}}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
    </div>
</template>
<script>
import HomeBbsObj  from '../home-components/home-bbs/home-bbs-obj'
import HomeSlide from '../home-components/home-slide/home-slide.vue'
import '../../../assets/css/swiper.min.css'
import '../../../assets/js/swiper.min.js'

export default {
        components: {
            HomeBbsObj,
            HomeSlide
        },
        data () {
            return {
                item:[
                    { message:'商品发布'},
                    { message:'出售萌宠'},
                    { message:'送养宠物'}
                ],
                title:[
                    { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'282',
                      comment:'95',
                      time:'30分钟前',
                      text:'Kitty',
                      url: require('../../../assets/img/tx1.jpg') ,
                      turl:require('../../../assets/img/a.jpg'),
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                    },
                    { message:'我家的狗狗为什么整天不吃饭？应该怎么办？',
                      content:'耶耶自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'150',
                      comment:'269',
                      time:'1小时以前',
                      text:'Carter',
                      url: require('../../../assets/img/tx2.jpg') ,
                      turl:require('../../../assets/img/a.jpg'),
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                    },
                    { message:'我家的小猫为什么整天不吃饭？应该怎么办？',
                      content:'啦啦自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'203',
                      comment:'116',
                      time:'2小时之前',
                      text:'Adair',
                      url: require('../../../assets/img/tx3.jpg') ,
                      turl:require('../../../assets/img/a.jpg'),
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                    }               
                ],
                picture:[
                    { 
                        url:require ('../../../assets/img/b.jpg'),
                        biaoti:'自从进入暑假期间猫咪就整天不吃饭'
                     },                   
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'自从进入暑假期间猫咪就整天不吃饭2'

                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'自从进入暑假期间猫咪就整天不吃饭3'
                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg') ,
                        biaoti:'自从进入暑假期间猫咪就整天不吃饭4'
                    }
                ],
                icon:[
                     { 
                        content:'领养',
                        tubiao:'&#xe674;'
                    },                   
                    { 
                        content:'募捐',
                        tubiao:'&#xe674;'
                    },
                   { 
                        content:'曝光',
                        tubiao:'&#xe619;'
                    },
                   { 
                        content:'壁纸',
                        tubiao:'&#xe671;'
                    },
                   { 
                        content:'资讯',
                        tubiao:'&#xe634;'
                    },
                   { 
                        content:'视频',
                        tubiao:'&#xe605;'
                    }                                                                                             
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
.swiper-container {
    width: 100%; max-width: 100%;
    height: 320px;
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



/*猫狗社区*/
.CommunityPhoto {
    height: 120px;
}


/*猫图片高度调整,猫狗社区图片调整*/

@media(max-width:499px) {
    .pictureHeight {
        height: 220px;
    }

    .CommunityPhoto {
        height: 220px;
        margin-bottom:15px;
    }
}

@media(min-width:500px) and (max-width:600px) {
    .pictureHeight {
        height: 250px;
    }
    .CommunityPhoto {
        height: 250px;
        margin-bottom:20px;
    }
}

@media(min-width:601px) and (max-width:767px) {
    .pictureHeight {
        height: 330px;
    }

    .CommunityPhoto {
        height: 330px;
        margin-bottom:25px;
    }
}

@media(min-width: 768px) and (max-width: 991px) {
    .pictureHeight {
        height: 400px;
    }

    .CommunityPhoto {
        height: 110px;
        margin-bottom:30px;
    }
}

@media(min-width:992px)and (max-width: 1199px) {
    .pictureHeight {
        height: 180px;
    }

    .CommunityPhoto{
        height: 120px;
    }
}


</style>
