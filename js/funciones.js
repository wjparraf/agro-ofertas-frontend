   $(document).ready(function () {
       
       /*   MENU MOVIL  */
       
       $('.btn_menu_movil, .nav').click(function(){
           
           if($('.btn_menu_movil').hasClass('visible')){
               
               $('.btn_menu_movil, .nav').removeClass('visible');
           }else{
               $('.btn_menu_movil, .nav').addClass('visible');
           }
           
       });
       
       /*  GRALERIA INTERNA EQUIPOS */
       
       var galleryThumbs = new Swiper('.slid_gal_min_equipos .swiper-container', {
          slidesPerView: 3,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
           navigation: {
            nextEl: '.slid_gal_min_equipos .swiper-button-next',
            prevEl: '.slid_gal_min_equipos .swiper-button-prev',
          },
        });
        var galleryTop = new Swiper('.slid_gal_equipos .swiper-container', {
          
          thumbs: {
            swiper: galleryThumbs,
          },
        });
       
       
        /*---- SLIDER BANER HOME -------*/
       
       var swiper = new Swiper('.cont_gen_baner_home .swiper-container', {
          pagination: {
            el: '.cont_gen_baner_home .swiper-pagination',
              clickable: true,
          },
           autoplay: {
            delay: 5000,
          },
           simulateTouch:false,
        });
       
       /*----  CARRUSEL SERVICIOS -------*/
       
       var swiper = new Swiper('.carusel_serv .swiper-container', {
           slidesPerView:4,
           breakpoints:{
               1050:{
                   slidesPerView:4,
               },
               750:{
                   slidesPerView:3,
               },
               480:{
                   slidesPerView:2,
               },
           },
          navigation: {
            nextEl: '.carusel_serv .swiper-button-next',
            prevEl: '.carusel_serv .swiper-button-prev',
          },
           autoplay: {
            delay: 5000,
          },
           simulateTouch:false,
        });
       
       /*----  SLIDER GALERIA LIDAR -------*/
       
       var swiper = new Swiper('.slid_gal_lidar .swiper-container', {
           
          navigation: {
            nextEl: '.slid_gal_lidar .swiper-button-next',
            prevEl: '.slid_gal_lidar .swiper-button-prev',
          },
           
           simulateTouch:false,
        });
       
       
       /*--- pestañas tipos lidar---*/
       
       $('#btn_ld_movil').click(function(){
           
           $('.pest_tipo_lidar').removeClass('active');
           $('.cont_inf_tipo_lidar').removeClass('active');
           
           $(this).addClass('active');
           $('#inf_ld_movil').addClass('active');
           
       });
       
        $('#btn_ld_estatico').click(function(){
           
           $('.pest_tipo_lidar').removeClass('active');
           $('.cont_inf_tipo_lidar').removeClass('active');
           
           $(this).addClass('active');
           $('#inf_ld_estatico').addClass('active');
           
       });
       
        $('#btn_ld_aereo').click(function(){
           
           $('.pest_tipo_lidar').removeClass('active');
           $('.cont_inf_tipo_lidar').removeClass('active');
           
           $(this).addClass('active');
           $('#inf_ld_aereo').addClass('active');
           
       });
       
       
       
       
       /*----detectar elemento entrar viewport para animacion */
       
       if ($(window).width() >= 1200) {
   
           $.fn.isInViewport = function() {
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();

              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();

              return elementBottom > viewportTop && elementTop < viewportBottom;
            };


           $(window).on('resize scroll', function() { 

               $('.in_down, .in_left, .in_right').each(function() {
                var activeColor = 
              $(this).attr('class');
                   if($(this).isInViewport()){

                       $(this).addClass('act_anim');
                   }else{
                       $(this).removeClass('act_anim');
                   }
               });

            });
       }else{
           $('.in_down, .in_left, .in_right').addClass('act_anim');
       }
       /*---- ancla transicion -------*/

       $(function () {
           $('a[href*=#]').click(function () {
               if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                   location.hostname == this.hostname) {
                   var $target = $(this.hash);
                   $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                   if ($target.length) {
                       var targetOffset = $target.offset().top;
                       $('html,body').animate({
                           scrollTop: targetOffset
                       }, 1000);
                       return false;
                   }
               }
           });
       });


   });

   function init() {
       window.addEventListener('scroll', function (e) {
           var distanceY = window.pageYOffset || document.documentElement.scrollTop,
               shrinkOn = 40,
               header = document.querySelector("header");
           if (distanceY > shrinkOn) {
               classie.add(header, "smaller");
               $("header").addClass('smaller');

           } else {
               if (classie.has(header, "smaller")) {
                   classie.remove(header, "smaller");
                   $("header").removeClass('smaller');
               }
           }
       });
   }
   window.onload = init();
