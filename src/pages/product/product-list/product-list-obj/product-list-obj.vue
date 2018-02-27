<template>
    <div>
                            <div class="bgw hr2d10 bshuihr tran">
                                <div class="pictureHeight  h180px">
                                    <a href="#" target="_blank">
                                        <img :src="url" alt="" class="w100 h100">
                                    </a>
                                </div>
                                <div class="pt20 tac tno plr20">
                                    <a href="#" target="_blank" class="cr11">
                                        {{ title }}
                                    </a>
                                </div>
                                <div class="clearfix p10">
                                    <a href="#" target="_blank" class="cr7 fs12 lh25"><i class="glyphicon glyphicon-map-marker mr5"></i>{{ place }}</a>
                                    <p class="fr fs16 cr43">¥<span class="ml5">{{ price }}</span></p>
                                </div>
                            </div>        
    </div>
</template>

<script>
    export default {
        props:[
            'url',
            'title',
            'place',
            'price'
        ]
    }

</script>