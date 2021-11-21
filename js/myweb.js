
/*Experience Modal pop-up*/
//modal1
$(function(){
    let $modal1 = $('.modal1');
    let hideClass = 'hide';

    $('.exp_1').on('click',function(){
    $modal1.removeClass(hideClass);
    });
    
    $('.close').on('click',function(){
    $modal1.addClass(hideClass);
    });
});
//modal2
$(function(){
    let $modal2 = $('.modal2');
    let hideClass = 'hide';

    $('.exp_2').on('click',function(){
    $modal2.removeClass(hideClass);
    });
    
    $('.close').on('click',function(){
    $modal2.addClass(hideClass);
    });
});
//modal3
$(function(){
    let $modal3 = $('.modal3');
    let hideClass = 'hide';

    $('.exp_3').on('click',function(){
    $modal3.removeClass(hideClass);
    });
    
    $('.close').on('click',function(){
    $modal3.addClass(hideClass);
    });
});
//modal4
$(function(){
    let $modal0 = $('.modal0');
    let hideClass = 'hide';

    $('.exp_0').on('click',function(){
    $modal0.removeClass(hideClass);
    });
    
    $('.close').on('click',function(){
    $modal0.addClass(hideClass);
    });
});



