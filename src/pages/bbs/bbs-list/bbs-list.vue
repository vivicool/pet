<template>
    <div>
        <div class="container">
            <div class="tac mtb50">
                 <a class="cr43 fs22 mr50">猫咪社区</a>
                 <a class="cr11 fs22">狗狗社区</a>
            </div>
            <div class="row mt30 mb10">
                <div class="col-sm-8">
                    <div>
                        <ul class="pl20all flall fs16 clearfix">
                             <li class="br1  bss bc6"><a href="" class="mr20 cr10">全部</a></li>
                             <li class="br1  bss bc6"><a href="" class="mr20 cr10">人气</a></li>
                             <li class="br1  bss bc6"><a href="" class="mr20 cr10" >评论</a></li>
                             <li><a href="" class="cr10"><i class="iconfont fs16 mr5">&#xe655;</i>曝光</a></li>
                        </ul>
                        <ul class="flall pl20all cr8 mtb5all clearfix">
                            <li><span><i class="iconfont mr5 ">&#xe678;</i>{{ browsenum }}</span></li>
                            <li><span><i class="iconfont mr5 ">&#xe675;</i>{{ commentnum }}</span></li>
                            <li><span><i class="iconfont mr5 ">&#xe634;</i>{{ num }}</span></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-sm-4">
                    <div class="bbsbtn clearfix">
                        <a class="btn bdn on crw plr40  bg42 fs20 mr30 mtb10"><i class="iconfont  mr10">&#xe65e;</i>发贴</a>
                        <a class="fs20 cr9  btn bc2 tran plr40 bghr42 bchr42"><i class="iconfont mr10">&#xe655;</i>曝光</a>
                    </div>
                </div>                
            </div>              
             <ul class="clearfix">
                    <li v-for="(bbslist,index) in content" :key="index" class=" bsd bc7 bt1">
                        <div class="row">
                            <div class="col-md-10">                                                              
                                        <div class="row clearfix mtb30">
                                            <div class="fl col-xs-2">
                                                <div>
                                                    <a href=""><img :src="bbslist.url" class="w50px h50px br1000"></a>
                                                </div>
                                            </div>
                                            <div class="fl col-xs-10">
                                                <div>
                                                    <a href="" target="_blank">
                                                        <strong class="fs16">[ {{ bbslist.keyword }} ]</strong>
                                                        <span class="cr11 fwb500 tno fs16">{{ bbslist.title }}</span>
                                                    </a>                                        
                                                </div>
                                                <div class="mtb10">
                                                    <a href="" target="_blank">
                                                        <span class="cr43 mt20 mr10" >{{ bbslist.content}}</span>
                                                        <span class="mr10 cr7"><i class="iconfont mr10 fs16 cr43">&#xe678;</i>{{ bbslist.commentnum}}</span>
                                                        <span class="mr10 cr7"><i class="iconfont mr10 fs16 cr43">&#xe675;</i>{{ bbslist.browsenum}}</span>
                                                    </a>                                         
                                                </div>   
                                                <div>
                                                    <ul class="clearfix">
                                                        <li v-for="(bbsimg,index) in img" :key="index" class="fl ml10">
                                                            <a><img :src="bbsimg.picture" class="w90px h90px"></a>  
                                                        </li>
                                                    </ul>
                                                </div> 
                                            </div>                                            
                                        </div>                                                                       
                            </div>
                   
                            <div class="col-md-2">
                                <div class="mt40 mb20">
                                    <span class="mr10 cr43"><i class="iconfont mr10 fs18">&#xe635;</i>{{ bbslist.timenum}}</span>
                                </div>
                            </div>  
                         </div>                      
                    </li>
                    <li class=" bsd bc7 bt1"></li>
            </ul> 
            <SareListPageTurning class="mtb70"></SareListPageTurning>    
            <div>
                <ul class="clearfix flall">
                     <li class="br2 bss bc6 mr15"><a href="" class="mr20 cr11 fs16"><i class="iconfont mr10">&#xe65e;</i>发布新贴</a></li>
                     <li><a href="" class="mr20 cr7 fs16"><i class="iconfont mr10 fs16">&#xe655;</i>曝光黑幕</a></li>
                </ul>
                <!--发布新贴-->
                <div class="post">
                    <input type="text" placeholder="这里输入标题文字" class="w100 bss bc5 bw1 h40px mt30">
                    <textarea placeholder="这里输入帖子内容" class="w100 bss bc5 bw1 mtb30 h150px">
                    </textarea>
                    <a href="" class="btn plr25 ptb10 bg43 crw bdn on fr fs16 mb50" style="border-radius:3px">发布帖子</a>
                </div>
                <!--曝光黑幕-->
                <div class="exposure dn">
                    <input type="text" placeholder="这里输入标题文字" class="w100 bss bc5 bw1 h40px mt30">
                    <div class="clearfix mtb30 row">
                        <div class="col-md-3">
                              <div>
                                 <input type="text" placeholder="姓名" class="bss bc5 bw1 h40px fl w100">      
                              </div>
                        </div>
                        <div class="col-md-9">
                              <div>
                                 <input type="text" placeholder="此人住址" class="bss bc5 bw1 h40px fl w100">      
                              </div>
                        </div>                                     
                    </div>
                    <div class="clearfix row">
                        <div class="col-md-3">
                              <div>
                                 <input type="text" placeholder="她/他的微信号" class="bss bc5 bw1 h40px fl w100">      
                              </div>
                        </div>
                        <div class="col-md-3">
                              <div>
                                 <input type="text" placeholder="她/他的QQ号" class="bss bc5 bw1 h40px fl w100">      
                              </div>
                        </div>         
                        <div class="col-md-3">
                              <div>
                                 <input type="text" placeholder="她/他的手机号" class="bss bc5 bw1 h40px fl w100">      
                              </div>
                        </div>
                        <div class="col-md-3">
                              <div>
                                 <input type="text" placeholder="她/他的身份证号" class="bss bc5 bw1 h40px fl w100">      
                              </div>
                        </div>                                                                           
                    </div>
                    <textarea placeholder="这里输入曝光内容" class="w100 bss bc5 bw1 mtb30 h150px">
                    </textarea>  
                    <div class="row">
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="">
                                        <select name="曝光类型" id="bigname" class="form-control fs16">
                                            <option value="1">曝光类型</option>
                                            <option value="2">虐待</option>
                                            <option value="3">贩卖</option>
                                        </select>                                        
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="fs16">
                                        <ul class="flall plr10all">
                                            <li class="mr15">此人性别</li>
                                            <li>
                                                <input type="radio" name="sex" value="man"> 男  
                                            </li> 
                                            <li>
                                                <input type="radio" name="sex" value="woman"> 女  
                                            </li>
                                            <li>
                                                <input type="radio" name="sex" value="unknow"> 不知 
                                            </li>                                            
                                        </ul>
                                    
                                    </div>
                                </div>                              
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="fs16 mr10">
                                <input type="checkbox" value="report" class="w15px h15px bc2 br3"> 匿名举报
                                <a href="" class="btn plr25 ptb10 bg43 crw bdn on fr fs16 mb50" style="border-radius:3px">发布曝光</a>
                            </div>
                        </div>                   
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
                browsenum:'1256',
                commentnum:'20153',
                num:'20153',
                content:[
                    {
                        url: require('../../../assets/img/tx1.jpg'),
                        keyword:'地表最强',
                        title:'这是标题文字内容',
                        content:'寒冰王者',
                        commentnum:'98',
                        browsenum:'256',
                        timenum:'2分钟前'
                    },   
                    {
                        url: require('../../../assets/img/tx1.jpg'),
                        keyword:'地表最强',
                        title:'这是标题文字内容',
                        content:'寒冰王者',
                        commentnum:'98',
                        browsenum:'256',
                        timenum:'2分钟前'
                    },   
                    {
                        url: require('../../../assets/img/tx1.jpg'),
                        keyword:'地表最强',
                        title:'这是标题文字内容',
                        content:'寒冰王者',
                        commentnum:'98',
                        browsenum:'256',
                        timenum:'2分钟前'
                    },
                    {
                        url: require('../../../assets/img/tx1.jpg'),
                        keyword:'地表最强',
                        title:'这是标题文字内容',
                        content:'寒冰王者',
                        commentnum:'98',
                        browsenum:'256',
                        timenum:'2分钟前'
                    }                                                                           
                ],
                img:[
                    {
                        picture: require('../../../assets/img/tx1.jpg'),
                    },
                    {
                        picture: require('../../../assets/img/tx3.jpg'),
                    },
                    {
                        picture: require('../../../assets/img/tx2.jpg'),
                    }                    
                ]

            }
        }
    }

</script>


<style scoped>

@media(max-width:768px){
 
}

</style>