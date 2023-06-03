import {openSettings} from "../../../support/commands";

describe('TR #199763 | Bug | Job | Settings | Summary', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('In Comments to machinist and thickness column, displayed correct value', () => {
        cy.openFile('../e2e/v_1.22/settings/designs/TR199763/Settings_Thickness_Comments_Columns.emsx');
        cy.openSettings();
        cy.get(':nth-child(3) > .settingTab').click();

        cy.get('tbody > :nth-child(8) > :nth-child(2)').should('have.text', '0.000"');
        cy.get(':nth-child(11) > :nth-child(2)').should('have.text', '6')
    })
})
