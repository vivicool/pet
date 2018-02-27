<template>
    <div>
            <div class="row pa l0 r0 b0 searchbox">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="row mb10all">
                        <div class="col-sm-9">
                            <div class="pr br1000">
                                <form action="#" method="get">
                                    <input type="search" class="br1000 brfs0 bgw  dnbtnfocus  w100 p10 ti5 searchBox" placeholder="请输入关键字搜索" v-model="value">
                                    <!--搜索下拉提示框-->
                                    <ul class="bg0 w100 dropdownBox pa dnhr bghr1all plr20all ptb12all cp cr11-a keyword dn" style="z-index:2">
                                        <li v-for="(item,index) in items" :key="index">
                                            <a target="_blank" class="flall">
                                                <div class="tno"> {{ value }}</div>
                                                <div><i class="glyphicon glyphicon-search cr6 mr5"></i>{{ item.message }}</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <a target="_blank" class="glyphicon glyphicon-search pa dib search" aria-hidden="true"></a>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <a target="_blank" class="w100 bg42 db tac br1000  crw tn fs16  bghr43 tranbackground crhrw p11">晒 宠</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>

    </div>
</template>

<script>
import '../../../../assets/css/CSSHelper.css'
import '../../../../assets/css/ColorHelper.css'


export default {
    data () {
        return {
            items:[
                { message:'搜售宠'},
                { message:'搜商品'},
                { message:'搜服务'},
                { message:'搜知识'}                
            ]
        }
    }
}

</script>

<style>
/*搜索框*/

.searchbox{
    top:40%;
}

@media(max-width:768px){
    .searchbox{
        top:30%;
    }
}

/*搜索关键词*/

.keyword>li>a>div:nth-child(1){
    width:calc(100% - 70px) !important
}

.keyword>li>a>div:nth-child(2){
    float:right;
    width:70px
}

/*搜索图标*/
.search {
    background-color: #fff !important;
    border-color: #fff !important;
    color: #a6a6a6 !important;
    right:20px;margin-top:12px
}



</style>