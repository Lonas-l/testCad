describe('TR #201841 | BCAD | File Open ', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

     it('Need fix - shows internal error for different .emsx files like attached', () => {
         cy.openFile('../e2e/v_1.24/app/designs/TR201841/TR201841_Incorrect_Import_Case1.emsx');
         cy.selectAll();
         cy.get('[data-testid="bot-panel-lines-count"]').should('have.text', '16 lines selected');
     })
 })

describe('3420 | Critical Error | Select Auto ', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('After trying to change line type via select-auto, i get an error', () => {
        cy.openFile('../e2e/v_1.24/app/designs/3420/3420_Select_Auto.emsx');
        cy.selectAll();
        cy.get('.selectInput').click();
        cy.get('[data-testid="select-Comment-to-Self"]').click();
        cy.get('[data-testid="select-Solid"]').should('exist');
    })
})

describe('TR #196942 Critical error | Workspace | Zero size circle and line', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('When setting the circle size to zero, info window appears', () => {
        cy.openFile('./SimpleCircle.emsx');
        cy.selectAll();
        cy.changeDiameter('0');
        cy.get('body').type('{enter}');
        cy.get('[data-testid="info-message"]').should('have.text', 'Value should be bigger than zero');
    })

    it('When setting the line size to zero, info window appears', () => {
        cy.openFile('./Simple_Line.emsx');
        cy.selectAll();
        cy.changeLength('0');
        cy.get('body').type('{enter}');
        cy.get('[data-testid="info-message"]').should('have.text', 'Value should be bigger than zero');
    })
})

describe('TR #202134 | Bug | Select', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('first select is closed, second is opened', () => {
        cy.openFile('./SimpleThread.emsx');
        cy.selectAll();
        cy.get(':nth-child(2) > .selectContainer > .selectInput').click();
        cy.get('.selectDropdown').should('be.visible');
    })
})

describe('TR #200889 | Bug | Suggestion Button', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('At a screen resolution of less than 1024 pixels, the button disappears, even if its display is enabled in the settings', () => {
        cy.get('[data-testid="suggestions-button"]').should('be.visible');
    })
})

describe('TR #202230 | Bug | Hotkeys', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('FRONT_URL'));
        cy.deleteDownloadsFolder();
    })

    it('Some hotkeys does not work when we opened new designs from my design tab', () => {
        cy.login();
        cy.get('[data-testid="design-0-open"]').click();
        cy.get('body').type('{e}');
        cy.get('[data-testid="toolbar-Eraser"]').should('have.class', 'active');
        cy.get('body').type('{t}');
        cy.get('[data-testid="toolbar-Text"]').should('have.class', 'active');
        cy.get('body').type('{c}');
        cy.get('[data-testid="info-message"]').should('be.visible');
    })
})
