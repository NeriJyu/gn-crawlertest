const CrawlE = require("crawl-e");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Kino Freistadt",
      address: "Salzgasse 25, 4240 Freistadt",
      website: "https://www.kino-freistadt.at/",
      phone: "+43 7942 777 11",
    },
  ],
  showtimes: {
    url: "https://www.kino-freistadt.at/?site=program&date=27-03-2023",
    urlDateFormat: "DD-MM-YYYY",
    movies: {
      box: ".dailyProgramMovieBox",
      title: ".dailyProgramContent",
      showtimes: {
        box: ".dailyProgramTime",
        dateFormat: "HH:mm",
        dateLocale: "de",
      },
    },
    // showtimes: {
    //   box: "#content",
    //   date: "h2",
    //   dateFormat: "dddd, DD. MMMM",
    //   dateLocale: "de",
    //   // time: {
    //   //   selector: ".dailyProgramMovieBox > .dailyProgramTime",
    //   // },
    // },
  },
});

crawlE.crawl();
