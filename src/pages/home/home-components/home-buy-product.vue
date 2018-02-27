<template>
      <div class="bg0 column column8">
                <div class="container">
                    <HomeTitle :title="title"></HomeTitle>           
                    <div class="row mb50 mb25all">
                        <div class="col-md-5ths" v-for="(pet,index) in product" :key="index">
                            <ProductListObj :url="pet.url" :title="pet.title" :place="pet.place" :price="pet.price"></ProductListObj>
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
    import ProductListObj from '../../product/product-list/product-list-obj/product-list-obj.vue'

    export default {
        components: {
            HomeTitle,
            ProductListObj
        },
        data () {
            return {
                title:'商品购买',
                product:[
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    } ,
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    },
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'这里是标题内容文字',
                         place:'广东 广州',
                         price:'1200'
                    }                                                                                                           
                ]
            }
        }
    }

</script>