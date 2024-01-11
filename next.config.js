/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_RED_CAR_ORIGIN: process.env.API_RED_CAR_ORIGIN,
        NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,
        NEXT_PUBLIC_BACKEND_URL:process.env.NEXT_PUBLIC_BACKEND_URL,
        NEXTAUTH_URL:process.env.NEXTAUTH_URL
    },
    images: {
        domains: ["res.cloudinary.com","lh3.googleusercontent.com"]
    },
    experimental: {
        serverComponentsExternalPackages: ["cloudinary"]
    }
}

module.exports = nextConfig
