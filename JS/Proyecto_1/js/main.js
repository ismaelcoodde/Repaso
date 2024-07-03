

    //Slider
    $(function () {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 600
        });
    });
    //Posts
    var posts =[
        {
            title: 'Prueba de titulo 1',
            date: moment().date("MMMM, Do YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis laudantium vel'
        },
        {
            title: 'Prueba de titulo 2',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis laudantium vel'
        },
        {
            title: 'Prueba de titulo 3',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis laudantium vel'
        },
        {
            title: 'Prueba de titulo 4',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis laudantium vel'
        },
        {
            title: 'Prueba de titulo 5',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis laudantium vel'
        },

  
    ];


    //Selector de tema
    var theme = $('#theme');

    $('#to-green').click(function (){
        theme.attr('href','css/green.css')
    });
    $('#to-red').click(function (){
        theme.attr('href','css/red.css')
    });
    $('#to-blue').click(function (){
        theme.attr('href','css/blue.css')
    });


