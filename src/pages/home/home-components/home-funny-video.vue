<template>
     <div class="bg0">
                <div class="container">
                    <HomeTitle :title="title"></HomeTitle>   
                                        
                    <div class="row mb30all mb50">                       
                        <div class="col-md-5ths" v-for="(funny,index) in moment" :key="index">
                            <VideoListObj :url="funny.url" :browse="funny.browse" :comment="funny.comment" :time="funny.time" :text="funny.text"
                            :liulan="funny.liulan" :pinglun="funny.pinglun" :hour="funny.hour"
                            ></VideoListObj>
                        </div>                                                                          
                    </div>
                </div>                         
     </div>
     
</template>

<script>
    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/css/HoverHelp.css'
    import '../../../assets/css/CSSHelper.css'
    import '../../../assets/font/iconfont.css'
   import HomeTitle from '../home-components/home-title/home-title.vue'
   import VideoListObj from '../../video/video-list/video-list-obj/video-list-obj.vue'



export default {
    components: {
        HomeTitle,
        VideoListObj
    },
    data () {
        return {
            title:'搞笑视频',
            moment:[
               { 
                    url: require ('../../../assets/img/a.jpg'),
                    browse:'282',
                    comment:'103',
                    time:'30',
                    text:'视频标题文字',
                    liulan:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'  ,
                                                          
                },
               { 
                    url: require ('../../../assets/img/a.jpg'),
                    browse:'282',
                    comment:'103',
                    time:'30',
                    text:'视频标题文字',
                    liulan:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'                         
                },
               { 
                    url: require ('../../../assets/img/a.jpg'),
                    browse:'282',
                    comment:'103',
                    time:'30',
                    text:'视频标题文字',
                    liulan:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'                         
                },
               { 
                    url: require ('../../../assets/img/a.jpg'),
                    browse:'282',
                    comment:'103',
                    time:'30',
                    text:'视频标题文字',
                    liulan:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'                         
                },
               { 
                    url: require ('../../../assets/img/a.jpg'),
                    browse:'282',
                    comment:'103',
                    time:'30',
                    text:'视频标题文字',
                    liulan:'&#xe678;',
                    pinglun:'&#xe675;',
                    hour:'&#xe635;'                         
                }                                                                
            ]        
        }
    }
}

</script>

<style scoped>
.videotu{
  margin-top:-25px;margin-left:-25px;
}

.triangle{
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 13px solid white;
    border-bottom: 10px solid transparent;
}
</style>