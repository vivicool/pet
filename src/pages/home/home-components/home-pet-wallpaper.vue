<template>
            <div class="container column column1">
                <div class="row mb50">                   
                         <HomeTitle :title="title"></HomeTitle>                                          
                    <div class="col-lg-4">  
                      <!--幻灯片-->
                         <div class="swiper-container mt50 pr">
                            <div class="swiper-wrapper">
                                <HomeSlide :url="tupian.url" :biaoti="tupian.biaoti"  v-for="(tupian,index) in picture" :key="index" class="swiper-slide" ></HomeSlide>  

                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination pr20"></div>
                         </div>                                    
                    </div>
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-md-4"  v-for="(wall,index) in paper" :key="index">
                                <div>
                                    <WallpaperListObj :url="wall.url" :title="wall.title"></WallpaperListObj>
                                </div>                             
                            </div>
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
     import WallpaperListObj from '../../wallpaper/wallpaper-list/wallpaper-list-obj/wallpaper-list-obj.vue'


    export default {
        components: {
             HomeTitle,
             HomeSlide,
             WallpaperListObj
        },
        data () {
            return {
                title:'萌宠壁纸',
                picture:[
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'这里是写图片标题文字'
                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'这里是写图片标题文字'
                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'这里是写图片标题文字'
                     },
                    { 
                        url:require ('../../../assets/img/side1.jpg'),
                        biaoti:'这里是写图片标题文字'
                     }                     
                ],
                paper: [
                    { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
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

<style scoped>
.swiper-container {
    height:420px;
}

@media(max-width:1400px){
    .swiper-container{ height:385px }
}

</style>