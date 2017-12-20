var $ = jQuery;

var main = (function(){
    var photography = {
        20171214: [
            "IMG_2771",
            "IMG_2780",
            "IMG_2782",
            "IMG_2823",
            "IMG_2846",
            "IMG_2856",
        ],
    };

    var files = {
        photography: photography,
    };

    function toggleNav() {
        $('.navpage').toggleClass('hidden');
        $('.navpage-toggle .navpage-toggle-icon').toggleClass('close');
    }

    function loadFolder(folder) {
        var list = files.photography[folder];
        $('#photography-content').empty();
        $('#photography-content').append('<div class="row" id="' + folder + '"></div>');
        for (var i in list) {
            console.log(list[i]);
            $('#' + folder).append('<div class="col-sm-8 col-md-8"><img src="images/photography/' + folder + '/' + list[i] +'.jpg" class="img-responsive"></div>');
        }
    }

    return {
        toggleNav: toggleNav,
        loadFolder: loadFolder,
    };
})();
