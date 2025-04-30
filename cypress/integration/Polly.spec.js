describe("Polly dashboard", () => {
    it("should select Sales", () => {
        cy.intercept("GET", "/api/sales/", {
            statusCode: 200,
            body: [
                {
                    timestamp: "2020-06-17T06:44:02.676475",
                    amount: 1902,
                },
                {
                    timestamp: "2020-06-17T06:45:30.983656",
                    amount: 893,
                },
            ],
        }).as("getSales");

        cy.visit("/");
        cy.get("select").select("Sales");
        cy.wait("@getSales");
    });

    it("should select Subscriptions", () => {
        cy.intercept("GET", "/api/subscriptions/", {
            statusCode: 200,
            body: [
                {
                    timestamp: "2020-06-17T06:44:02.676475",
                    amount: 4,
                },
                {
                    timestamp: "2020-06-17T06:45:30.983656",
                    amount: 2,
                },
                {
                    timestamp: "2020-06-18T06:45:30.983656",
                    amount: 4,
                },
            ],
        }).as("getSubscriptions");
    
        cy.visit("/");
        cy.get("select").select("Subscriptions");
        cy.wait("@getSubscriptions");
    });
});