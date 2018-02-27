import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
//import Reg from '../components/RegLogin/Reg.vue'
//import Login from '../components/RegLogin/Login.vue'
import ShowPetList from '../pages/show-pet/show-pet-list/show-pet-list.vue'
import VideoList from '../pages/video/video-list/video-list.vue'
import BuyPetList from '../pages/buy-pet/buy-pet-list/buy-pet-list.vue'
import ProductList from '../pages/product/product-list/product-list.vue'
import ServiceList from '../pages/service/service-list/service-list.vue'
import AdoptPetList from '../pages/adopt/adopt-list/adopt-list.vue'
import DonationList from '../pages/donation/donation-list/donation-list.vue'
import WallPaperList from '../pages/wallpaper/wallpaper-list/wallpaper-list.vue'
import EncyclopediasList from '../pages/encyclopedias/encyclopedias-list/encyclopedias-list.vue'
import NewsList from '../pages/news/news-list/news-list.vue'
import BbsList from '../pages/bbs/bbs-list/bbs-list.vue'
//import AppDownload from '../components/RegLogin/AppDownload.vue'

//import WallPaperDetail from '../components/Page/WallPaper/child/WallPaperDetail.vue'
//import VideoDetail from '../components/Page/vedio/Child/VideoDetail.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path:'',redirect:'/Home'},
    { path:'/Home',name:'Home',component:Home, meta: { title:'首页' }},                                     //主页
    //{ path:'/user-Reg',name:'Reg',component:Reg},                                                          //注册
   // { path:'/user-login',name:'Login',component:Login},                                                    //登录
    { path:'/ShowPetList', name:'ShowPetList', component:ShowPetList, meta: { title:'晒宠'}},                              //晒宠    
    { path:'/VideoList', name:'VideoList',component:VideoList,meta: { title:'视频'}},                      //视频   
    { path:'/BuyPetList',name:'BuyPetList',component:BuyPetList,meta: { title:'买宠'}},                                //买宠
    { path:'/ProductList', name:'ProductList',component:ProductList, meta:{ title:'商品'}},                                  //商品
    { path:'/ServiceList',name:'ServiceList', component:ServiceList,meta:{ title:'服务'}},                            //服务
    { path:'/AdoptPetList',name:'AdoptPetList',component:AdoptPetList,meta: { title:'领养'}},                         //领养  
    { path:'/DonationList',name:'DonationList',component:DonationList,meta:{ title:'募捐'}},                          //募捐
    { path:'/WallPaperList', name:'WallPaperList',component:WallPaperList,meta: { title:'壁纸'} },         //壁纸           
    { path:'/EncyclopediasList',name:'EncyclopediasList',component:EncyclopediasList ,meta: { title:'百科'}},                      //百科
    { path:'/NewsList',name:'NewsList',component:NewsList,meta: { title:'资讯'}},                            //资讯
    { path:'/BbsList',name:'BbsList',component:BbsList, meta: {title:'社区'}},                      //社区
    //{ path:'/AppDownload',name:'AppDownload',component:AppDownload,meta: { title:'下载APP'} } ,            //下载app
    //{ path: '/WallPaperDetail/:id',component:WallPaperDetail,meta:{ title:'壁纸详情'} },                       //壁纸详情
   // { path:'/VideoDetail/:id',component:VideoDetail,meta: { title:'视频详情'} }                                //视频详情
    
  ]
}) 
