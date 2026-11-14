const translations = {
  en: {
    nav_home:"Home",nav_about:"About",nav_research:"Research",nav_publications:"Publications",nav_teaching:"Teaching",nav_contact:"Contact",
    hero_eyebrow:"LECTURER • RESEARCHER • ACADEMIC",hero_role:"Information Systems Lecturer | Informatics Researcher",
    hero_intro:"Focused on information systems development, software engineering, database systems, and applying technology to solve real-world problems.",
    hero_button_profile:"Explore profile",hero_button_contact:"Get in touch",hero_status:"Permanent Lecturer · STIKOM CKI",hero_location:"Jakarta, Indonesia",
    card_role_label:"ACADEMIC RANK",card_role_value:"Lektor",card_focus_label:"AREAS OF FOCUS",
    fact_education:"Doctoral study · Hasanuddin University",fact_master:"Master's degree completed",fact_program:"Information Systems Study Program",fact_research:"Research & Development",
    overview_eyebrow:"OVERVIEW",overview_title:"An academic with a solution-oriented mindset.",overview_text:"Connecting education, research, and technology development through systematic and collaborative approaches.",
    feature_profile_title:"Academic Profile",feature_profile_text:"Education, career journey, and professional competencies.",feature_research_title:"Research",feature_research_text:"Research interests, key themes, and future directions.",feature_publications_title:"Publications",feature_publications_text:"Selected journal articles, proceedings, and scholarly works.",
    quote:"Information technology becomes meaningful when it is designed to address the needs of people and organizations.",footer_rights:"All rights reserved.",
    about_eyebrow:"ABOUT ME",about_title:"Academic Profile",about_lead:"Academic journey, professional experience, and competencies in informatics.",
    about_summary_title:"Professional Summary",about_summary:"Veri Arinal, M.Kom. is a permanent lecturer in the Information Systems Study Program at STIKOM Cipta Karya Informatika, Jakarta. Academic activities include teaching, research, and community engagement, with interests in information systems, database systems, decision support systems, data mining, and software engineering.",
    about_summary2:"He is currently pursuing a doctoral degree at Hasanuddin University. Details of the dissertation and academic progress will be updated as the study progresses.",
    education_title:"Education",education_note:"Update the program name and enrollment year according to official records.",bachelor_title:"Bachelor's Degree",bachelor_note:"Add the study program, institution, and graduation year.",career_title:"Academic Career",current:"Current",rank_note:"Academic rank: Lektor (update if changed).",expertise:"AREAS OF EXPERTISE",affiliation:"AFFILIATION",
    research_eyebrow:"SCHOLARSHIP & RESEARCH",research_title:"Research",research_lead:"Research interests in information systems development and computational approaches to organizational needs.",research_areas:"RESEARCH AREAS",research_areas_title:"Research focus",
    research_1:"Analysis, design, implementation, and evaluation of information systems that support organizational processes.",research_2:"Database architecture, data management, optimization, integration, and data service scalability.",research_3:"Modeling and development of decision support systems for decision-making processes.",research_4:"Data exploration, classification, prediction, and pattern discovery using computational methods.",research_5:"Requirements engineering, design, development, testing, and software maintenance methods.",research_6:"Educational information systems and technology for sustainable education.",
    roadmap_eyebrow:"DEVELOPMENT DIRECTION",roadmap_title:"Research roadmap",roadmap_text:"Add the official research roadmap with stages, themes, outputs, and target years. This is an initial framework and should be aligned with personal and institutional plans.",roadmap_1:"Research foundations & problem mapping",roadmap_2:"Model and method development",roadmap_3:"Empirical validation & publication",roadmap_4:"Implementation & knowledge transfer",
    publications_eyebrow:"SCHOLARLY WORK",publications_title:"Publications",publications_lead:"Journal articles, conference proceedings, books, and other scholarly works.",publication_notice_title:"Editorial note",publication_notice:"Include works that have been published or have verified metadata. Provide authors, year, title, journal/proceedings, volume/issue/pages, DOI, and publisher link. Do not list planned work as published output.",pub_type_journal:"JOURNAL ARTICLE",pub_type_conference:"CONFERENCE PROCEEDINGS",profiles_title:"Researcher & indexing profiles",profiles_text:"Add official profile links so readers can verify publications and citation records.",
    teaching_eyebrow:"EDUCATION & LEARNING",teaching_title:"Teaching",teaching_lead:"Courses and learning approaches in Information Systems and Informatics.",courses_label:"COURSES",courses_title:"Teaching areas",course_1:"Database Concepts",course_2:"Database Systems",course_3:"Information Systems Analysis and Design",course_4:"Management Information Systems",course_5:"Web-Based Programming",course_6:"Decision Support Systems",approach_title:"Teaching approach",approach_text:"Learning is designed around competency achievement through Outcome-Based Education (OBE), case studies, practical work, and projects based on real-world problems. Update the course list according to current semester assignments.",
    contact_eyebrow:"CONNECT & COLLABORATE",contact_title:"Let's connect.",contact_lead:"Open to academic discussion, research collaboration, information systems development, and community engagement.",contact_invite:"Get in touch",contact_text:"Please use the institutional email or official academic profiles to get in touch and review academic records.",collaboration:"COLLABORATION",collaboration_title:"Ideas grow through collaboration.",collaboration_text:"Let's exchange ideas and develop research that makes an impact on education, organizations, and society.",
    hero_button_contact:"Contact me",hero_location:"Jakarta, Indonesia",
    card_focus_label:"AREA OF FOCUS",card_role_value:"Lecturer",
    fact_master:"Master's degree in Computer Science, 2007",
    fact_program:"Information Systems Study Program",
    fact_research:"Research & Development",
    feature_research_title:"Research",feature_research_text:"Research interests, key themes, and future directions.",
    feature_publications_title:"Academic Publications",feature_publications_text:"Selected journal articles, proceedings, and scholarly works.",
    footer_note:"Academic Portfolio · Built with GitHub Pages",
    overview_title:"An academic with a solution-oriented mindset.",
    overview_text:"Connecting education, research, and technology development through systematic and collaborative approaches.",
    nav_about:"Profile",nav_research:"Research",nav_publications:"Publications",nav_teaching:"Teaching",nav_contact:"Contact",
    hero_role:"Information Systems Lecturer | Informatics Researcher",
    hero_status:"Permanent Lecturer · STIKOM CKI",
    hero_button_profile:"Explore profile",footer_rights:"All rights reserved."

  }
};
let currentLang = "id";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile navigation: keep visual state and accessibility state in sync.
  const menuButton = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".nav-links");

  const setMenuOpen = (isOpen) => {
    if (!menuButton || !navigation) return;
    navigation.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
  };

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        menuButton.getAttribute("aria-expanded") === "true" &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });
  }

  // Capture original Indonesian text once, preserving nested decorative elements.
  const translatableElements = document.querySelectorAll("[data-i18n]");
  translatableElements.forEach((element) => {
    const firstTextNode = Array.from(element.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );
    element.dataset.originalText = firstTextNode
      ? firstTextNode.textContent.trim()
      : element.textContent.trim();
  });

  const setElementText = (element, value) => {
    const firstTextNode = Array.from(element.childNodes).find(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
    );

    if (firstTextNode) {
      firstTextNode.textContent = value;
    } else if (element.children.length > 0) {
      element.insertBefore(document.createTextNode(value + " "), element.firstChild);
    } else {
      element.textContent = value;
    }
  };

  const languageButtons = document.querySelectorAll(".lang-toggle");

  const applyLanguage = (language) => {
    currentLang = language;
    document.documentElement.lang = language;

    translatableElements.forEach((element) => {
      const key = element.dataset.i18n;
      const translated = language === "en" ? translations.en[key] : null;
      const original = element.dataset.originalText || element.textContent;
      setElementText(element, translated || original);
    });

    languageButtons.forEach((button) => {
      button.textContent = language === "id" ? "EN" : "ID";
      button.setAttribute(
        "aria-label",
        language === "id" ? "Switch to English" : "Beralih ke Bahasa Indonesia"
      );
    });

    try {
      localStorage.setItem("preferred-language", language);
    } catch (error) {
      // Storage may be disabled; language switching still works for this page view.
    }
  };

  let savedLanguage = "id";
  try {
    const storedLanguage = localStorage.getItem("preferred-language");
    if (storedLanguage === "en" || storedLanguage === "id") {
      savedLanguage = storedLanguage;
    }
  } catch (error) {
    // Continue with Indonesian when browser storage is unavailable.
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(currentLang === "id" ? "en" : "id");
    });
  });

  applyLanguage(savedLanguage);
});
