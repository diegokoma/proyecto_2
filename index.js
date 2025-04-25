//// DOM-header
const printHeader = () => {
  const header_part = document.createElement('header')
  header_part.classList.add('header')
  const header_first_box = document.createElement('div')
  header_first_box.classList.add('first_head')
  const logo_part = document.createElement('div')
  logo_part.classList.add('logo_part')
  const logo_img = document.createElement('img')
  logo_img.src = 'assets/JD_Sports_logo 1.png'
  logo_img.alt = 'Logo de JD'
  logo_part.appendChild(logo_img)
  const nav = document.createElement('nav')
  nav.classList.add('nav')
  const mens_section = document.createElement('p')
  mens_section.textContent = 'Hombre'
  const woman_section = document.createElement('p')
  woman_section.textContent = 'Mujer'
  const kids_section = document.createElement('p')
  kids_section.textContent = 'Niños'
  const offer_section = document.createElement('p')
  offer_section.textContent = 'Ofertas'
  nav.append(mens_section, woman_section, kids_section, offer_section)
  const hamburguer_menu_box = document.createElement('div')
  hamburguer_menu_box.classList.add('hamburguer_menu_box')
  const hamburguer_menu = document.createElement('img')
  hamburguer_menu.src = './assets/icon_burgerMenu_.png'
  hamburguer_menu.alt = 'Menu desplegable'
  hamburguer_menu_box.appendChild(hamburguer_menu)
  const login_part = document.createElement('div')
  login_part.classList.add('login_part')
  const user_box_part = document.createElement('div')
  const user_part = document.createElement('img')
  user_part.src = 'assets/icon _User avatar_.png'
  user_part.alt = 'Logo de inicio de sesión'
  user_box_part.appendChild(user_part)
  const cart_box_part = document.createElement('div')
  const cart_part = document.createElement('img')
  cart_part.src = 'assets/bag.png'
  cart_part.alt = 'Logo de carrito'
  cart_box_part.appendChild(cart_part)
  const filter_box_part = document.createElement('div')
  const filter_part = document.createElement('img')
  filter_part.src = 'assets/filter.png'
  filter_part.alt = 'Logo de filtro'
  filter_box_part.appendChild(filter_part)
  login_part.append(user_box_part, cart_box_part, filter_box_part)
  header_first_box.append(logo_part, nav, hamburguer_menu_box, login_part)
  const header_second_box = document.createElement('div')
  header_second_box.classList.add('second_head')
  const home_box_banner = document.createElement('div')
  home_box_banner.classList.add('home_box_banner')
  const home_banner = document.createElement('img')
  home_banner.src = 'assets/Cover.png'
  home_banner.alt = 'Banner home JD'
  home_box_banner.appendChild(home_banner)
  header_second_box.appendChild(home_box_banner)
  header_part.append(header_first_box, header_second_box)
  document.body.appendChild(header_part)
}
printHeader()
//// DOM-filtros
const printFilters = () => {
  const filter_part = document.createElement('div')
  filter_part.classList.add('filter_part')
  const box_filter_button = document.createElement('div')
  box_filter_button.classList.add('box_filter_button')
  const filter_button_img = document.createElement('img')
  filter_button_img.classList.add('filter_button_img')
  filter_button_img.src = 'assets/desliza.png'
  filter_button_img.alt = 'Botón de filtro'
  box_filter_button.appendChild(filter_button_img)
  const filter_box_inside = document.createElement('div')
  filter_box_inside.classList.add('filter_box_inside')
  filter_part.append(filter_box_inside, box_filter_button)
  document.body.appendChild(filter_part)
}
printFilters()
document.addEventListener('click', function (event) {
  const button = document.querySelector('.box_filter_button')
  const image = document.querySelector('.filter_button_img')
  if (event.target === button || event.target === image) {
    document.querySelector('.filter_part').classList.toggle('clicked')
    button.classList.toggle('moved-down')
    document.querySelector('.filter_box_inside').classList.toggle('show')
  }
})
//// Datos
const zapatillas = [
  { Id: '#ZP1', Img: './assets/Adidas_special.png', Marca: 'Adidas Original', Nombre: 'Handball Spezial', Precio: 120 },
  { Id: '#ZP2', Img: './assets/Adidas_campus.png', Marca: 'Adidas Original', Nombre: 'Campus', Precio: 90 },
  { Id: '#ZP3', Img: './assets/Adidas_gazelle.png', Marca: 'Adidas Original', Nombre: 'Gazelle', Precio: 120 },
  { Id: '#ZP4', Img: './assets/new_balance_high.png', Marca: 'New Balance', Nombre: 'NB480', Precio: 150 },
  { Id: '#ZP5', Img: './assets/new_balance_low.png', Marca: 'New Balance', Nombre: 'NB9060', Precio: 80 },
  { Id: '#ZP6', Img: './assets/new_balance_low2.png', Marca: 'New Balance', Nombre: 'NB9060', Precio: 100 },
  { Id: '#ZP7', Img: './assets/new_balance_low3.png', Marca: 'New Balance', Nombre: 'NB370', Precio: 120 },
  { Id: '#ZP8', Img: './assets/Nike1.png', Marca: 'Nike Original', Nombre: 'Air Max SC', Precio: 100 },
  { Id: '#ZP9', Img: './assets/Nike3.png', Marca: 'Nike Original', Nombre: 'Air Max SC', Precio: 100 },
  { Id: '#ZP10', Img: './assets/Nike2.png', Marca: 'Nike Original', Nombre: 'Full Force Low', Precio: 110 },
  { Id: '#ZP11', Img: './assets/Nike4.png', Marca: 'Nike Original', Nombre: 'Dunk Low', Precio: 130 },
  { Id: '#ZP12', Img: './assets/Nike_airforce.png', Marca: 'Nike Original', Nombre: 'Air Force', Precio: 125 },
  { Id: '#ZP13', Img: './assets/nike5.png', Marca: 'Nike Original', Nombre: 'Nike Revolution', Precio: 95 }
]
//// Filtros
const MARCAS = []
let MARCA = ''
let PRECIO_MAX = 100
const fillMarcas = () => {
  MARCAS.splice(0)
  for (const zapa of zapatillas) {
    if (!MARCAS.includes(zapa.Marca)) MARCAS.push(zapa.Marca)
  }
}
fillMarcas()
const filtroSpanAct = (input, span) => {
  input.addEventListener('input', () => {
    span.textContent = input.value
    PRECIO_MAX = Number(input.value)
  })
}
const filtroZapatillas = () => {
  const filter_box_inside = document.querySelector('.filter_box_inside')
  const zapFilter = document.createElement('div')
  zapFilter.classList.add('zapFilter')
  // Select de marcas
  const selectModels = document.createElement('select')
  selectModels.classList.add('selectModels')
  const optionShow = document.createElement('option')
  optionShow.textContent = 'Seleccionar marca'
  optionShow.disabled = true
  optionShow.selected = true
  selectModels.appendChild(optionShow)
  for (const marca of MARCAS) {
    const opt = document.createElement('option')
    opt.value = marca
    opt.textContent = marca
    selectModels.appendChild(opt)
  }
  selectModels.addEventListener('change', (e) => {
    MARCA = e.target.value
  })
  // Input range precio
  const zapFilterCashLabel = document.createElement('label')
  zapFilterCashLabel.classList.add('zapFilterCashLabel')
  zapFilterCashLabel.textContent = 'Precio: '
  const zapFilterCash = document.createElement('input')
  zapFilterCash.type = 'range'
  zapFilterCash.value = '100'
  zapFilterCash.min = '0'
  zapFilterCash.max = '200'
  zapFilterCash.step = '10'
  zapFilterCash.classList.add('zapFilterCash')
  const zapFilterCashPrice = document.createElement('span')
  zapFilterCashPrice.textContent = zapFilterCash.value
  filtroSpanAct(zapFilterCash, zapFilterCashPrice)
  zapFilterCashLabel.append(zapFilterCash, zapFilterCashPrice)
  // Botones
  const buttonFilterZap = document.createElement('button')
  buttonFilterZap.textContent = 'Filtrar'
  buttonFilterZap.classList.add('buttonFilterZap')
  const buttonFilterZapReset = document.createElement('button')
  buttonFilterZapReset.textContent = 'Limpiar'
  buttonFilterZapReset.classList.add('buttonFilterZapReset')
  zapFilter.append(selectModels, zapFilterCashLabel, buttonFilterZap, buttonFilterZapReset)
  filter_box_inside.appendChild(zapFilter)
  // Eventos
  buttonFilterZap.addEventListener('click', () => {
    const filtered = []
    for (const z of zapatillas) {
      if ((!MARCA || z.Marca === MARCA) && z.Precio <= PRECIO_MAX) {
        filtered.push(z)
      }
    }
    const prevNoResults = document.querySelector('.noResults')
    if (prevNoResults) prevNoResults.remove()
    if (filtered.length > 0) {
      zapSpace(filtered)
    } else {
      const noResults = document.createElement('div')
      noResults.classList.add('noResults')
      noResults.textContent = 'No se encontraron zapatillas con esos filtros. Aquí tienes algunas sugerencias:'
      const sugerencias = zapatillas.sort(() => 0.5 - Math.random()).slice(0, 3)
      zapSpace(sugerencias)
      const zapContainer = document.querySelector('.zapContainer')
      document.body.insertBefore(noResults, zapContainer)
    }
  })
  buttonFilterZapReset.addEventListener('click', () => {
    MARCA = ''
    PRECIO_MAX = 100
    selectModels.selectedIndex = 0
    zapFilterCash.value = '100'
    zapFilterCashPrice.textContent = '100'
    zapSpace(zapatillas)
  })
}
filtroZapatillas()
//// Pintar zapatillas
const zapSpace = (zapas = zapatillas) => {
  let container = document.querySelector('.zapContainer')
  if (container) container.remove()
  const zapContainer = document.createElement('div')
  zapContainer.classList.add('zapContainer')
  zapas.forEach((zap) => {
    const zapCard = document.createElement('div')
    zapCard.classList.add('zapCard')
    const zapCardTop = document.createElement('div')
    zapCardTop.classList.add('zapCardTop')
    const zapImg = document.createElement('img')
    zapImg.src = zap.Img
    zapImg.alt = zap.Nombre
    zapImg.classList.add('zapImg')
    zapCardTop.appendChild(zapImg)
    const zapCardBottom = document.createElement('div')
    zapCardBottom.classList.add('zapCardBottom')
    zapCardBottom.innerHTML = `
      <div class="zapMarca">${zap.Marca}</div>
      <div class="zapNombre">${zap.Nombre}</div>
      <div class="zapPrecio">${zap.Precio} €</div>
    `
    zapCard.append(zapCardTop, zapCardBottom)
    zapContainer.appendChild(zapCard)
  })

  const footer = document.querySelector('.footerPart')
  document.body.insertBefore(zapContainer, footer)
}
zapSpace()
const printfooterPart = () => {
  const footerPart = document.createElement('footer')
  footerPart.classList.add('footerPart')

  const compraJD = document.createElement('div')
  const h2CompraJD = document.createElement('h2')
  h2CompraJD.textContent = 'Compra con JD'
  compraJD.appendChild(h2CompraJD)

  const itemsCompraJD = ['Guía de tallas', 'Buscador de tallas', 'Descuento estudiantes', 'Calendario lanzamientos', 'Inscríbete a JDX']
  for (const item of itemsCompraJD) {
    const p = document.createElement('p')
    p.textContent = item
    compraJD.appendChild(p)
  }

  const atencionCliente = document.createElement('div')
  const h2Atencion = document.createElement('h2')
  h2Atencion.textContent = 'Atención al cliente'
  atencionCliente.appendChild(h2Atencion)

  const itemsAtencion = ['Preguntas frecuentes', 'Envíos y devoluciones', 'Seguimiento de envío', 'Contacto']
  for (const item of itemsAtencion) {
    const p = document.createElement('p')
    p.textContent = item
    atencionCliente.appendChild(p)
  }

  const avisoLegal = document.createElement('div')
  const h2Aviso = document.createElement('h2')
  h2Aviso.textContent = 'Aviso legal'
  avisoLegal.appendChild(h2Aviso)

  const itemsAviso = ['Términos y condiciones', 'Promociones y condiciones', 'Política de privacidad', 'Política de Cookies', 'Ajustes de Cookies', 'Accesibilidad', 'JD Blog']
  for (const item of itemsAviso) {
    const p = document.createElement('p')
    p.textContent = item
    avisoLegal.appendChild(p)
  }

  footerPart.append(compraJD, atencionCliente, avisoLegal)
  document.body.append(footerPart)
}
printfooterPart()
