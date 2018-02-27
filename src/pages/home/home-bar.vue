<template>
    <div>
        <!--首页海报及导航部分-->
        <div class="w100">
            <HomeTopBar></HomeTopBar>
            <NavTop></NavTop>
        </div>        

    </div>
</template>

<script>
import HomeTopBar from '../home/home-components/home-top-bar.vue'
import NavTop from '../../share/shared/nav/nav-top/nav-top.vue'

export default {
    components: {
        HomeTopBar,
        NavTop
    }
}

</script>