<template>
    <div>
 <!--       <div class="w100">
            <div class="container pf w100 oh banner"  style="height:580px;z-index:0;" >
                <video loop class="videoBanner">
                    <source src="../../../../assets/img/cat1.mp4" type="video/mp4">
                </video>
                <div class="pa l0 t0 wh100"></div> 
       
                <HomeSearch></HomeSearch>
            </div>   
            <NavTop></NavTop>  
        </div> -->
    </div>
</template>

<script>
 //import HomeSearch from './home-search/home-search.vue'
 //import NavTop from '../../../../share/shared/nav/nav-top/nav-top.vue'

    export default {
        data () {
            return {
               // isA: false,
               // show:false
            }
        },
        components: {
            //HomeSearch,
           // NavTop
        }
    }

</script>

<style scoped>
.green{
    color:#0fc698;
}

.isgreen{
    color:white;
}

   /*视频*/
.videoBanner{
    position:absolute;
    bottom:-300px;
    left:50%;
    width:100%;
    margin-left:-50%
}


@media(max-width:1580px){
    .videoBanner{
        width:1580px;
        margin-left:-790px;       
    }
}

@media(min-width:1921px){
    .videoBanner{
        width:100%;
        margin-left:-50%;       
    }
}

</style>
