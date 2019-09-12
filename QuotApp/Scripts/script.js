// script for tab steps
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var href = $(e.target).attr('data-target');
    var $curr = $(".process-model  a[data-target='" + href + "']").parent();
    $('.process-model li').removeClass();
    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
});
// end  script for tab steps