<template>
    <div>
        <div class=" w550px h320px bg0 pf l50 t50" style="z-index:10001;margin-left:-275px;margin-top:-110px">
            <ul class="tabs clearfix">
                <li class="tac">
                    <a href="javascript:;" class="tac fs16 tab-link ptb10 wh100 db crw" @click="changeType('register')" :class="{'cur':curId===0}">注册</a> 
                </li>
                <li class="tac">
                     <a href="javascript:;" class="tac fs16 tab-link ptb10 wh100 db crw" @click="changeType('login')" :class="{'cur':curId===1}">登录</a>
                </li>
                <li class="tac">
                     <a href="javascript:;" class="tac fs16 tab-link ptb10 wh100 db crw" @click="changeType('app')" :class="{'cur':curId===2}">下载APP</a>
                </li>             
            </ul>
            <div class="cards">
                <!--注册-->
                <div class="w100 clearfix mtb40 " v-show="curId===0">
                    <div class="fl ml30">
                        <div class="w100  plr10 br5 h120px bss bw1 bc4" style="width:280px">
                            <div class="bsd bb1 bc4">
                                <i class="iconfont cr4 fs18" v-html="fontreg"></i>
                                <input type="text" placeholder="用户名" class="bg0 cr0" >
                            </div>
                            <div class="bsd bb1 bc4">
                                <i class="iconfont cr4 fs18" v-html="fontlogin"></i>
                                <input type="password" placeholder="输入密码" class="bg0 cr0">
                            </div>
                            <div>
                                <i class="iconfont cr4 fs18" v-html="validate"></i>
                                <input type="password" placeholder="确认密码" class="bg0 cr0">
                            </div>                    
                        </div>
                        <router-link to="/user-Reg" class="btn  br1000 w100 tac  mt30 ptb12  on  bshn" style="border:none;" >注册</router-link>
                    </div>
                    <div class="fr bss bl1 bc4 pr" style="width:220px">
                        <div class="pa  bg0 h30px cr10 w30px pt30 pb40 cr7" style="left:-10px;top:30%;">或</div>
                        <a href="#" class="btn  br5 tac w100 bg42 ml20 db" style="width:70%"><i class="crw iconfont fs18 mr10" v-html="weibo"></i><span class="crw">微博帐号登录</span></a>
                        <a href="#"  class="btn  br5 tac w100 bss bw1 bc3 db ml20 mtb35 bghr42 tran qqtubiao"  style="width:70%"><i class="iconfont cr43 mr10 fs18"  v-html="qqtubiao"></i><span class="cr43 crhrw ">QQ帐号注册</span></a>
                        <a href="#"  class="btn  br5 tac w100 bss bw1 bc3 db ml20 bghr42 tran wxtubiao"  style="width:70%"><i class="iconfont cr43 mr10 fs18"  v-html="wxtubiao"></i><span class="cr43 crhrw">微信帐号注册</span></a>
                    </div>
                </div>
                <!--登录-->
                <div class="w100 clearfix mtb40 " v-show="curId===1">
                    <div class="fl ml30">
                        <div class="w100  plr10 br5 h80px bss bw1 bc4" style="width:280px">
                            <div class="bsd bb1 bc4">
                                <i class="iconfont cr4 fs18" v-html="fontreg"></i>
                                <input type="text" placeholder="用户名" class="bg0 cr0" >
                            </div>
                            <div >
                                <i class="iconfont cr4 fs18" v-html="fontlogin"></i>
                                <input type="password" placeholder="输入密码" class="bg0 cr0">
                            </div>                                
                        </div>
                        <div class="clearfix mt20">
                            <div class="fl"><input  type="checkbox" value="" class="w15px h15px"/><span class="fs12 cr7 ml5 fwb">十天内免登录</span></div>
                            <div class="fr"><a href="#" class="cr7 fs12 fwb">忘记密码？</a></div>
                        </div>

                        <router-link to="/user-login" class="btn bg42 br1000 w100 tac  mt30 ptb12 bghr43  on  bshn bdn" style="border:none;" >登录</router-link>
                    </div>
                    <div class="fr bss bl1 bc4 pr" style="width:220px">
                        <div class="pa  bg0 h30px cr7 w30px pt30 pb40" style="left:-10px;top:30%;">或</div>
                        <a href="#" class="btn  br5 tac w100 bg42 ml20 db" style="width:70%"><i class="crw iconfont fs18 mr10" v-html="weibo"></i><span class="crw">微博帐号登录</span></a>
                        <a href="#"  class="btn  br5 tac w100 bss bw1 bc3 db ml20 mtb35 bghr42 tran qqtubiao"  style="width:70%"><i class="iconfont cr43 mr10 fs18"  v-html="qqtubiao"></i><span class="cr43 crhrw ">QQ帐号注册</span></a>
                        <a href="#"  class="btn  br5 tac w100 bss bw1 bc3 db ml20 bghr42 tran wxtubiao"  style="width:70%"><i class="iconfont cr43 mr10 fs18"  v-html="wxtubiao"></i><span class="cr43 crhrw">微信帐号注册</span></a>
                    </div>
                </div>  
                <!--下载APP-->      
                <div class="w100 clearfix" v-show="curId===2">
                    <div class="fl ml30" style="width:280px">
                        <div class="w100  plr10 br3 h200px mb25">
                            <div class="clearfix mtb30 cr43-a mlr10" v-for="(downupload,index) in load" :key="index" >
                            <p class="cr43 fl fs16 mt10 mr20">{{ downupload.title }}</p>
                            <a class="btn br4 cr43 fr bw1 bss bc3 tac"><i class="iconfont mr5 fs18" v-html="downupload.tubiao"></i>{{ downupload.btn}}</a>                       
                            </div>             
                        </div>
                    </div>
                    <div class="fr " style="width:220px" v-for="(scan,index) in code" :key="index">
                        <img :src="scan.url" alt="" class="mt45" >
                    </div>         
                </div>
            </div>
        </div>
        <div class="pf t0 r0 b0 l0 bgb70" style="z-index:10000;">
            <span @click="closePop" title="close" class="pa r0 t0 fs36 w100px h100px tac lh100 crw cp">X</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        type: { 
            type: String,
            default: 'login'
        }
    },
    data () {
        return {
            fontreg:'&#xe6c6;',
            fontlogin:'&#xe6b2;',
            validate:'&#xe6b2;',
            weibo:'&#xe65d;',
            qqtubiao:'&#xe670;',
            wxtubiao:'&#xe65f;', 
            load:[
                { title:'安卓APP',tubiao:'&#xe60a;', btn:'下载安卓APP'},
                { title:'苹果APP',tubiao:'&#xe60a;', btn:'下载苹果APP'},
                { title:'WIN软件',tubiao:'&#xe60a;', btn:'下载桌面软件'}
            ],
            code: [
                { url:require ('../../../assets/img/anzhuo.jpg') }, 
               // { url:require ('../assets/img/anzhuo.jpg') }, 
               // { url:require ('../assets/img/anzhuo.jpg') }
            ]  
        }
    },
    computed : {
        curId: function(){
            let type = this.type;
            switch(type){
                case 'register':
                    return 0;
                    break;
                case 'login':
                    return 1;
                    break;
                case 'app':
                    return 2;
                    break;
                default:
                    return 1;  
            }
        }
    },
    methods: {
        closePop(){
            this.$emit('closePopHalder');
        },
        changeType(newValue){
            this.$emit('update:type', newValue)
        }
    }
}

</script>

<style scoped>


.tabs{
    display: -webkit-box;
    display: -moz-box;
    display: box;
    -webkit-box-orient: horizontal;   
    -moz-box-orient: horizontal;
   
}
.tabs>li{
   
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
  
    background-color:#13d5af;
    color:#fff; 
}

.tabs .cur{

    background-color:#f2f2f2 ;
    color:#333;
    transition: .3s;  
}

.wxtubiao:hover>i{
    color:white !important;
}

.qqtubiao:hover>i{
     color:white !important;
    
}

.wxtubiao:hover{
    color:white !important;
  
}

.qqtubiao:hover{
    color:white !important;
}
</style>