<template>
    <div>
                            <div class="tac">
                                <div class="pictureHeight  h180px oh">
                                    <a href="#" target="_blank">
                                        <img :src="url" alt="" class="w100 h100 hr2d1">
                                    </a>
                                </div>
                                <div class="clearfix ptb20 plr15">                                   
                                                <div class="fl fs12">
                                                    <div class="HeadpPortrait fl mr10" ><a href=""><img :src="headurl" alt="" class="w100 h100 br1000"></a></div>
                                                    <p class="fr">{{ text }}</p>
                                                </div>
                                                    
                                    <div class="fr"><a href="" target="_blank" class="cr7 fs12">{{ address }}</a></div>
                                </div>
                            </div>        
    </div>
</template>

<script>
    export default {
        props: [
            'url',
            'address',
            'headurl',
            'text'
        ]
    }

</script>