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
            name: "Angst",
            files: [
                "IMG_1869",
                "IMG_1894",
                "IMG_1935",
            ],
        },
        201710182: {
            name: "Engineering Quad",
            files: [
                "IMG_1986",
                "IMG_2007",
            ],
        },
    };

    var portfolio = {
        0: {
            name: "Salmon",
            title: "Swim upstream with Salmon",
            subtitle: "A cross-platform mobile application for the classroom and beyond",
            description: "Join virtual classrooms and anonymously ask and answer questions. Urban Teens Exploring Technology Demo Day 2016 Honorable Mention. Coach, Senior Project Manager, Developer.",
            files: [
                "salmon-thumbnail",
            ],
        },
        1: {
            name: "CultureMesh",
            title: "CultureMesh",
            description: "Created mocks for <a href=\'https://culturemesh.com/\'>CultureMesh</a>, a nonprofit social network aiming to connect the world's disporas, through Stanford Code the Change. Adobe Illustrator.",
            link: "https://www.behance.net/gallery/55034375/CultureMesh-Mobile-Website",
            linkText: "View it on Behance",
            files: [
                "culturemesh-thumbnail",
            ],
        },
        2: {
            name: "OpenEdX",
            title: "Bulk Update Utility for OpenEdX",
            subtitle: "CURIS Software Engineering Intern, Stanford Open edX (VPTL). June - September 2017.",
            description: "Implemented bulk update feature for Stanford <a href='https://lagunita.stanford.edu/'>Lagunita</a>, an instance of the open source MOOC platform <a href='https://open.edx.org/'>Open edX</a>. This utility allows instructors to modify problem settings for an entire course with a single interaction. The update is handled as an asynchronous Celery task. Dramatically reduced workload of CourseOps team for handling setting update requests.",
            link: "files/openedx-poster.pdf",
            linkText: "View project poster",
            files: [
                "openedx-thumbnail",
            ],
        },
        3: {
            name: "Cross Border Journalism",
            description: "",
            files: [],
        },
        4: {
            name: "ThoughtBubble",
            description: "",
            files: [],
        },
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
        //TODO load based on url first
        var project = files[page][folder];
        var list = project.files;
        var $page = $('#' + page + '-content');
        $page.empty();
        var content = '';
        if (project.title) content += '<br><h3>' + project.title + '</h3>';
        if (project.subtitle) content += '<h4>' + project.subtitle + '</h4>';
        if (project.description) content += '<p>' + project.description + '</p>';
        content += '<div class="project-container"><img src="images/' + page + '/' + folder + '/' + list[0] +'.jpg" class="img-responsive">';
        if (project.link) content += '<a href="' + project.link + '" class="image-mask-overlay" target="_blank"><h3 class="project-overlay-title">' + project.linkText + '</h3></a>';
        content += '</div>';
        $page.append(content);
        //TODO scroll to top
        //TODO Underline current folder
    }

    function loadPhotos(folder) {
        //TODO load based on url first
        var project = files.photography[folder];
        var list = project.files;
        var $page = $('#photography-content');
        $page.empty();
        for (var i in list) {
            $page.append('<img src="images/photography/' + folder + '/' + list[i] +'.jpg" class="img-responsive">');
        }
        //TODO scroll to top
        //TODO Underline current folder
    }

    function loadSubheader(page) {
        var currFolders = files[page];
        var $subheader = $('.subheader');
        $subheader.empty();
        var keys = Object.keys(currFolders).reverse();
        $subheader.append('<p>');
        for (var i in keys) {
            var folder = keys[i];
            var name = currFolders[folder].name;
            var url = '#' + nameToURL(name);
            if (page === 'photography') {
                $subheader.append('<a href="' + url + '" onclick="main.loadPhotos(\'' + folder + '\')">' + name + '</a>');
            } else if (page === 'portfolio') {
                $subheader.append('<a href="' + url + '" onclick="main.loadFolder(\'' + page + '\', \'' + folder + '\')">' + name + '</a>');
            }
            if (i != keys.length - 1) {
                $subheader.append(' | ');
            }
        }
        $subheader.append('</p>');
    }

    return {
        toggleNav: toggleNav,
        loadFolder: loadFolder,
        loadPhotos: loadPhotos,
        loadSubheader: loadSubheader,
    };
})();
