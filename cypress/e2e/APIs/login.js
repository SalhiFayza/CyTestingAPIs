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

  it('Login without Email', () => {
    cy.request({
      method: "POST",
      url: "/verifyLogin",
      form: true,
      body: {
        password: "123456789"
      },
      failOnStatusCode: false
    }).then((response) => {
      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(400);
      expect(body.message).to.eq("Bad request, email or password parameter is missing in POST request.");
    });
  });


  it('DELETE To Verify Login', () => {
    cy.request({
      method: "DELETE",
      url: "/verifyLogin",
      form: true,
      failOnStatusCode: false
    }).then((response) => {
      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;
      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(405);
      expect(body.message).to.eq("This request method is not supported.");
    });
  });

  it('Login with invalid details', () => {
    cy.request({
      method: 'POST',
      url: '/verifyLogin',
      failOnStatusCode: false,
      body: {
        email: 'testxde@gmail.com',
        password: '123456789'
      },
    }).then((response) => {
      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;
      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(400);
      expect(body.message).to.eq("Bad request, email or password parameter is missing in POST request.");
    });
  });
  it('Login without password', () => {
    cy.request({
      method: 'POST',
      url: '/verifyLogin',
      failOnStatusCode: false,
      body: { email: 'testfizo2025@example.com' },
    }).then((response) => {
      const body = typeof response.body === "string"
        ? JSON.parse(response.body)
        : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(400);
      expect(body.message).to.eq("Bad request, email or password parameter is missing in POST request.");
    });
  });
});
