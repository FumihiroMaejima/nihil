// next.js/packages/next/shared/lib/constants.ts
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
// default setting
/* const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig */

// custom setting
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    poweredByHeader: false,
    basePath: '/admin',
    distDir: 'dist',
  }
  return nextConfig

  // if Divide config in environmental.
  /* if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      // TODO development only config options here
    }
  }

  return {
    // TODO config options for all phases except development here
    // nextConfig,
  } */
}
