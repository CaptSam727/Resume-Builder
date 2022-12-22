
// add field

$("#addLink").on('click', function(){
    var newel = $('.links:last').clone(true);
    // $(newel).innerHTML = "";
    $(newel).insertAfter('.links:last');
});

$("#addEdu").on('click', function(){
    var newel = $('.edu:last').clone(true);
    $(newel).insertAfter('.edu:last');
});

$("#addWork").on('click', function(){
    var newel = $('.work:last').clone(true);
    $(newel).insertAfter('.work:last');
});

$("#addAchievement").on('click', function(){
    var newel = $('.achievement:last').clone(true);
    $(newel).insertAfter('.achievement:last');
});

$("#addSkill").on('click', function(){
    var newel = $('.skills:last').clone(true);
    $(newel).insertAfter('.skills:last');
});

