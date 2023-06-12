 describe('2340 Bug | Workspace | Projection', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test displayed projection', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/2340/Projection.emsx');
        cy.checkProjection("36.250003.8898333.750002.1101736.2500012.0000033.750000.0000016.250003.8898313.750002.1101716.2500012.0000013.75000-0.00000");
    })
})


describe('TR #193512 | BCAD | Revolve', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test displayed mirror line when Revolve is used', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR193512/Revolve_Projection.emsx');
         cy.get('[data-testid="bot-panel-Front-view"]');
         cy.checkProjection("130.0805612.58147104.91762-12.58147");
     })
 })

describe('TR #200491 | Bug | Workspace | Projection Line', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test projection on top view from right', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200491/Projection_From_Right.emsx');
         cy.checkProjection("-42.181558.25500-49.84280-27.30500-42.18155-4.44500-44.76280-19.68500");
     })
 })

describe('TR #201408 | Bug | Workspace | Projection Line', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

    it('Test projection on top view from front and bot view', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/TR201408/Projection_From_Bot_Front_View.emsx');
        cy.checkProjection("59.2253525.6563449.2253515.6563459.22535-34.3436649.22535-44.34366-3.5399715.65634-13.5399710.6563464.22535-29.34366-15.77465-34.34366-15.7746515.65634-115.7746510.6563459.2253510.65634-13.539976.2881659.22535110.65634-13.5399710.6563459.225356.28816-13.53997-118.71184159.2253510.6563459.225356.28816-3.53997-29.34366-13.53997-34.34366");
    })

    it('Test projection on top view from all view', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/TR201408/Projection_From_All_View.emsx');
        cy.checkProjection("25.4000050.800000.0000025.4000025.400000.00000-0.00000-25.400000.0000025.40000-25.400000.000000.000000.00000-25.40000-25.400000.0000050.80000-25.4000025.4000050.8000025.4000025.400000.0000050.8000050.8000025.4000025.4000050.800000.0000025.40000-25.400000.0000076.20000-25.4000050.8000050.8000076.2000025.4000050.800000.00000-25.40000-25.40000-50.8000050.80000-25.4000025.40000-50.80000");
    })
 })

 describe('TR #200657 | Bug | Workspace | Projection', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test projection on all views', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200657/Projection_All_View.emsx');
         cy.checkProjectionFromAllView([
             "25.5000025.50000-25.50000-25.5000023.5000023.50000-23.50000-23.5000022.5000022.50000-22.50000-22.5000017.5000017.50000-17.50000-17.5000014.4225214.42252-14.42252-14.4225225.5000025.50000-25.50000-25.5000018.0857918.08579-18.08579-18.08579-12.000004.00000-25.50000-4.0000025.500004.0000012.00000-4.0000025.00500-5.00000-25.00500-25.5000025.0050025.50000-25.005005.00000",
             "27.5000032.00000-27.50000-14.0000027.5000032.000000.00000-14.000000.0000032.00000-27.50000-14.000004.00000-6.00000-4.00000-14.000004.00000-6.00000-4.00000-14.00000-5.00000-6.00000-25.50000-14.0000025.50000-6.000005.00000-14.00000",
             "27.5000032.00000-27.50000-14.0000027.5000032.000000.00000-14.000000.0000032.00000-27.50000-14.000004.00000-6.00000-4.00000-14.000004.00000-6.00000-4.00000-14.00000-5.00000-6.00000-25.50000-14.0000025.50000-6.000005.00000-14.00000",
             "27.5000032.00000-27.50000-14.000000.0000032.00000-27.50000-14.00000-12.00000-6.00000-25.50000-14.0000025.50000-6.0000012.00000-14.0000025.00500-6.00000-25.00500-14.0000025.00500-6.00000-25.00500-14.00000",
             "27.5000032.00000-27.50000-14.000000.0000032.00000-27.50000-14.0000027.5000032.000000.00000-14.00000-12.00000-6.00000-25.50000-14.0000025.50000-6.0000012.00000-14.0000025.00500-6.00000-25.00500-14.0000025.00500-6.00000-25.00500-14.00000",
             "27.5000027.50000-27.50000-27.5000025.5000025.50000-25.50000-25.5000023.5000023.50000-23.50000-23.5000022.5000022.50000-22.50000-22.5000017.5000017.50000-17.50000-17.5000014.4225214.42252-14.42252-14.4225225.5000025.50000-25.50000-25.5000018.0857918.08579-18.08579-18.08579"
         ])
     })
 })

 describe('TR #201428 | Bug | Projection | Side wall and Round near edge', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Negative projection with a near edge (Round) and side wall (not 90 degrees) on Right and Left views do not display right view', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR201428/Projection_Side_Wall_Round_Near_Edge.emsx');
         cy.changeView('bot-panel-Right-view');
         cy.checkProjection("36.4562920.00000-13.903900.0000021.6763520.000000.8762110.00000");
     })
 })