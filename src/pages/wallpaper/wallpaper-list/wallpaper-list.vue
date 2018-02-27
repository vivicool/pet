<template>
    <div>
       <div class="container">
             <div class="row">
                 <div class="col-md-4"></div>              
                 <div class="col-md-4">
                        <div class="tac mtb50 mtb10all">
                            <a class="btn bdn on crw plr35 ptb8 bg43">电脑壁纸</a>
                            <a class="btn bc2 bss cr7 plr35 ptb8 bghr43 ml25">手机壁纸</a>
                        </div> 
                 </div>
                 <div class="col-md-4"></div>                          
             </div>         
        
            <div class="cr11-a fs16 tac" >
                <ul class="flall clearfix plr10all dib mb30">
                    <li class="">壁纸尺寸</li>
                    <li  v-for="(resolving,index) in size" :key="index"><a href="#" class="crhr43 mtb10">{{ resolving.sizes }}</a> </li>
                </ul>                                                        
            </div>      
            <div class="row mb100">
               <div class="col-md-3"  v-for="(wall,index) in paper" :key="index">
                     <WallpaperListObj :url="wall.url" :title="wall.title"></WallpaperListObj>               
                 </div>
             </div>
             <SareListPageTurning></SareListPageTurning>     
        </div>           
    </div>
</template>

<script>
import WallpaperListObj from '../../wallpaper/wallpaper-list/wallpaper-list-obj/wallpaper-list-obj.vue'
import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'


export default {
    components: {
        WallpaperListObj,
        SareListPageTurning
    },
    data () {
        return {
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
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    },
                  { 
                        url:require ('../../../assets/img/a.jpg') ,
                        title:'这里是写标题文字的这里是写标题文字的'
                    }                                                                                                                                                          
                ],
                size:[
                    { sizes:'5120*2880' },
                    { sizes:'3840*2160' },
                    { sizes:'2560*1600' },
                    { sizes:'1920*1200' },
                    { sizes:'1920*1080' },
                    { sizes:'1680*1050' }
                ]                            
        }
    }
}

</script>

<style>


</style>