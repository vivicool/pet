<template>
    <div>
        <!--社区列表内容组件-->
        <ul>
            <li>
                <div class="row">
                    <div class="col-sm-3" >
                        <div class="oh CommunityPhoto wh100  mb40" >
                            <a href="" target="_blank"> <img :src="turl" alt="" class=" wh100  hr2d1"/></a>
                        </div>
                    </div>
                    <div class="col-sm-9">
                        <div class="mb45">
                            <a href="" target="_blank">
                                 <h3 class="cr11 fwb500 tno" style="margin-top:-1px;">{{message }}</h3>
                            </a>
                            <a href="" target="_blank">
                                <p class="cr7 mt20" >{{ content}}</p>
                            </a>
                            <div class="clearfix mt15">
                                <div class="fl">
                                    <div class="HeadpPortrait fl mr10 w20px h20px" ><a href=""><img :src="url" alt="" class="w100 h100 br1000"></a></div>
                                    <p class="fr">{{text }}</p>
                                </div>
                                <div class="fr pl10all cr7 mt15all">
                                    <span class="fs12"><i class="iconfont mr5 "  v-html="tubiao"></i>{{ browse}}</span>
                                    <span class="fs12"><i class="iconfont mr5" v-html="pinglun"></i>{{ comment }}</span>
                                    <span class="fs12"><i class="iconfont mr5" v-html="hour"></i>{{ time }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>                                                    
        </ul>        
    </div>
</template>

<script>
    export default {
        props:[
            'message',
            'content',
            'browse',
            'comment',
            'time',
            'text',
            'url',
            'turl',
            'tubiao',
            'pinglun',
            'hour'
        ]
    }


</script>