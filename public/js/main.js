$(document)
  .ready(function() {
    var changeSides = function() {
      $('.ui.shape')
        .eq(0).shape('flip over').end()
        .eq(1).shape('flip over').end()
        .eq(2).shape('flip back').end()
        .eq(3).shape('flip back').end();
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      };

    $('.item.mile').click(
      function(){ 
        // $('.next h1.about').show();

        $('.next h1.about').transition('slide down');
      });

    $('.item.about').click(
      function(){ 
        $('img.ui.medium img').hide()

        $('img.ui.medium.image.img1').transition('slide down');
      });
    $('.item.modern').click(
      function(){ 
        $('img.ui.medium img').hide()
        // $(this).transition('slide right'),
        $('img.ui.medium.image.img2').transition('slide up');
      });
    // $('img.ui.medium.image.img2').load(
    //   function(){ 
    //     $('img.ui.medium.image.img1').hide()
    //     $(this).transition('slide right'),
    //     $('img.ui.medium.image.img3').show();
    //   });    
    // $('img.ui.medium.image.img3').click(
    //   function(){ 
    //     $('img.ui.medium.image.img2').hide()
    //     $(this).transition('slide right'),
    //     $('img.ui.medium.image.img4').show();
    //   });
    // $('img.ui.medium.image.img4').click(
    //   function(){ 
    //     $('img.ui.medium.image.img3').hide()
    //     $(this).transition('slide right'),
    //     $('img.ui.medium.image.img5').show();

    //   });

    $('.ui.form').
    form(validationRules, {
        on: 'blur'
      });

    $('.masthead .information').transition('scale in', 1000);

    setInterval(changeSides, 3000);

  });