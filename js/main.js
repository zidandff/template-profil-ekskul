document.addEventListener( 'DOMContentLoaded', function() {
    const organizationSplide = new Splide( '.organization-slider', {
      arrows : false,
      autoplay: true,
      type : 'loop',
      perPage : 4,
      gap : 30,
      breakpoints : {
          767.98 : {
              perPage : 2,
          }
      }
    });
    organizationSplide.mount();

    // const testiSplide = new Splide( '.testi-slider', {
    //   autoplay: true,
    //   pagination : false,
    //   type : 'loop',
    //   focus: 'center',
    //   perPage : 3,
    //   gap : 20,
    // });
    // testiSplide.mount();
    const testiMain = new Splide( '#main-slider', {
        type       : 'fade',
        pagination : false,
        arrows     : false,
        perPage    : 1,
        autoplay   : true,
        speed      : 800,
    } );

    const testiThumb = new Splide( '#thumbnail-slider', {
        type       : 'loop',
        padding    : 30,
		gap        : 15,
		pagination : false,
        focus      : 'center',
        perPage    : 3,
        autoplay   : true,
        speed      : 300,
    } );


    testiMain.sync(testiThumb);
    testiMain.mount();
    testiThumb.mount();

    lightGallery(document.getElementById('lightgallery'), {
        selector: '.gallery-img',
        download: false,
        zoom: true,
        enableDrag: true,
    });

} );



