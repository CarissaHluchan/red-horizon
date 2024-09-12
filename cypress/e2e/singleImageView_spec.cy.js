describe('User will be able to select an image and view its details in a single image view', () => {
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

  it('should go into the all mars view, select an item, and view item', () => {
    cy.get('.mars-title-wrapper').realHover().realClick()
    .get('.media-gallery > :nth-child(1) > a > img').realClick()
    .get('.single-media-title').contains('Mars Rover Studies Soil on Mars')
    .get('.radio-button-label').contains('Add to favorites')
    .get('.favorite-radio-button').should('exist')
    .get('.see-favorites').should('exist')
    .get('.single-media-main-image').should('be.visible')
    .get('.single-media-date-label').contains('Date Created:')
    .get('.single-media-date').contains('2004-11-30T21:29:24Z')
    .get('.single-media-description-label').contains('Description:')
    .get('.single-media-description').contains('Mars Rover Studies Soil on Mars')
    .get('.single-media-back-button').should('exist')
    .get('.single-media-back-button').realClick()

    .get('.media-gallery > :nth-child(2) > a > img').realClick()
    .get('.single-media-title').contains('Mars in Color')
    .get('.radio-button-label').contains('Add to favorites')
    .get('.favorite-radio-button').should('exist')
    .get('.see-favorites').should('exist')
    .get('.single-media-main-image').should('be.visible')
    .get('.single-media-date-label').contains('Date Created:')
    .get('.single-media-date').contains('2003-10-08T21:49:42Z')
    .get('.single-media-description-label').contains('Description:')
    .get('.single-media-description').contains('Mars in Color')
    .get('.single-media-back-button').should('exist')
    .get('.single-media-back-button').realClick()

    .get('.media-gallery > :nth-child(3) > a > img').realClick()
    .get('.single-media-title').contains('Pathfinder on Mars')
    .get('.radio-button-label').contains('Add to favorites')
    .get('.favorite-radio-button').should('exist')
    .get('.see-favorites').should('exist')
    .get('.single-media-main-image').should('be.visible')
    .get('.single-media-date-label').contains('Date Created:')
    .get('.single-media-date').contains('1997-12-12T11:34:30Z')
    .get('.single-media-description-label').contains('Description:')
    .get('.single-media-description').contains('Pathfinder on Mars')
    .get('.single-media-back-button').should('exist')
    .get('.single-media-back-button').realClick()

    .get('.media-gallery > :nth-child(4) > a > img').realClick()
    .get('.single-media-title').contains('Dynamic Mars')
    .get('.radio-button-label').contains('Add to favorites')
    .get('.favorite-radio-button').should('exist')
    .get('.see-favorites').should('exist')
    .get('.single-media-main-image').should('be.visible')
    .get('.single-media-date-label').contains('Date Created:')
    .get('.single-media-date').contains('2004-01-02T23:09:48Z')
    .get('.single-media-description-label').contains('Description:')
    .get('.single-media-description').contains('Dynamic Mars')
    .get('.single-media-back-button').should('exist')
    .get('.single-media-back-button').realClick()

    .get('.media-gallery > :nth-child(5) > a > img').realClick()
    .get('.single-media-title').contains('Mars Polar Lander and Mars Pathfinder Sites Compared')
    .get('.radio-button-label').contains('Add to favorites')
    .get('.favorite-radio-button').should('exist')
    .get('.see-favorites').should('exist')
    .get('.single-media-main-image').should('be.visible')
    .get('.single-media-date-label').contains('Date Created:')
    .get('.single-media-date').contains('1999-08-25T16:00:09Z')
    .get('.single-media-description-label').contains('Description:')
    .get('.single-media-description').contains('Mars Polar Lander and Mars Pathfinder Sites Compared')
    .get('.single-media-back-button').should('exist')
    .get('.single-media-back-button').realClick()

    .get('.media-gallery > :nth-child(6) > a > img').realClick()
    .get('.single-media-title').contains('Turning on Mars')
    .get('.radio-button-label').contains('Add to favorites')
    .get('.favorite-radio-button').should('exist')
    .get('.see-favorites').should('exist')
    .get('.single-media-main-image').should('be.visible')
    .get('.single-media-date-label').contains('Date Created:')
    .get('.single-media-date').contains('2004-01-13T18:16:11Z')
    .get('.single-media-description-label').contains('Description:')
    .get('.single-media-description').contains('Turning on Mars')
    .get('.single-media-back-button').should('exist')
    .get('.single-media-back-button').realClick()
  })
})