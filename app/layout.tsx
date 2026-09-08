import './globals.css'
import Link from 'next/link'

export const metadata={
  title:'Imperial Arte Floral | Arreglos y coronas florales',
  description:'Catálogo y pedidos personalizados de Imperial Arte Floral.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="es"><body>
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/inicio"><span className="brand-mark">✦</span><span>Imperial Arte Floral</span></Link>
        <nav className="navlinks" aria-label="Navegación principal">
          <Link href="/inicio">Inicio</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/pedido">Crear pedido</Link>
          <Link className="nav-admin" href="/admin">Administración</Link>
        </nav>
      </div>
    </header>
    <div className="container">{children}
      <footer className="footer"><span>© Imperial Arte Floral · Elegancia para momentos importantes.</span><span>Plataforma desarrollada por NOVATECHZ</span></footer>
    </div>
  </body></html>
}
