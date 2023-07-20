describe('Check projection for some revolve designs', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('FRONT_URL')}`);
    })

    it('case 1 just line elements', () => {
        cy.openFile('./projection/revolve/case1.emsx');
        cy.checkProjectionFromAllView([
            "24.8355630.48000-36.12444-30.48000",
            "58.42000100.75333-58.420000.0000058.42000100.753330.000000.000000.00000100.75333-58.420000.00000",
            "58.42000100.75333-58.420000.0000058.42000100.753330.000000.000000.00000100.75333-58.420000.00000",
            "52.77556100.75333-64.064440.00000-5.64444100.75333-64.064440.00000",
            "52.77556100.75333-64.064440.00000-5.64444100.75333-64.064440.0000052.77556100.75333-5.644440.00000",
            "52.7755658.42000-64.06444-58.4200024.8355630.48000-36.12444-30.48000"
        ])

    })

    it('case 2 just line elements', () => {
        cy.openFile('./projection/revolve/case2.emsx');
        cy.checkProjectionFromAllView([
            "24.8355630.48000-36.12444-30.4800052.7755658.42000-64.06444-58.4200011.5655617.21000-22.85444-17.21000",
            "81.2593775.49444-81.25937-25.2588981.2593775.494440.00000-25.258890.0000075.49444-81.25937-25.25889",
            "81.2593775.49444-81.25937-25.2588981.2593775.494440.00000-25.258890.0000075.49444-81.25937-25.25889",
            "75.6149275.49444-86.90381-25.25889-5.6444475.49444-86.90381-25.25889",
            "75.6149275.49444-86.90381-25.25889-5.6444475.49444-86.90381-25.2588975.6149275.49444-5.64444-25.25889",
            "75.6149281.25937-86.90381-81.2593724.8355630.48000-36.12444-30.4800052.7755658.42000-64.06444-58.4200011.5655617.21000-22.85444-17.21000"
        ])
    })

    it('case 3 line + arc', () => {
        cy.openFile('./projection/revolve/case3.emsx');
        cy.checkProjectionFromAllView([
            "14.4096514.63799-14.86632-14.6379910.2237410.45208-10.68041-10.45208",
            "40.6286141.28820-40.62861-3.1330840.6286141.288200.00000-3.133080.0000041.28820-40.62861-3.13308",
            "40.6286141.28820-40.62861-3.1330840.6286141.288200.00000-3.133080.0000041.28820-40.62861-3.13308",
            "40.4002741.28820-40.85694-3.13308-0.2283341.28820-40.85694-3.13308",
            "40.4002741.28820-40.85694-3.13308-0.2283341.28820-40.85694-3.1330840.4002741.28820-0.22833-3.13308",
            "40.4002740.62861-40.85694-40.6286114.4096514.63799-14.86632-14.6379910.2237410.45208-10.68041-10.45208"
        ])
    })
})