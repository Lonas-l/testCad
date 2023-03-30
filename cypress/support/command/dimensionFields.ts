export function checkDimensionInTheField(field: string, dimension: string) : void {
    cy.get(field).invoke('val').then(text => {
        const res = text.toString().includes(dimension);
        expect(res).to.be.true;
    });
}