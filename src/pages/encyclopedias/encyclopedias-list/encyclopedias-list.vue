<template>
    <div>
        <div>
            <div class="container">
                <div class="tac">
                    <div class=" mtb80">
                        <span>
                            <a class="cr43 fs22 mr50">猫咪百科</a>                           
                        </span>
                        <span>
                            <a class="cr11 fs22">狗狗百科</a>
                        </span>                                                                                 
                    </div>                              
                     <ul class="flall cr10-a clearfix dib mb60">
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">用品</p>
                                </a>
                            </li>
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">选宠</p>
                                </a>
                            </li> 
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">喂养</p>
                                </a>
                            </li>    
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">训练</p>
                                </a>
                            </li> 
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">疾病</p>
                                </a>
                            </li> 
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">养护</p>
                                </a>
                            </li> 
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">繁殖</p>
                                </a>
                            </li>   
                            <li class="bw1 bss bc3 w110px h110px">
                                <a class="wh100 dib mt15">
                                    <i class="iconfont fs40 cr7">&#xe675;</i>
                                    <p class="fs16">美容</p>
                                </a>
                            </li>                                                                                                                                                                                                                   
                    </ul>                                                   
                </div>       
            </div>            
        </div>
        <div class="bg0">
            <div class="container">
                <div class="row mb25all mt50">
                    <div class="col-md-2" v-for="(know,index) in ledge" :key="index">
                        <EncyclopediasListObj :url="know.url" :title="know.title"></EncyclopediasListObj>
                    </div>
                </div>
                 <SareListPageTurning></SareListPageTurning>              
            </div>                    
        </div>        
    </div>
</template>

<script>
   import EncyclopediasListObj from '../../encyclopedias/encyclopedias-list/encyclopedias-list-obj/encyclopedias-list-obj.vue'
   import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'

   export default {
       components: {
           EncyclopediasListObj,
           SareListPageTurning
       },
       data () {
           return {
                ledge:[
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        title:'英短猫咪'                       
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