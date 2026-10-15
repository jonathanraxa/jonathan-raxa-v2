import { ProjectData } from "@/types";

// portfolio photos
import videdu from "@/assets/img/projects/videdu.jpg";
import photoworld from "@/assets/img/projects/photoworld.jpg";
import sfpark from "@/assets/img/projects/sfpark.jpg";
import script from "@/assets/img/projects/script.jpg";
import mywebsitev2 from "@/assets/img/projects/mywebsitev2.jpg";
import rentals from "@/assets/img/projects/rentals.jpg";
import _4uimg from "@/assets/img/projects/fouruimg.jpg";
import googlescript from "@/assets/img/projects/googlescript.jpg";
import templatecreator from "@/assets/img/projects/templatecreator.jpg";
import promodrawer from "@/assets/img/projects/promodrawer.jpg";

// portfolio objects
export const VIDEDU: ProjectData = {
  title: "VidEdu",
  description: "YouTube play/pause note-taking interaction.",
  websiteTitle: "www.videdu.org",
  websiteLink: "http://www.videdu.org",
  sourceCodeTitle: "VidEdu Source Code",
  sourceCodeLink:
    "https://docs.google.com/document/d/16lotARoZ2KsIzn06sAM0vDntKwQaTTYQFjGzJO3iamU/edit?usp=sharing",
  documentationTitle: "VidEdu Documentation",
  documentationLink:
    "https://docs.google.com/document/d/16lotARoZ2KsIzn06sAM0vDntKwQaTTYQFjGzJO3iamU/edit?usp=sharing",
  contribution:
    "Project/Team Lead. Main Application Designer. Front-end. Back-end.",
  languages: ["Ruby", "Ruby on Rails", "JavaScript/JQuery", "HTML/CSS"],
  date: "Sep 2015 - Present",
  extraResource: "https://player.vimeo.com/video/193198836",
  location: "SFSU",
  showExtraResource: true,
  image: videdu,
};

export const TEMPLATE_CREATOR: ProjectData = {
  title: "SFCC Template Creator",
  description: "html/css generator for sfcc template code",
  websiteTitle: "SFCC Template Creator (hosted on github pages)",
  websiteLink: "https://jonathanraxa.github.io/template_creator/",
  sourceCodeTitle: "Template Creator Source Code",
  sourceCodeLink: "https://github.com/jonathanraxa/template_creator",
  documentationTitle: "",
  documentationLink: "",
  contribution: "Everything",
  languages: ["REACT JS", "JavaScript/JQuery (ES6/Babel)", "HTML/CSS"],
  date: "May 2019 - June 2019",
  extraResource: "",
  location: "Gap Inc. | San Francisco, CA",
  showExtraResource: false,
  image: templatecreator,
};

export const _4UIMG: ProjectData = {
  title: "4UImg",
  description:
    "4UImg provides CII and its Artists an online storefront for reaching customers more efficiently  and expanding business.",
  websiteTitle: "www.sfsuswe.com/s16g04/",
  websiteLink:
    "www.sfsuswe.com/s16g04/ (Unfortunately the server is down so the website is NOT live)",
  sourceCodeTitle: "4Uimg Source Code",
  sourceCodeLink: "https://github.com/jonathanraxa/4Uimg/blob/master/index.php",
  documentationTitle: "4Uimg Documentation",
  documentationLink:
    "https://docs.google.com/document/d/1wR2uDwZn4haisS-8htjyZCgW5mHDu0cFbI5LwKrgKYg/edit",
  contribution: "Tech-Lead. Designed and in charge of most Front-end UI",
  languages: ["PHP", "MySQL", "JavaScript/JQuery", "HTML/CSS"],
  date: "Feb 2016 – May 2016",
  extraResource: "",
  location: "SFSU",
  showExtraResource: false,
  image: _4uimg,
};

export const PHOTOWORLD: ProjectData = {
  title: "PhotoWorld",
  description:
    "Google maps photo search application.User looks for a public photo using Flickr API and pins drop respective to photo geo - location.",
  websiteTitle: "www.photoglobe.space",
  websiteLink: "http://photoglobe.space/",
  sourceCodeTitle: "PhotoWorld Source Code",
  sourceCodeLink: "https://github.com/jonathanraxa/PhotoWorld",
  documentationTitle: "PhotoGlobe Documentation",
  documentationLink: "https://github.com/jonathanraxa/PhotoWorld",
  contribution: "Tech-Lead. Designed and developed entire application",
  languages: [
    "JavaScript/JQuery",
    "HTML/CSS",
    "Google Maps API",
    "Flicker API",
  ],
  date: "Feb 2015 – Apr 2015",
  extraResource: "",
  location: "SFSU",
  showExtraResource: false,
  image: photoworld,
};

