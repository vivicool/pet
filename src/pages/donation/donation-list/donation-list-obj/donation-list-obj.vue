<template>
    <div>
                 <div class="bgw hr2d10 bshuihr tran">
                                    <div class="pictureHeight  h180px">
                                        <a href="#" target="_blank">
                                            <img :src="url" alt="" class="w100 h100">
                                        </a>
                                    </div>
                                    <div class="ptb20 tac tno plr20">
                                        <a href="#" target="_blank" class="cr11">
                                         {{ title }}
                                        </a>
                                    </div>
                                    <div class="plr10">
                                        <div class="progress" style="height:3px">
                                            <div class="progress-bar bg42" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" v-bind:style=" 'width:' + (money/sum)*100 +'%' " >
                                                <span class="sr-only"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container-fluid pb10">
                                        <div class="row tac">
                                            <div class="col-xs-4 br1 bsd bc2 h50px">
                                                <p class="fs16 cr43">¥<span class="ml5">{{ sum }}</span></p>
                                                <p class="cr7">须筹</p>

                                            </div>
                                            <div class="col-xs-4 br1 bsd bc2 h50px">
                                                <p class="fs16 cr43">¥<span class="ml5">{{ money }}</span></p>
                                                <p class="cr7">已筹</p>
                                            </div>
                                            <div class="col-xs-4">
                                                <p class="fs16 cr43">{{ time }}</p>
                                                <p class="cr7">剩时</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>        
    </div>
</template>

<script>
    export default {
        props:[
            'url',
            'title',
            'sum',
            'money',
            'time'
        ]

    }

</script>