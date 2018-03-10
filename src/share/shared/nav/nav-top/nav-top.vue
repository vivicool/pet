<template>
    <div>
        <div class=" pf t0 l0 w100 navbox"  id="searchBar" :class="{'bgWhite':isB,'isbgWhite':!isB}">   
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            </button>
                            <a class="navbar-brand fs28 crw"  href="#">ECHONG</a>
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right crw-a fs18" v-for="(icfont,index) in fonts" :key="index" >
                                <!--导航-->
                                <li v-for="(n,index) in list" :key="index">
                                    <!-- <a @click="$goRoute(n.route)">{{ n.message }}</a> -->
                                    <router-link :to="n.route">{{ n.message }}</router-link>
                                </li>
                                <li class="clearfix pr tubiaoli">                                
                                        <div class="pa" style="right:10px;margin-top:10px;top:-4px">
                                            <form action="#" method="get">
                                                <transition name="fade" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave"  >
                                                    <input name="search" type="text" placeholder="请输入关键词" class="br1000" style="width:50px"  v-show="show">
                                                </transition>
                                            </form>
                                        </div>                                    
                                
                                    <a href="#"  class="searchtit fl tran" @click="show=!show" ><i class="iconfont  crw fs22 crhr43 tran"  v-html="icfont.tubiao"   @click="toggle()"  :class="{'green':isA,'isgreen':!isA}"></i></a>
                                </li>                                                                                       
                                <li class="upload"><a href="" target="_blank" ><i class="iconfont  crw fs22 crhr43 tran"  v-html="icfont.upload" ></i></a></li>
                                 <li>
                                    <div class="mt5 fr crw-a  ptb6 plr15 ">
                                    <a href="javascript:;"  @click="open('login')" class="pr10 fs18 br1 bcw20 bsd crhr43 tran login">登录</a>
                                    <a href="javascript:;"  @click="open('register')" class="fs18 pl10 crhr43 tran register">注册</a>
                                    
                                    </div>
                                 </li>
                            </ul>                   
                        </div>                    
                    </div>
                </nav>                                           
        </div>     
        <RegisterLogin :type.sync="type" @closePopHalder="close" v-show="isShow"></RegisterLogin>   
    </div>
</template>

<script>
import  Velocity from 'velocity-animate'
import RegisterLogin from '../../register-login/register-login.vue'

export default {
    components: {
        RegisterLogin
    },
    data () {
        return {
            type:'',
            isShow: false,
            list:[
             { 
                message:'首页',
                route:'/Home'
            },
             { 
                message: '晒宠',
                route:'/ShowPetList'
            },
             { 
                message: '视频',
                route:'/VideoList'
            },
             { 
                 message: '买宠',
                 route:'/BuyPetList'
            },
             {
                message: '商品',
                route:'/ProductList'
            },
             { 
                message: '服务',
                route:'/ServiceList'
            },
             {
                message: '领养',
                route:'/AdoptPetList'
            },      
             { 
                message: '募捐',
                route:'/DonationList'
            },            
             { 
                message: '壁纸',
                route:'/WallPaperList'
            },         
             { 
                 message: '百科',
                 route:'/EncyclopediasList'
            },
             { 
                message: '资讯',
                route:'/NewsList'
            },
             { 
                 message: '社区',
                 route:'/BbsList'
            }
             ], 
            fonts:[
                 { 
                     search:'&#xe60d;',
                     tubiao:'&#xe60d;',
                     upload:'&#xe61b;'
                 }
             ],
             show:false,
             isA: false,
             isB:false                   
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll); 
      },
    methods: {
        open(type) {
            this.isShow = true;
            this.type = type;
        },
        close() {
            this.isShow = false;
        },
        //搜索框过渡
        beforeEnter: function (el) {
          el.style.opacity = 0;
          el.style.width ="50px";
        },
        enter: function (el,done) {
          Velocity(el, { opacity: 1, width:'180px'},{ duration: 500 });

        },
        leave: function (el,done) {
          Velocity(el, { opacity: 0, width:'50px'},{ duration: 500 });
        },
        inputclick: function(){
          this.show = false;
          this.isA=!this.isA;
        },
        toggle:function () {
            this.isA=!this.isA;
        },        
        //滚动
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;      
         if (scrollTop >= 410) {
              this.isB =true;
              this.isA=true;
          }else{
             this.isB =false ;
             this.isA=false;
          }
      },

    }


}

