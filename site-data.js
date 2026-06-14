/**
 * One Sun America — Site Data
 * Fuente única de verdad para servicios, ciudades, proyectos y blog.
 * Agregar aquí → aparece en todo el sitio automáticamente.
 */
const ONE_SUN = {

  /* ─────────────────────────────────────────────
     SERVICIOS
  ───────────────────────────────────────────── */
  services: [
    {
      id:   'roof-replacement',
      slug: 'roof-replacement.html',
      icon: '🏠',
      en:   { name: 'Roof Replacement',    short: 'Full replacement with premium materials.' },
      es:   { name: 'Reemplazo de Techo',  short: 'Reemplazo completo con materiales premium.' }
    },
    {
      id:   'storm-damage',
      slug: 'storm-damage.html',
      icon: '⛈️',
      en:   { name: 'Storm & Hail Damage', short: 'Insurance claims assistance and repair.' },
      es:   { name: 'Daño por Tormenta',   short: 'Asistencia con seguros y reparación.' }
    },
    {
      id:   'gutters',
      slug: 'gutters.html',
      icon: '🪣',
      en:   { name: 'Gutters',             short: 'Installation, repair, and guards.' },
      es:   { name: 'Canaletas',           short: 'Instalación, reparación y protectores.' }
    },
    {
      id:   'roof-repair',
      slug: '#services',
      icon: '🔧',
      en:   { name: 'Roof Repair',         short: 'Leak fixes, patches, and partial repairs.' },
      es:   { name: 'Reparación de Techo', short: 'Goteras, parches y reparaciones parciales.' }
    }
  ],

  /* ─────────────────────────────────────────────
     CIUDADES
  ───────────────────────────────────────────── */
  cities: [
    {
      id:      'houston',
      slug:    'index.html',
      tier:    1,
      county:  'Harris',
      lat:     29.7963, lng: -95.3677,
      en:      { name: 'Houston', state: 'TX', tagline: 'Greater Houston Area' },
      es:      { name: 'Houston', state: 'TX', tagline: 'Área Metropolitana de Houston' }
    },
    {
      id:      'katy',
      slug:    'katy-tx.html',
      tier:    1,
      county:  'Harris / Fort Bend / Waller',
      lat:     29.7858, lng: -95.8245,
      en:      { name: 'Katy', state: 'TX', tagline: 'Katy & West Houston' },
      es:      { name: 'Katy', state: 'TX', tagline: 'Katy y Houston Oeste' }
    },
    {
      id:      'sugar-land',
      slug:    'sugar-land-tx.html',
      tier:    1,
      county:  'Fort Bend',
      lat:     29.6196, lng: -95.6349,
      en:      { name: 'Sugar Land', state: 'TX', tagline: 'Sugar Land & Fort Bend County' },
      es:      { name: 'Sugar Land', state: 'TX', tagline: 'Sugar Land y Condado Fort Bend' }
    },
    {
      id:      'pearland',
      slug:    'pearland-tx.html',
      tier:    1,
      county:  'Brazoria / Harris',
      lat:     29.5635, lng: -95.2860,
      en:      { name: 'Pearland', state: 'TX', tagline: 'Pearland & South Houston' },
      es:      { name: 'Pearland', state: 'TX', tagline: 'Pearland y Sur de Houston' }
    },
    {
      id:      'friendswood',
      slug:    'friendswood-tx.html',
      tier:    1,
      county:  'Galveston / Harris',
      lat:     29.5293, lng: -95.2010,
      en:      { name: 'Friendswood', state: 'TX', tagline: 'Friendswood & Clear Lake Area' },
      es:      { name: 'Friendswood', state: 'TX', tagline: 'Friendswood y Área Clear Lake' }
    },
    {
      id:      'the-woodlands',
      slug:    'the-woodlands-tx.html',
      tier:    1,
      county:  'Montgomery',
      lat:     30.1658, lng: -95.4613,
      en:      { name: 'The Woodlands', state: 'TX', tagline: 'The Woodlands & North Houston' },
      es:      { name: 'The Woodlands', state: 'TX', tagline: 'The Woodlands y Norte de Houston' }
    },
    {
      id:      'humble',
      slug:    null,
      tier:    2,
      county:  'Harris',
      lat:     29.9988, lng: -95.2621,
      en:      { name: 'Humble', state: 'TX', tagline: 'Humble & NE Houston' },
      es:      { name: 'Humble', state: 'TX', tagline: 'Humble y NE Houston' }
    },
    {
      id:      'league-city',
      slug:    null,
      tier:    2,
      county:  'Galveston / Harris',
      lat:     29.5077, lng: -95.0949,
      en:      { name: 'League City', state: 'TX', tagline: 'League City & Clear Lake' },
      es:      { name: 'League City', state: 'TX', tagline: 'League City y Clear Lake' }
    },
    {
      id:      'spring',
      slug:    null,
      tier:    2,
      county:  'Harris',
      lat:     30.0799, lng: -95.4172,
      en:      { name: 'Spring', state: 'TX', tagline: 'Spring & North Houston' },
      es:      { name: 'Spring', state: 'TX', tagline: 'Spring y Norte de Houston' }
    },
    {
      id:      'pasadena',
      slug:    null,
      tier:    2,
      county:  'Harris',
      lat:     29.6911, lng: -95.2091,
      en:      { name: 'Pasadena', state: 'TX', tagline: 'Pasadena & SE Houston' },
      es:      { name: 'Pasadena', state: 'TX', tagline: 'Pasadena y SE Houston' }
    },
    {
      id:      'cypress',
      slug:    null,
      tier:    2,
      county:  'Harris',
      lat:     29.9691, lng: -95.6972,
      en:      { name: 'Cypress', state: 'TX', tagline: 'Cypress & NW Houston' },
      es:      { name: 'Cypress', state: 'TX', tagline: 'Cypress y NO de Houston' }
    },
    {
      id:      'stafford',
      slug:    null,
      tier:    2,
      county:  'Fort Bend / Harris',
      lat:     29.6160, lng: -95.5583,
      en:      { name: 'Stafford', state: 'TX', tagline: 'Stafford & SW Houston' },
      es:      { name: 'Stafford', state: 'TX', tagline: 'Stafford y SO de Houston' }
    },
    {
      id:      'baytown',
      slug:    null,
      tier:    2,
      county:  'Harris',
      lat:     29.7355, lng: -94.9774,
      en:      { name: 'Baytown', state: 'TX', tagline: 'Baytown & East Houston' },
      es:      { name: 'Baytown', state: 'TX', tagline: 'Baytown y Este de Houston' }
    },
    { id:'missouri-city', slug:'missouri-city-tx.html', tier:1, county:'Fort Bend', lat:29.6188, lng:-95.5385, en:{name:'Missouri City', state:'TX', tagline:'Missouri City & SW Houston'}, es:{name:'Missouri City', state:'TX', tagline:'Missouri City y Houston SO'} },
    { id:'conroe', slug:'conroe-tx.html', tier:1, county:'Montgomery', lat:30.3119, lng:-95.4561, en:{name:'Conroe', state:'TX', tagline:'Conroe & North Houston'}, es:{name:'Conroe', state:'TX', tagline:'Conroe y Norte de Houston'} },
    { id:'atascocita', slug:'atascocita-tx.html', tier:1, county:'Harris', lat:29.9802, lng:-95.1602, en:{name:'Atascocita', state:'TX', tagline:'Atascocita & Lake Houston'}, es:{name:'Atascocita', state:'TX', tagline:'Atascocita y Lago Houston'} },
    { id:'rosenberg', slug:'rosenberg-tx.html', tier:1, county:'Fort Bend', lat:29.5572, lng:-95.8082, en:{name:'Rosenberg', state:'TX', tagline:'Rosenberg & SW Fort Bend'}, es:{name:'Rosenberg', state:'TX', tagline:'Rosenberg y Fort Bend SO'} },
    { id:'richmond', slug:'richmond-tx.html', tier:1, county:'Fort Bend', lat:29.5822, lng:-95.7607, en:{name:'Richmond', state:'TX', tagline:'Richmond & Fort Bend County'}, es:{name:'Richmond', state:'TX', tagline:'Richmond y Condado Fort Bend'} },
    { id:'fulshear', slug:'fulshear-tx.html', tier:1, county:'Fort Bend', lat:29.6883, lng:-95.8905, en:{name:'Fulshear', state:'TX', tagline:'Fulshear & Cross Creek Ranch'}, es:{name:'Fulshear', state:'TX', tagline:'Fulshear y Cross Creek Ranch'} },
    { id:'deer-park', slug:'deer-park-tx.html', tier:1, county:'Harris', lat:29.7052, lng:-95.1213, en:{name:'Deer Park', state:'TX', tagline:'Deer Park & East Houston'}, es:{name:'Deer Park', state:'TX', tagline:'Deer Park y Este de Houston'} },
    { id:'la-porte', slug:'la-porte-tx.html', tier:1, county:'Harris', lat:29.6658, lng:-95.0191, en:{name:'La Porte', state:'TX', tagline:'La Porte & SE Harris County'}, es:{name:'La Porte', state:'TX', tagline:'La Porte y SE del Condado Harris'} },
    { id:'tomball', slug:'tomball-tx.html', tier:1, county:'Harris', lat:30.0974, lng:-95.6160, en:{name:'Tomball', state:'TX', tagline:'Tomball & NW Houston'}, es:{name:'Tomball', state:'TX', tagline:'Tomball y NO de Houston'} },
    { id:'manvel', slug:'manvel-tx.html', tier:1, county:'Brazoria', lat:29.4608, lng:-95.3574, en:{name:'Manvel', state:'TX', tagline:'Manvel & South Houston'}, es:{name:'Manvel', state:'TX', tagline:'Manvel y Sur de Houston'} },
    { id:'alvin', slug:'alvin-tx.html', tier:1, county:'Brazoria', lat:29.4244, lng:-95.2441, en:{name:'Alvin', state:'TX', tagline:'Alvin & Brazoria County'}, es:{name:'Alvin', state:'TX', tagline:'Alvin y Condado Brazoria'} },
    { id:'texas-city', slug:'texas-city-tx.html', tier:1, county:'Galveston', lat:29.3838, lng:-94.9027, en:{name:'Texas City', state:'TX', tagline:'Texas City & Galveston County'}, es:{name:'Texas City', state:'TX', tagline:'Texas City y Condado Galveston'} }
  ],

  /* ─────────────────────────────────────────────
     PROYECTOS
     city: ID de ciudad (string)
     service: ID de servicio (string)
     Actualizar con proyectos reales cuando se tengan fotos confirmadas por ciudad.
  ───────────────────────────────────────────── */
  projects: [
    {
      id:      1,
      image:   'images/after-roof.jpg',
      city:    'houston',
      service: 'roof-replacement',
      year:    2025,
      en:      { title: 'Full Roof Replacement — Houston, TX',   desc: 'Complete tear-off and replacement. GAF Timberline HDZ, 28 squares.' },
      es:      { title: 'Reemplazo Completo — Houston, TX',      desc: 'Retiro total y reemplazo. GAF Timberline HDZ, 28 cuadros.' }
    },
    {
      id:      2,
      image:   'images/project-1.jpg',
      city:    'katy',
      service: 'storm-damage',
      year:    2025,
      en:      { title: 'Hail Damage Repair — Katy, TX',         desc: 'Post-hailstorm insurance claim, full replacement approved.' },
      es:      { title: 'Reparación por Granizo — Katy, TX',     desc: 'Reclamo de seguro post-granizo, reemplazo completo aprobado.' }
    },
    {
      id:      3,
      image:   'images/project-2.jpg',
      city:    'sugar-land',
      service: 'roof-replacement',
      year:    2025,
      en:      { title: 'Roof Replacement — Sugar Land, TX',     desc: 'Full replacement on a 10-year-old shingle roof.' },
      es:      { title: 'Reemplazo de Techo — Sugar Land, TX',   desc: 'Reemplazo completo en techo de 10 años.' }
    },
    {
      id:      4,
      image:   'images/project-3.jpg',
      city:    'pearland',
      service: 'storm-damage',
      year:    2024,
      en:      { title: 'Storm Damage — Pearland, TX',           desc: 'Wind and hail damage. Insurance claim processed through PA.' },
      es:      { title: 'Daño por Tormenta — Pearland, TX',      desc: 'Daño por viento y granizo. Reclamo procesado con PA.' }
    },
    {
      id:      5,
      image:   'images/project-4.jpg',
      city:    'friendswood',
      service: 'gutters',
      year:    2025,
      en:      { title: 'Gutter Installation — Friendswood, TX', desc: '6" seamless aluminum gutters with leaf guards installed.' },
      es:      { title: 'Instalación de Canaletas — Friendswood, TX', desc: 'Canaletas de aluminio sin costuras de 6" con guardas instaladas.' }
    },
    {
      id:      6,
      image:   'images/project-5.jpg',
      city:    'the-woodlands',
      service: 'roof-replacement',
      year:    2024,
      en:      { title: 'Roof Replacement — The Woodlands, TX',  desc: 'High-end neighborhood, Owens Corning Duration Storm shingles.' },
      es:      { title: 'Reemplazo de Techo — The Woodlands, TX', desc: 'Zona residencial premium, tejas Owens Corning Duration Storm.' }
    },
    {
      id:      7,
      image:   'images/project-6.jpg',
      city:    'houston',
      service: 'roof-repair',
      year:    2025,
      en:      { title: 'Leak Repair — Houston Heights, TX',     desc: 'Flashing failure and missing shingles around chimney.' },
      es:      { title: 'Reparación de Goteras — Houston Heights, TX', desc: 'Falla de flashing y tejas faltantes alrededor de chimenea.' }
    },
    {
      id:      8,
      image:   'images/before-roof.jpg',
      city:    'katy',
      service: 'roof-replacement',
      year:    2024,
      en:      { title: 'Before / After — Katy, TX',             desc: 'Before: storm-damaged shingles. After: full GAF replacement.' },
      es:      { title: 'Antes / Después — Katy, TX',            desc: 'Antes: tejas dañadas por tormenta. Después: reemplazo GAF completo.' }
    },
    {
      id:      9,
      image:   'images/gutters/gutter-second-floor-install.jpg',
      city:    'houston',
      service: 'gutters',
      year:    2025,
      en:      { title: 'Seamless Gutter Installation — Two-Story Home, Houston',  desc: 'Full seamless gutter installation on a two-story brick home in Houston. Crew worked second-floor roofline with precision and care.' },
      es:      { title: 'Instalación de Canaletas — Casa de Dos Pisos, Houston',   desc: 'Instalación completa de canaletas sin costura en casa de ladrillo de dos pisos en Houston. El equipo trabajó la línea del segundo piso con precisión.' }
    }
  ],

  /* ─────────────────────────────────────────────
     BLOG POSTS
     cities: array de IDs de ciudad relacionados
     services: array de IDs de servicio relacionados
  ───────────────────────────────────────────── */
  blog: [
    {
      id:       1,
      slug:     'blog/hail-damage-roof-houston.html',
      image:    'images/project-1.jpg',
      date:     '2026-03-15',
      cities:   ['houston', 'katy', 'pearland', 'sugar-land', 'friendswood', 'the-woodlands'],
      services: ['storm-damage'],
      en:       { title: 'What To Do After Hail Damage to Your Roof in Houston',   summary: 'Step-by-step guide for Houston homeowners after a hailstorm — document, inspect, and file correctly.' },
      es:       { title: 'Qué Hacer Después del Daño por Granizo en Houston',       summary: 'Guía paso a paso para propietarios en Houston después de una tormenta de granizo.' }
    },
    {
      id:       2,
      slug:     'blog/hurricane-roof-damage-houston.html',
      image:    'images/after-roof.jpg',
      date:     '2026-02-20',
      cities:   ['houston', 'pearland', 'friendswood', 'league-city', 'baytown'],
      services: ['storm-damage', 'roof-replacement'],
      en:       { title: 'Hurricane Roof Damage in Houston: What Homeowners Need to Know', summary: 'How to protect your home before and after hurricane season in the Houston area.' },
      es:       { title: 'Daño de Huracán en Houston: Lo Que Debes Saber',          summary: 'Cómo proteger tu hogar antes y después de la temporada de huracanes en Houston.' }
    },
    {
      id:       3,
      slug:     'blog/how-long-does-roof-last-houston.html',
      image:    'images/project-2.jpg',
      date:     '2026-01-10',
      cities:   ['houston', 'katy', 'sugar-land', 'pearland', 'the-woodlands', 'friendswood'],
      services: ['roof-replacement'],
      en:       { title: 'How Long Does a Roof Last in Houston, TX?',              summary: "Houston's heat, humidity, and storms cut roof lifespans short. Here's what to expect." },
      es:       { title: '¿Cuánto Dura un Techo en Houston, TX?',                  summary: "El calor, la humedad y las tormentas de Houston reducen la vida útil de los techos. Esto es lo que puedes esperar." }
    },
    {
      id:       4,
      slug:     'blog/roof-repair-vs-replacement.html',
      image:    'images/project-3.jpg',
      date:     '2025-12-05',
      cities:   ['houston', 'katy', 'sugar-land', 'pearland', 'the-woodlands', 'friendswood'],
      services: ['roof-repair', 'roof-replacement'],
      en:       { title: 'Roof Repair vs. Replacement: How to Decide',             summary: 'A practical guide to help Houston homeowners decide whether to repair or replace their roof.' },
      es:       { title: 'Reparar vs. Reemplazar el Techo: Cómo Decidir',          summary: 'Guía práctica para que propietarios en Houston decidan si reparar o reemplazar su techo.' }
    },
    {
      id:       5,
      slug:     'blog/how-to-choose-roofing-contractor-houston.html',
      image:    'images/project-2.jpg',
      date:     '2026-04-15',
      cities:   ['houston', 'katy', 'sugar-land', 'pearland', 'friendswood', 'the-woodlands'],
      services: ['roof-replacement', 'roof-repair'],
      en:       { title: 'How to Choose a Roofing Contractor in Houston, TX',      summary: 'Not all roofers are equal. License, insurance, reviews, and red flags to look for before signing anything in the Houston area.' },
      es:       { title: 'Cómo Elegir un Contratista de Techos en Houston, TX',    summary: 'No todos los roofers son iguales. Licencia, seguro, reseñas y señales de alerta que debes conocer antes de firmar cualquier contrato.' }
    },
    {
      id:       6,
      slug:     'blog/best-roofing-materials-houston.html',
      image:    'images/after-roof.jpg',
      date:     '2026-05-01',
      cities:   ['houston', 'katy', 'sugar-land', 'pearland', 'friendswood', 'the-woodlands'],
      services: ['roof-replacement'],
      en:       { title: "Best Roofing Materials for Houston's Heat and Humidity",  summary: "Houston's climate is brutal on roofs. Here's which shingles last longest in the heat, humidity, and hail zone — and what One Sun recommends." },
      es:       { title: 'Los Mejores Materiales para Techos en el Calor y Humedad de Houston', summary: 'El clima de Houston es exigente con los techos. Aquí están las tejas que duran más en calor, humedad y granizo — y lo que recomienda One Sun.' }
    }
  ]

};
