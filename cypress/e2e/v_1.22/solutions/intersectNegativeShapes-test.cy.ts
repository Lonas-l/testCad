describe('2368 Bug | Auto Correct Solution IntersectNegativeShapes', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Rectangle that crosses Rectangle with Bot View', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/2368/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/2368/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('TR #201325 | Bug | 3D preview IntersectNegativeShapes', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('A rectangle that touches a rectangle', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case1.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case1_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case1.emsx');
    })

    it('Rectangle that touches Rectangle case 2', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case2.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case2_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case2.emsx');
    })
})

describe('TR #199781 | Bug | 3D Preview IntersectNegativeShapes', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR199781/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR199781/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('2217 | Bug | Auto Correct Solution IntersectNegativeShapes', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR199781/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR199781/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('2237 | Bug | Incorrect Auto Correct IntersectNegativeShapes', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/2237/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/2237/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('TR #201128 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case1.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case1_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case1.emsx');
    })

    it('Intersection of rectangles', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case2.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case2_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case2.emsx');
    })
})

describe('TR #200901 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR200901/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR200901/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('TR #201277 | Patch | Auto Correct', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Main case', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/solutions/designs/TR201277/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/solutions/designs/TR201277/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})