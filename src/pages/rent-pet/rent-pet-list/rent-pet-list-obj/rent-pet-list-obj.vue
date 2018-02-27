<template>
    <div>
                            <div>
                                <div class="pictureHeight  h180px oh pr hrb-50">
                                    <a href="#">
                                        <img :src="url" alt="" class="w100 h100 hr2d1">
                                    </a>  
                                    <div >                        
                                        <div class="container-fluid pa b0 w100  tac tno ptb10  bgb30 b-0 b-50" >
                                            <div class="row">
                                                <div class="col-xs-4">
                                                    <div class="tac crw">
                                                        <span class="fs12"><i class="iconfont mr5" v-html="browse"></i>{{ browsenum }}</span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4">
                                                    <div class="tac crw">
                                                        <span class="fs12"><i class="iconfont mr5" v-html="comment"></i>{{ commentnum }}</span>
                                                    </div>
                                                </div>
                                                <div class="col-xs-4">
                                                    <div class="tac crw">
                                                        <span class="fs12"><i class="iconfont mr5" v-html="love"></i>{{ time }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>    
                                </div>

                                <div class="clearfix p10">
                                    <a href="#" target="_blank" class="cr7 fs12 lh30"><i class="iconfont mr5" v-html="position"></i>{{ address }}</a>
                                    <p class="fr fs12 cr43 mt5">¥<span class=" fs14">{{ price }}</span></p>
                                </div>
                            </div>        
    </div>
</template>

<script>
export default {      
        props:[
            'url',
            'address',
            'position',
            'price',
            'browse',
            'browsenum',
            'comment',
            'commentnum',
            'love',
            'time'            
        ]
    
}

</script>