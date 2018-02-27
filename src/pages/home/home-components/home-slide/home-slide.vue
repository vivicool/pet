<template>
    <div>    
        <div class="wh100">
            <a>
                <img :src="url" class="wh100"/>
            </a>
            <div class="pa b0 w100 bgb30 h50px" style="z-index:1;">
                <p class="crw mt17  tno fs16 tal ml20" slot="ta" >{{ biaoti }}</p>
            </div>
        </div>         
    </div>
</template>

<script>

    export default {
     props:['url','biaoti']        
       
    }

</script>

