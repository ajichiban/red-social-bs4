$('.btn-menu').click(function()
{
    $('.barra-lateral').addClass('active')
    $('.fondo-menu-movil').show()
    $('.fondo-menu-movil').click(function()
    {
        $('.barra-lateral').removeClass('active')
        $('.fondo-menu-movil').hide()
    })
})