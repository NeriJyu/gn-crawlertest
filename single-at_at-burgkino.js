const CrawlE = require("crawl-e");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Burg Kino",
      address: "Opernring 19, 1010 Wien",
      website: "https://www.burgkino.at/",
      phone: "+43 1 5878406",
    },
  ],
  showtimes: {
    url: "https://www.burgkino.at/showtimes/today",
    movies: {
      box: ".view-content > .views-row",
      title: "h2",
      // showtimes: {
      //   box: ".col-sm-8",
      //   date: ".view-content",
      //   dateLocale: "de",
      //   mapper: (value) => value.replace("Ticket", "").split(" ")[0].trim(),
      // },
      showtimes: {
        box: ".col-sm-8",
        date: "table",
        mapper: (value) => {
          return "teste";
          // value.match(/[A-Z][a-z]{2}, \d{2}\.\d{2}\.\d{4} \d{2}:\d{2}/);

          // return match ? match[0] : "";
        },
        datetimeFormat: "ddd, DD.MM.YYYY",
        dateLocale: "de",
      },
    },
  },
});

crawlE.crawl();
