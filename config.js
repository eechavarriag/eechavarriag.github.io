/* ============================================================
   GIS PORTFOLIO TEMPLATE — CONFIG
   ============================================================
 
   This is the ONE file you need to edit to make the site yours.
   Every page on the site reads from here. Change something
   here, and it updates on the homepage, the projects page,
   the about page, and the contact page all at once.
 
   Rules of thumb:
   - Keep the quote marks around each value
   - Keep the commas at the end of each line
   - Don't delete the curly braces { } or square brackets [ ]
 
   ============================================================ */
 
 
const CONFIG = {
 
  // =========================================================
  // BASICS — name, contact, headshot
  // =========================================================
 
  name: "Eugenia Echavarria",
  tagline: "Environmental Studies, Geography and Data Science and Statistics Student",
  location: "Richmond, Virginia",
 
  email:    "eugenia.echavarria@richmond.edu",
  github:   "https://github.com/eechavarriag",
  linkedin: "https://linkedin.com/in/eugenia-echavarria",
  website:  "",   // leave as "" to hide
 
  headshot: "images/headshot.jpg",
 
 
  // =========================================================
  // SHORT BIO — used on the homepage
  // 1-2 sentences. Keep it punchy.
  // =========================================================
 
  shortBio: `Senior at the University of Richmond majoring in Environmental Studies and Geography
             and minoring in Data Science and Statistics, focused on open spatial data, community
             cartography, and making maps that answer real questions.`,
 
 
  // =========================================================
  // LONG BIO — used on the About page
  // 3-6 paragraphs. Write like a human, not a resume.
  // To split into paragraphs, use \n\n between them.
  // =========================================================
 
  longBio: `I am a senior at the University of Richmond majoring in
            Environmental Studies and Geography with a minor in Data Science
            and Statistics. I am passionate about using GIS, remote sensing,
            and spatial analysis to better understand environmental challenges
            and support more sustainable communities.
 
            Since my freshman year, I have conducted research on development in
            the Amazon rainforest, examining how illegal road expansion influences
            watersheds, deforestation, land surface temperature, evapotranspiration,
            and other environmental processes. My research has been presented to
            government officials, embassies, and representatives of the United Nations
            in Peru.
 
            Most recently, I interned with the City of Ann Arbor's Office of Sustainability
            and Innovations, where I developed a series of urban heat island dashboards
            to identify neighborhoods most vulnerable to extreme summer heat. The dashboards
            were presented to the City's Parks and Forestry Department to help inform greening
            strategies and future tree-planting efforts.
 
            I will graduate in May 2027 and am interested in graduate study or full-time
            opportunities in spatial analysis, urban planning, sustainability, and applied
            environmental research`,
 
 
  // =========================================================
  // EDUCATION — used on the About page
  // Add or remove entries as needed.
  // =========================================================
 
  education: [
    {
      school: "University of Richmond",
      degree: "B.S., Environmental Studies and Geography with a minor in Data Science & Statistics",
      year:   "Expected May 2027",
      note:   ""
    },
    {
      school: "DIS Copenhagen Study Abroad - Copenhagen, Denmark",
      degree: "Polar Biology and Strategies for Urban Livability",
      year:   "Fall 2025",
      note:   "Completed coursework in Polar Biology and Urban Planning, conducting field research on Arctic ecosystems in northern Iceland and studying Copenhagen's sustainable urban design, green infrastructure, bicycle and public transit systems, climate adaptation, and land-use planning."
    },
    {
      school: "University of Miami - Miami, FL",
      degree: "Tropical Marine Biology and Life in the Sea",
      year:   "Summer 2022",
      note:   "Completed college-level coursework in Tropical Marine Biology and Life in the Sea, earning an A+ and A, respectively. Combined classroom learning with hands-on fieldwork investigating tropical marine ecosystems, coral reefs, marine biodiversity, and coastal ecology while developing skills in ecological observation, species identification, and scientific field methods."
    },
    {
      school: "The Columbus School - Medellin, Colombia",
      degree: "High School Diploma y Bachiller Académico",
      year:   "August 2009 - June 2023",
      note:   "Completed a rigorous college-preparatory curriculum with Advanced Placement coursework in Biology, Environmental Science, Chemistry, Physics, Psychology, and Spanish Language. Developed a strong interdisciplinary foundation in the sciences while engaging in an internationally focused education that emphasized global perspectives, critical thinking, cross-cultural collaboration, and real-world problem solving."
    },
  ],
 
 
  // =========================================================
  // EXPERIENCE — used on the About page
  // =========================================================
 
  experience: [
    {
      role:    "Undergraduate Research Fellow",
      org:     "Amazon Borderlands Spatial Analysis Team, University of Richmond",
      years:   "2024 - present",
      blurb:   `As a student researcher with the Amazon Borderlands Spatial Analysis Team (ABSAT)
               under Dr. David Salisbury, I contribute to a NASA SERVIR-funded conservation project
               examining the environmental impacts of road development in the southwestern Amazon.
               Using GIS and remote sensing, I analyze changes in watersheds, evapotranspiration,
               land surface temperature, and deforestation along the Brazil–Peru border.
 
               I also create cartographic products supporting environmental and legal initiatives for
               organizations including UNESCO and government agencies in Brazil and Peru, while leading
               English–Spanish translation of project materials to strengthen international collaboration.
 
               My research has been supported by the University of Richmond School of Arts & Sciences Summer
               Research Fellowship (2024 & 2025) and presented at the 2025 and 2026 American Association of
               Geographers (AAG) Annual Meetings and the 2025 and 2026 University of Richmond Arts & Sciences
               Undergraduate Research Symposium.`
    },
    {
      role:    "Geographic Information Systems Intern",
      org:     "City of Ann Arbor, Office of Sustainability and Innovatios",
      years:   "Summer 2026",
      blurb:   `As a GIS Intern with the City of Ann Arbor's Office of Sustainability & Innovations,
               I developed geospatial tools to support the city's climate resilience and urban forestry
               initiatives. Using ArcGIS Pro, ArcGIS Online, and Google Earth Engine, I integrated remote
               sensing, demographic, and municipal GIS datasets to analyze urban heat island patterns and
               identify priority areas for heat mitigation.
 
               A major outcome of the internship was the development and publication of three interactive ArcGIS
               Online dashboards at the census block, block group, and neighborhood scales. These dashboards
               communicate patterns in land surface temperature, tree canopy, impervious surfaces, demographics,
               and public land ownership to support evidence-based planning and community engagement.`
    },
 
    {
      role:    "Spatial Analysis Lab Intern",
      org:     "Spatial Analysis Lab, University of Richmond",
      years:   "Spring 2026",
      blurb:   `As an intern of the Spatial Analysis Lab, I supported students and faculty in applying GIS, remote sensing,
               and cartographic techniques to coursework and research projects. I provided technical guidance on spatial analysis,
               geoprocessing, raster analysis, coordinate systems, and map design while troubleshooting GIS workflows using ArcGIS Pro
               and ENVI.
 
               I also helped maintain GIS lab resources and promoted effective cartographic communication and data visualization,
               contributing to a collaborative environment that strengthened students' confidence in using geospatial technologies.`
    },
 
    {
      role:    "Teaching Assitant",
      org:     "Latin American, Latino, & Iberian Studies, University of Richmond",
      years:   "2023 - 2025",
      blurb:   `As a Teaching Assistant and Drill Instructor for Intensive Intermediate Spanish (SPAN 221), I led interactive sessions
               designed to strengthen students' grammar, vocabulary, pronunciation, and conversational fluency. Working closely with
               course instructors, I developed engaging learning activities that reinforced classroom instruction and encouraged active
               participation in Spanish.
               This role strengthened my skills in public speaking, leadership, mentoring, cross-cultural communication, and collaborative
               problem-solving while fostering an inclusive and supportive learning environment.`
    },
  ],
 
 
  // =========================================================
  // SKILLS — used on the About page
  // Grouped by category. Be honest about what you actually know.
  // =========================================================
 
  skillGroups: [
    {
      label: "Desktop GIS",
      skills: ["ArcGIS Pro", "QGIS", "ArcGIS Online", "ENVI", "Google Earth Engine"]
    },
    {
      label: "Programming",
      skills: ["Python", "R", "SQL", "JavaScript (basic)"]
    },
    {
      label: "Office Suites",
      skills: ["Excel", "Google Suite", "Access"]
    },
    {
      label: "Editing",
      skills: ["Adobe Illustrator", "Adobe Photoshop", "InkScape"]
    },
  ],
 
 
  // =========================================================
  // PROJECTS — the most important section
  // =========================================================
  //
  // Each project has a "slug" (a short id used for the URL)
  // and a "detailPage" (the file that holds the case study).
  //
  // To add a project: copy a whole { ... } block, paste it
  // below, and edit the values.
  //
  // The "featured: true" flag means it shows on the homepage.
  // Mark 3 as featured. The rest show on the projects page only.
  //
  // =========================================================
 
  projects: [
 
    {
      slug:        "urban-heat-ann-arbor",
      title:       "Mapping Urban Heat and Tree Equity in Ann Arbor",
      year:        "2026",
      type:        "GIS & Remote Sensing",
      thumbnail:   "images/projects/ann-arbor-heat-thumb-v2.jpg",
      blurb:       `Interactive GIS analysis of urban heat island patterns 
                    in Ann Arbor using Landsat-derived land surface temperature, 
                    tree canopy, impervious surface, demographic, and municipal 
                    datasets to identify priority areas for heat mitigation and 
                    urban forestry interventions.`,
      tags:        ["ArcGIS Pro", "ArcGIS Online", "Google Earth Engine", "Remote Sensing", "Urban Heat Islands"],
      detailPage:  "project-ann-arbor-heat.html",
      featured:    true,
    },

     
    {
      slug:        "roads-climate-change",
      title:       "Roads to Climate Change: Secondary Roads in Acre-Amazonas, Brazil",
      year:        "2025",
      type:        "Climate & Remote Sensing",
      thumbnail:   "images/projects/roads-climate-thumb.jpg",
      blurb:       `Three case studies of secondary road networks in the Brazilian Amazon, 
                    measuring their impact on deforestation, degradation, land surface 
                    temperature, and evapotranspiration from 2003 to 2024.`,
      tags:      ["ArcGIS Pro", "Remote Sensing", "MODIS", "Climate Science"],
      detailPage:  "project-roads-climate-change.html",
      featured:    true,
    },

   {
      slug:        "watershed-impacts",
      title:       "Road Building Impacts on the Rivers and Watersheds of the Yurúa-Juruá Amazon Borderlands",
      year:        "2024",
      type:        "Land Use & Land Cover Analysis",
      thumbnail:   "images/projects/watershedmapfullextent.jpg",
      blurb:       `A spatial analysis of illegal road development in the Peruvian Amazon, measuring its impacts 
                    on watersheds, rivers, and environmentally significant landscapes to support conservation efforts.`,
      tags:        ["ArcGIS Pro", "Remote Sensing", "Hydrology", "Environmental Monitoring"],
      detailPage:  "project-watersheds.html",
      featured:    true,
    },
 
    // Example of a non-featured project (will appear on /projects only):
    {
      slug:        "sanborn-mosaic",
      title:       "Stitching the Sanborn Atlases of Richmond",
      year:        "2023",
      type:        "Historical GIS",
      thumbnail:   "images/projects/sanborn-mosaic-thumb.svg",
      blurb:       `Georeferenced and mosaicked a set of 1905 Sanborn fire
                    insurance maps into a single cloud-optimized GeoTIFF
                    for use in archival research.`,
      tags:        ["ArcGIS Pro", "GDAL", "COG", "Archives"],
      detailPage:  "project-sanborn-mosaic.html",
      featured:    false,
    },
 
  ],
 
 
  // =========================================================
  // CONTACT PAGE — what to say on the contact page
  // =========================================================
 
  contactLead: `I'm always open to connecting about GIS, spatial analysis, urban planning,
               and sustainability, and I welcome conversations about research, collaboration,
               and full-time opportunities starting in May 2027.`,
 
 
  // =========================================================
  // SITE — small details
  // =========================================================
 
  // Used in browser tab and site footer
  siteTitle: "Portfolio",
 
  // Year on the footer copyright; "auto" uses the current year
  footerYear: "auto",
 
};
 
 


