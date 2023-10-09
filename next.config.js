/** @type {import('next').NextConfig} 
const nextConfig = {
    reactStrictMode:false,
}

module.exports = nextConfig
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    }
}

module.exports = nextConfig