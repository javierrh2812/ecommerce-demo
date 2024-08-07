import { Collection, Menu, Page } from 'lib/types';

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const COLLECTIONS: Collection[] = [
  {
    path: 'dogs',
    handle: 'dogs',
    title: 'Perros',
    description: 'Productos para perros',
    seo: {
      title: 'Perros',
      description: 'Productos para perros'
    },
    updatedAt: ''
  },
  {
    path: 'cats',
    handle: 'cats',
    title: 'Gatos',
    description: 'Productos para gatos',
    seo: {
      title: 'Gatos',
      description: 'Productos para gatos'
    },
    updatedAt: ''
  },
  {
    path: 'others',
    handle: 'others',
    title: 'Otras Mascotas',
    description: 'Productos para otras mascotas',
    seo: {
      title: 'Otras Mascotas',
      description: 'Productos para otras mascotas'
    },
    updatedAt: ''
  }
];

export const FOOTER_PAGES: Menu[] = [
  {
    title: 'Inicio',
    path: '/'
  },
  {
    title: 'Sobre Nosotros',
    path: '/about'
  },
  {
    title: 'Términos y Condiciones',
    path: '/terms-and-conditions'
  },
  {
    title: 'Políticas de Privacidad',
    path: '/privacy-policy'
  }
]

