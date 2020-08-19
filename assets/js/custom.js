$("#home-slider").lightSlider({
        item: 3,
        controls: false,
        speed: 400,
        auto: true,
        loop: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    }
);
$("#openModal").click(function () {
    $("#myModal").dialog({
        modal: true,
        width: 'auto',
        fluid: true,
        maxWidth: 600,
        classes: {
            "ui-dialog": "common-dialog",
            "ui-dialog-titlebar": "dialog-header",
            "ui-dialog-buttonpane": "dialog-close-btn",
        },
        buttons: [
            {
                text: "X",
                click: function () {
                    $(this).dialog("close");
                },
            }
        ]
    });
});
var dialog,
    dialog = $("#contactModal").dialog({
        autoOpen: false,
        width: 'auto',
        minWidth: 300,
        modal: true,
        classes: {
            "ui-dialog": "common-dialog",
            "ui-dialog-titlebar": "dialog-header",
            "ui-dialog-buttonpane": "dialog-close-btn",
        },
        buttons: [
            {
                text: "X",
                click: function () {
                    $(this).dialog("close");
                },
            }
        ]
    });
$(".openContactModal").button().on("click", function () {
    dialog.dialog("open");
});

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 30000,
        values: [500, 10000],
        slide: function (event, ui) {
            $("#starting-price").text("€ " + ui.values[0]);
            $("#ending-price").text(" € " + ui.values[1]);
        }
    });
    $("#starting-price").text("€ " + $("#slider-range").slider("values", 0));
    $("#ending-price").text("€ " + $("#slider-range").slider("values", 1));
});

$('#image-gallery').lightSlider({
    gallery: true,
    autoWidth: false,
    adaptiveHeight: false,
    item: 1,
    thumbItem: 9,
    slideMargin: 0,
    speed: 800,
    auto: true,
    loop: true,
    galleryMargin: -30,
    thumbMargin: 10,
    addClass: "gallery-slider rounded-tl-lg rounded-bl-lg",
    onSliderLoad: function () {
        $('#image-gallery').removeClass('cS-hidden');
    }
});