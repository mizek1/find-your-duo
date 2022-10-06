/// <reference types="cypress" />

describe('find-your-duo', () => {
  const selectorGame = 'button[data-cy="select-game"]';

  beforeEach(function () {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('.text-6xl').contains('Encontre seu');
  });

  it('Publicar um anúncio', () => {
    cy.get('.py-3').contains('Publicar anúncio').click();
    cy.get('h2[id="radix-:r4:"]').contains('Publique um anúncio');
    //cy.get(selectorGame).click()
    cy.get('#name').click().type('Kleber de Andrade');
    cy.get('#yearsPlaying').click().type('2');
    cy.get('button[title="Domingo"]').click();
    cy.get('button[title="Segunda"]').click();
    cy.get('button[title="Terça"]').click();
    cy.get('button[title="Quarta"]').click();
    cy.get('button[title="Quinta"]').click();
    cy.get('button[title="Sexta"]').click();
    cy.get('button[title="Sábado"]').click();
    cy.get('#hourStart').click().type('18:00');
    cy.get('#hourEnd').click().type('22:00');
    cy.get('button[role="checkbox"]').click();
    cy.get('button[type="submit"]').click();
  });
});
