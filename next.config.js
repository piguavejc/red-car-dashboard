/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_RED_CAR_LOCAL: process.env.API_RED_CAR_LOCAL,
        API_RED_CAR_ORIGIN: process.env.API_RED_CAR_ORIGIN,
        GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    images: {
        domains: ["res.cloudinary.com","lh3.googleusercontent.com"]
    },
    experimental: {
        serverComponentsExternalPackages: ["cloudinary"]
    }
}

module.exports = nextConfig
