<template>
    <div>
                          
                                            <a href="#" target="_blank">
                                                <img :src="url" alt="" class="w40px h40px br1000 fl">
                                                <div class="pl20 fl mt-4">
                                                    <p class="fwb cr11">{{ title }}</p>
                                                    <div class="cr7 fs12 flall clearfix">
                                                        <p title="最后回复时间"><i class="glyphicon glyphicon-time mr5"></i>{{ date }}</p>
                                                        <span class="ml20" title="周回复数"><i class="glyphicon glyphicon-sound-stereo mr5"></i>{{ num }}</span>
                                                    </div>
                                                </div>
                                                <i class="db fr  w25px h25px lh25 br1000 tac  fwb mt5" v-bind:style=" { color: color, backgroundColor: backgroundColor }">{{ order }}</i>
                                            </a>
                                       
                                    
                                   
    </div>
</template>

<script>
    export default {
        props:[
            'url',
            'title',
            'date',
            'num',
            'backgroundColor',
            'color',
            'order'
        ]
    }

</script>