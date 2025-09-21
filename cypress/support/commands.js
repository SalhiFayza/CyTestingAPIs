afterEach(function () {
    const state = this.currentTest.state;
    const currentTestTitle = this.currentTest.title;
  
    if (state === 'passed') {
      // Add "✅" to passed tests
      this.currentTest.title = `${currentTestTitle} ✅`;
    } else if (state === 'failed') {
      // Add "🐞" to failed tests
      this.currentTest.title = `${currentTestTitle} 🐞`;
    }
  });

