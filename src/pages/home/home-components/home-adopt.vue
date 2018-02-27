<template>
     <div class="bg0">
                <div class="container">
                    <HomeTitle :title="title"></HomeTitle>  
                    <div class="row mb25all mb50">
                        <div class="col-md-5ths" v-for="(find,index) in home" :key="index">
                            <AdoptListObj :url="find.url" :position="find.position" :address="find.address" :content="find.content"></AdoptListObj>
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
     import AdoptListObj from '../../adopt/adopt-list/adopt-list-obj/adopt-list-obj.vue'

    export default {
        components: {
            HomeTitle,
            AdoptListObj
        },
        data () {
            return {
                title:'萌宠领养',
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

<style>


</style>