export const SFPARK: ProjectData = {
  title: "SF Park",
  description:
    "ParkSF is an Android based application for mobile devices that allows users to interact with parking locations throughout San Francisco.",
  websiteTitle: "",
  websiteLink: "",
  sourceCodeTitle: "Park SF Source Code",
  sourceCodeLink: "https://github.com/jonathanraxa/SFPark",
  documentationTitle: "PhotoGlobe Documentation",
  documentationLink:
    "https://docs.google.com/document/d/108y4XNghaYLmeczUfabqUDDPKtlEsnXY6cR1FMpN914/edit?usp=sharing",
  contribution: "Front-end application developer",
  languages: ["Android", "Java", "Google Maps API", "Park API"],
  date: "Sep 2014 – Dec 2014",
  extraResource: "",
  location: "SFSU",
  showExtraResource: false,
  image: sfpark,
};

export const RUBYSCRIPT: ProjectData = {
  title: "LQ Digital Ruby Script",
  description:
    "Three Ruby scripts used for specfic HTML pages to find and replace certain values pertained only to the website.",
  websiteTitle: "",
  websiteLink: "",
  sourceCodeTitle: "LQ Digital Ruby Script Source Code",
  sourceCodeLink: "https://github.com/jonathanraxa/DirectoryTextReplacer",
  documentationTitle: "",
  documentationLink: "",
  contribution: "All",
  languages: ["Ruby"],
  date: "Mar 2016",
  extraResource: "",
  location: "LQ Digial",
  showExtraResource: false,
  image: script,
};

export const PERSONALWEBSITE: ProjectData = {
  title: "Personal React-based Website",
  description: "ReactJS based website hosted on github pages.",
  websiteTitle: "Jonathan Raxa's Website",
  websiteLink: "https://jonathanraxa.github.io/jonathan-raxa/",
  sourceCodeTitle: "Personal React-based Website Source Code",
  sourceCodeLink: "https://github.com/jonathanraxa/jonathan-raxa",
  documentationTitle: "",
  documentationLink: "",
  contribution: "All",
  languages: ["ReactJS", "JavaScript", "HTML/CSS"],
  date: "May 2019",
  extraResource: "",
  location: "San Francisco, CA",
  showExtraResource: false,
  image: mywebsitev2,
};

export const GOOGLESCRIPT: ProjectData = {
  title: "Promotional Templates",
  description: "Using Google Scripts to create HTML templates",
  websiteTitle: "Gap Inc. Europe",
  websiteLink: "www.gap.eu",
  sourceCodeTitle: "",
  sourceCodeLink: "",
  documentationTitle: "",
  documentationLink: "",
  contribution: "All",
  languages: ["Google Scripts", "HTML/CSS"],
  date: "Feb 2019",
  extraResource: "",
  location: "Gap Inc. | San Francisco, CA",
  showExtraResource: false,
  image: googlescript,
};

export const RENTALS: ProjectData = {
  title: "SF Rent Calculator",
  description: "Rent calculator based on API data",
  websiteTitle: "",
  websiteLink: "",
  sourceCodeTitle: "Rentals Calculator",
  sourceCodeLink: "https://github.com/jonathanraxa/RentalsRecruitment",
  documentationTitle: "",
  documentationLink: "",
  contribution: "All",
  languages: ["JavaScript/JQuery", "HTML/CSS", "NodeJS"],
  date: "Sep 2016",
  extraResource: "",
  location: "San Francisco, CA",
  showExtraResource: false,
  image: rentals,
};

export const PROMODRAWER: ProjectData = {
  title: "SFCC Promo Drawer",
  description: "React JS based web application for promo drawer generatinon",
  websiteTitle: "SFCC Promo Drawer [heroku app]",
  websiteLink: "http://sfccpromodrawer.herokuapp.com",
  sourceCodeTitle: "Promo Drawer",
  sourceCodeLink: "https://github.com/jonathanraxa/promodrawer",
  documentationTitle: "",
  documentationLink: "",
  contribution: "All",
  languages: ["React JS", "JavaScript/JQuery", "HTML/CSS"],
  date: "Aug 2019",
  extraResource: "",
  location: "San Francisco, CA | Gap Inc.",
  showExtraResource: false,
  image: promodrawer,
};

export const allPortfolio: ProjectData[] = [
  VIDEDU,
  TEMPLATE_CREATOR,
  _4UIMG,
  PHOTOWORLD,
  SFPARK,
  RUBYSCRIPT,
  PERSONALWEBSITE,
  GOOGLESCRIPT,
  RENTALS,
  PROMODRAWER,
];
