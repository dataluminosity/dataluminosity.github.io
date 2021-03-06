﻿$(document).ready(function () {

    $('.recipelink').click(function (e) {
        if (e.which == 1 && Modernizr.mq('(min-width: 960px)')) {

            $('<a href="' + $(this).attr('href') + '/Boxed">').fancybox({
                'beforeShow': function () {
                    $('.fancybox-inner').attr('style', 'width: auto; height:auto; overflow : visible;');
                },
                'afterShow': function () {
                    $('.fancybox-inner').attr('style', 'width: auto; height:auto; overflow : visible;');
                },
                'overflow': 'visible',
                'padding': 0,
                'type': 'ajax'
            }).trigger('click');

            var u = $(this).attr('href').substring(8);

            try {
                ga('send', 'pageview', u.substring(u.indexOf("/")));
            }
            catch (e) {
            }

            return false;
        }
    });

    $('span.tooltip-target-wrapper').hover(function () {
        $(this).next('.item-description-wrapper').show();
    }, function () {
        $(this).next('.item-description-wrapper').hide();
    });

    $('#dateselect').change(function () {
        if ($(this).val() != "") {
            window.location.href = $(this).val();
        }

    });

    $(document).on('change', 'input.nut-form-element', function () {
        UpdateConfigurator();
    });

});

function UpdateConfigurator() {
    $('.nf-content-wrap').addClass('nf-blur');
    $('#nf-overlay').show();

    var inputs = $('input.nut-form-element');
    inputs.prop('disabled', true);

    var ports = '1';
    if ($('#portions').length) {
        ports = $('#portions').val();
    }

    var reclist = "";

    inputs.each(function () {
        if ($(this).prop('checked') || $(this).attr('type') == 'hidden') {
            if (reclist != "") {
                reclist += ',';
            }
            reclist += $(this).val();
        }
    });

    $.post('/Recipes/MultiLabelData', { Portions: ports, RecipeList: reclist }, function (data) {

        $('#val_Calories').html(data.Calories);
        $('#val_CaloriesFromFat').html(data.CaloriesFromFat);
        $('#val_TotalFat').html(data.TotalFat);
        $('#val_TotalFatPDV').html(data.TotalFatPDV);
        $('#val_SaturatedFat').html(data.SaturatedFat);
        $('#val_SaturatedFatPDV').html(data.SaturatedFatPDV);
        $('#val_TransFat').html(data.TransFat);
        $('#val_Cholesterol').html(data.Cholesterol);
        $('#val_CholesterolPDV').html(data.CholesterolPDV);
        $('#val_Sodium').html(data.SodiumPDV);
        $('#val_Sodium').html(data.Sodium);
        $('#val_SodiumPDV').html(data.SodiumPDV);
        $('#val_TotalCarbohydrate').html(data.TotalCarbohydrate);
        $('#val_TotalCarbohydratePDV').html(data.TotalCarbohydratePDV);
        $('#val_DietaryFiber').html(data.DietaryFiber);
        $('#val_DietaryFiberPDV').html(data.DietaryFiberPDV);
        $('#val_Sugars').html(data.Sugars);
        $('#val_Protein').html(data.Protein);

        for (i = 0; i < data.LowerNutrients.length; i++) {
            $('#val_Bottom_' + data.LowerNutrients[i].Name).html(data.LowerNutrients[i].Value);
        }

        $('#val_Ingredients').html(data.Ingredients);
        $('#val_Allergens').html(data.Allergens);

        $('input.nut-form-element').prop('disabled', false);
        $('#nf-overlay').hide();
        $('.nf-content-wrap').removeClass('nf-blur');
    });

}