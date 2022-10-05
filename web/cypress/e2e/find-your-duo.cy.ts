/// <reference types="cypress" />

describe('find-your-duo', () => {

  beforeEach(function(){
    cy.visit('http://127.0.0.1:5173/')
    cy.get('.text-6xl').contains('Encontre seu')
    
  })

  it('Publicar um anúncio', () => {

    

    cy.get('.py-3')
    .contains('Publicar anúncio')
    .click()
    cy.get('h2[id="radix-:r4:"]').contains('Publique um anúncio')
    cy.get('button[data-cy="select-game"]').click()
    
    
  })
})