const CrawlE = require("crawl-e");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Kulturverein Ebensee",
      address: "Schulgasse 6, 4802 Ebensee",
      website: "https://www.kino-ebensee.at/",
      phone: "0676 / 88 794 505",
    },
  ],
  showtimes: {
    url: "https://www.kino-ebensee.at/kinoprogramm.html",
    movies: {
      box: ".eventWrap",
      title: ".eventHeader",
      // showtimes: {
      //   box: ".col2",
      //   datetimeFormat: "'EEE, dd.MM.yy HH:mm 'Uhr'",
      //   dateLocale: "de",
      // },
    },
  },
});

crawlE.crawl();
