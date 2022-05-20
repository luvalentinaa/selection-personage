const personages = document.querySelectorAll('.chosen-personage')

personages.forEach(personage => {
  personage.addEventListener('mouseenter', () => {

    const idSelected = personage.attributes.id.value

    if(idSelected === 'homer') return

    const personageSelect = document.querySelector('.selecionado')
    personageSelect.classList.remove('selecionado')

    personage.classList.add('selecionado')


    const imagePlayer1  = document.getElementById('image-player-1')
    imagePlayer1.src = `./src/imagens/${idSelected}-grande.png`

    const nameSelected = personage.getAttribute('data-name')

    const namePersonage = document.getElementById('name-personage-1')
    namePersonage.innerHTML = `${nameSelected}`


  })
})

