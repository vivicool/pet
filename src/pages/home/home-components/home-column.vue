<template>
            <div class="pa l0 r0 b100 bgb30 column">
                <div class="container">
                    <div class="tac row">
                        <div class="col-sm-10ths" v-for="(r,index) in val" :key="index">
                            <div class="bghr43 ptb10 tran" >
                                <a href="" target="_blank" class="crw" ><i class="iconfont crw fs32" v-html="r.tubiao"></i></a>
                            <div class="mt5" ><a href="#" target="_blank" class=" crw fs16 crhrw">{{ r.message }}</a></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>             
</template>

<script>
    export default {
    data () {
        return {
                val:[
                {    
                    tubiao:'&#xe705;', 
                    message: '配种'
                },
                {
                    tubiao:'&#xe651;',
                    message:'寄养'
                },        
                { 
                    tubiao: '&#xe721;',
                    message:'托运'},
                {            
                tubiao:'&#xe616;',
                message:'洗护'                        
                },
                {
                tubiao:'&#xe6a8;',
                message:'医护'              
                },
                { 
                    tubiao:'&#xe61c;',
                    message:'造型'
                    },
                { 
                    tubiao:'&#xe68e;',
                    message:'训练'
                },
                {
                    tubiao:'&#xe600;',
                    message:'绝育'
                },
                { 
                    tubiao:'&#xe619;',
                    message:'摄影'
                    },
                { 
                    tubiao:'&#xe6e3;',
                    message:'殡葬'            
                }
            ]
        
           }       
        }
    }
</script>

<style>
/*栏目栅栏*/
@media(max-width:768px) {
    .column{
        display:none;
    }
}

</style>



