<template>
    <div class="bg1 column column11">
        <div class="container pb70 pt15 ranking">
                    <h3 class="tac">用户排行榜</h3>
                    <h4 class="tac cr7 fs14 pb35">USER RANKING</h4>                 
                        <div class="row pb20all" >
                            <div class="col-md-4"  >
                                   <div class="bgw br5 hr2d10 bshuihr tran">
                                        <h4 class="bg42 h80px tac lh80 crw brt4 blt4">周回复榜</h4>
                                        <ul class="ptb20all plr40all pb20 list">
                                            <li class="clearfix " v-for="(reply,index) in weekreply" :key="index">
                                                 <UserRankingListObj  :url="reply.url" :title="reply.title" :date="reply.date" :num="reply.num" :backgroundColor="reply.backgroundColor" :color="reply.color" :order="reply.order"></UserRankingListObj>
                                            </li>
                                        </ul>
                                </div>                                              
                            </div>   
                            <div class="col-md-4">
                                <div class="bgw br5 hr2d10 bshuihr tran">
                                    <h4 class="bg42 h80px tac lh80 crw brt4 blt4">周发贴榜</h4>
                                    <ul class="ptb20all plr40all pb20 list">
                                        <li class="clearfix " v-for="(post,index) in weekpost" :key="index">
                                          <UserRankingListObj  :url="post.url" :title="post.title" :date="post.date" :num="post.num" :backgroundColor="post.backgroundColor" :color="post.color" :order="post.order"></UserRankingListObj>  
                                        </li>
                                    </ul>
                                </div>
                            </div>     
                            <div class="col-md-4">
                                <div class="bgw br5 hr2d10 bshuihr tran">
                                    <h4 class="bg42 h80px tac lh80 crw brt4 blt4">周晒宠榜</h4>
                                    <ul class="ptb20all plr40all pb20 list">
                                        <li class="clearfix " v-for="(showpet,index) in weekshow" :key="index">
                                             <UserRankingListObj  :url="showpet.url" :title="showpet.title" :date="showpet.date" :num="showpet.num" :backgroundColor="showpet.backgroundColor" :color="showpet.color" :order="showpet.order"></UserRankingListObj> 
                                        </li>
                                    </ul>
                                </div>
                            </div>                                                                  
                    </div>
             
        </div>
    </div>
</template>

<script>
import UserRankingListObj from '../../user-ranking/user-ranking-list/user-ranking-list-obj/user-ranking-list-obj.vue'

    export default {
        components: {
            UserRankingListObj
        },
        data () {
            return {
                weekreply:[
                    {
                         url: require ('../../../assets/img/a.jpg'),
                         title:'JERRY CHEEN ',
                         date:'03-06',
                         num:'160',                        
                         backgroundColor:'#ffd43e',
                         color:'white',
                         order:'1'
                     },   
                    { 
                        url: require ('../../../assets/img/tx1.jpg'),
                         title:'JERRY CHEEN ',
                         date:'02-06',
                         num:'120',
                         backgroundColor:'#ccc',
                         color:'white',
                         order:'2'                       
                     },      
                    {
                         url: require ('../../../assets/img/tx2.jpg') ,
                         title:'JERRY CHEEN ',
                         date:'02-06',
                         num:'109',
                         backgroundColor:'#0fc698',
                         color:'white',
                         order:'3'
                         
                    },  
                    {
                         url: require ('../../../assets/img/tx3.jpg'),
                         title:'JERRY CHEEN ',
                         date:'02-06',
                         num:'89',
                         order:'4',                
                         color:'#666'
                         
                     },  
                    { 
                        url: require ('../../../assets/img/c.jpg') ,
                        title:'JERRY CHEEN ',
                        date:'02-06',
                        num:'65',
                        order:'5',
                        color:'#666'
                      
                    },  
                    {
                         url: require ('../../../assets/img/touxiang.jpg'),
                         title:'JERRY CHEEN ',
                         date:'02-06',
                         num:'48',
                         order:'6',
                         color:'#666'
                    } ,                             
                ],
                weekpost:[
                    {
                         url: require ('../../../assets/img/tx2.jpg'),
                         title:'CHEEN JERRY  ',
                         date:'04-06',
                         num:'1108',                        
                         backgroundColor:'#ffd43e',
                         color:'white',
                         order:'1'
                     },   
                    { 
                        url: require ('../../../assets/img/a.jpg'),
                         title:'JERRY CHEEN ',
                         date:'04-06',
                         num:'956',
                         backgroundColor:'#ccc',
                         color:'white',
                         order:'2'                       
                     },      
                    {
                         url: require ('../../../assets/img/touxiang.jpg') ,
                         title:'JERRY CHEEN ',
                         date:'04-06',
                         num:'703',
                         backgroundColor:'#0fc698',
                         color:'white',
                         order:'3'
                         
                    },  
                    {
                         url: require ('../../../assets/img/c.jpg'),
                         title:'JERRY CHEEN ',
                         date:'04-06',
                         num:'596',
                         order:'4',                
                         color:'#666'
                         
                     },  
                    { 
                        url: require ('../../../assets/img/tx3.jpg') ,
                        title:'JERRY CHEEN ',
                        date:'04-06',
                        num:'452',
                        order:'5',
                        color:'#666'
                      
                    },  
                    {
                         url: require ('../../../assets/img/tx1.jpg'),
                         title:'JERRY CHEEN ',
                         date:'04-06',
                         num:'299',
                         order:'6',
                         color:'#666'
                    }                              
                ],  
                weekshow:[
                    {
                         url: require ('../../../assets/img/c.jpg'),
                         title:'CHEEN JERRY  ',
                         date:'05-06',
                         num:'2003',                        
                         backgroundColor:'#ffd43e',
                         color:'white',
                         order:'1'
                     },   
                    { 
                        url: require ('../../../assets/img/touxiang.jpg'),
                         title:'JERRY CHEEN ',
                         date:'05-06',
                         num:'1956',
                         backgroundColor:'#ccc',
                         color:'white',
                         order:'2'                       
                     },      
                    {
                         url: require ('../../../assets/img/tx1.jpg') ,
                         title:'JERRY CHEEN ',
                         date:'05-06',
                         num:'1578',
                         backgroundColor:'#0fc698',
                         color:'white',
                         order:'3'
                         
                    },  
                    {
                         url: require ('../../../assets/img/tx2.jpg'),
                         title:'JERRY CHEEN ',
                         date:'05-06',
                         num:'1269',
                         order:'4',                
                         color:'#666'
                         
                     },  
                    { 
                        url: require ('../../../assets/img/tx3.jpg') ,
                        title:'JERRY CHEEN ',
                        date:'05-06',
                        num:'1179',
                        order:'5',
                        color:'#666'
                      
                    },  
                    {
                         url: require ('../../../assets/img/tx1.jpg'),
                         title:'JERRY CHEEN ',
                         date:'05-06',
                         num:'826',
                         order:'6',
                         color:'#666'
                    }                            
                ]                                                                          
            }
        }
    }

</script>

<style>
.ranking{
    padding-bottom:70px;
    padding-top:15px;
}

@media(max-width:992px){
    .ranking{
        padding-bottom:20px;
    }
}

</style>