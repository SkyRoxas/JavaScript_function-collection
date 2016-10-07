jQuery(document).ready(function($) {
    function popup($element, $clickItem) {
        //popup content
        $($element).wrap('<div class ="popup-content popup-nav"></div>');
        //popup-bg
        if ($('.popup-bg').length == 0) {
            $('body').append('<div class ="popup-bg popup-nav"></div>');
        }

        $($clickItem + ',' + '.popup-bg').click(function() {
                $('.popup-nav').fadeToggle();
            })
        //css
        $('.popup-content').css({
            'position': 'fixed',
            'z-index': '200',
            'top': '50%',
            'left': '50%',
            '-webkit-transform': 'translate(-50%, -50%)',
            '-ms-transform': 'translate(-50%, -50%)',
            'transform': 'translate(-50%, -50%)',
        })
        $('.popup-bg').css({
            'display': 'block',
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'z-index': '100',
            'top': '0px',
            'left': '0px',
            'background': 'rgba(0,0,0,0.5)'
        })

        $('.popup-nav').css({
            'display': 'none',
        })
    }
    popup('.RoxasPop', '#header');
})
