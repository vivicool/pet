<template>
    <div class=" bg0">
            <div class="container">
                <HomeTitle :title="title"></HomeTitle>                       
                <div class="row mb25all">
                    <div class="col-md-2" v-for="(know,index) in ledge" :key="index">
                        <EncyclopediasListObj :url="know.url" :title="know.title"></EncyclopediasListObj>
                    </div>
                </div>
            </div>
     </div>

</template>

<script>
   import HomeTitle from '../home-components/home-title/home-title.vue'
   import EncyclopediasListObj from '../../encyclopedias/encyclopedias-list/encyclopedias-list-obj/encyclopedias-list-obj.vue'

    export default {
        components: {
            HomeTitle,
            EncyclopediasListObj
        },
        data () {
            return {
                title:'宠物百科',
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