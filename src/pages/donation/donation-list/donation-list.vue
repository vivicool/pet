<template>
    <div class="bg1">
       <div class="container">
             <div class="tac mtb50 mtb10all">
               <button class="btn bdn on crw plr35 ptb8 bg43">进行中</button>
               <button class="btn bc2 bss cr7 plr35 ptb8 bghr43 ml25">执行中</button>
               <button class="btn bc2 bss cr7 plr28 ptb8 bghr43 ml25">已经结束</button>
             </div>
             <div class="row pb30all mb50">
                 <div class="col-md-3" v-for="(love,index) in donate" :key="index">
                    <DonationListObj :url="love.url" :title="love.title" :sum="love.sum" :money="love.money" :time="love.time"></DonationListObj>
                 </div>
             </div>   
              <SareListPageTurning></SareListPageTurning>              
        </div>             
    </div>
</template>

<script>
 import DonationListObj from '../../donation/donation-list/donation-list-obj/donation-list-obj.vue'
 import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'

 export default {
     components: {
         DonationListObj,
         SareListPageTurning
     },
     data () {
         return {
                donate:[
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'15000',
                        time:'7天'                       
                    },
                    {   url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'6000',
                        time:'18天'                                              
                    },
                    {  url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'25000',
                        time:'8天'                      
                    },
                    {  url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'40000',
                        time:'2天'                                        
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'15000',
                        time:'7天'                       
                    },
                    {  url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'6000',
                        time:'18天'                                              
                    },
                    {  url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'25000',
                        time:'8天'                      
                    },
                    {  url: require ('../../../assets/img/a.jpg'),
                        title:'这里是萌宠商品标题文字内容内容',                    
                        sum:'50000',
                        money:'40000',
                        time:'2天'                                        
                    }                                                                                     
                ]               
         }
     }  
 }

</script>

<style scoped>



</style>