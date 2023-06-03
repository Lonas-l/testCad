
describe('My Designs Tab Test', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
        cy.login();
    })

    it('Design is copied', () => {
        let designCount = 0;
        cy.get('.Designs').find('.item').then(item => {
            designCount = item.length;
        });
        cy.get('[data-testid="design-0-copy"] > .MuiIconButton-label').click();

        cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse');
        cy.get('[data-testid="confirmation-ok"]').click();
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click();
        cy.wait('@getDesignsResponse')

        cy.get('.Designs').find('.item').then(item => {
            expect(designCount  + 1).eq(item.length);
        })
    })

    it('Design is removed', () => {
        let designCount = 0;
        cy.get('.Designs').find('.item').then(item => {
            designCount = item.length;
        });
        cy.get('[data-testid="design-0-remove"] > .MuiIconButton-label').click();

        cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse');
        cy.get('[data-testid="confirmation-ok"]').click();
        cy.wait('@getDesignsResponse')

        cy.get('.Designs').find('.item').then(item => {
            expect(designCount  + -1).eq(item.length);
        })
    })

    it('Design is saved', () => {
        let designCount = 0;
        cy.get('.Designs').find('.item').then(item => {
            designCount = item.length;
        });
        cy.canvasDrawing('toolbar-Rectangle', [{x: 100, y: 100}, {x: 200, y: 200}]);
        cy.saveDesign();
        cy.get('.Designs').find('.item').then(item => {
            expect(designCount + 1).eq(item.length);
        })
    })

    it('Rename design modal is opened and we can change name\n', () => {
        cy.canvasDrawing('toolbar-Rectangle', [{x: 100, y: 100}, {x: 200, y: 200}]);
        cy.saveDesign();
        cy.get('.Designs').find('.item').then(item => {
            cy.get(`[data-testid="design-${item.length-1}-file-name"]`).click();
        });
        cy.get('[data-testid="save-file-input"]').clear().type('New file name');
        cy.get('[data-testid="save-file-ok"]').click();

        cy.get('.Designs').find('.item').then(item => {
            cy.get(`[data-testid="design-${item.length-1}-file-name"]`).should('have.text', 'New file name');
        })
    })

    it('Search button is appears and working', () => {
        cy.get('[data-tetstid="search-search-tooltip"] > .MuiButtonBase-root').click();

        cy.get('.MuiInputBase-input').focus().type(Math.random().toString());

        cy.get('.Designs').find('.item').then(item => {
            expect(item.length).eq(1);
        })
    })

    it('Updating list with designs sending request without errors ', () => {
       let designCount = 0;
        cy.get('.Designs').find('.item').then(item => {
            designCount = item.length;
        });
        cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse');
        cy.get('[data-tetstid="designs-update"]').click();
        cy.wait('@getDesignsResponse');

        cy.get('.Designs').find('.item').then(item => {
            expect(item.length).eq(designCount);
        })
    })

    it('Open File button → opened file ', () => {
        let randomNumber = Math.random();
        cy.get(`[data-testid="design-0-file-name"]`).click();

        cy.get('[data-testid="save-file-input"]').clear().type(randomNumber.toString());

        cy.intercept('GET', `${Cypress.env('BACK_URL')}/api/user-designs`).as('getDesignsResponse');
        cy.get('[data-testid="save-file-ok"]').click();
        cy.wait('@getDesignsResponse');

        cy.get('.Designs').find('.item').then(item => {
            console.log('item == ', item.length);
            cy.get(`[data-testid="design-${item.length - 1}-open"]`).click();
        });
        cy.get('[data-testid="bot-panel-file-name"]').should('have.text', randomNumber);
    })

})
