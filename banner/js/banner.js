$(function(){
    var timer;
    clearInterval(timer);
    timer=setInterval(time,2000)
    var i=0;

    //banner图自动走
    function time(){
        i++;
        i==8?i=0:i;
        $('#banner .con .img img').removeClass('active');
        $('#banner .con .img img').each(function(a,b){
            if(a==i){
                $(b).addClass('active')
            }
        })
        $('#banner .con ul li').removeClass('show');
        $('#banner .con ul li').each(function(a,b){
            if(a==i){
                $(b).addClass('show');
            }
        })
    }

    //划入停止banner图
    $('#banner .con').mouseover(function(){
        clearInterval(timer);
        $('.left').css({display:'block'})
        $('.right').css({display:'block'})
    })

    //划出banner图继续走
    $('#banner .con').mouseout(function(){
        timer=setInterval(time,2000)
        $('.left').css({display:'none'})
        $('.right').css({display:'none'})
    })

    //划过小圆点切换对应的banner
    $('#banner .con ul li').mouseover(function(){
        $('#banner .con ul li').removeClass('show');
        $('#banner .con .img img').removeClass('active');
        $(this).addClass('show');
        var self=this
        $('#banner .con ul li').each(function(a,b){
            if(self==b){
                console.log(b)
                $('#banner .con .img img').each(function(x,y){
                    if(x==a){
                        $(y).addClass('active');
                        i=a
                        console.log(i,a,x)
                    }
                })
            }
        })
    })

    //banner左按钮
    $('.left').click(function(){
        i--
        i==-1?i=7:i;
        $('#banner .con .img img').removeClass('active');
        $('#banner .con .img img').each(function(a,b){
            if(a==i){
                $(b).addClass('active')
            }
        })
        $('#banner .con ul li').removeClass('show');
        $('#banner .con ul li').each(function(a,b){
            if(a==i){
                $(b).addClass('show');
            }
        })

    })

    //banner右按钮
    $('.right').click(function(){
        i++
        i==8?i=0:i;
        $('#banner .con .img img').removeClass('active');
        $('#banner .con .img img').each(function(a,b){
            if(a==i){
                $(b).addClass('active')
            }
        })
        $('#banner .con ul li').removeClass('show');
        $('#banner .con ul li').each(function(a,b){
            if(a==i){
                $(b).addClass('show');
            }
        })
    })

    var timer1;
    var j=0;

    timer1=setInterval(time1,3000);
    function time1(){
        j++;
        j==3?j=0:j;
        $('#banner .ri .imgbox').removeClass('showwing');
        $('#banner .ri .imgbox').each(function(a,b){
            if(a==j){
                $(b).addClass('showwing')
            }
        })
    }

    $('#banner .ri').mouseover(function(){
        clearInterval(timer1);
        $('.left1').css({display:'flex'})
        $('.right1').css({display:'flex'})
    })

    $('#banner .ri').mouseout(function(){
        timer1=setInterval(time1,3000)
        $('.left1').css({display:'none'})
        $('.right1').css({display:'none'})
    })

    $('.left1').click(function(){
        j--
        j==-1?j=2:j;
        $('#banner .ri .imgbox').removeClass('showwing');
        $('#banner .ri .imgbox').each(function(a,b){
            if(a==j){
                $(b).addClass('showwing')
            }
        })
    })

    $('.right1').click(function(){
        j++
        j==3?j=0:j;
        $('#banner .ri .imgbox').removeClass('showwing');
        $('#banner .ri .imgbox').each(function(a,b){
            if(a==j){
                $(b).addClass('showwing')
            }
        })
    })



    
})