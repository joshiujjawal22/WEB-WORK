
  $(document).ready(function(){
      var loop=setInterval(function(){
      var v=parseInt($('.number').text())
      $('.number').text(v+1)
      if((v+1)==504)
        clearInterval(loop);
    },10) 
  }) 