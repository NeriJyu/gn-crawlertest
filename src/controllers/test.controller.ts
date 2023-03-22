class TestController {
  findTest(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve("test");
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default TestController;
