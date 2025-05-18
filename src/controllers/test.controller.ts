const CrawlE = require("crawl-e");

class TestController {
  findTest(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("test");

        let crawLi = new CrawlE({
          cinemas: [
            {
              name: "Kino Gmunden",
              address: "Theatergasse 7, 4810 Gmunden",
              website: "http://www.kino-gmunden.at/",
              phone: "0676 / 88 794 505",
            },
          ],
        });
        console.log("aqui");

        crawLi.crawl();

        resolve("tesst");
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default TestController;
