import './globals.css'
export const metadata={title:'Imperial Arte Floral',description:'Pedidos florales'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body><div className="container"><nav className="nav"><a className="brand" href="/">Imperial Arte Floral</a><div className="navlinks"><a href="/catalogo">Catálogo</a><a href="/pedido">Crear pedido</a><a href="/admin">Administración</a></div></nav>{children}<footer className="footer">Imperial Arte Floral · Plataforma desarrollada por NOVATECHZ</footer></div></body></html>}
