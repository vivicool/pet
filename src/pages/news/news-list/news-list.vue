<template>
    <div class="bg0">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <div class="newNav">
                        <ul class="cr9-a fs16 pt20 ptb15all bgw pl70all mt25 w230px h400px newcolumn">
                            <li><a class="active">资讯中心</a></li>                                                
                            <li><a>狗狗新闻</a></li>
                            <li><a>猫咪新闻</a></li>                                             
                        </ul>
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="bgw ml30 mb50 newcontent">
                        <ul class="mtb25 pt50">
                            <li v-for="(news,index) in title" :key="index" class="plr50 newsli">
                                <div class="row">
                                    <div class="col-xs-3" >
                                        <div class="oh  wh100 mb40 newspicture" >
                                            <a href="" target="_blank"> <img :src="news.turl" alt="" class=" wh100  hr2d1"/></a>
                                        </div>
                                    </div>
                                    <div class="col-xs-9 news-list">
                                        <div class="mb45">
                                            <div class="news-title">
                                                <a href="" target="_blank">
                                                    <h3 class="cr11 fwb500" style="margin-top:-1px;">{{news.message }}</h3>
                                                </a>                                                
                                            </div>
                                            <div class="news-content">
                                                <a href="" target="_blank">
                                                     <p class="cr7 mt20" >{{ news.content}}</p>
                                                </a>
                                            </div>
                                            <div class="clearfix mt15 news-icon">
                                                <div class="fr pl10all cr7 mt15all">
                                                    <span class="fs12"><i class="iconfont mr5 "  v-html="news.tubiao"></i>{{ news.browse}}</span>
                                                    <span class="fs12"><i class="iconfont mr5" v-html="news.pinglun"></i>{{ news.comment }}</span>
                                                    <span class="fs12"><i class="iconfont mr5" v-html="news.hour"></i>{{ news.time }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                             <SareListPageTurning class="ptb30"></SareListPageTurning>                                                                                
                        </ul>   
                                                     
                    </div>
                </div>
            </div> 
                     
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
                title:[
                    { message:'我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'282',
                      comment:'95',
                      time:'30分钟前',
                      turl:require('../../../assets/img/a.jpg'),
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                    },
                    { message:'我家的狗狗为什么整天不吃饭？应该怎么办？',
                      content:'耶耶自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'150',
                      comment:'26',
                      time:'1小时以前',
                      turl:require('../../../assets/img/a.jpg'),
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                    },
                    { message:'我家的小猫为什么整天不吃饭？应该怎么办？',
                      content:'啦啦自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'203',
                      comment:'11',
                      time:'2小时之前',
                      turl:require('../../../assets/img/a.jpg'),
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                    }               
                ]                
            }
        }
    }

</script>

<style scoped>
    .active{
        color:#0fc698;
    }

    @media(min-width:768px){
         .news-title h3{
             white-space:nowrap;overflow:hidden;text-overflow:ellipsis
         }
    }

    @media(max-width:992px){
        .newNav ul{
            width:100%;display:inline-block;text-align: center;height:200px;
        }

         .newNav li{
             padding-left:0px;
         }

        .newcontent{margin-left:0px;}
        .newcontent>ul{
            margin:10px 0px;
        }
        .newspicture{
           width:120px; height:120px;
        }

        .newsli{padding-left:20px;}
    }


    @media(max-width:768px){
   
        .newspicture{
           width:130px; height:125px;
        }   

        .news-title h3{
            white-space:break-word;font-size:18px;
        }   

        .news-icon{
            margin-top:30px;
        }

        .news-list{
            padding-left:50px;
        }
    }

    @media(max-width:480px){
         .news-content{
            display:none;
        }

        .newspicture{
           width:100px; height:90px;
        }

        .news-icon{
            margin-top:20px;
        }
    }

    @media(max-width:320px){
          .newspicture{
           width:80px; height:115px;
        }

        .news-icon{
            margin-top:10px;
        }
    }

</style>