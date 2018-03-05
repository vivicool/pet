<template>
    <div>
        <div class="container">
            <div class="row mtb50">
               <div class="col-xs-6">
                   <div class="mlr10all mtb10all">
                        <a class="btn bdn on crw plr25 ptb6 bg43 fs16">不限宠物</a>
                        <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">领养猫咪</a>
                        <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">领养狗狗</a>
                   </div>
               </div>
               <div class="col-xs-6 clearfix">
                   <div  class="cr7-a fs16 crhr43 fr">
                       <ul class="flall pr28all mtb10all">
                           <li>
                               <a href="" class="active">综合排序</a>   
                               <div><a class="bb2 bss bc43 bg43 w60px mt5 dib" ></a></div>             
                            </li>
                            <li>
                                 <a href="">人气排序</a>
                            </li>
                            <li>
                                 <a href="">评论排序</a>
                            </li>   
                            <li>
                                 <a href="">选择地址 <i class="iconfont fs18 fwb">&#xe756;</i></a>
                            </li>                            
                                                                                                                        
                       </ul>                      
                   </div>
               </div>               
            </div>  
            <div class="row mb25all mb50">
                 <div class="col-md-5ths" v-for="(find,index) in home" :key="index">
                    <AdoptListObj :url="find.url" :position="find.position" :address="find.address" :content="find.content"></AdoptListObj>
                 </div>
            </div>
             <SareListPageTurning></SareListPageTurning>               
        </div>          
    </div>
</template>

<script>
    import AdoptListObj from '../../adopt/adopt-list/adopt-list-obj/adopt-list-obj.vue'
    import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'

    export default {
        components: {
            AdoptListObj,
            SareListPageTurning
        },
        data () {
            return {
                 home:[
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        content:'领养',
                        position:'&#xe608;'
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