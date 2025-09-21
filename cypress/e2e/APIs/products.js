describe("Products & Brands APIs", () => {
  it("GET All Products List", () => {
    cy.request({
      method: "GET",
      url: "/productsList",
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body).to.have.property("products");
      expect(body.products).to.be.an("array");
    });
  });

  it("POST To All Products List - Not Supported", () => {
    cy.request({
      method: "POST",
      url: "/productsList",
      failOnStatusCode: false,
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(405);
      expect(body.message).to.eq("This request method is not supported.");
    });
  });

  it("GET All Brands List", () => {
    cy.request({
      method: "GET",
      url: "/brandsList",
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body).to.have.property("brands");
      expect(body.brands).to.be.an("array");
    });
  });

  it("PUT To All Brands List - Not Supported", () => {
    cy.request({
      method: "PUT",
      url: "/brandsList",
      failOnStatusCode: false,
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(405);
      expect(body.message).to.eq("This request method is not supported.");
    });
  });

  it("POST To Search Product (valid search)", () => {
    cy.request({
      method: "POST",
      url: "/searchProduct",
      form: true,
      body: { search_product: "tshirt" },
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(200);
      expect(body).to.have.property("products");
      expect(body.products).to.be.an("array");
    });
  });

  it("POST To Search Product without parameter", () => {
    cy.request({
      method: "POST",
      url: "/searchProduct",
      form: true,
      failOnStatusCode: false,
    }).then((response) => {
      const body =
        typeof response.body === "string" ? JSON.parse(response.body) : response.body;

      expect(response.status).to.eq(200);
      expect(body.responseCode).to.eq(400);
      expect(body.message).to.eq(
        "Bad request, search_product parameter is missing in POST request."
      );
    });
  });
});
