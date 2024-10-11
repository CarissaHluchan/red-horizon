describe('User should be able to save items and view them all at once', () => {
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

  it('should be able to favorite images from the favorites media gallery view', () => {
    cy.get('.mars-title-wrapper').realHover().realClick()
    .get(':nth-child(1) > .favorites-radio-button-parent > .radio-button').realClick()
    .get(':nth-child(2) > .favorites-radio-button-parent > .radio-button').realClick()
    .get(':nth-child(3) > .favorites-radio-button-parent > .radio-button').realClick()
    .get('.see-favorites-button').realClick()
    
    .get('.favorites-title').should('exist')
    .get('.favorites-media-gallery > :nth-child(1)').should('exist')
    .get(':nth-child(1) > .favorites-media-item-title').contains('Mars Rover Studies Soil on Mars')
    .get(':nth-child(1) > a > .favorites-single-thumbnail').should('be.visible')
    .get(':nth-child(1) > .favorites-media-item-date > .favorites-date-taken-label').contains('DATE TAKEN:')
    .get(':nth-child(1) > .favorites-media-item-date > .favorites-date-taken').should('contain', 'Tuesday, November 30 2004')

    .get('.favorites-media-gallery > :nth-child(2)').should('exist')
    .get(':nth-child(2) > .favorites-media-item-title').contains('Mars in Color')
    .get(':nth-child(2) > a > .favorites-single-thumbnail').should('be.visible')
    .get(':nth-child(2) > .favorites-media-item-date > .favorites-date-taken-label').contains('DATE TAKEN:')
    .get(':nth-child(2) > .favorites-media-item-date > .favorites-date-taken').should('contain','Wednesday, October 8 2003')

    .get('.favorites-media-gallery > :nth-child(3)').should('exist')
    .get(':nth-child(3) > .favorites-media-item-title').contains('Pathfinder on Mars')
    .get(':nth-child(3) > a > .favorites-single-thumbnail').should('be.visible')
    .get(':nth-child(3) > .favorites-media-item-date > .favorites-date-taken-label').contains('DATE TAKEN:')
    .get(':nth-child(3) > .favorites-media-item-date > .favorites-date-taken').should('contain','Friday, December 12 1997')
  })

  it('should be able to favorite images from the single item view', () => {
    cy.get('.mars-title-wrapper').realHover().realClick()
    .get("body").realHover({ position: "topLeft" })
    
    .get(':nth-child(4) > a > .single-thumbnail').realClick()
    .get('.favorite-radio-button').realClick()
    .get('.single-media-back-button').realClick()
    
    .get(':nth-child(5) > a > .single-thumbnail').realClick()
    .get('.favorite-radio-button').realClick()
    .get('.single-media-back-button').realClick()
    
    .get(':nth-child(6) > a > .single-thumbnail').realClick()
    .get('.favorite-radio-button').realClick()
    .get('.single-media-back-button').realClick()
    
    .get('.see-favorites-button').realClick()
    .get('.favorites-title').should('exist')

    .get('.favorites-media-gallery > :nth-child(1)').should('exist')
    .get(':nth-child(1) > .favorites-media-item-title').contains('Dynamic Mars')
    .get(':nth-child(1) > a > .favorites-single-thumbnail').should('be.visible')
    .get(':nth-child(1) > .favorites-media-item-date > .favorites-date-taken-label').contains('DATE TAKEN:')
    .get(':nth-child(1) > .favorites-media-item-date > .favorites-date-taken').should('contain', 'Friday, January 2 2004')

    .get('.favorites-media-gallery > :nth-child(2)').should('exist')
    .get(':nth-child(2) > .favorites-media-item-title').contains('Mars Polar Lander and Mars Pathfinder Sites Compared')
    .get(':nth-child(2) > a > .favorites-single-thumbnail').should('be.visible')
    .get(':nth-child(2) > .favorites-media-item-date > .favorites-date-taken-label').contains('DATE TAKEN:')
    .get(':nth-child(2) > .favorites-media-item-date > .favorites-date-taken').should('contain', 'Wednesday, August 25 1999')

    .get('.favorites-media-gallery > :nth-child(3)').should('exist')
    .get(':nth-child(3) > .favorites-media-item-title').contains('Turning on Mars')
    .get(':nth-child(3) > a > .favorites-single-thumbnail').should('be.visible')
    .get(':nth-child(3) > .favorites-media-item-date > .favorites-date-taken-label').contains('DATE TAKEN:')
    .get(':nth-child(3) > .favorites-media-item-date > .favorites-date-taken').should('contain', 'Tuesday, January 13 2004')
  })
})