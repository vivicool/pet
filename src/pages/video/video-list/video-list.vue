<template>
    <div>
        <div class="container">
            <div class="row mtb40">
                <div class="col-xs-6">
                    <div class="mlr10all mtb10all">
                            <a class="btn bdn on crw plr25 ptb6 bg43 fs16">综合视频</a>
                            <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">狗狗视频</a>
                            <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">猫咪视频</a>
                    </div>
                </div>
                <div class="col-xs-6 clearfix">
                    <div  class="cr7-a fs16 crhr43 fr">
                        <ul class="flall pr33all mtb10all">
                                <li>
                                <a href="" class="active">综合排序</a>   
                                <div class=""><a class="bb2 bss bc43  w60px mt5 dib"></a></div>              
                                </li>
                                <li>
                                    <a href="">评论排序</a>
                                </li>
                                <li>
                                    <a href="">收藏排序</a>
                                </li>
                                <li>
                                    <a href="">人气排序</a>
                                </li>                                                                                                                       
                        </ul>                      
                    </div>
                </div>               
            </div>    
            <div class="row mb30all mb50">
                 <div class="col-md-5ths" v-for="(funny,index) in moment" :key="index">
                    <VideoListObj :url="funny.url" :liulan="funny.liulan" :browse="funny.browse" :pinglun="funny.pinglun" :comment="funny.comment"
                    :hour="funny.hour" :time="funny.time" :text="funny.text"></VideoListObj>                 
                 </div>
            </div> 
            <SareListPageTurning></SareListPageTurning>                    
         </div>
    </div>
</template>

<script>
    import VideoListObj from '../video-list/video-list-obj/video-list-obj.vue'
    import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'


    export default {
        components: {
            VideoListObj,
            SareListPageTurning,
        },
        data () {
            return {
                 moment:[
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;'  ,                                                                                       
                        },
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;',                         
                        },
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;'  ,                     
                        },
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;',                      
                        },
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;' ,                       
                        },
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;',                      
                        }, 
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;',                        
                        }, 
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;',                      
                        }, 
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;' ,                      
                        },
                    { 
                            url: require ('../../../assets/img/a.jpg'),
                            browse:'282',
                            comment:'103',
                            time:'30',
                            text:'图片标题文字',
                            liulan:'&#xe678;',
                            pinglun:'&#xe675;',
                            hour:'&#xe635;' ,               
                        }                                                                                                                                                                                     
                    ]        
            }                         
        }

    }

</script>

<style scoped>
    .active{
        color:#0fc698;
    }


</style>