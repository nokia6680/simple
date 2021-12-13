var $cell = $('.net-item');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

    var $thisCell = $(this).closest('.net-item');

    if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');

        if ($cell.not($thisCell).hasClass('is-inactive')) {
            //do nothing
        } else {
            $cell.not($thisCell).addClass('is-inactive');
        }

    } else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
    }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

    var $thisCell = $(this).closest('.net-item');

    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.removeClass('is-inactive');
});


var $subcell = $('.net-subitem');

//open and close card when clicked on card
$subcell.find('.sub-expander').click(function() {

    var $thisSubCell = $(this).closest('.net-subitem');

    if ($thisSubCell.hasClass('sub-collapsed')) {
        $subcell.not($thisSubCell).removeClass('sub-expanded').addClass('sub-collapsed').addClass('sub-inactive');
        $thisSubCell.removeClass('sub-collapsed').addClass('sub-expanded');

        if ($subcell.not($thisSubCell).hasClass('sub-inactive')) {
            //do nothing
        } else {
            $subcell.not($thisSubCell).addClass('sub-inactive');
        }

    } else {
        $thisSubCell.removeClass('sub-expanded').addClass('sub-collapsed');
        $subcell.not($thisSubCell).removeClass('sub-inactive');
    }
});

//close card when click on cross
$subcell.find('.sub-collapser').click(function() {

    var $thisSubCell = $(this).closest('.net-subitem');

    $thisSubCell.removeClass('sub-expanded').addClass('sub-collapsed');
    $subcell.removeClass('sub-inactive');
});