</script>

<style scoped>
.green{
    color:#0fc698;
}

.isgreen{
    color:white;
}
 
.navbar{
    margin-bottom:0px;
}
 .navbar-header{
     margin-left:50px;
 }

 .navbar-right{
     margin-right:50px;
 }

    /*导航随滚动条变字体颜色*/

.navbar {
    border: none;
    background: rgba(0, 0, 0, 0.01);
}


.bgWhite {
    background-color: #fafafa;
    transition: all .7s;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .07);
    padding-top:18px !important;
}

.bgWhite a {
    color: #0fc698 !important;
}

.bgWhite a>i{
     color: #0fc698 !important;
}

.bgWhite .navbar .navbar-nav>li>a {
    color: #0eaf86 !important;
}

.isbgWhite{
    background:none;
    box-shadow:none;
    padding-top:0px;
}



.isbgWhite a{
    color:white;
}

.isbgWhite .navbar .navbar-nav>li>a{
    color:white
}


/*导航a的padding值*/

    .navbar-default .navbar-toggle{
        border:none;background:transparent;
    }
@media(max-width:768px){

}

@media(min-width:768px) and (max-width:851px)  {
    .navbar-nav>li>a {
        padding: 15px 4.5px;
    }

    .tubiaoli, .upload{
       display:none;
   }
  .navbar-header{
     margin-left:0px;
 }

 .navbar-right{
     margin-right:0px;
 }  

.navbar-brand{
    display:none;
}

}


@media(min-width:852px) and (max-width:991px) {
        .navbar-nav>li>a {
         padding:15px 8px;
     }
    .tubiaoli, .upload{
       display:none;
   }

   .navbar-header{
     margin-left:0px;
 }

 .navbar-right{
     margin-right:0px;
 }  

 .navbar-brand{
    display:none;
}

}

@media(min-width:992px) and (max-width:1209px) {
     .navbar-nav>li>a {
         padding:15px 8px;
     }
   .tubiaoli, .upload{
       display:none;
   }
 .navbar-header{
     margin-left:10px;
 }

 .navbar-right{
     margin-right:10px;
 }

}



@media ( min-width : 1210px) and ( max-width:1390px) {
     .navbar-nav>li>a {
        padding: 15px 10px;
    }
}

@media ( min-width : 1340px) {
     .navbar-nav>li>a {
        padding: 15px 14px;
    }

}

@media(min-width:1500px)  {
     .navbar-nav>li>a {
        padding: 15px 20px;
    }
}

@media(min-width:1700px)  {
     .navbar-nav>li>a {
        padding: 15px 27px;
    }
}


/*导航背景色及样式*/

.navbar-default .navbar-nav>li>a {
    color: #fff !important;
}


.navbox{padding-top:30px;z-index:999;transition:padding .6s,background .6s;padding-bottom:10px}


@media(max-width:768px) {
    .navbox {
        background-color: #f8f8f8 !important;
        padding-top:10px
    }

    .navbox .navbar-header>a{
        color: #0fc698 !important;
    }
    .navbar-default .navbar-nav>li>a {
        color: #0fc698 !important;       
    }

    .navbar-default .navbar-nav>li>div>a{
        color: #0fc698 !important;   

    } 

    .searchtit>i{
        color: #0fc698 !important;   
    }

    .upload i{
        color: #0fc698 !important;    
    }

    .navbar-default .navbar-nav>li>div{
     
        border-color:#d9d9d9;
    }


}

.navbar-default .navbar-nav>li>a:hover,
.navbar-default .navbar-nav>li>a.router-link-active
 {
    color: #0fc698 !important;
}

.navbar-default .navbar-toggle .icon-bar {
    background: #0fc698 !important;
}


</style>