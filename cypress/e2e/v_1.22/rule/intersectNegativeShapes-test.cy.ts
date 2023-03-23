describe('2368 Bug | Auto Correct Solution IntersectNegativeShapes', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Rectangle that crosses Rectangle with Bot View', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/2368/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/2368/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
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
            '../e2e/v_1.22/rule/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case1.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case1_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case1.emsx');
    })

    it('Rectangle that touches Rectangle case 2', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case2.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR201325/IntersectNegativeShapes_AutoCorrect_Case2_Fixed.emsx',
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
            '../e2e/v_1.22/rule/designs/TR199781/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR199781/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
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
            '../e2e/v_1.22/rule/designs/TR199781/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR199781/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
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
            '../e2e/v_1.22/rule/designs/2237/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/2237/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('TR #201128 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Auto Correct is not working', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case1.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case1_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case1.emsx');
    })

    it('Intersection of rectangles', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case2.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR201128/IntersectNegativeShapes_AutoCorrect_Case2_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect_Case2.emsx');
    })
})

describe('TR #200901 | Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Strange auto correct solution', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/TR200901/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/TR200901/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('TR #201277 | Patch | Auto Correct', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('When trying to correct the design through auto correct, we will not come to something right', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/1723/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/1723/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('2528 Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Circle is diapered and only one rectangle is cropped', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/2528/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/2528/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})

describe('2640 Bug | Auto Correct Solution', () => {

    beforeEach(() => {
        cy.deleteDownloadsFolder();
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('Element is cut off', () => {
        cy.openFileAndUseSolution(':nth-child(3) > .MuiTypography-root > span',
            '../e2e/v_1.22/rule/designs/2640/IntersectNegativeShapes_AutoCorrect.emsx',
            'cypress/e2e/v_1.22/rule/designs/2640/IntersectNegativeShapes_AutoCorrect_Fixed.emsx',
            'cypress/downloads/IntersectNegativeShapes_AutoCorrect.emsx');
    })
})
