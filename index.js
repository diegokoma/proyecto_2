const printHeader = () => {
  //Declarando
  const header_part = document.createElement('header')
  header_part.classList.add('header')
  const header_first_box = document.createElement('div')
  header_first_box.classList.add('first_head')
  const logo_part = document.createElement('div')
  logo_part.classList.add('logo_part')
  const logo_img = document.createElement('img')
  logo_img.src = 'assets/JD_Sports_logo 1.png'
  logo_img.alt = 'Logo de JD'
  const nav = document.createElement('nav')
  nav.classList.add('nav')
  const hamburguer_menu_box = document.createElement('div')
  hamburguer_menu_box.classList.add('hamburguer_menu_box')
  const hamburguer_menu = document.createElement('img')
  hamburguer_menu.src = './assets/icon_burgerMenu_.png'
  hamburguer_menu.alt = 'Menu desplegable'
  const mens_section = document.createElement('p')
  mens_section.textContent = 'Hombre'
  const woman_section = document.createElement('p')
  woman_section.textContent = 'Mujer'
  const kids_section = document.createElement('p')
  kids_section.textContent = 'Niños'
  const offer_section = document.createElement('p')
  offer_section.textContent = 'Ofertas'
  const login_part = document.createElement('div')
  login_part.classList.add('login_part')
  const user_box_part = document.createElement('div')
  const user_part = document.createElement('img')
  user_part.src = 'assets/icon _User avatar_.png'
  user_part.alt = 'Logo de inicio de sesión'
  const cart_box_part = document.createElement('div')
  const cart_part = document.createElement('img')
  cart_part.src = 'assets/bag.png'
  cart_part.alt = 'Logo de inicio de carrito'
  const filter_box_part = document.createElement('div')
  const filter_part = document.createElement('img')
  filter_part.src = 'assets/filter.png'
  filter_part.alt = 'Logo de filtro'
  const header_second_box = document.createElement('div')
  header_second_box.classList.add('second_head')
  const home_box_banner = document.createElement('div')
  home_box_banner.classList.add('home_box_banner')
  const home_banner = document.createElement('img')
  home_banner.src = 'assets/Cover.png'
  home_banner.alt = 'Banner home JD'
  //Metiendo los nodos en el dom
  document.body.appendChild(header_part)
  header_part.append(header_first_box, header_second_box)
  header_first_box.append(logo_part, nav, hamburguer_menu_box, login_part)
  hamburguer_menu_box.appendChild(hamburguer_menu)
  header_second_box.append(home_box_banner)
  logo_part.appendChild(logo_img)
  nav.append(mens_section, woman_section, kids_section, offer_section)
  login_part.append(user_box_part, cart_box_part, filter_box_part)
  user_box_part.appendChild(user_part)
  cart_box_part.appendChild(cart_part)
  filter_box_part.appendChild(filter_part)
  home_box_banner.appendChild(home_banner)
}
printHeader()
const printFilters = () => {
  const filter_part = document.createElement('div')
  filter_part.classList.add('filter_part')
  const box_filter_button = document.createElement('div')
  box_filter_button.classList.add('box_filter_button')
  const filter_button_img = document.createElement('img')
  filter_button_img.classList.add('filter_button_img')
  filter_button_img.src = 'assets/desliza.png'
  filter_button_img.alt = 'Boton de filtro'
  const filter_box_inside = document.createElement('div')
  filter_box_inside.classList.add('filter_box_inside')

  //Metiendo los nodos en el dom 2º
  document.body.appendChild(filter_part)
  filter_part.append(box_filter_button)
  box_filter_button.appendChild(filter_box_inside)
  box_filter_button.appendChild(filter_button_img)
}

printFilters()
