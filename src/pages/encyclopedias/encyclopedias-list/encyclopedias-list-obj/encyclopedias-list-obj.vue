<template>
    <div>
                            <div> 
                                <div class="pictureHeight h180px bgw oh">
                                    <a href="#">
                                        <img :src="url" alt="" class=" w100 h100 hr2d1">
                                    </a>
                                </div>
                                <div class="clearfix ptb20 plr15">                                                                                      
                                    <a href="" target="_blank" class="cr11">{{ title }}</a>
                                </div>
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