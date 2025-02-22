describe.only('scrollTop', () => {
  it('test 1', () => {
    cy.mount(() => (
      <>
        <div style="height: 100vh">xx</div>
        <div data-cy style="height: 100px">
          <div data-cy="content">xx</div>
        </div>
        <div data-cy="placeholder" style="height: 100vh">
          xx
        </div>
      </>
    ))
    cy.get('[data-cy="placeholder"]')
      .scrollIntoView()
      .then(() => {
        cy.document().should((document) => {
          expect(document.documentElement.scrollTop).to.eq(608)
        })
      })
  })
  it('test 2', () => {
    cy.mount(() => (
      <>
        <div style="height: 100vh">xx</div>
        <div data-cy>
          <div style="height: 100px">xx</div>
          <div data-cy="content">xx</div>
        </div>
        <div style="height: 100vh">xx</div>
      </>
    ))
    cy.document().then((e) => {
      console.log('🚀 ~ cy.document ~ e2:', e.documentElement.scrollTop)
    })
  })
})