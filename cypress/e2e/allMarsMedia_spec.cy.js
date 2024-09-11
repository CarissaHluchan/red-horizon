describe('allMarsMedia spec.', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=mars&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('allMarsMedia')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=deimos&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('deimos')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=phobos&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('phobos')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=polar-Ice-Caps&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('polar-Ice-Caps')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=rovers&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('rovers')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=olympus-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('olympus-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=ascraeus-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('ascraeus-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=pavonis-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('pavonis-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=arsia-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('arsia-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=valles-Marineris&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('valles-Marineris')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=argyre-Planitia&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('argyre-Planitia')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=candor-Chasma&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('candor-Chasma')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=ares-Vallis&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'allMarsData',
      }).as('ares-Vallis')

    cy.visit('http://localhost:5173/red-horizon/')
  });

  it('should see a header', () => {
    cy.get('h1').contains('Red Horizon')
    .get('.title-question').contains('Do you want to see more about the Red Planet?')
    .get('.title-directions').contains('Click around and discover NASA\'s images of Mars')
    .get('.title-directions-2').contains('Scroll down to explore the Horizon')
    .get('.mars-title').contains('Mars')
    .get('.main-mars-image').should('have.attr', 'src', '/src/assets/MARS-Viking.jpg')
    .get('.clickalbe-rover').should('have.attr', 'src', '/src/assets/Rover.png')
    .get('.gui-target-mars-title').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-ice-cap').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-rover').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-olympus-mons').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-ascraeus-mons').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-pavonis-mons').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-arsia-mons').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-valles-marineris').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-argyre-planitia').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-candor-chasma').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.gui-target-ares-vallis').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.phobos-title').contains('Phobos')
    .get('.gui-target-phobos').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.clickable-phobos-moon').should('have.attr', 'src', '/src/assets/Phobos.jpg')
    .get('.deimos-title').contains('Deimos')
    .get('.gui-target-deimos').should('have.attr', 'src', '/src/assets/GUI-Target.png')
    .get('.clickable-deimos-moon').should('have.attr', 'src', '/src/assets/Deimos.jpg')
    .get('h4').contains('We are so sorry, there been a 404 error! Please try again later.')
  })
})

//Click around and discover NASA's images of Mars
//Scroll down to explore the Horizon