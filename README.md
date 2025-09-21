# 🚀 Cypress API Testing Project  

This project demonstrates automated API testing using **Cypress** and **Mochawesome Reporter** for reporting.  
All APIs are from [Automation Exercise API](https://automationexercise.com/api_list).  

---

## 📌 Features  
- ✅ Automated API testing with **Cypress 13.17.0**  
- ✅ HTML & JSON reports with **cypress-mochawesome-reporter**  
- ✅ Custom test titles with emojis (✅ for pass, 🐞 for fail)  
- ✅ Random test data generation (emails & passwords)  
- ✅ Screenshots captured automatically on failure  

---

## 🛠️ Installation  

```bash
# Clone repo
git clone <your-repo-url>
cd testapis

# Install dependencies
npm install
```

---

## 📂 Project Structure  

```
testapis/
│── cypress/
│   ├── e2e/
│   │   ├── APIs/
│   │   │   ├── login.js
│   │   │   ├── register.js
│   │   │   └── products.js
│   │   └── utils/
│   │       └── generateFunctions.js
│   ├── reports/         # Mochawesome reports
│   ├── screenshots/     # Failure screenshots
│   └── support/
│       └── commands.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## ⚙️ Cypress Configuration  

**cypress.config.js**  

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    reportPageTitle:'APIs ❤️‍🔥',
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    baseUrl: "https://automationexercise.com/api",
    specPattern: "cypress/e2e/APIs/*.js",
    screenshotsFolder: "cypress/screenshots",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
```

---

## 🔑 Example Test  

**`e2e/APIs/login.js`**  

```js
describe('Login API', () => {
  it('Login with valid credentials', () => {
    cy.request({
      method: "POST",
      url: "/verifyLogin",
      form: true,
      body: {
        email: "testfizo2025@gmail.com",
        password: "123456789"
      },
      failOnStatusCode: false
    }).then((response) => {
      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body.message).to.eq("User exists!");
    });
  });
});
```

---

## 🖥️ Running Tests  

### Open Cypress UI  
```bash
npm run cy:open
```

### Run in Headless Mode (Chrome)  
```bash
npm run cy:run
```
<img width="740" height="245" alt="Screenshot from 2025-09-21 21-14-56" src="https://github.com/user-attachments/assets/fda4b468-9c81-418b-963b-643008bc11d5" />
<img width="740" height="245" alt="Screenshot from 2025-09-21 21-15-18" src="https://github.com/user-attachments/assets/00cc4cc8-61a3-4254-a422-ef1595dea242" />
<img width="740" height="245" alt="Screenshot from 2025-09-21 21-15-37" src="https://github.com/user-attachments/assets/017d6c89-5ca3-4a7d-b89f-98638342c67e" />
<img width="733" height="224" alt="image" src="https://github.com/user-attachments/assets/5cb4d8bf-5c09-471c-995f-c245b41563ad" />

---

## 📊 Reports  

After running `npx cypress run` or `npm run cy:run`, Mochawesome generates a detailed HTML report:  

- Reports saved in: `cypress/reports`  
- Screenshots saved in: `cypress/screenshots`  
- Failing tests show screenshots directly inside the report.  

<img width="1269" height="462" alt="image" src="https://github.com/user-attachments/assets/3b2a712f-8408-4aa7-803a-52ca49455b73" />

---

## 🎨 Custom Test Titles  

In `cypress/support/commands.js`:  

```js
afterEach(function () {
  const state = this.currentTest.state;
  const currentTestTitle = this.currentTest.title;

  if (state === 'passed') {
    this.currentTest.title = `${currentTestTitle} ✅`;
  } else if (state === 'failed') {
    this.currentTest.title = `${currentTestTitle} 🐞`;
  }
});
```

---

## 🔧 Utilities  

**`e2e/utils/generateFunctions.js`**  

```js
function generateEmail() {
  const letters = Math.random().toString(36).substring(2, 5);
  const numbers = Math.floor(10 + Math.random() * 90);
  return `fizo${letters}${numbers}@gmail.com`;
}

function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let pass = '';
  for (let i = 0; i < 10; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

module.exports = { generateEmail, generatePassword };
```

---

## 📌 APIs Covered  

- **Products**: GET, POST  
- **Brands**: GET, PUT  
- **Search Product**: POST (with/without params)  
- **Login**: POST (valid, invalid, missing params), DELETE  
- **User Account**: Create (POST), Update (PUT), Delete (DELETE), Get by email (GET)  
<img width="1177" height="592" alt="Screenshot from 2025-09-21 19-03-32" src="https://github.com/user-attachments/assets/6be6907d-0b00-4daf-aadd-7f34b6cc5251" />

---

## 👩‍💻 Author  

**Salhi Fayza 🩷**  
