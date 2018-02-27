<template>
    <div>
                            <div class="tac">
                                <div class="pictureHeight  h180px oh">
                                    <a href="#" target="_blank">
                                        <img :src="url" alt="" class="w100 h100 hr2d1">
                                    </a>
                                </div>
                                <div class="clearfix mtb20all plr10all">
                                    <div class="fl"><a href="" target="_blank" class="cr7 fs12"><i class="iconfont mr5" v-html="position"></i>{{ address }}</a></div>
                                    <p class="fr fs16 cr43">¥<span class="ml5">{{ money }}</span></p>
                                </div>
                            </div>        
    </div>
</template>

<script>

    export default {
        props:[
            'url',
            'position',
            'address',
            'money'
        ]        
    }

</script>