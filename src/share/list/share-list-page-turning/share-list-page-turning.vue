<template>
    <div>
        <div class="mb60 tac">
            <div class="dib clearfix">
                <div class="pr fl mr10">
                    <a href="javascript:;" onclick="window.history.go(-1)">
                        <div class="w110px h40px bgw br4 bw1 bss bc3"></div>
                        <div class="bgw pa br4 bw1 bss bc5 bwt0 br0 tr45 w30px h30px" style="left:-13px;top:5px;"></div>
                        <i class="iconfont fs40 cr5 pa" v-html="lastpage" style="top:-8px;left:30px"></i>
                    </a>
                </div>
                <div class="pr fl ml10">
                    <a href="javascript:;">
                        <div class="w110px h40px bgw br4 bw1 bss bc3 "></div>
                        <div class="bgw pa br4 bw1 bss bc5 bwb0 bl0 w30px h30px tr45" style="left:91px;top:5px;"></div>     
                        <i class="iconfont fs42 cr4 pa" v-html="nextpage" style="top:-12px;left:40px"></i>               
                    </a>
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/font/iconfont.css'

    export default {
        data () {
            return {
              lastpage:'&#xe612;',
              nextpage:'&#xe613;'  
            }
        }
    }

</script>
  

<style scoped>


</style>