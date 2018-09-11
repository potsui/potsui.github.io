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
        0: {
            name: "XXXX",
            files: [
                "IMG_32",
                "IMG_33",
                "IMG_30",
                "IMG_26",
				"IMG_24",
                "IMG_08",
                "IMG_09",
                "IMG_10",
                "IMG_05",
                "IMG_16",
                "IMG_31",
                "IMG_13",
                "IMG_02",
                "IMG_04",
                "IMG_101",
                "IMG_102",
            ]
        }
    };

    var projects = {
        0: {
            name: "Salmon",
            title: "Swim upstream with Salmon: A cross-platform mobile application for the classroom and beyond",
            description: "Join virtual classrooms and anonymously ask and answer questions. Urban Teens Exploring Technology Demo Day 2016 Honorable Mention.",
            role: "Coach, Senior Project Manager, Developer",
            link: "https://www.youtube.com/watch?v=Ujqj_eoWjmA",
            linkText: "VIEW APP DEMO",
            files: [
                "salmon-thumbnail",
            ],
        },
        1: {
            name: "CultureMesh",
            title: "CultureMesh",
            description: "Mocks for <a href=\'https://culturemesh.com/\'>CultureMesh</a>, a nonprofit social network aiming to connect the world's disporas, through Stanford Code the Change.",
            role: "UI Design Team",
            link: "https://www.behance.net/gallery/55034375/CultureMesh-Mobile-Website",
            linkText: "VIEW ON BEHANCE",
            files: [
                "culturemesh-thumbnail",
            ],
        },
        2: {
            name: "OpenEdX",
            title: "Bulk Update Utility for OpenEdX",
            description: "Allows instructors to modify problem settings for an entire course with a single interaction. For Stanford <a href='https://lagunita.stanford.edu/'>Lagunita</a>, an instance of the open source MOOC platform <a href='https://open.edx.org/'>OpenEdX</a>.",
            role: "CURIS Software Engineering Intern, Stanford OpenEdX (VPTL)",
            link: "files/openedx-poster.pdf",
            linkText: "VIEW PROJECT POSTER",
            files: [
                "openedx-thumbnail",
            ],
        },
        3: {
            name: "Cross Border Journalism",
            title: "Cross Border Journalism",
            description: "Web platform for investigative journalists to collaborate on tasks across the world.",
            role: "Full-Stack Developer",
            link: "https://github.com/potsui/cross-border-journalism/",
            linkText: "VIEW ON GITHUB",
            files: [
                "cross-border-journalism-thumbnail",
            ],
        },
        4: {
            name: "ThoughtBubble",
            title: "Get help talking about the tough questions. Expand your bubble.",
            description: "ThoughtBubble is a native Android app that allows you to be forthcoming about identities and experiences you're willing to share, guide your friends in framing the tough questions, and facilitate a larger conversation across multiple identities. Most Social Impact Award, CS 147 Showcase 2017.",
            role: "Android Backend and Web Developer",
            link: "https://web.stanford.edu/class/cs147/projects/education/thoughtbubble/",
            linkText: "VIEW PROJECT WEBSITE",
            files: [
                "thoughtbubble-thumbnail",
            ],
        },
    };

    var files = {
        photography: photography,
        projects: projects,
    };

    function nameToURL(name) {
        return name.replace(/\s/g, '-').toLowerCase();
    }

    function toggleNav() {
        $('.navpage').toggleClass('hidden');
        $('.navpage-toggle .navpage-toggle-icon').toggleClass('close');
    }

    function selectSubheader(folder) {
        var $subheader = $('.subheader');
        $subheader.children().removeClass('underline');
        $('.subheader-' + folder).addClass('underline');
    }

    function checkHash(page, defaultFolder) {
        var hash = window.location.hash;
        if (hash) {
            defaultFolder = hash.substr(1);
        } else {
            window.location.hash = defaultFolder;
        }
        return defaultFolder;
    }

    function loadProject(folder) {
        selectSubheader(folder);
        var project = files.projects[folder];
        var list = project.files;
        var $page = $('#projects-content');
        $page.empty();
        var content = '<div class="col-sm-1 col-md-1"></div><div class="col-sm-10 col-md-10">';
        if (project.title) content += '<br><h3>' + project.title + '</h3>';
        if (project.description) content += '<p>' + project.description + '</p>';
        content += '<div class="project-container"><img src="images/projects/' + folder + '/' + list[0] +'.jpg" class="img-responsive">';
        if (project.link) content += '<a href="' + project.link + '" class="image-mask-overlay" target="_blank"><h3 class="project-overlay-title">' + project.linkText + '</h3></a>';
        content += '</div>';
        if (project.role) content += '<p>' + project.role + '</p>';
        content += '</div>';
        $page.append(content);
        window.scrollTo(0,0);
    }

    function loadPhotos(folder) {
        selectSubheader(folder);
        var project = files.photography[folder];
        var list = project.files;
        var $page = $('#photography-content');
        $page.empty();
        for (var i in list) {
            if (list[i].substr(0,4) == "IMG_") {
                $page.append('<img src="images/photography/' + folder + '/' + list[i] +'.jpg" class="img-responsive">');
            } else {
                $page.append('<br><br><p>' + list[i] + '</p>');
            }
        }
        window.scrollTo(0,0);
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
            var url = '#' + keys[i];
            if (page === 'photography') {
                $subheader.append('<a href="' + url + '" class=\'subheader-' + folder + '\' onclick="main.loadPhotos(\'' + folder + '\')">' + name + '</a>');
            } else if (page === 'projects') {
                $subheader.append('<a href="' + url + '" class=\'subheader-' + folder + '\' onclick="main.loadProject(\'' + folder + '\')">' + name + '</a>');
            }
            if (i != keys.length - 1) {
                $subheader.append(' | ');
            }
        }
        $subheader.append('</p>');
    }

    return {
        toggleNav: toggleNav,
        checkHash: checkHash,
        loadProject: loadProject,
        loadPhotos: loadPhotos,
        loadSubheader: loadSubheader,
    };
})();
