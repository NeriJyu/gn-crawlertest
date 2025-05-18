const CrawlE = require("crawl-e");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Filmfabrik",
      address: "Königstraße 93, 90402 Nürnberg",
      website: "https://kommkino.de/",
      phone: "+49 911 14887015",
    },
  ],
  showtimes: {
    url: "https://kommkino.de/spielzeiten",
    movies: {
      box: ".ic-content",
      title: "h2",
      showtimes: {
        box: ".nextdate",
        date: ".ic-single-next",
        dateFormat: "dddd, DD. MMMM YYYY",
        dateLocale: "de",
        time: {
          selector: ".ic-single-starttime",
        },
      },
    },
  },
});

crawlE.crawl();
