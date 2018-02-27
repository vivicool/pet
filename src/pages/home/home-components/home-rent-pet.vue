<template>
     <div class="bgw column column4">
                <div class="container">
                    <HomeTitle :title="title"></HomeTitle>              
                    <div class="row mb25all">
                        <div class="col-md-5ths" v-for="(lease,index) in pets" :key="index">
                            <RentPetListOjb :url="lease.url" :address="lease.address" :position="lease.position" :price="lease.price" :browse="lease.browse"
                            :browsenum="lease.browsenum" :comment="lease.comment" :commentnum="lease.commentnum" :love="lease.love" :time="lease.time"
                            ></RentPetListOjb>
                        </div>
                    </div>
                </div>
    </div>

</template>

<script>

    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/css/HoverHelp.css'
    import '../../../assets/css/CSSHelper.css'

    import HomeTitle from '../home-components/home-title/home-title.vue'
    import RentPetListOjb from '../../rent-pet/rent-pet-list/rent-pet-list-obj/rent-pet-list-obj.vue'

    export default {
        components: {
           HomeTitle,
           RentPetListOjb 
        },
        data () {
            return {
                title:'出租萌宠',
                pets:[
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'600元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'700元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'800元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'900元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'500元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },   
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'600元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'680元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'700元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'800元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    },
                    {
                        url: require ('../../../assets/img/a.jpg'),
                        address:'广东 广州',
                        position:'&#xe608;', 
                        price:'600元/月',
                        browse:'&#xe678;',
                        browsenum:'282',
                        comment:'&#xe675;',
                        commentnum:'156',
                        love:'&#xe622;',
                        time:'29'                                              
                    }                                                                                                 
                ]
             
            }
        }
    }


</script>