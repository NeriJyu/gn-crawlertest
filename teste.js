const CrawlE = require("crawl-e");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Daskino",
      address: "Die Kassa öffnet an diesem Tag",
      website: "https://www.daskino.at/",
      phone: "+43 662 87 31 00 15",
    },
  ],
  showtimes: {
    url: "https://www.daskino.at/programm",
    movies: {
      box: ".movie-list-item",
      title: "header > h3 > a",
      showtimes: {
        box: ".movieTimes",
        date: ".day",
        dateFormat: "dd, D. MMMM",
        dateLocale: "de",
        time: {
          selector: ".datetime",
          mapper: (value) => value.replace("Ticket", "").split(" ")[0].trim(),
        },
        auditorium: {
          selector: ".datetime",
          mapper: (value) => value.replace("Ticket", "").split(" ")[1].trim(),
        },
        attributes: ".datetime .specials a span",
        booking_link: ".datetime a @href",
      },
    },
  },
});

crawlE.crawl();
