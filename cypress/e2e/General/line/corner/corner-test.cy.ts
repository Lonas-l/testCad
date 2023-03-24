describe('Corner Round', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.openFile('SimpleRectangle.emsx');
    })

    it('test corner round positive', () => {
        cy.deleteDownloadsFolder();
        cy.cornerPositiveValue('round');
    })

    it('test negative corner value ', () => {
        cy.cornerNegativeValue('-1');
    });

    it('test zero value ', () => {
        cy.cornerNegativeValue('0');
    });

    it('test saving value when pressed Ok ', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.cornerConfirmValue();
    });

    it('test cancel value when pressed cancel ', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.cornerCancelValue();
    });

    it('test symbol input ', () => {
        cy.cornerSymbolValue();
    });

    it('test working math operator ', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.cornerMath('2+2', '4.000');
        cy.cornerMath('10 / 2', '5.000');
        cy.cornerMath('10 * 10', '100.000');
        cy.cornerMath('30-10', '20.000');
    });

})

describe('Corner Chamfer', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.openFile('SimpleRectangle.emsx');
    })

    it('test chamfer round positive', () => {
        cy.deleteDownloadsFolder();
        cy.cornerPositiveValue('chamfer');
    })

    it('test negative corner value ', () => {
        cy.cornerNegativeValue('-1');
    });

    it('test zero value ', () => {
        cy.cornerNegativeValue('0');
    });

    it('test saving value when pressed Ok ', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.get('.MuiTypography-root').contains('Chamfer').click();
        cy.cornerConfirmValue();
    });

    it('test cancel value when pressed cancel ', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.get('.MuiTypography-root').contains('Chamfer').click();
        cy.cornerCancelValue();
    });

    it('test symbol input ', () => {
        cy.cornerSymbolValue();
    });

    it('test working math operator ', () => {
        cy.selectAll();
        cy.get('.sprite-CornerTool').click();
        cy.get('.MuiTypography-root').contains('Chamfer').click();
        cy.cornerMath('2+2', '4.000');
        cy.cornerMath('10 / 2', '5.000');
        cy.cornerMath('10 * 10', '100.000');
        cy.cornerMath('30-10', '20.000');
    });
})