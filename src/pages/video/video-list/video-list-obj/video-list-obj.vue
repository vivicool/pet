<template>
    <div>
                            <div class="pictureHeight  h180px pr hrt-50 oh">
                                <div class="h100 oh">
                                    <a href="#" >
                                        <img :src="url" alt="" class="w100 h100 hr2d1">
                                    </a>
                                </div>
                                <div class=" w50px h50px br1000  bgb20 pa t-50 l50 videotu ">
                                    <a href="">
                                        <div class="triangle pa t50 l50" style="margin-top:-10px;margin-left:-5px;"></div>
                                    </a>                                  
                                </div>                                   
                            </div>
                            <p class="tac tno ptb10 plr20 bb1 bss bc2 bgw">{{ text }}</p>
                            <div class="container-fluid bgw">
                                    <div class="row  ptb10">
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
    </div>
</template>

<script>
    export default {
        props:[
           'url' ,
           'liulan',
           'browse',
           'pinglun',
           'comment',
           'hour',
           'time',
           'text'
        ]
    }

</script>

<style scoped>
.videotu{
  margin-top:-25px;margin-left:-25px;
}

.triangle{
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 13px solid white;
    border-bottom: 10px solid transparent;
}


</style>