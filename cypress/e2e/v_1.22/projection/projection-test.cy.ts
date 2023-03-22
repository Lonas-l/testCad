 describe('2340 Bug | Workspace | Projection', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test displayed projection', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/2340/Projection.emsx')
        cy.getProjection('3.8898313.729832.1101711.9501712.0000016.590000.000001.590003.8898313.729832.1101711.9501712.0000016.590000.000001.59000');
    })
})


describe('TR #193512 | BCAD | Revolve', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test displayed mirror line when Revolve is used', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR193512/Revolve_Projection.emsx');
         cy.goToView('.leftData > :nth-child(5)')
         cy.getProjection('140.1750522.6759694.82313-22.67596140.17505147.19528117.49909-32.66900');
     })
 })

describe('TR #200491 | Bug | Workspace | Projection Line', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test projection on top view from right', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200491/Projection_From_Right.emsx');
         cy.getProjection('-42.181558.25500-49.84280-27.30500-4.44500-20.32000-19.68500-25.40000');
     })
 })

describe('TR #200491 | Bug | Workspace | Projection Line', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

    it('Test projection on top view from front and bot view', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/TR201408/Projection_From_Bot_Front_View.emsx');
        cy.getProjection('59.2253521.5900049.2253511.5900059.2253521.5900049.2253511.59000-3.5399728.35532-13.5399718.3553264.2253531.59009-15.7746523.3553215.6563421.5900010.6563416.5900059.2253510.65634-13.539976.2881659.225350.00000-13.53997-5.0000059.225350.00000-13.53997-5.0000010.656340.000006.28816-5.00000-3.5399728.35532-13.5399718.3553264.2253531.59009-15.7746523.35532');
    })

    it('Test projection on top view from front and bot view', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/TR201408/Projection_From_All_View.emsx');
        cy.getProjection('25.400005.080000.000000.0000025.400005.080000.000000.0000025.400005.080000.000000.000000.000005.08000-25.400000.0000050.800005.0800025.400000.0000025.400005.080000.000000.0000050.800005.0800025.400000.000000.000005.08000-25.400000.000000.000005.08000-25.400000.0000050.800005.0800025.400000.000000.000005.08000-25.400000.0000050.800005.0800025.400000.00000');
    })
 })