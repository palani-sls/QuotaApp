$(function () {
    $('.js-form-input').formInput();
    $('.js-form-select').formSelect({
        textClass: 'form-select__text'
    });

    $('.js-mask-phone').inputmask('+60 99 9999 999', {
        jitMasking: 3,
        showMaskOnHover: false
    });
});
