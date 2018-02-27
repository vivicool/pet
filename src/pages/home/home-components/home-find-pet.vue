<template>
    <div class="column column7">
                <div class="container">
                    <HomeTitle :title="title"></HomeTitle>             
                    <div class="row mb25all">
                        <div class="col-md-5ths " v-for="(find,index) in pets" :key="index">
                            <FindPetListObj :url="find.url" :address="find.address"  :headurl="find.headurl" :text="find.text"></FindPetListObj>
                        </div>
                    </div>
                </div>
     </div>

</template>

<script>
    import '../../../assets/css/CSSHelper.css'
    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/css/HoverHelp.css'

    import HomeTitle from '../home-components/home-title/home-title.vue'
    import FindPetListObj from '../../find-pet/find-pet-list/find-pet-list-obj/find-pet-list-obj.vue'

    export default {
        components:{
            HomeTitle,
            FindPetListObj
        },
        data () {
            return {
                title:'寻找宠物',
                pets:[
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        headurl:require ('../../../assets/img/touxiang.jpg'),
                        text:'Kitty'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        headurl:require ('../../../assets/img/touxiang.jpg'),
                        text:'Kitty'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        headurl:require ('../../../assets/img/touxiang.jpg'),
                        text:'Kitty'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        headurl:require ('../../../assets/img/touxiang.jpg'),
                        text:'Kitty'                        
                    },
                    {
                        url:require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        headurl:require ('../../../assets/img/touxiang.jpg'),
                        text:'Kitty'                        
                    }                                                                                
                ]
            }
        }
    }

</script>

<style>

.HeadpPortrait {
    width: 20px;
    height: 20px;
}

</style>