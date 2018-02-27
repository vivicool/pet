<template>
    <div>
   
            <div class="pictureHeight  h180px oh">
                <a href="#">
                    <img :src="url" alt="" class="w100 h100 hr2d1">
                </a>
            </div>

            <div class="clearfix ptb15 plr10 bgw">
                <a href="#"  class="cr7 fs12 lh30"><i class="iconfont mr5" v-html="position"></i>{{ address }}</a>
                <a class="btn  cr11 bc3 fr plr20 ptb4 bghr43 bchr43">{{ content }}</a>
            </div>
       
    </div>
</template>

<script>
    export default {
        props:[
            'url',
            'position',
            'address',
            'content'
        ]
    }

</script>