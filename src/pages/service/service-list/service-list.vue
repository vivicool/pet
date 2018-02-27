<template>
    <div>
        <div class="container">
            <div class="row mtb40">
                <div class="col-md-9">
                    <div>
                        <ul class="flall mr10all clearfix mtb10all">
                            <li v-for="(service,index) in servicebtn" :key="index"><a class="btn bc2 bss cr7 plr20 ptb6 bghr43 fs16">{{ service.title }}</a></li>                          
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div  class="cr7-a fs16 fr">
                        <ul class="flall pr20all mtb10all">
                            <li>
                                 <a href="" class="active">综合</a> 
                                 <div><a class="bb3 bss bc43 bg43 w30px mt3 dib"></a></div>        
                            </li>
                            <li>
                                 <a href="">人气</a>
                            </li>
                            <li>
                                 <a href="">价格</a>
                            </li>   
                            <li>
                                 <a href="">地址 <i class="iconfont fs18 fwb">&#xe756;</i></a>
                            </li>                             
                        </ul>
                    </div>
                </div>                
            </div>
            <ul>
                <li v-for="(content,index) in service" :key="index" class="bsd bb1 bc6 mtb50">
                    <div class="row clearfix">
                        <div class="col-sm-2" >
                            <div class="oh CommunityPhoto wh100  mb40" >
                                <a href="" target="_blank"> <img :src="content.turl" alt="" class=" wh100  hr2d1"/></a>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-xs-3">
                                    <div class="mt20">
                                        <p class="fs28 cr8">02-25</p>
                                        <p class="mt15 cr8  mtb10" style="">2018</p>                                        
                                    </div>
                                </div>
                                <div class="col-xs-9">
                                    <div>
                                        <a href="" target="_blank">
                                            <h3 class="cr11 fwb500 tno" style="margin-top:-1px;">{{ content.message }}</h3>
                                        </a>
                                        <a href="" target="_blank">
                                            <p class="cr7 mt20" >{{ content.content}}</p>
                                        </a>                                        
                                    </div>
                                    <div class="cr7 mt10">
                                        <span><i class="iconfont mr5 fs18"  v-html="content.position"></i>{{ content.city }}</span>
                                        <span><i class="iconfont mr5 fs18 pl15" v-html="content.hour"></i>{{ content.time }}</span>
                                        <span><i class="iconfont mr5 fs18 pl15"  v-html="content.browse"></i>{{ content.browsenum }}</span>
                                        <span><i class="iconfont mr5 fs18 pl15" v-html="content.comment"></i>{{ content.commentnum }}</span>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 clearfix mtb30">
                            <div class="fs28 cr43 fl">{{ content.money }}<span class="ml5">元</span></div>
                            <div class="fr"><a href="" class="fs28 cr8"><i class="iconfont" v-html="content.page"></i></a></div>
                        </div>                     
                    </div>                    
                </li>
            </ul>
            <SareListPageTurning class="mtb80"></SareListPageTurning>    
        </div>
    </div>
</template>

<script>
import SareListPageTurning from '../../../share/list/share-list-page-turning/share-list-page-turning.vue'
    export default {
        components:{
            SareListPageTurning
        },
        data () {
            return {
               servicebtn:[
                   { title:'配种' },
                   { title:'寄养' },
                   { title:'托运' },
                   { title:'洗护' },
                   { title:'医护' },
                   { title:'造型' },
                   { title:'训练' },
                   { title:'绝育' },
                   { title:'摄影' },
                   { title:'殡葬' }
               ],
               service:[
                    { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browsenum:'6564',
                      commentnum:'95',
                      time:'2018-02-25',
                      text:'Kitty',
                      url: require('../../../assets/img/tx1.jpg') ,
                      turl:require('../../../assets/img/a.jpg'),
                      browse:'&#xe678;',
                      comment:'&#xe675;',
                      hour:'&#xe635;',
                      position:'&#xe608;',
                      city:'广东广州',
                      money:'29.9',
                      page:'&#xe63b;'
                    },
                    { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browsenum:'6564',
                      commentnum:'95',
                      time:'2018-02-25',
                      text:'Kitty',
                      url: require('../../../assets/img/tx1.jpg') ,
                      turl:require('../../../assets/img/a.jpg'),
                      browse:'&#xe678;',
                      comment:'&#xe675;',
                      hour:'&#xe635;',
                      position:'&#xe608;',
                      city:'广东广州',
                      money:'29.9',
                      page:'&#xe63b;'
                    },
                    { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browsenum:'6564',
                      commentnum:'95',
                      time:'2018-02-25',
                      text:'Kitty',
                      url: require('../../../assets/img/tx1.jpg') ,
                      turl:require('../../../assets/img/a.jpg'),
                      browse:'&#xe678;',
                      comment:'&#xe675;',
                      hour:'&#xe635;',
                      position:'&#xe608;',
                      city:'广东广州',
                      money:'29.9',
                      page:'&#xe63b;'
                    }                                       
               ] 
            }
        }
    }

</script>

<style scoped>
.bgactive{
    background:#0fc698;
    border:none;
}

.active{
    color:#0fc698;
}

</style>