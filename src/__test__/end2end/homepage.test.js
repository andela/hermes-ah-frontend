module.exports = {
  'Title is Authors Haven': browser => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 5000)
      .verify.title('Authors Haven')
      .end();
  },
};
