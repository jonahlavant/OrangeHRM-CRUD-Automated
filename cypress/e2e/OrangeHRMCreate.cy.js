describe("OrangeHRM CRUD Test", () => {
  /* ==== Login ==== */
  it("Creates a User", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(8) > .oxd-main-menu-item > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
    cy.wait(5000);
    cy.get(":nth-child(5) > .oxd-main-menu-item").click();
    // ==== Create User ====
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("johndoe@example.com");
    cy.get(
      ".oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("1234567890");
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("John");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("Doe");
    //Vacancy Dropdown Btn
    cy.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div/div/div[2]/i"
    ).click();
    //Select Senior QA Lead
    cy.contains(/Senior QA Lead/i).click();
    /* ==== Assert User Saved ==== */
    cy.get(".oxd-button--secondary").click();
    cy.get(".oxd-text--toast-message").should(
      "have.text",
      "Successfully Saved"
    );
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text"
    ).should("have.text", "John  Doe");
    //Assert User Create
    cy.get(".--visited > .oxd-topbar-body-nav-tab-item").click();
    cy.get(
      ".oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3) > div"
    ).should("have.text", "John  Doe");
  });
  /* ==== Read User Data ==== */
  it("Reads User Data", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //Login
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.xpath(
      "/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"
    ).click();
    //Click Recruitment Tab
    cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").click();
    //Enter Candidate Name
    cy.get(".oxd-autocomplete-text-input > input").type("John Doe");
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    //Trigger Nmae Search
    cy.get(".oxd-autocomplete-text-input > input").clear("John Do");
    cy.get(".oxd-autocomplete-text-input > input").type("John D");
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-autocomplete-text-input > input").clear("John ");
    cy.get(".oxd-autocomplete-text-input > input").type("John").wait(4000);
    cy.get(".oxd-autocomplete-option > span").eq(0).click();
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon"
    ).click();
    //Assert User Data
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text"
    ).should("have.text", "John  Doe");
    cy.get(".oxd-select-text-input").should("have.text", "Senior QA Lead");
    cy.get(
      ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).should("have.value", "johndoe@example.com");
  });

  /* ==== Update User ==== */
  it("Update User Data", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(8) > .oxd-main-menu-item > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
    cy.wait(5000);
    cy.get(":nth-child(5) > .oxd-main-menu-item").click();
    //Search User
    //Trigger Nmae Search
    cy.get(".oxd-autocomplete-text-input > input").clear("John Do");
    cy.get(".oxd-autocomplete-text-input > input").type("John D");
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-autocomplete-text-input > input").clear("John ");
    cy.get(".oxd-autocomplete-text-input > input").type("John").wait(4000);
    cy.get(".oxd-autocomplete-option > span").eq(0).click();
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon"
    ).click();
    //Make Changes to User Data
    cy.xpath(
      "/html/body/div/div[1]/div[2]/div[2]/div[2]/div/div/div/label/span"
    ).click();
    cy.get(".oxd-switch-wrapper > label > input").check();
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").clear("Do");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("Smith{enter}");
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text"
    ).should("have.text", "John  Smith");
    cy.xpath("/html/body/div/div[1]/div[1]/header/div[2]/nav/ul/li[1]").click();
    //Search for Updated User
    cy.get(".oxd-autocomplete-text-input > input").clear("John Smith");
    cy.get(".oxd-autocomplete-text-input > input").type("Smith");
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-autocomplete-text-input > input").clear("Smith ");
    cy.get(".oxd-autocomplete-text-input > input").type("Smith").wait(4000);
    cy.get(".oxd-autocomplete-option > span").eq(0).click();
    cy.xpath(
      "/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[4]/button[2]"
    ).click();
    //Assert User Data from Candidate List
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(3) > div").should(
      "have.text",
      "John  Smith"
    );
  });

  /* ==== Delete User ==== */
  it("Delete User Data", function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //Login
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.xpath(
      "/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"
    ).click();
    //Click Recruitment Tab
    cy.get(":nth-child(5) > .oxd-main-menu-item > .oxd-text").click();
    //Search for Updated User
    cy.get(".oxd-autocomplete-text-input > input").clear("John Smith");
    cy.get(".oxd-autocomplete-text-input > input").type("Smith");
    cy.get(
      ":nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.get(".oxd-autocomplete-text-input > input").clear("Smith ");
    cy.get(".oxd-autocomplete-text-input > input").type("Smith").wait(4000);
    cy.get(".oxd-autocomplete-option > span").eq(0).click();
    cy.xpath(
      "/html/body/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[4]/button[2]"
    ).click();
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(3) > div").should(
      "have.text",
      "John  Smith"
    );
    cy.get(
      ".oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
    ).click();
    cy.get(
      ".oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > input"
    ).check();
    cy.get(".orangehrm-horizontal-padding > div > .oxd-button").click();
    //User Delete Assertion
    cy.get(".orangehrm-modal-header > .oxd-text").should(
      "have.text",
      "Are you Sure?"
    );
    cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click();
    cy.get(".orangehrm-horizontal-padding > .oxd-text").should(
      "have.text",
      "No Records Found"
    );
  });
});
