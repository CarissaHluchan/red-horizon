describe('allMarsMedia spec.', () => {
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

  bit('should see a header', () => {
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
  });

  it('should perform a hover and show a title of a surface feature', () => {
    // cy.wait('@allMarsMedia')
    // cy.wait('@deimos')
    // cy.wait('@phobos')
    // cy.wait('@polar-Ice-Caps')
    // cy.wait('@rovers')
    // cy.wait('olympus-Mons')
    // cy.wait('ascraeus-Mons')
    // cy.wait('pavonis-Mons')
    // cy.wait('arsia-Mons')
    // cy.wait('valles-Marineris')
    // cy.wait('argyre-Planitia')
    // cy.wait('candor-Chasma')
    // cy.wait('ares-Vallis')

    cy.get('.mars-title-wrapper').realHover()
      .get('.hover-text-mars-title').contains('See all the images of Mars')
      .get('.mars-title-wrapper').realClick()
      .get('.favorites-button').should('exist')
      .get('.media-gallery').should('exist')
      .get('.media-gallery').children().should('have.length', 6)

      .get("body").realHover({ position: "topLeft" })

      .get('.media-gallery > :nth-child(1)').should('exist')
      .get(':nth-child(1) > .photo-title').contains('Mars Rover Studies Soil on Mars')
      .get(':nth-child(1) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(1) > .favorites-radio-button-parent > p').contains('Add to favorites')
      .get(':nth-child(1) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(2)').should('exist')
      .get(':nth-child(2) > .photo-title').contains('Mars in Color')
      .get(':nth-child(2) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(2) > .favorites-radio-button-parent > p').contains('Add to favorites')
      .get(':nth-child(2) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(3)').should('exist')
      .get(':nth-child(3) > .photo-title').contains('Pathfinder on Mars')
      .get(':nth-child(3) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(3) > .favorites-radio-button-parent > p').contains('Add to favorites')
      .get(':nth-child(3) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(4)').should('exist')
      .get(':nth-child(4) > .photo-title').contains('Dynamic Mars')
      .get(':nth-child(4) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(4) > .favorites-radio-button-parent > p').contains('Add to favorites')
      .get(':nth-child(4) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(5)').should('exist')
      .get(':nth-child(5) > .photo-title').contains('Mars Polar Lander and Mars Pathfinder Sites Compared')
      .get(':nth-child(5) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(5) > .favorites-radio-button-parent > p').contains('Add to favorites')
      .get(':nth-child(5) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.media-gallery > :nth-child(6)').should('exist')
      .get(':nth-child(6) > .photo-title').contains('Turning on Mars')
      .get(':nth-child(6) > a > .single-thumbnail').should('be.visible')
      .get(':nth-child(6) > .favorites-radio-button-parent > p').contains('Add to favorites')
      .get(':nth-child(6) > .favorites-radio-button-parent > .radio-button').should('exist')

      .get('.hover-text-ice-cap').should('not.be.visible')
      .get('.ice-cap-wrapper').realHover()
      .get('.hover-text-ice-cap').should('be.visible')
      .get('.ice-cap-wrapper').realClick()
      .get('.favorites-button').should('exist')
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