<template>
        <div style="background:#2b3848">
                <div class="container">
                    <div class="row cr39-a crhr3-a cr39 ptb30 copyright">
                        <div class="col-sm-10">
                            <div class="p10all">
                                <span>申请友链:</span>
                                <a href="" target="_blank"  v-for="(friend,index) in friendship" :key="index">{{ friend.url }}</a>
                            </div>

                        </div>
                        <div class="col-sm-2">
                            <div class="plr10all">
                                <a class="br1 bcw20 bss" href="" target="_blank">用户排行榜</a>
                                <a href="" target="_blank">网站地图</a>
                            </div>
                        </div>
                    </div>
                    <div class="banquan ptb20 tac dn">
                        <p class="cr43">©2018ECHONG.COM</p>
                    </div>
                </div>
         </div>    

</template>

<script>
    export default {
        data () {
            return {
                friendship:[
                    {
                         url:'友情链接'                                             
                     },
                    {
                         url:'友情链接'                                           
                     },    
                    {
                         url:'友情链接'                                           
                     },   
                    {
                         url:'友情链接'                                           
                     },   
                    {
                         url:'友情链接'                                           
                     },   
                    {
                         url:'友情链接'                                           
                     },   
                    {
                         url:'友情链接'                                           
                     },   
                    {
                         url:'友情链接'                                           
                     },   
                    {
                         url:'友情链接'                                           
                     },
                    {
                         url:'友情链接'                                           
                     },
                    {
                         url:'友情链接'                                           
                     }                                                                                                                                                                                                                                                             
                ]
            }
        }
    }

</script>

<style>

@media(max-width:992px){
    .copyright{
        display:none;
    }

    .banquan{
        display:block;
    }
}



</style>