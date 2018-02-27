$(function () {

    //导航随滚动条滚动

  /* $(window).bind('scroll', function (event, delta) {
        var top = $(document).scrollTop();
        if (top >= 410) {
            $('.navbox').addClass('navscrollTop');

        } else {
            $('.navbox').removeClass('navscrollTop');
        }
    });  

    $(".searchtit").click(function(){
        $(".searchinput").fadeTo("slow",1);
        $(".searchtit>i").css("color","#0fc698"); 
    });

    $(".banner").click(function(){
        $(".searchtit").show();
        $(".searchinput").fadeTo("slow",0)
        $(".searchtit>i").css("color","white"); 
    });    */

    /* 搜索下拉框
    $(".searchBox").keyup(function () {

        var inputValue = $(this).val();
        $(".dropdownBox>li>a>div:nth-child(1)").text(inputValue);
    });  */

    //左侧边栏
   /*     $(window).bind('scroll', function (event, delta) {
            var top = $(document).scrollTop();
            if (top >= 500) {
                $(".sideBar").slideDown();
            } else {
                $(".sideBar").slideUp();
            }
        })   */

 /*   //左侧边栏滚动到指定位置。
    var _top = [];
    var _height = [];
    var _parentTop = 0;
    //var _parentTop=$(".box").offset().top;  //很重要，父元素离顶部窗口的距离
    var tt = $(".column"); //监控的对象
    for (var i = 0; i < tt.length; i++) {
        _top[i] = tt.eq(i).offset().top - $(".navbox").height(); //得到每个div与顶部窗口的距离,减去导航的高度（这样才不会覆盖掉标题文字）
        _height[i] = tt.eq(i).outerHeight(true); //得到每个div的高度
    }

    //仿锚点效果:
    $(".sideBar li").click(function () {
        var index = $(this).index();
        $("html,body").stop(true, false).animate({
            scrollTop: _top[index]
        }, 1000);
    });


    //滚动条事件：当滚动条下拉到不同div，相对应的某个元素 会发生不同的行为
    $(window).scroll(function () {

        for (var i = 0; i < tt.length; i++) {
            var _scrollTop = parseInt($(this).scrollTop()) + _height[i]; //得到垂直滚动条+每个div的高度

            if (_scrollTop > _top[i + 1] - 1) { 
                $(".sideBar li").eq(i).addClass("active").siblings().removeClass("active");          //菜单高亮
            }
        }
    });  

  
   var sideBar=document.getElementsByClassName(".sideBar");
   var sideBox=document.getElementsByClassName(".sideBox");
   var box=document.getElementsByClassName(".box");
   var sideBoxChild=sideBox.children;
   var boxChild=box.children;
   var num=sideBar.offsetTop;
   var a=sideBar.offsetHeight;

   window.onscroll=function(){
       var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
       if(scrollTop >= num){
        box.style.paddingTop=a+"px"; 
    }else{
        box.style.paddingTop="";
    }
   }


    for(var i=0;i < sideBoxChild.length;i++){
        if(scrollTop + a >= boxChild[i].offsetTop){
            for(var j=0;j< sideBoxChild.length;j++){
                sideBoxChild[j].className=""
            }
            sideBoxChild[j].className="active";
        }
    }     */
   

    



});