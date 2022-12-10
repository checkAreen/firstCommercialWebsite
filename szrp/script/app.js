$(function() {
    // FIXED HEADER
    let header = $('#header');
    let intro = $('#intro');

    // let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();
        
        if(scrollPos >= 570) {
            header.addClass('header-fixed');
        } else {
            header.removeClass('header-fixed');
        }
    });

    // BURGER MENU
    let burgerButton = $('#burger');
    let navigation = $('#nav');

    let burgerLineOne = $('.line-one');
    let burgerLineTwo = $('.line-two');
    let burgerLineThree = $('.line-three');

    burgerButton.on('click', function(){
        if(navigation.hasClass('nav__burger-open')) {
            navigation.removeClass('nav__burger-open');

            burgerLineOne.removeClass('line-one-active');
            burgerLineTwo.removeClass('line-two-active');
            burgerLineThree.removeClass('line-three-active');
        } else {
            navigation.addClass('nav__burger-open');

            burgerLineOne.addClass('line-one-active');
            burgerLineTwo.addClass('line-two-active');
            burgerLineThree.addClass('line-three-active');
        }
    });

    // SMOOTH SCROLL
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();
        navigation.removeClass('nav__burger-open');
        burgerLineOne.removeClass('line-one-active');
        burgerLineTwo.removeClass('line-two-active');
        burgerLineThree.removeClass('line-three-active');

        if(scrollPos >= 600) {
            let blockId = $(this).data('scroll'), 
            blockOffSet = $(blockId).offset().top - 30;

            $('html, body').animate({
                scrollTop: blockOffSet
            }, 500);
        } else {
            let blockId = $(this).data('scroll'), 
            blockOffSet = $(blockId).offset().top - 200;

            $('html, body').animate({
                scrollTop: blockOffSet
            }, 500);
        }
    });

    // SERVICE - APEARANCE / DISAPPEARANCE
    let anchorBtn = $('#anchor-btn');
    let contactBtn = $('#contact-btn');

    let anchorText = $('.services__anchor-text');
    let contactText = $('.services__contact-text');

    anchorBtn.on('click', function(event){
        event.preventDefault();

        if(anchorBtn.hasClass('services__item-open')){
            anchorText.removeClass('services__text-show');
            anchorBtn.removeClass('services__item-open');
        } else {
            anchorBtn.addClass('services__item-open');
            setTimeout(function(){
                anchorText.addClass('services__text-show');
            }, 400);
        }
    });

    contactBtn.on('click', function(event){
        event.preventDefault();

        if(contactBtn.hasClass('services__item-open')){
            contactText.removeClass('services__text-show');
            contactBtn.removeClass('services__item-open');
        } else {
            contactBtn.addClass('services__item-open');
            setTimeout(function(){
                contactText.addClass('services__text-show');
            }, 400);
        }
    });



    // PARTNERS FILTER (NON-RESPONSIVE DESIGN)
    let filter = $('[data-filter]');

    filter.on('click', function(event) {
        event.preventDefault();

        // highlight the selected company
        let companyItem = $(this).data('filter');

        filter.each(function(){
            let selectedCompany = $(this).data('filter');

            (selectedCompany == companyItem) ?
                $(this).addClass('item__active'):
                $(this).removeClass('item__active');
        });

        // show the text of the selected company
        let company = $(this).data('filter');

        $('[data-company]').each(function(){
            let showCompany = $(this).data('company');

            (showCompany != company) ? 
                $(this).delay(300).fadeOut(300) : 
                $(this).delay(300).fadeIn(1000);
        });
    });

    // PARTNERS FILTER (RESPONSIVE DESIGN)
    const logoMorbaza = $('#morbaza_logo');
    const logoMarinerus = $('#marinerus_logo');

    const morbazaItem = $('#morbaza-item');
    const marinerusItem = $('#marinerus-item');

    const morbazaInfo = $('.text-morbaza');
    const marinerusInfo = $('.text-marinerus');

    // appearance / disappearance  of Morbaza's description
    logoMorbaza.on('click', function(event) {
        event.preventDefault();

        if(morbazaItem.hasClass('center__item-active')) {
            morbazaInfo.removeClass('center__text-show');
            morbazaItem.removeClass('center__item-active');
        } else {
            morbazaItem.addClass('center__item-active');
            setTimeout(function(){
                morbazaInfo.addClass('center__text-show');
            }, 400);
        }
    });

    // appearance / disappearance of Marinerus's description
    logoMarinerus.on('click', function(event) {
        event.preventDefault();

        if(marinerusItem.hasClass('center__item-active')) {
            marinerusInfo.removeClass('center__text-show');
            marinerusItem.removeClass('center__item-active');
        } else {
            marinerusItem.addClass('center__item-active');
            setTimeout(function(){
                marinerusInfo.addClass('center__text-show');
            }, 400);
        }
    });
});