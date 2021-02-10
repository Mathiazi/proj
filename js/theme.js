$('load', () => {

    let theme = localStorage.getItem("status");
    if (theme == null) theme = "light";

    if (theme != 'dark')
        $('.theme-name').text('Dark Mode');
    else
        $('.theme-name').text('Light Mode');

    //#region header
        $('header').css({
            'background': 'var(--' + theme + '-header-bg)',
            'color': 'var(--' + theme + '-color-li-font)'
        });

        $('#menu-mobile').css({ 'background': 'var(--' + theme + '-header-bg)' });
    //#endregion
    //#region main
        $('body').css({ 'backgroundImage': 'url(./files/image/' + theme + '-bg.png)' });
        $('.form').css({ 'background': 'var(--' + theme + '-login-bg)' });
        $('#div-cont').css({ 'background': 'var(--' + theme + '-divcont-bg)' });
        $('.lbl').css({ 'color': 'var(--' + theme + '-color-font-label)' });
        $('#lbl-addProd').css({ 'color': 'rgb(168, 168, 168)' });

        $('.inp').css({
            'background': 'var(--' + theme + '-inp-bg)',
            'color': 'var(--' + theme + '-inp-font-color)'
        });

        $('.div-calc').css({ 'borderColor': 'var(--' + theme + '-border-color)' });

        $('#div-result').css({
            'background': 'var(--' + theme + '-default-bg)',
            'color': 'var(--' + theme + '-color-font-result)'
        });

        $('.inp-img').css({ 'background': 'var(--' + theme + '-default-bg)' });
    //#endregion
    //#region footer
        $('footer').css({ 'borderColor': 'var(--' + theme + '-border-color)' });
        $('#copyright').css({ 'color': 'var(--' + theme + '-color-font-copy)' });
    //#endregion
});

function theme() {
    let mode;
    let memory = localStorage.getItem("status");
    if (memory == null)
        mode = "dark";
    else if (memory == "dark")
        mode = "light";
    else
        mode = "dark";

    localStorage.setItem("status", mode);
    document.location.reload();
}