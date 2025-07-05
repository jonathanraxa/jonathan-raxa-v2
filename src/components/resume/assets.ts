// company logos
import gapinc from "@/assets/img/companies/gaplogo.svg";
import lqdigital from "@/assets/img/companies/lq-logo.svg";
import sfsu from "@/assets/img/companies/sfsulogo.png";
import datarobot from "@/assets/img/companies/datarobot.svg";
import patientslikeme from "@/assets/img/companies/plm.svg";

// personal photos for extra curriculars
import profile_photo from "@/assets/img/me/jonRaxa_edited.jpg";
import introverted_intellect_profile from "@/assets/img/me/logo_with_me_v3.jpg";
import introverted_intellect_logo from "@/assets/img/logo.png";
import personal_logo from "@/assets/img/creative.jpg";
import sftoastbusters_logo from "@/assets/img/TB_LOGOTransparent.png";

// portfolio photos
import videdu from "@/assets/img/projects/videdu.jpg";
import photoworld from "@/assets/img/projects/photoworld.jpg";
import sfpark from "@/assets/img/projects/sfpark.jpg";
import pending from "@/assets/img/projects/pending.jpg";
import script from "@/assets/img/projects/script.jpg";
import mywebsitev2 from "@/assets/img/projects/mywebsitev2.jpg";
import rentals from "@/assets/img/projects/rentals.jpg";
import _4uimg from "@/assets/img/projects/fouruimg.jpg";
import sftoastbusters from "@/assets/img/projects/sftoastbusters.jpg";
import googlescript from "@/assets/img/projects/googlescript.jpg";
import templatecreator from "@/assets/img/projects/templatecreator.jpg";
import promodrawer from "@/assets/img/projects/promodrawer.jpg";

export const IMAGES = {
  profile_photo: profile_photo,
  introverted_intellect_profile: introverted_intellect_profile,
  introverted_intellect_logo: introverted_intellect_logo,
  videdu: videdu,
  photoworld: photoworld,
  sfpark: sfpark,
  pending: pending,
  script: script,
  mywebsitev2: mywebsitev2,
  rentals: rentals,
  sftoastbusters: sftoastbusters,
  googlescript: googlescript,
  promodrawer: promodrawer,
  gapinc: gapinc,
  lqdigital: lqdigital,
  sfsu: sfsu,
  personal_logo: personal_logo,
  sftoastbusters_logo: sftoastbusters_logo,
  datarobot_logo: datarobot,
  patientslikeme_logo: patientslikeme,
};

// links
export const INTROVERTED_INTELLECT = {
  blog: "https://www.introvertedintellect.com/",
  itunes: "https://itunes.apple.com/us/podcast/introverted-intellect/",
  googleplay:
    "https://play.google.com/music/m/Ilnnraw74lyasmqzpwlarz7g74y?t=Introverted_Intellect",
  stitcher: "https://www.stitcher.com/s?fid=226748&refid=stpr",
};
export const SF_TOASTBUSTERS = {
  website: "sftoastbusters.com",
  videoawared:
    "https://d4tm.org/index.php/district-awards/public-relations-award-recipients.html",
};

export const PERSONAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/jonathanraxa",
  facebook: "https://www.facebook.com/jraxa",
  github: "https://github.com/jonathanraxa",
  twitter: "https://twitter.com/jonathanraxa",
  devto: "https://dev.to/jonraxa",
  wordpress: "http://introvertedintellect.com/",
  medium: "https://medium.com/@jonathanraxa",
};

// portfolio objects
export const VIDEDU = {
  title: "VidEdu",
  description: "YouTube play/pause note-taking interaction.",
  website_title: "www.videdu.org",
  website_link: "http://www.videdu.org",
  source_code_title: "VidEdu Source Code",
  source_code_link:
    "https://docs.google.com/document/d/16lotARoZ2KsIzn06sAM0vDntKwQaTTYQFjGzJO3iamU/edit?usp=sharing",
  documentation_title: "VidEdu Documentation",
  documentation_link:
    "https://docs.google.com/document/d/16lotARoZ2KsIzn06sAM0vDntKwQaTTYQFjGzJO3iamU/edit?usp=sharing",
  contribution:
    "Project/Team Lead. Main Application Designer. Front-end. Back-end.",
  languages: ["Ruby", "Ruby on Rails", "JavaScript/JQuery", "HTML/CSS"],
  date: "Sep 2015 - Present",
  extra_resource: "https://player.vimeo.com/video/193198836",
  location: "SFSU",
  extra_resource_TF: true,
  image: videdu,
};

export const TEMPLATE_CREATOR = {
  title: "SFCC Template Creator",
  description: "html/css generator for sfcc template code",
  website_title: "SFCC Template Creator (hosted on github pages)",
  website_link: "https://jonathanraxa.github.io/template_creator/",
  source_code_title: "Template Creator Source Code",
  source_code_link: "https://github.com/jonathanraxa/template_creator",
  documentation_title: "",
  documentation_link: "",
  contribution: "Everything",
  languages: ["REACT JS", "JavaScript/JQuery (ES6/Babel)", "HTML/CSS"],
  date: "May 2019 - June 2019",
  extra_resource: "",
  location: "Gap Inc. | San Francisco, CA",
  extra_resource_TF: false,
  image: templatecreator,
};

