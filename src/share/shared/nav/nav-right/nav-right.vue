<template>
    <div class="pf bg43 r0 t0 h100 pt10 plr0 sideNav" style="width:45px;z-index:9999;">
        <ul class="crw-a">
            <li v-for="(nav,index) in rightnav " :key="index"> 
                <div class="tac">
                    <router-link :to="nav.route">
                        <i class="fl db"   v-bind:style="{ 'backgroundImage':'url(' + nav.imgurl + ')','backgroundRepeat':'no-repeat','backgroundPosition': nav.backgroundPosition }"></i>
                        <p>{{ nav.title }}</p>
                    </router-link>
                </div>
            </li>
            <div>
                   <li v-for="(side,index) in rightside" :key="index">
                        <div class="tac">
                            <router-link :to="side.route">
                                <i class="fl db" v-bind:style="{ 'backgroundImage':'url(' + side.url + ')','backgroundRepeat':'no-repeat','backgroundPosition': side.backgroundPosition }"></i>
                                <p>{{ side.text }}</p>
                            </router-link>
                        </div>
                    </li>      
                    <li>
                        <div class="tac">
                            <a>
                                <i class="fl db downloadtubiao"></i>
                                <p>下载APP</p>
                            </a>
                        </div>
                    </li>                                                              
            </div>
        </ul>
      
    </div>    
</template>

<script>


    export default {
       
        data () {
            return {
                rightnav :[
                    {
                         imgurl:require('../../../../assets/img/bgpng.png'),    
                         backgroundPosition:'0px 0px',                   
                         title:'右侧导航',
                         route:''
                    },
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -45px',          
                        title:'管理中心',
                        route:''
                    },
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -90px',          
                        title:'基本资料',
                        route:''
                    },
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -135px',          
                        title:'提醒设置',
                        route:''
                    },        
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -180px',          
                        title:'我的收藏',
                        route:''
                    },   
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -225px',          
                        title:'上传晒宠',
                        route:''
                    },  
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -270px',          
                        title:'发布商品',
                        route:''
                    },  
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -315px',          
                        title:'出售萌宠',
                        route:''
                    },   
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -360px',          
                        title:'发布服务',
                        route:''
                    },      
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -405px',          
                        title:'送养宠物',
                        route:''
                    },  
                    {
                        imgurl:require('../../../../assets/img/bgpng.png'),   
                        backgroundPosition:'0px -450px',          
                        title:'曝光平台',
                        route:''
                    }                                                                                                                                                                                                                                                                                                                                                                                               
                ],
            rightside: [
                    {
                        url:require('../../../../assets/img/bgpng.png'),  
                        backgroundPosition:'0px -495px',
                        text:'返回顶部',
                        route:''                
                    },
                    {
                        url:require('../../../../assets/img/bgpng.png'),  
                        backgroundPosition:'0px -585px',
                        text:'帮助中心',
                        route:''                  
                    },                                         
                    {
                        url:require('../../../../assets/img/bgpng.png'),  
                        backgroundPosition:'0px -630px',
                        text:'在线留言',
                        route:''                  
                    }                                             
                ]
            }
        }

    }
</script>

<style>
/*右侧边导航*/
    .sideNav>ul>div{
        position: absolute;
        bottom:10px;
        left:0px;
    }


    .sideNav li>div{
        width:140px;
        height: 45px;
        transition:all .5s;

    }

    .sideNav li>div i{
        width:45px;height:45px;
        line-height:45px;
        margin-right:-37px
    }

    .sideNav li>div p{
        display:inline-block;
        width: 80px;
        height: 45px;
        line-height: 45px;
        text-align: center;
    }

    .sideNav li:hover>div{
        margin-left:-68px;
        background:#83d8b2;
    }

    @media(max-width:1120px){
        .sideNav{
            display:none;
        }
    }

    .downloadtubiao{
        background-image:url(../../../../assets/img/bgpng.png);
        background-position:0px -540px;
    }
</style>