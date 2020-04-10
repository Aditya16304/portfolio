let navbar=$(".navbar");
$(window).scroll(function(){
    let top=$(".about-section").offset().top;
    if($(window).scrollTop()>top){
        navbar.addClass("sticky");
    }
    else{
        navbar.removeClass("sticky")
    }
});

function btnClicked(){
    document.querySelector(".btn").innerHTML="Clicked";
}

function sendEmail(){
    var name=document.querySelector(".name").value;
    var email=document.querySelector(".email").value;
    var textArea=document.querySelector(".textArea").value;
    //console.log(name+" woo "+email+" "+textArea);
    window.open('mailto:adityamaurya100@gmail.com?subject='+name+'&body='+textArea);
}

// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20 
//   })
  $(document).ready(function(){

      $('.about-heading').waypoint(function(direction){
          $('.about-heading').addClass('animated bounceInLeft')
      },{
          offset: '70%' 
      })

      $('.project-heading').waypoint(function(direction){
        $('.project-heading').addClass('animated bounceInRight')
    },{
        offset: '70%' 
    })

    $('.contact-heading').waypoint(function(direction){
        $('.contact-heading').addClass('animated bounceInLeft')
    },{
        offset: '70%' 
    })

    $('.img-left').waypoint(function(direction){
        $('.img-left').addClass('animated fadeInLeft')
    },{
        offset: '70%' 
    })

    $('.img-right').waypoint(function(direction){
        $('.img-right').addClass('animated fadeInRight')
    },{
        offset: '70%' 
    })

  });

  let footerIcon =$(".fab");
  $(document).ready(function(){
      if(window.innerWidth>320){
          footerIcon.addClass("fa-2x");
      }
      else{
          footerIcon.removeClass("fa-2x");
      }
  })