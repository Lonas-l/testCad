 describe('2340 Bug | Workspace | Projection', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test displayed projection', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/2340/projection.emsx')
        cy.getProjection('3.8898313.729832.1101711.9501712.0000016.590000.000001.590003.8898313.729832.1101711.9501712.0000016.590000.000001.59000');
    })
})


describe('TR #193512 | BCAD | Revolve', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test displayed mirror line when Revolve is used', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR193512/RevolveProjection.emsx');
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