// Resolves files in /public (resume.pdf, tricopter.glb) regardless of where the site is hosted
export const asset = (name) => import.meta.env.BASE_URL + name
