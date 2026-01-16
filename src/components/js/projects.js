const {
  VITE_ECORENEW_URL,
  VITE_CHEMPE_URL,
  VITE_MOOVEE_URL,
  VITE_OAUTH_API_URL,
  VITE_FILE_UPLOAD_URL,
  VITE_DEX_AGGREGATOR_URL
} = import.meta.env

const screenshot = (url, theme = "light") =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&overlay.browser=${theme}&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url`

export const projects = [
  {
    url: VITE_ECORENEW_URL,
    srcset: screenshot(VITE_ECORENEW_URL),
    title: "Ecorenew",
    description:
      "Eco Renew is a Nigerian-born initiative committed to combating plastic pollution through community action and education."
  },
  {
    url: VITE_CHEMPE_URL,
    srcset: screenshot(VITE_CHEMPE_URL),
    title: "Chem-Pe",
    description:
      "Chem-Pe powers restaurants across Africa. It enables customers to browse menus, customize orders, select order types and secure mobile payments."
  },
  {
    url: VITE_MOOVEE_URL,
    srcset: screenshot(VITE_MOOVEE_URL, "dark"),
    title: "Moove",
    description:
      "Moovee is a web application designed to provide efficient and reliable transportation solutions for individuals and businesses."
  },
  {
    url: VITE_OAUTH_API_URL,
    srcset: screenshot(VITE_OAUTH_API_URL, "dark"),
    title: "OAuth API",
    description:
      "This project demonstrates the integration of Google OAuth with a Laravel application using Laravel Socialite."
  },
  {
    url: VITE_FILE_UPLOAD_URL,
    srcset: screenshot(VITE_FILE_UPLOAD_URL),
    title: "File Upload",
    description:
      "A lightweight REST API for uploading, managing, and restoring user files — built with Go, Gin, and GORM."
  },
  {
    url: VITE_DEX_AGGREGATOR_URL,
    srcset: screenshot(VITE_DEX_AGGREGATOR_URL, "dark"),
    title: "Building Dex Aggregator",
    description:
      "A DEX aggregator that compares prices across multiple exchanges and executes trades at the best available rate."
  }
]

// export
//  const projects = [
//   {
//     url: 'https://ecorenew.com.ng',
//     srcset: "https://api.microlink.io/?url=https%3A%2F%2Fecorenew.com.ng&overlay.browser=light&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
//     title: 'Ecorenew',
//     description: 'Eco Renew is a Nigerian-born initiative committed to combating plastic pollution through community action and education.'
//   },
//   {
//     url: 'https://www.Chem-Pe.com',
//     srcset: "https://api.microlink.io/?url=https%3A%2F%2Fwww.chem-pe.com%2F%23&overlay.browser=light&overlay." +
//       "background=%23c1c1c1&screenshot=true&embed=screenshot.url",
//     title: 'Chem-Pe',
//     description: "Chem-Pe powers restaurants across Africa. It enables customers to browse menus, customize orders, select order types and secure mobile payments."
//   },
//   {
//     url: 'https://github.com/Dev-Tams/Moovee',
//     srcset: "https://api.microlink.io/?url=https%3A%2F%2Fgithub.com%2FDev-Tams%2FMoovee&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
//     title: 'Moove',
//     description: 'Moovee is a web application designed to provide efficient and reliable transportation solutions for individuals and businesses looking to relocate their belongings.'
//   },
//   {
//     url: 'https://github.com/Dev-Tams/oauth-api',
//     srcset: "https://api.microlink.io/?url=https%3A%2F%2Fgithub.com%2FDev-Tams%2FOAUTH-API&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
//     title: 'OAuth API',
//     description: 'This project demonstrates the integration of Google OAuth with a Laravel application using Laravel Socialite. It includes routes for user authentication and token management.'
//   },
//   {
//     url: 'https://dev-tams.github.io/file-upload-page/',
//     srcset: "https://api.microlink.io/?url=https%3A%2F%2Fdev-tams.github.io%2Ffile-upload-page%2F&overlay.browser=light&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
//     title: 'File Upload',
//     description: "A lightweight REST API for uploading, managing, and restoring user files — built with Go, Gin, and GORM."
//   },
//   {
//     url: 'https://github.com/Dev-Tams/celo-tutorials-101-building-Dex-Aggregator-celo-coding-tutorial-from-scratch.md.',
//     srcset: "https://api.microlink.io/?url=https%3A%2F%2Fgithub.com%2FDev-Tams%2Fcelo-tutorials-101-building-Dex-Aggregator-celo-coding-tutorial-from-scratch.md..git&overlay.browser=dark&overlay.background=%23c1c1c1&screenshot=true&embed=screenshot.url",
//     title: 'Buiilding Dex Aggregator',
//     description: 'Instead of having to visit multiple DEXs to find the best price for a specific token, users can use DEX aggregator to compare prices and execute trades on the DEX with the best available price.'
//   },
// ]
