const { generateEmail, generatePassword } = require("../utils/generateFunctions");

describe("User Account APIs", () => {
  let email;
  let password;

  before(() => {
    email = generateEmail();
    password = generatePassword();
  });

  it("POST To Create/Register User Account", () => {
    cy.request({
      method: "POST",
      url: "/createAccount",
      form: true,
      body: {
        name: "Test User",
        email,
        password,
        title: "Mr",
        birth_date: "1",
        birth_month: "January",
        birth_year: "1990",
        firstname: "Test",
        lastname: "User",
        company: "Company Inc",
        address1: "123 Main St",
        address2: "Suite 100",
        country: "USA",
        zipcode: "12345",
        state: "State",
        city: "City",
        mobile_number: "1234567890",
      },
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(201);
      expect(body.message).to.eq("User created!");
    });
  });

  it("PUT To Update User Account", () => {
    cy.request({
      method: "PUT",
      url: "/updateAccount",
      form: true,
      body: {
        name: "Updated User",
        email,
        password,
        title: "Mr",
        birth_date: "15",
        birth_month: "February",
        birth_year: "1995",
        firstname: "Updated",
        lastname: "User",
        company: "Updated Company",
        address1: "456 Main St",
        address2: "Suite 200",
        country: "Canada",
        zipcode: "54321",
        state: "NewState",
        city: "NewCity",
        mobile_number: "9876543210",
      },
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body.message).to.eq("User updated!");
    });
  });

  it("GET user account detail by email", () => {
    cy.request({
      method: "GET",
      url: "/getUserDetailByEmail",
      qs: { email },
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body).to.have.property("user");
      expect(body.user.email).to.eq(email);
    });
  });

  it("DELETE To Delete User Account", () => {
    cy.request({
      method: "DELETE",
      url: "/deleteAccount",
      form: true,
      body: { email, password },
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body.message).to.eq("Account deleted!");
    });
  });
});