export const _4UIMG = {
  title: "4UImg",
  description:
    "4UImg provides CII and its Artists an online storefront for reaching customers more efficiently  and expanding business.",
  website_title: "www.sfsuswe.com/s16g04/",
  website_link:
    "www.sfsuswe.com/s16g04/ (Unfortunately the server is down so the website is NOT live)",
  source_code_title: "4Uimg Source Code",
  source_code_link:
    "https://github.com/jonathanraxa/4Uimg/blob/master/index.php",
  documentation_title: "4Uimg Documentation",
  documentation_link:
    "https://docs.google.com/document/d/1wR2uDwZn4haisS-8htjyZCgW5mHDu0cFbI5LwKrgKYg/edit",
  contribution: "Tech-Lead. Designed and in charge of most Front-end UI",
  languages: ["PHP", "MySQL", "JavaScript/JQuery", "HTML/CSS"],
  date: "Feb 2016 – May 2016",
  extra_resource: "",
  location: "SFSU",
  extra_resource_TF: false,
  image: _4uimg,
};

export const PHOTOWORLD = {
  title: "PhotoWorld",
  description:
    "Google maps photo search application.User looks for a public photo using Flickr API and pins drop respective to photo geo - location.",
  website_title: "www.photoglobe.space",
  website_link: "http://photoglobe.space/",
  source_code_title: "PhotoWorld Source Code",
  source_code_link: "https://github.com/jonathanraxa/PhotoWorld",
  documentation_title: "PhotoGlobe Documentation",
  documentation_link: "https://github.com/jonathanraxa/PhotoWorld",
  contribution: "Tech-Lead. Designed and developed entire application",
  languages: [
    "JavaScript/JQuery",
    "HTML/CSS",
    "Google Maps API",
    "Flicker API",
  ],
  date: "Feb 2015 – Apr 2015",
  extra_resource: "",
  location: "SFSU",
  extra_resource_TF: false,
  image: photoworld,
};

export const SFPARK = {
  title: "SF Park",
  description:
    "ParkSF is an Android based application for mobile devices that allows users to interact with parking locations throughout San Francisco.",
  website_title: "",
  website_link: "",
  source_code_title: "Park SF Source Code",
  source_code_link: "https://github.com/jonathanraxa/SFPark",
  documentation_title: "PhotoGlobe Documentation",
  documentation_link:
    "https://docs.google.com/document/d/108y4XNghaYLmeczUfabqUDDPKtlEsnXY6cR1FMpN914/edit?usp=sharing",
  contribution: "Front-end application developer",
  languages: ["Android", "Java", "Google Maps API", "Park API"],
  date: "Sep 2014 – Dec 2014",
  extra_resource: "",
  location: "SFSU",
  extra_resource_TF: false,
  image: sfpark,
};

export const RUBYSCRIPT = {
  title: "LQ Digital Ruby Script",
  description:
    "Three Ruby scripts used for specfic HTML pages to find and replace certain values pertained only to the website.",
  website_title: "",
  website_link: "",
  source_code_title: "LQ Digital Ruby Script Source Code",
  source_code_link: "https://github.com/jonathanraxa/DirectoryTextReplacer",
  documentation_title: "",
  documentation_link: "",
  contribution: "All",
  languages: ["Ruby"],
  date: "Mar 2016",
  extra_resource: "",
  location: "LQ Digial",
  extra_resource_TF: false,
  image: script,
};

export const PERSONALWEBSITE = {
  title: "Personal React-based Website",
  description: "ReactJS based website hosted on github pages.",
  website_title: "Jonathan Raxa's Website",
  website_link: "https://jonathanraxa.github.io/jonathan-raxa/",
  source_code_title: "Personal React-based Website Source Code",
  source_code_link: "https://github.com/jonathanraxa/jonathan-raxa",
  documentation_title: "",
  documentation_link: "",
  contribution: "All",
  languages: ["ReactJS", "JavaScript", "HTML/CSS"],
  date: "May 2019",
  extra_resource: "",
  location: "San Francisco, CA",
  extra_resource_TF: false,
  image: mywebsitev2,
};

export const GOOGLESCRIPT = {
  title: "Promotional Templates",
  description: "Using Google Scripts to create HTML templates",
  website_title: "Gap Inc. Europe",
  website_link: "www.gap.eu",
  source_code_title: "",
  source_code_link: "",
  documentation_title: "",
  documentation_link: "",
  contribution: "All",
  languages: ["Google Scripts", "HTML/CSS"],
  date: "Feb 2019",
  extra_resource: "",
  location: "Gap Inc. | San Francisco, CA",
  extra_resource_TF: false,
  image: googlescript,
};

export const RENTALS = {
  title: "SF Rent Calculator",
  description: "Rent calculator based on API data",
  website_title: "",
  website_link: "",
  source_code_title: "Rentals Calculator",
  source_code_link: "https://github.com/jonathanraxa/RentalsRecruitment",
  documentation_title: "",
  documentation_link: "",
  contribution: "All",
  languages: ["JavaScript/JQuery", "HTML/CSS", "NodeJS"],
  date: "Sep 2016",
  extra_resource: "",
  location: "San Francisco, CA",
  extra_resource_TF: false,
  image: rentals,
};

export const PROMODRAWER = {
  title: "SFCC Promo Drawer",
  description: "React JS based web application for promo drawer generatinon",
  website_title: "SFCC Promo Drawer [heroku app]",
  website_link: "http://sfccpromodrawer.herokuapp.com",
  source_code_title: "Promo Drawer",
  source_code_link: "https://github.com/jonathanraxa/promodrawer",
  documentation_title: "",
  documentation_link: "",
  contribution: "All",
  languages: ["React JS", "JavaScript/JQuery", "HTML/CSS"],
  date: "Aug 2019",
  extra_resource: "",
  location: "San Francisco, CA | Gap Inc.",
  extra_resource_TF: false,
  image: promodrawer,
};
