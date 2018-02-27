<template>
    <div class="bg1">
        <div class="container">
            <div class="row mtb50">
               <div class="col-xs-7">
                   <div class="mlr10all mtb10all">
                        <a class="btn bdn on crw plr25 ptb6 bg43 fs16">不限宠物</a>
                        <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">猫咪商品</a>
                        <a class="btn bc2 bss cr7 plr25 ptb6 bghr43 fs16">狗狗商品</a>
                   </div>
               </div>
               <div class="col-xs-5">
                   <div  class="cr7-a fs16">
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
            <div class="row mb50 mb25all">
                <div class="col-md-5ths" v-for="(pet,index) in product" :key="index">
                    <ProductListObj :url="pet.url" :title="pet.title" :place="pet.place" :price="pet.price"></ProductListObj>
                </div>
            </div> 
             <SareListPageTurning></SareListPageTurning>             
        </div>     
    </div>
</template>

<script>
import ProductListObj from '../../product/product-list/product-list-obj/product-list-obj.vue'
import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'

export default {
    components: {
        ProductListObj,
        SareListPageTurning
    },
    data () {
        return {
                product:[
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    } ,
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
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