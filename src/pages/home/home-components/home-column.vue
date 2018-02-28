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

/*栏目10格栅栏*/
.col-xs-10ths,
.col-sm-10ths,
.col-md-10ths,
.col-lg-10ths {
    position: relative;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

@media(max-width:767px) {
    .col-sm-10ths {
        width: 20%;
        float: left;
       
    }
}

@media ( min-width: 768px) {
    .col-sm-10ths {
        width: 10%;
        float: left;
    }
}

@media ( min-width: 992px) {
    .col-md-10ths {
        width: 10%;
        float: left;
    }
}

@media ( min-width: 1200px) {
    .col-lg-10ths {
        width: 10%;
        float: left;
    }
}


</style>



