<template>
    <div>
                             <div class="pictureHeight mt20 wh100 oh">
                                    <a href="#" target="_blank">
                                        <img :src="url" alt="" class="w100 h100 hr2d1">
                                    </a>
                                </div>
                                <div class="pt20 tac tno plr20">
                                    <a href="#" target="_blank" class="cr11">
                                        {{ title }}
                                    </a>
                                </div>           
    </div>
</template>

<script>
    export default {
        props:[
            'url',
            'title'
        ]
    }

</script>