var $ = jQuery;

var main = (function(){
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
    2: {
      name: "ThoughtBubble",
      title: "Get help talking about the tough questions. Expand your bubble.",
      description: "ThoughtBubble is a native Android app that allows you to be forthcoming about identities and experiences you're willing to share, guide your friends in framing the tough questions, and facilitate a larger conversation across multiple identities. Most Social Impact Award, CS 147 Showcase 2017.",
      role: "Android Backend and Web Developer",
      link: "https://hci.stanford.edu/courses/cs147/2017/au/projects/education/thoughtbubble",
      linkText: "VIEW PROJECT WEBSITE",
      files: [
        "thoughtbubble-thumbnail",
      ],
    },
		3: {
			name: "Shared Story",
      title: "Constructing identity and local community through tangible exploration.",
      description: "Students in highly segregated communities rarely have a chance to share their life stories with people from other backgrounds. They may also be unaware of how their life story has been shaped by their community history. Shared Story aims to help middle and high school students reflect on their life stories and share these stories with others in their community, via a map and timeline on a tangible user interface (TUI) table, where individuals construct physical and digital representations of important events in their lives and their communities. They can also then share their stories and explore others online via an integrated web application. By viewing the events placed by themselves and others, young learners will become aware of how others in their community lead their lives and what places and events have shaped them.",
      role: "Co-Creator",
      link: "files/sharedstory-presentation.pdf",
      linkText: "VIEW PRESENTATION SLIDES",
      files: [
        "sharedstory-thumbnail",
      ],
		}
  };

  var files = {
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

    if (project.title) {
      content += '<br><h3>' + project.title + '</h3>';
    }
    if (project.description) {
      content += '<p>' + project.description + '</p>';
    }
    content += '<div class="project-container"><img src="images/projects/' + folder + '/' + list[0] +'.jpg" class="img-responsive">';
    if (project.link) {
      content += '<a href="' + project.link + '" class="image-mask-overlay" target="_blank"><h3 class="project-overlay-title">' + project.linkText + '</h3></a>';
    }
    content += '</div>';
    if (project.role) {
      content += '<p>' + project.role + '</p>';
    }
    content += '</div>';

    $page.append(content);
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
      if (page === 'projects') {
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
    loadSubheader: loadSubheader,
  };
})();
