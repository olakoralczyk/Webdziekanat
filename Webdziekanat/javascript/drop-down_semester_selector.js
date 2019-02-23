$(function() {
    $('#semesterselector').on('change', function() {
        $('.semesters').hide();
        $('#' + $(this).val()).show();
    });
});