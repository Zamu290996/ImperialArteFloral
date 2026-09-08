import Link from 'next/link'

export default function Home(){
  return <main>
    <section className="hero">
      <div>
        <span className="eyebrow">Elegancia en Blanco Total</span>
        <h1>Flores que acompañan, honran y expresan.</h1>
        <p className="lead">Elige un diseño, personaliza las flores y define el mensaje exacto de tu cinta. Un proceso sencillo para un detalle verdaderamente significativo.</p>
        <div className="actions">
          <Link className="btn gold" href="/catalogo">Explorar catálogo <span>→</span></Link>
          <Link className="btn secondary" href="/pedido">Crear pedido</Link>
        </div>
        <div className="trust-row">
          <div className="trust-item"><b>Personalización clara</b><br/>Lilis o gerberas incluidas.</div>
          <div className="trust-item"><b>Mensaje exacto</b><br/>Captura el texto de la cinta sin intermediarios.</div>
          <div className="trust-item"><b>Seguimiento interno</b><br/>Tu pedido llega directamente a operación.</div>
        </div>
      </div>
      <div className="hero-art" aria-label="Composición floral decorativa">
        <div className="hero-card"><div><strong>Blanco Total</strong><div className="muted">Una estética sobria, limpia y elegante.</div></div><span className="tag">Imperial</span></div>
      </div>
    </section>

    <section className="section">
      <div className="section-head"><div><span className="eyebrow">Cómo funciona</span><h2 style={{marginTop:14,marginBottom:0}}>Tu pedido, sin complicaciones</h2></div><p>Diseñamos el flujo para que puedas completar la información esencial de forma rápida y con menos riesgo de errores.</p></div>
      <div className="grid">
        <article className="feature-card"><div className="feature-icon">01</div><h3>Elige tu arreglo</h3><p>Explora coronas fúnebres y arreglos comerciales disponibles.</p></article>
        <article className="feature-card"><div className="feature-icon">02</div><h3>Personaliza</h3><p>Selecciona la flor base, agrega girasoles y escribe el texto exacto de la cinta.</p></article>
        <article className="feature-card"><div className="feature-icon">03</div><h3>Confirma tu pedido</h3><p>Completa tus datos y continúa al proceso de confirmación y pago.</p></article>
      </div>
    </section>
  </main>
}
