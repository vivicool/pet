<template>
    <div>
            <div class="container">
                <HomeTitle :title="title"></HomeTitle>      
                <div class="row">
                    <div class="col-md-3" >
                        <div class="tno pb17" style="margin-top:-6px" v-for="(raisepet,index) in know" :key="index"><a href="" target="_blank" class="cr11 fs16 lh25">{{ raisepet.title}}</a></div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-4">                        
                                    <div class="pictures  oh pr hrb-50 mb40" v-for="(picture,index) in ledge" :key="index">
                                        <a href="#" target="_blank">
                                            <img :src="picture.url" alt="" class="wh100 hr2d1">
                                        </a>  
                                        <div >                        
                                            <div class="container-fluid pa b0 w100  tac tno ptb10  bgb30 b-0 b-50" v-for="(tit,index) in head" :key="index" >
                                                <a href="" target="_blank" class="crw ">{{ tit.tent }}</a>
                                            </div>
                                        </div>    
                                    </div>                                                           
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class=""> <!--缺少虚线-->
                                        <div class="col-xs-8 ">               
                                            <div class="mb40" v-for="(petcontent,index) in text" :key="index">
                                                <a href="" target="_blank">
                                                    <h4 class="cr11  tno" style="margin-top:-1px;">{{ petcontent.message }}</h4>
                                                </a>
                                                <a href="" target="_blank">
                                                    <p class="cr7 mt20 tno" >{{ petcontent.content}}</p>
                                                </a>
                                                <div class="clearfix" style="margin-top:14px">
                    
                                                    <div class="pl10all cr7">
                                                        <span class="fs12"><i class="iconfont mr5 "  v-html="petcontent.tubiao"></i>{{ petcontent.browse}}</span>
                                                        <span class="fs12"><i class="iconfont mr5" v-html="petcontent.pinglun"></i>{{ petcontent.comment }}</span>
                                                        <span class="fs12"><i class="iconfont mr5" v-html="petcontent.hour"></i>{{ petcontent.time }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-4 mb34 " v-for="(photo,index) in tupian" :key="index">
                                            <div class="photo wh100 oh"><a href="" target="_blank"><img :src="photo.tu" alt="" class="wh100 hr2d1"></a></div>
                                        </div>                                        

                                    </div>
                                        
                                </div>

                            </div>
                        </div>
                     </div>
                </div>                
            </div>   
         </div>

</template>

<script>
    
    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/css/HoverHelp.css'
    import '../../../assets/css/CSSHelper.css'

    import HomeTitle from '../home-components/home-title/home-title.vue'

    export default {
        components: {
            HomeTitle
        },
        data () {
            return {
                 title:'养宠常识',
                 know:[
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},  
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'}, 
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},   
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'},
                   { title:'猫咪喜欢晒太阳是为什么呢？补充身上所需的元素。。。。'}                                                                         
                 ] ,
                 ledge:[
                   { url:require ('../../../assets/img/b.jpg') },                  
                   { url:require ('../../../assets/img/b.jpg') }                                                         
                 ],
                 head:[
                   { tent:'猫咪喜欢晒太阳是为什么呢？' },
                   { tent:'猫咪喜欢晒太阳是为什么呢？' }
                 ],
                 text:[
                     { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'282',
                      comment:'95',
                      time:'30分钟前',
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                     },
                     { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。自从进入暑假期间猫咪就整天不吃饭，也不知道为什么',
                      browse:'282',
                      comment:'95',
                      time:'30分钟前',
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                     },
                     { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'282',
                      comment:'95',
                      time:'30分钟前',
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                     },
                     { message:'我家的猫咪为什么整天不吃饭？应该怎么办？我家的猫咪为什么整天不吃饭？应该怎么办？',
                      content:'自从进入暑假期间猫咪就整天不吃饭，也不知道为什么。',
                      browse:'282',
                      comment:'95',
                      time:'30分钟前',
                      tubiao:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'
                     }                                                          
                 ],
                 tupian:[
                    { tu:require ('../../../assets/img/a.jpg') },
                    { tu:require ('../../../assets/img/a.jpg') },
                    { tu:require ('../../../assets/img/a.jpg') },
                    { tu:require ('../../../assets/img/a.jpg') }
                 ]

            }
        }
    }

</script>

<style>
.photo{
    height:96px;
}

 .pictures {
     height:223px;
    
 }




@media(max-width:992px){
    .pictures{
        height:247px;   
    }


}


@media(max-width:768px) {
    .pictures{
        height:300px;
    }
}

</style>