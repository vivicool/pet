<template>
    <div>
                                           <div class=" mb15 clearfix">
                                                <div style="width:35%" class="fl">
                                                    <div class="oh Photo wh100 mtb10" >
                                                        <a href="" > <img :src="turl" alt="" class=" wh100 hr2d1"/></a>
                                                    </div>
                                                </div>
                                                <div style="width:65%" class="fr plr20">
                                                    <div class="exposuretext">
                                                        <a href="" target="_blank">
                                                            <h4 class="cr11">{{ message }}</h4>
                                                        </a>
                                                        <a href="" target="_blank">
                                                            <p class="cr7 content" >{{ content }}</p>
                                                        </a>        
                                                            <div class=" pl10all cr7 mt15 tubiao">
                                                                <span class="fs12"><i class="iconfont mr5 "  v-html="tubiao"></i>{{ browse}}</span>
                                                                <span class="fs12"><i class="iconfont mr5" v-html="pinglun"></i>{{ comment }}</span>
                                                                <span class="fs12"><i class="iconfont mr5" v-html="hour"></i>{{ time }}</span>
                                                            </div>                                        
                                                    </div>                                                    

                                                </div>                                                
                                            </div>           
    </div>
</template>

<script>
    export default {
        props:[
            'turl',
            'message',
            'content',
            'tubiao',
            'browse',
            'pinglun',
            'comment',
            'hour',
            'time'
        ]
    }

</script>

<style>
/*猫狗社区*/
.Photo {
    height: 145px;
  
}

.exposuretext>div>span{
    font-size:12px;
}


@media(min-width:1401px){
  .exposuretext>div{
      
        margin-top:18px;
    }
}


@media(min-width:1199px)and (max-width: 1400px){
    .wipercontainer{
        height:366px
    }

    .Photo{
        height:165px;width:135px;
    }

    .exposuretext>div{
      
        margin-top:18px;
    }
}

@media(min-width:992px)and (max-width: 1199px){
     .Photo{
        width:115px;height:170px;
    }

    .exposuretext>div{
      
        margin-top:5px;
    }

    .exposuretext>div>span{
        font-size:6px !important;padding-left:0px
    }

    .exposuretext>div>span>i{
       margin-right:0px !important;
    }    
}

@media(min-width:788px)and (max-width:992px){

     .content{
         margin-top:30px;
     }
     .exposuretext>div{
        margin-top:38px;
    }

}



</style>