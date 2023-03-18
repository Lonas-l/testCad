describe('TR #200614 | Bug | 3D Preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Arc with arc case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case1.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case1_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect_Case1.emsx');
    })

    it('Arc in rectangle case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case2.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case2_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect_Case2.emsx');
    })

    it('Rectangle with rectangle case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case3.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case3_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect_Case3.emsx');
    })

    it('An arc that touches the arc and the rectangle ', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case4.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200614/IntersectMainShape_AutoCorrect_Case4_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect_Case4.emsx');
    })
})

describe('2337 Bug | 3D preview', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/2337/IntersectMainShape_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/2337/IntersectMainShape_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect.emsx');
    })
})

describe('TR #200254 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200254/IntersectMainShape_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200254/IntersectMainShape_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect.emsx');
    })
})

describe('TR #200890 | Bug | Expert Notice', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200890/IntersectMainShape_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200890/IntersectMainShape_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectMainShape_AutoCorrect.emsx');
    })
})