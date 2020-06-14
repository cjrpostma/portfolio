module.exports = {
  pathPrefix: '/', // Prefix for all links.
  title: 'Chris Postma', // Navigation and Site Title
  titleAlt: 'Chris Postma', // Title for JSONLD
  description: 'Chris Postma, Software Engineer',
  headline: 'Chris Postma, Software Engineer', // Headline for schema.org JSONLD
  url: 'https://chrispostma.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/favicon.png',
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Postma', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Chris Postma', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@cjrpostma', // Twitter Username
  facebook: 'cjrpostma', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
