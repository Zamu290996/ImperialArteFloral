import {prisma} from '@/lib/prisma'
import Link from 'next/link'
export const dynamic='force-dynamic'

export default async function Catalogo(){
  const ps=await prisma.product.findMany({where:{active:true},orderBy:{createdAt:'asc'}})
  return <main className="section">
    <div className="section-head">
      <div><span className="eyebrow">Colección Imperial</span><h1 style={{fontSize:'clamp(40px,5vw,58px)',marginBottom:8}}>Catálogo floral</h1><p>Selecciona una pieza y personalízala de acuerdo con el momento.</p></div>
      <div className="actions"><Link className="btn secondary" href="/pedido">Crear pedido directo</Link></div>
    </div>
    {ps.length===0?<div className="empty">Aún no hay productos activos en el catálogo.</div>:
    <div className="grid">{ps.map(p=><article className="card catalog-card" key={p.id}>
      <div className="product-media">{p.imageUrl?<img src={p.imageUrl} alt={p.name}/>:<div className="flower-placeholder"/>}</div>
      <div className="product-body">
        <div><span className="tag">{p.category==='FUNERAL_WREATH'?'Corona fúnebre':'Arreglo comercial'}</span><h2>{p.name}</h2><p>{p.description||'Composición floral de estilo elegante y sobrio.'}</p></div>
        <div className="product-footer"><div className="price">${Number(p.price).toLocaleString('es-MX')}<small>MXN</small></div><Link className="btn small" href={`/pedido?product=${p.id}`}>Personalizar →</Link></div>
      </div>
    </article>)}</div>}
  </main>
}
