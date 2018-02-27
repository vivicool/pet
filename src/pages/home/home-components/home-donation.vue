<template>
     <div class="bg1 column column10">
                <div class="container">
                    <h3 class="tac ptb40">爱心捐赠</h3>            
                        <div class="row pb30all mb50">
                            <div class="col-md-3" v-for="(love,index) in donate" :key="index">
                                <DonationListObj :url="love.url" :title="love.title" :sum="love.sum" :money="love.money" :time="love.time"></DonationListObj>
                            </div>
                        </div>                    
                </div>
     </div>

</template>

<script>
    import DonationListObj from '../../donation/donation-list/donation-list-obj/donation-list-obj.vue'

    export default {
        components: {
            DonationListObj
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