 describe('2340 Bug | Workspace | Projection', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Test displayed projection', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/2340/Projection.emsx')
        cy.checkProjection('3.8898313.729832.1101711.9501712.0000016.590000.000001.590003.8898313.729832.1101711.9501712.0000016.590000.000001.59000');
    })
})


describe('TR #193512 | BCAD | Revolve', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test displayed mirror line when Revolve is used', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR193512/Revolve_Projection.emsx');
         cy.changeView('.leftData > :nth-child(5)')
         cy.checkProjection('140.1750522.6759694.82313-22.67596140.17505147.19528117.49909-32.66900');
     })
 })

describe('TR #200491 | Bug | Workspace | Projection Line', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test projection on top view from right', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200491/Projection_From_Right.emsx');
         cy.checkProjection('-42.181558.25500-49.84280-27.30500-4.44500-20.32000-19.68500-25.40000');
     })
 })

describe('TR #200491 | Bug | Workspace | Projection Line', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

    it('Test projection on top view from front and bot view', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/TR201408/Projection_From_Bot_Front_View.emsx');
        cy.checkProjection('59.2253521.5900049.2253511.5900059.2253521.5900049.2253511.59000-3.5399728.35532-13.5399718.3553264.2253531.59009-15.7746523.3553215.6563421.5900010.6563416.5900059.2253510.65634-13.539976.2881659.225350.00000-13.53997-5.0000059.225350.00000-13.53997-5.0000010.656340.000006.28816-5.00000-3.5399728.35532-13.5399718.3553264.2253531.59009-15.7746523.35532');
    })

    it('Test projection on top view from front and bot view', () => {
        cy.openFile('../e2e/v_1.22/projection/designs/TR201408/Projection_From_All_View.emsx');
        cy.checkProjection('25.400005.080000.000000.0000025.400005.080000.000000.0000025.400005.080000.000000.000000.000005.08000-25.400000.0000050.800005.0800025.400000.0000025.400005.080000.000000.0000050.800005.0800025.400000.000000.000005.08000-25.400000.000000.000005.08000-25.400000.0000050.800005.0800025.400000.000000.000005.08000-25.400000.0000050.800005.0800025.400000.00000');
    })
 })

 describe('TR #200657 | Bug | Workspace | Projection', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Test projection on top view', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200657/Projection_All_View.emsx');
         cy.checkProjection('25.5000025.50000-25.50000-25.5000023.5000023.50000-23.50000-23.5000022.5000022.50000-22.50000-22.5000017.5000017.50000-17.50000-17.5000014.4225214.42252-14.42252-14.4225225.5000025.50000-25.50000-25.5000018.0857918.08579-18.08579-18.08579-12.000004.00000-25.50000-4.0000025.500004.0000012.00000-4.0000025.00500-5.00000-25.00500-25.5000025.0050025.50000-25.005005.00000');
     })

     it('Test projection on right view', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200657/Projection_All_View.emsx');
         cy.changeView('.leftData > :nth-child(3)')
         cy.checkProjection('27.5000027.50000-27.50000-27.5000027.5000032.000000.00000-14.0000027.5000032.000000.00000-14.00000-12.000004.00000-25.50000-4.0000025.500004.0000012.00000-4.0000025.00500-5.00000-25.00500-25.5000025.0050025.50000-25.005005.00000');
     })

     it('Test projection on front view', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR200657/Projection_All_View.emsx');
         cy.changeView('.leftData > :nth-child(5)')
         cy.checkProjection('27.5000027.50000-27.50000-27.5000027.5000032.000000.00000-14.00000-12.000004.00000-25.50000-4.0000025.500004.0000012.00000-4.0000025.00500-5.00000-25.00500-25.5000025.0050025.50000-25.005005.00000');
     })
 })

 describe('TR #201428 | Bug | Projection | Side wall and Round near edge', () => {
     beforeEach(() => {
         cy.visit(`${Cypress.env('FRONT_URL')}`);
     })

     it('Negative projection with a near edge (Round) and side wall (not 90 degrees) on Right and Left views do not display right view', () => {
         cy.openFile('../e2e/v_1.22/projection/designs/TR201428/Projection_Side_Wall_Round_Near_Edge.emsx');
         cy.changeView('.leftData > :nth-child(3)');
         cy.checkProjection('-42.1900236.45629-146.40072-13.90390-89.2953716.27620-99.295376.27620');
     })
 })