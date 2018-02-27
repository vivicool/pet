<template>
    <div>
        <div class="container">
            <div class="row mtb50">
               <div class="col-xs-7">
                   <div class="mlr10all mtb10all">
                        <a class="btn bdn on crw plr25 ptb6 bg43 fs16">不限宠物</a>
                        <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">购买猫咪</a>
                        <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">购买狗狗</a>
                   </div>
               </div>
               <div class="col-xs-5">
                   <div  class="cr7-a fs16 crhr43">
                       <ul class="flall pr30all mtb10all">
                           <li>
                               <a href="" class="active">综合排序</a>  
                               <div><a class="bb2 bss bc43 bg43 w60px mt5 dib"></a></div>                    
                            </li>
                            <li>
                                 <a href="">人气排序</a>
                            </li>
                            <li>
                                 <a href="">销量排序</a>
                            </li>
                            <li>
                                 <a href="">价格排序</a>
                            </li>   
                            <li>
                                 <a href="">选择地址 <i class="iconfont fs18 fwb">&#xe756;</i></a>
                            </li>                                                                                                                                            
                       </ul>
                        
                   </div>
               </div>               
            </div> 
            <div class="row mb25all mb30">
                <div class="col-md-5ths " v-for="(buy,index) in pets" :key="index">
                    <BuyPetListObj :url="buy.url" :address="buy.address" :money="buy.money" :position="buy.position"></BuyPetListObj>
                </div>
            </div>
             <SareListPageTurning></SareListPageTurning>  
         </div>  
     </div>
</template>        

<script>
import BuyPetListObj from '../../buy-pet/buy-pet-list/buy-pet-list-obj/buy-pet-list-obj.vue'
import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'


export default {
    components: {
        BuyPetListObj,
        SareListPageTurning
    },
    data () {
        return {
                 pets:[
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1200',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1500',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1600',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1800',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'2200',
                        position:'&#xe608;'
                    },    
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1200',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1500',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1600',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'1800',
                        position:'&#xe608;'
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        money:'2200',
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