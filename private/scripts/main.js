var $ = jQuery;

var main = (function(){
    var photography = {
        201712141: {
            name: "Floral Velvet Blues",
            files: [
                "IMG_2771",
                "IMG_2780",
                "IMG_2782",
                "IMG_2823",
                "IMG_2846",
                "IMG_2856",
            ],
        },
        201712142: {
            name: "Violet Paradise",
            files: [
                "IMG_2811",
                "IMG_2798",
                "IMG_2917",
                "IMG_2922",
            ],
        },
        201710181: {
            name: "Engineering Quad",
            files: [
                "IMG_1869",
                "IMG_1894",
                "IMG_1935",
            ],
        },
        201710182: {
            name: "Angst",
            files: [
                "IMG_1986",
                "IMG_2007",
            ],
        },
    };

    var portfolio = {
        culturemesh: {
            name: "CultureMesh",
            files: [],
        },
        openedx: {
            name: "Bulk Update for Open edX",
            files: [],
        },
        salmon: {
            name: "Salmon",
            files: [],
        }
    };

    var files = {
        photography: photography,
        portfolio: portfolio,
    };

    function nameToURL(name) {
        return name.replace(/\s/g, '-').toLowerCase();
    }

    function toggleNav() {
        $('.navpage').toggleClass('hidden');
        $('.navpage-toggle .navpage-toggle-icon').toggleClass('close');
    }

    function loadFolder(page, folder) {
        var list = files[page][folder].files;
        var $page = $('#' + page + '-content');
        $page.empty();
        for (var i in list) {
            $page.append('<img src="images/' + page + '/' + folder + '/' + list[i] +'.jpg" class="img-responsive">');
        }
        //TODO scroll to top
        //TODO Underline current folder
    }

    function loadSubheader(page) {
        var currFolders = files[page];
        var $subheader = $('.subheader');
        $subheader.empty();
        var keys = Object.keys(currFolders);
        $subheader.append('<p>');
        for (var i in keys) {
            var folder = keys[i];
            var name = currFolders[folder].name;
            var url = '#' + nameToURL(name);
            $subheader.append('<a href="' + url + '" onclick="main.loadFolder(\'photography\', \'' + folder + '\')">' + name + '</a>');
            if (i != keys.length - 1) {
                $subheader.append(' | ');
            }
        }
        $subheader.append('</p>');
    }

    return {
        toggleNav: toggleNav,
        loadFolder: loadFolder,
        loadSubheader: loadSubheader,
    };
})();
