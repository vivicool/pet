<template>
    <div class="column column7">
                <div class="container">
                    <HomeTitle :title="title"></HomeTitle>             
                    <div class="row mb25all mb30">
                        <div class="col-md-5ths " v-for="(buy,index) in pets" :key="index">
                            <BuyPetListObj :url="buy.url" :address="buy.address" :money="buy.money" :position="buy.position"></BuyPetListObj>
                        </div>
                    </div>
                </div>
     </div>

</template>

<script>

import HomeTitle from '../home-components/home-title/home-title.vue'
import BuyPetListObj from '../../buy-pet/buy-pet-list/buy-pet-list-obj/buy-pet-list-obj.vue'


    export default {
        components: {
            HomeTitle,
            BuyPetListObj
        },
        data () {
            return {
                title:'购买萌宠',
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