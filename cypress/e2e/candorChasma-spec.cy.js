describe('candorChasma spec.', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=mars&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('allMarsMedia')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=deimos&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('deimos')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=phobos&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('phobos')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=polar-Ice-Caps&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('polar-Ice-Caps')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=rovers&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('rovers')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=olympus-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('olympus-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=ascraeus-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('ascraeus-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=pavonis-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('pavonis-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=arsia-Mons&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('arsia-Mons')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=valles-Marineris&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('valles-Marineris')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=argyre-Planitia&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('argyre-Planitia')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=candor-Chasma&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('candor-Chasma')

    cy.intercept('GET', 'https://images-api.nasa.gov/search?q=ares-Vallis&media_type=image&year_start=1920&year_end=2024&page_size=1000',
      {
        stausCode: 200,
        fixture: 'dynamicMarsData',
      }).as('ares-Vallis')

    cy.visit('http://localhost:5173/red-horizon/')
  });

  it('should perform a hover and show a title of the Cander Chasma feature', () => {
    cy.get('.candor-chasma-wrapper').realHover()
      .get('.hover-text-candor-chasma').contains('Candor Chasma')
      .get('.candor-chasma-wrapper').realClick()
      .get('.see-favorites-button').should('exist')
      .get('.media-gallery').should('exist')
      .get('.media-gallery').children().should('have.length', 6)

      .get("body").realHover({ position: "topLeft" })

      .get('.media-gallery > :nth-child(1)').should('exist')
      .get(':nth-child(1) > .photo-title').contains('Mars Rover Studies Soil on Mars')
      .get(':nth-child(1) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(1) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(1) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(2)').should('exist')
      .get(':nth-child(2) > .photo-title').contains('Mars in Color')
      .get(':nth-child(2) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(2) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(2) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(3)').should('exist')
      .get(':nth-child(3) > .photo-title').contains('Pathfinder on Mars')
      .get(':nth-child(3) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(3) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(3) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(4)').should('exist')
      .get(':nth-child(4) > .photo-title').contains('Dynamic Mars')
      .get(':nth-child(4) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(4) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(4) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(5)').should('exist')
      .get(':nth-child(5) > .photo-title').contains('Mars Polar Lander and Mars Pathfinder Sites Compared')
      .get(':nth-child(5) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(5) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(5) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(6)').should('exist')
      .get(':nth-child(6) > .photo-title').contains('Turning on Mars')
      .get(':nth-child(6) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(6) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(6) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.hover-text-ice-cap').should('not.be.visible')
      .get('.ice-cap-wrapper').realHover()
      .get('.hover-text-ice-cap').should('be.visible')
      .get('.ice-cap-wrapper').realClick()
      .get('.see-favorites-button').should('exist')
      .get('.media-gallery').should('exist')
      .get('.media-gallery').children().should('have.length', 6)

      .get("body").realHover({ position: "topLeft" })

      .get('.media-gallery > :nth-child(1)').should('exist')
      .get(':nth-child(1) > .photo-title').contains('Mars Rover Studies Soil on Mars')
      .get(':nth-child(1) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(1) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(1) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(2)').should('exist')
      .get(':nth-child(2) > .photo-title').contains('Mars in Color')
      .get(':nth-child(2) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(2) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(2) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(3)').should('exist')
      .get(':nth-child(3) > .photo-title').contains('Pathfinder on Mars')
      .get(':nth-child(3) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(3) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(3) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(4)').should('exist')
      .get(':nth-child(4) > .photo-title').contains('Dynamic Mars')
      .get(':nth-child(4) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(4) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(4) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(5)').should('exist')
      .get(':nth-child(5) > .photo-title').contains('Mars Polar Lander and Mars Pathfinder Sites Compared')
      .get(':nth-child(5) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(5) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(5) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(6)').should('exist')
      .get(':nth-child(6) > .photo-title').contains('Turning on Mars')
      .get(':nth-child(6) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(6) > .favorites-radio-button-parent > label').contains('Add to favorites')
      .get(':nth-child(6) > .favorites-radio-button-parent > .radio-button').should('exist')
  });
});