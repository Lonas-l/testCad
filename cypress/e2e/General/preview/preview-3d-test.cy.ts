describe('3D preview load designs', () => {

    it('test 3D preview', () => {
        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/5fHtHXntDzFoC5edWxHYOWKUs6PlqfxuiumKB0C3`)
        cy.isPreviewOpened();
    })
    it('test 3D preview', () => {
        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/pxX48hxJOmlR74idBR1IoUTSCNKezPtQmsLEvVYH`)
        cy.isPreviewOpened();
    })
    it('test 3D preview', () => {
        cy.toSharedDesign(`${Cypress.env('FRONT_URL')}/#/share/z69sI7Z1jSxyQr54Y6h1U7XAVmuM9YpZvKEPkcDq`)
        cy.isPreviewOpened();
    })
})