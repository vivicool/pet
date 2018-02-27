<template>
    <div>     
        <!--百萌争宠组件-->          
                            <div class="bgw">
                                <div class="pictureHeight  h180px  pr hrb-50 oh">
                                    <a href="#" target="_blank">
                                        <img :src="url" alt="" class="w100 h100 hr2d1">
                                    </a>
                                    <div class=" container-fluid pa b0 w100  tac tno ptb10  bgb30 b-0 b-50">
                                        <a href="#" target="_blank" class="crw">
                                            <p class="pr5 fl tno ">{{ keyword }}</p><span class="">{{ title }}</span>
                                        </a>
                                    </div>                                    
                                    <div class="bgb30  pa t10px l15px tac plr25 ptb5 br1000"><p class="crw fs12">第<span class="cr43 fs14 fwb mlr3">{{num }}</span>名</p></div>
                                    
                                </div>

                                <div class="container-fluid">
                                    <div class="row bb1 bss bc1 ptb15">
                                        <div class="col-xs-4">
                                            <div class="tac cr7">
                                                <span class="fs12"><i class="iconfont mr5" v-html="liulan"></i>{{ browse}}</span>
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="tac cr7">
                                                <span class="fs12"><i class="iconfont mr5" v-html="pinglun"></i>{{ comment}}</span>
                                            </div>
                                        </div>
                                        <div class="col-xs-4">
                                            <div class="tac cr7">
                                                <span class="fs12"><i class="iconfont mr5" v-html="hour"></i>{{ time }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                                    <div class="clearfix father pr" >
                                        <div class=" m20 pb20 tex" >
                                            <div class="fl">
                                                <div class="fl mr10  w20px h20px"><a href="" target="_blank"><img :src="touxiang" alt="" class="w100 h100 br1000"></a></div>
                                                <a href="" target="_blank" class="fr fs12 cr11">{{ name }}</a>
                                            </div>
                                            <div class="fr pl10all cr7">
                                                <span class="fs12"><i class="iconfont mr5"  v-html="votes"></i>{{ ballot }}</span>
                                            </div>                                              
                                        </div>
                                        <div class="tac ptb15 dn vote tranall pa bgw w100" style="top:0px;height:70px;" ><a class="cr10 bc3 btn bghr43 bchr43">{{ btn }}</a> </div>
                                    </div>                                 
                            </div>
                        
                         
    </div>
</template>

<script>
export default {
    props:[
        'url',
        'keyword',
        'title',
        'num',
        'browse',
        'comment',
        'time',
        'touxiang',
        'name',
        'votes',
        'ballot',
        'btn',
        'liulan',
        'pinglun',
        'hour'
    ]
}

</script>

<style>
 .father:hover .vote{
     display:block;
 }


</style>