<template>
    <div class="bg0">
        <div class="container">
            <HomeTitle :title="title"></HomeTitle>          
            <div class="row mb50 mb25all">
                <div class="col-md-5ths" v-for="(pet,index) in items" :key="index" > 
                    <ShowPetListObj :url="pet.url" :keyword="pet.keyword" :title="pet.title" :num="pet.num" :browse="pet.browse" :comment="pet.comment" :time="pet.time" 
                        :touxiang="pet.touxiang" :name="pet.name" :votes="pet.votes" :ballot="pet.ballot" :btn="pet.btn" :liulan="pet.liulan" :pinglun="pet.pinglun" :hour="pet.hour" >                         
                    </ShowPetListObj>
                </div>
            </div>
        </div>             
    </div>
</template>

<script>
    import '../../../assets/css/ColorHelper.css'
    import '../../../assets/css/HoverHelp.css'
    import '../../../assets/css/CSSHelper.css'
    import ShowPetListObj from '../../show-pet/show-pet-list/show-pet-list-obj/show-pet-list-obj.vue'
    import HomeTitle from '../home-components/home-title/home-title.vue'

    export default {
        components:{
            ShowPetListObj,
            HomeTitle
        },
        data () {
            return {
                title:'百萌争宠',
                items: [
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'1',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'2',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'3',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'4',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'5',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    }, 
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'6',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'7',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'8',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'9',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    },
                    { url:require ('../../../assets/img/a.jpg'),
                      keyword:'[蓝调]',
                      title:'盛装之夜盛装之夜盛装之夜盛装之夜盛装之夜',
                      num:'10',
                      browse:'282',
                      comment:'156',
                      time:'29',
                      touxiang: require ('../../../assets/img/tx2.jpg'),
                      name:'Carter',
                      votes:'&#xe60c;',
                      ballot:'280票',
                      btn:'投我一票',
                      liulan:'&#xe678;',
                      pinglun:'&#xe675;',
                      hour:'&#xe635;'                      
                    }                                                                                                                                                                             
                ]             
            } 
        }
    }

</script>

