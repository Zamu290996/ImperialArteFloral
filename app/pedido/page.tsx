import {prisma} from '@/lib/prisma'
export const dynamic='force-dynamic'

export default async function Pedido({searchParams}:{searchParams:{product?:string}}){
  const ps=await prisma.product.findMany({where:{active:true},orderBy:{createdAt:'asc'}})
  return <main className="section order-shell">
    <div style={{textAlign:'center',marginBottom:22}}><span className="eyebrow">Pedido personalizado</span><h1 style={{fontSize:'clamp(40px,5vw,56px)',marginBottom:10}}>Configura tu arreglo</h1><p className="muted">Completa los datos por secciones. Podrás revisar tu pedido antes de finalizar el proceso.</p></div>
    <div className="progress" aria-label="Progreso"><span className="active"/><span className="active"/><span className="active"/><span className="active"/></div>
    {ps.length===0?<div className="empty">No hay productos disponibles en este momento.</div>:
    <form className="card form-card" action="/api/orders" method="post">
      <section className="form-section">
        <div className="form-section-title"><span className="step-number">1</span><div><h3>Elige el diseño</h3><p>Selecciona el arreglo que deseas personalizar.</p></div></div>
        <label htmlFor="productId">Producto</label><select id="productId" name="productId" defaultValue={searchParams.product||ps[0]?.id} required>{ps.map(p=><option key={p.id} value={p.id}>{p.name} — ${Number(p.price).toLocaleString('es-MX')} MXN</option>)}</select>
      </section>
      <section className="form-section">
        <div className="form-section-title"><span className="step-number">2</span><div><h3>Personaliza las flores</h3><p>La base mantiene la estética Blanco Total.</p></div></div>
        <div className="row"><div><label htmlFor="flowerBase">Flor incluida</label><select id="flowerBase" name="flowerBase"><option value="LILIES">Lilis</option><option value="GERBERAS">Gerberas</option></select></div><div><label htmlFor="sunflowers">Agregar girasoles</label><select id="sunflowers" name="sunflowers"><option value="false">No agregar</option><option value="true">Sí, agregar</option></select></div></div>
        <div className="choice-note">Las lilis o gerberas forman parte de la selección base. Los girasoles se consideran un elemento adicional según disponibilidad.</div>
      </section>
      <section className="form-section">
        <div className="form-section-title"><span className="step-number">3</span><div><h3>Mensaje de cinta</h3><p>Escribe exactamente el texto que deberá imprimirse.</p></div></div>
        <label htmlFor="ribbonText">Texto exacto para cinta térmica *</label><textarea id="ribbonText" name="ribbonText" rows={4} placeholder="Ej. Con cariño, Familia González" required/>
      </section>
      <section className="form-section">
        <div className="form-section-title"><span className="step-number">4</span><div><h3>Datos de contacto y entrega</h3><p>Esta información será utilizada para identificar y coordinar tu pedido.</p></div></div>
        <div className="row"><div><label htmlFor="customerName">Nombre completo *</label><input id="customerName" name="customerName" placeholder="Nombre del cliente" required/></div><div><label htmlFor="phone">Teléfono *</label><input id="phone" name="phone" inputMode="tel" placeholder="961 000 0000" required/></div></div>
        <label htmlFor="email">Correo electrónico</label><input id="email" type="email" name="email" placeholder="correo@ejemplo.com"/>
        <label htmlFor="deliveryNotes">Notas de entrega</label><textarea id="deliveryNotes" name="deliveryNotes" rows={3} placeholder="Dirección, referencias, horario o instrucciones especiales"/>
        <div className="notice" style={{marginBottom:18}}>Verifica cuidadosamente el texto de la cinta y tus datos antes de continuar.</div>
        <button className="btn gold" style={{width:'100%'}}>Generar pedido y continuar al pago →</button>
      </section>
    </form>}
  </main>
}
