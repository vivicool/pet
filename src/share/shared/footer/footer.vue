<template>
    <div style="background:#263040">
                <div class="container crhr3-a xiantiao foots">
                    <div class="row ptb25 tac fs16 cr38-a  bb1 bcw20 bsd  pb30all h20pxall br1all bsdall bcw20all "> 
                        <div class="col-sm-5ths" v-for="(title,index) in items" :key="index">
                            <div><a href="" target="_blank"><i class="glyphicon glyphicon-picture mr10"></i>{{ title.message }}</a></div>
                        </div>
                    </div>
                <div class="pb20">
                   <div class="row ">
                        <div class="col-sm-10 crhr3-a  pt35all">
                            <div class="container-fluid">
                                <div class="row  cr39-a cr39  tac pb30all">
                                    <div class="col-sm-2" v-for="(link,index) in list" :key="index">
                                        <ul class="lh30">
                                            <li class="pb15 fs18">{{ link.heading }}</li>
                                            <li><a href="" target="_blank">{{ link.word }}</a></li>
                                            <li><a href="" target="_blank">{{ link.word2 }}</a></li>
                                            <li><a href="" target="_blank">{{ link.word3 }}</a></li>
                                      
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="cr39 tac pt20  mb10all">
                                <h3 class="fs20 cr38 crhr3 telnum">400-100-5678</h3>
                                <p class="crhr3">周一至周日8:00-18:00</p>
                                <p class="crhr3 teltext">(仅收市话费)</p>
                                <a class="btn cr38 bc39 bghr43 bchr43 ptb5 plr25 ">在线客服</a>
                            </div>
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
                items:[
                   { 
                       message:'我家有宠 '                    
                    },
                   {
                       message:'百萌争宠'
                   },
                   {
                       message:'宠物领养'
                   },
                   {
                       message:'购买爱宠'
                   },
                   {
                       message:'萌宠商品'
                   }                 
                ],
                list:[
                    { 
                        heading:'帮助',
                        word:'购物指南',
                        word2:'支付方式',
                        word3:'配送方式'               
                    },
                    { 
                        heading:'合作',
                        word:'买家赚钱',
                        word2:'商家合作',
                        word3:'加入我们'               
                    },    
                    { 
                        heading:'关于',
                        word:'了解我们',
                        word2:'联系我们',
                        word3:'服务条款'               
                    },    
                    { 
                        heading:'关注',
                        word:'关注微信',
                        word2:'关注空间',
                        word3:'新浪微博'               
                    },    
                    { 
                        heading:'百科',
                        word:'美丽手册',
                        word2:'精品优先',
                        word3:'评测推荐'               
                    },                                                              
                    { 
                        heading:'下载',
                        word:'安卓APP',
                        word2:'苹果APP',
                        word3:'比价插件'               
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.xiantiao>div>div:last-child{
  border:none;
}

@media(max-width:1200px){
    .telnum{ font-size:16px }
    .teltext{ display:none;}

}



@media(max-width:992px){
    .foots{
        display:none;
    }
}

</style>

