var $ = jQuery;

var main = (function(){
    var photography = {
        201710181: [
            "IMG_1869",
            "IMG_1894",
            "IMG_1935",
        ],
        201710182: [
            "IMG_1986",
            "IMG_2007",
        ],
        201712141: [
            "IMG_2771",
            "IMG_2780",
            "IMG_2782",
            "IMG_2823",
            "IMG_2846",
            "IMG_2856",
        ],
        201712142: [
            "IMG_2811",
            "IMG_2798",
            "IMG_2917",
            "IMG_2922",
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
        $('#photography-content').append();
        for (var i in list) {
            $('#photography-content').append('<img src="images/photography/' + folder + '/' + list[i] +'.jpg" class="img-responsive">');
        }
    }

    return {
        toggleNav: toggleNav,
        loadFolder: loadFolder,
    };
})();