export const PAGES: Page[] = [
  {
    id: '1',
    title: 'Sobre Nosotros',
    handle: 'about',
    body: `
<p>En MascotAmigo, compartimos una pasión profunda por mejorar la vida de las mascotas y sus dueños. Nos dedicamos a ofrecer productos de alta calidad que no solo son funcionales, sino también seguros y estéticamente agradables. Nuestro catálogo incluye una amplia gama de artefactos para mascotas, desde camas cómodas y juguetes interactivos hasta accesorios para el cuidado diario. Cada producto es seleccionado cuidadosamente para garantizar que cumpla con los más altos estándares de calidad, porque entendemos que tus mascotas son parte de tu familia.</p>

<p>Nuestro compromiso va más allá de la simple venta; nos esforzamos por ser un recurso confiable y un socio en el bienestar de tu mascota. Creemos en el poder del amor y el cuidado, y nos enorgullece ofrecer productos que promueven la salud, la felicidad y la comodidad de tus amigos peludos. En MascotAmigo, nos apasiona hacer que cada momento con tu mascota sea especial y memorable, porque creemos que se merecen lo mejor. ¡Gracias por confiar en nosotros para cuidar a quienes amas!</p>
`,
    bodySummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.',
    seo: {
      title: 'Sobre Nosotros',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.'
    },
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  },
  {
    id: '2',
    title: 'Términos y condiciones',
    handle: 'terms-and-conditions',
    body: `
<article>
  <section>
    <h2>1. Aceptación de los Términos</h2>
    <p>
      Al acceder y utilizar este sitio web, aceptas estar sujeto a los términos y condiciones establecidos en este documento. 
      Si no estás de acuerdo con estos términos, por favor, no utilices nuestro sitio web ni nuestros servicios.
    </p>
  </section>
  
  <section>
    <h2>2. Modificaciones de los Términos</h2>
    <p>
      Nos reservamos el derecho de modificar o actualizar estos términos en cualquier momento y sin previo aviso. 
      Es tu responsabilidad revisar esta página periódicamente para estar al tanto de cualquier cambio. 
      El uso continuado del sitio después de cualquier modificación implica tu aceptación de los términos revisados.
    </p>
  </section>
  
  <section>
    <h2>3. Uso del Sitio Web</h2>
    <p>
      El contenido y los servicios ofrecidos en este sitio web son solo para uso personal y no comercial. 
      Está prohibido utilizar el sitio web para cualquier propósito ilegal o no autorizado. 
      No debes, bajo ninguna circunstancia, intentar obtener acceso no autorizado a nuestros sistemas ni interferir en el funcionamiento del sitio web.
    </p>
  </section>
  
  <section>
    <h2>4. Propiedad Intelectual</h2>
    <p>
      Todos los derechos de propiedad intelectual sobre los contenidos de este sitio web, incluidos, entre otros, textos, gráficos, logotipos, 
      imágenes, videos y software, son propiedad de MascotAmigo o de sus respectivos propietarios. 
      Queda prohibida la reproducción, distribución, modificación o cualquier otro uso de estos contenidos sin el permiso expreso por escrito de MascotAmigo.
    </p>
  </section>
  
  <section>
    <h2>5. Limitación de Responsabilidad</h2>
    <p>
      MascotAmigo no se responsabiliza por cualquier daño directo, indirecto, incidental, especial o consecuente 
      que pueda resultar del uso o la imposibilidad de usar nuestro sitio web o nuestros servicios. 
      No garantizamos que el sitio web esté libre de errores o que funcionará de manera ininterrumpida.
    </p>
  </section>
  
  <section>
    <h2>6. Ley Aplicable</h2>
    <p>
      Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Perú. 
      Cualquier disputa que surja en relación con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Perú.
    </p>
  </section>
  
  <section>
    <h2>7. Contacto</h2>
    <p>
      Si tienes alguna pregunta o inquietud sobre estos términos y condiciones, por favor, contáctanos en support@mascotamigo.pe
      o a través de nuestro formulario de contacto en el sitio web.
    </p>
  </section>
</article>
    `,
    bodySummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.',
    seo: {
      title: 'Términos y condiciones',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.'
    },
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  },
  {
    id: '3',
    title: 'Políticas de Privacidad',
    handle: 'privacy-policy',
    body: `
<article>
  <section>
    <h2>1. Introducción</h2>
    <p>
      En MascotAmigo, valoramos tu privacidad y estamos comprometidos a proteger tu información personal. 
      Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información que nos proporcionas 
      a través de nuestro sitio web y servicios.
    </p>
  </section>

  <section>
    <h2>2. Información que Recopilamos</h2>
    <p>
      Podemos recopilar información personal que nos proporcionas directamente, como tu nombre, dirección de correo electrónico, 
      dirección postal, número de teléfono y detalles de pago cuando realizas una compra o te registras en nuestro sitio web. 
      También podemos recopilar información automáticamente a través de cookies y otras tecnologías de seguimiento, 
      como tu dirección IP, tipo de navegador y páginas que visitas.
    </p>
  </section>

  <section>
    <h2>3. Uso de la Información</h2>
    <p>
      La información que recopilamos se utiliza para mejorar tu experiencia en MascotAmigo, procesar tus pedidos, 
      proporcionarte soporte al cliente y mantenerte informado sobre nuestras ofertas y productos. 
      También utilizamos esta información para personalizar el contenido y la publicidad que ves en nuestro sitio.
    </p>
  </section>

  <section>
    <h2>4. Compartir la Información</h2>
    <p>
      MascotAmigo no vende, alquila ni comparte tu información personal con terceros para fines de marketing sin tu consentimiento expreso. 
      Sin embargo, podemos compartir tu información con proveedores de servicios que nos ayudan a operar nuestro sitio web, 
      procesar pagos y entregar productos, siempre bajo estrictas condiciones de confidencialidad.
    </p>
  </section>

  <section>
    <h2>5. Protección de la Información</h2>
    <p>
      Implementamos medidas de seguridad adecuadas para proteger tu información personal contra el acceso no autorizado, 
      la alteración, divulgación o destrucción. Sin embargo, ten en cuenta que ninguna transmisión de datos a través de Internet es completamente segura, 
      por lo que no podemos garantizar la seguridad absoluta de la información transmitida a través de nuestro sitio.
    </p>
  </section>

  <section>
    <h2>6. Tus Derechos</h2>
    <p>
      Tienes derecho a acceder, corregir o eliminar la información personal que tenemos sobre ti. 
      También puedes optar por no recibir comunicaciones de marketing de nuestra parte en cualquier momento, 
      siguiendo las instrucciones de "darse de baja" en nuestros correos electrónicos o contactándonos directamente.
    </p>
  </section>

  <section>
    <h2>7. Cambios a esta Política</h2>
    <p>
      MascotAmigo se reserva el derecho de actualizar esta política de privacidad en cualquier momento. 
      Te notificaremos sobre cualquier cambio significativo publicando la nueva política en nuestro sitio web. 
      Te recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos tu información.
    </p>
  </section>

  <section>
    <h2>8. Contacto</h2>
    <p>
      Si tienes preguntas o inquietudes sobre nuestra política de privacidad, por favor, contáctanos en [Correo Electrónico de Contacto] 
      o a través de nuestro formulario de contacto en el sitio web.
    </p>
  </section>
</article>
    `,
    bodySummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.',
    seo: {
      title: 'Políticas de Privacidad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida tellus tempus massa euismod auctor. Fusce ut libero et nunc rhoncus mattis sed at risus.'
    },
    createdAt: '2024-04-12',
    updatedAt: '2024-04-12'
  },
]

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
