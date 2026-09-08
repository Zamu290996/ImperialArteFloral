import {prisma} from '@/lib/prisma'
import {getSessionUserId} from '@/lib/auth'
import {redirect} from 'next/navigation'
import Link from 'next/link'
export const dynamic='force-dynamic'

function Side(){return <aside className="admin-sidebar"><div className="admin-title">Imperial Admin</div><div className="admin-sub">Centro de operación</div><nav className="admin-menu"><Link href="/admin">▦ Resumen</Link><Link href="/admin/productos">✦ Productos</Link><Link href="/admin/conmutador">☎ Conmutador</Link><Link href="/inicio">← Volver al sitio</Link></nav></aside>}
const statusLabel=(s:string)=>({NEW:'Nuevo',CONFIRMED:'Confirmado',IN_PROCESS:'En proceso',READY:'Listo',DELIVERED:'Entregado',CANCELLED:'Cancelado'}[s]||s)

export default async function Admin(){
  if(!await getSessionUserId())redirect('/admin/login')
  const [orders,products]=await Promise.all([prisma.order.findMany({include:{items:{include:{product:true}}},orderBy:{createdAt:'desc'},take:25}),prisma.product.count({where:{active:true}})])
  const paid=orders.filter(o=>o.paymentStatus==='PAID').length
  return <main className="admin-layout"><Side/><section className="admin-content">
    <div className="admin-topbar"><div><span className="eyebrow">Panel interno</span><h1 style={{marginTop:12}}>Resumen operativo</h1><p className="muted">Vista rápida de pedidos, pagos y catálogo activo.</p></div><div className="actions"><Link className="btn small" href="/admin/productos">+ Nuevo producto</Link><form action="/api/auth/logout" method="post"><button className="btn secondary small">Cerrar sesión</button></form></div></div>
    <div className="kpi-grid"><div className="kpi-card"><div className="kpi-label">Pedidos recientes</div><div className="kpi">{orders.length}</div></div><div className="kpi-card"><div className="kpi-label">Pagos confirmados</div><div className="kpi">{paid}</div></div><div className="kpi-card"><div className="kpi-label">Productos activos</div><div className="kpi">{products}</div></div></div>
    <div className="card flat"><div className="section-head" style={{marginBottom:18}}><div><h2 style={{marginBottom:6}}>Pedidos recientes</h2><p>Los últimos registros recibidos por la plataforma.</p></div></div>
      {orders.length===0?<div className="empty">Todavía no hay pedidos registrados.</div>:<div className="table-wrap"><table className="table"><thead><tr><th>Folio</th><th>Cliente</th><th>Producto</th><th>Total</th><th>Pago</th><th>Estado</th></tr></thead><tbody>{orders.map(o=><tr key={o.id}><td><b>{o.folio}</b><br/><span className="muted">{new Date(o.createdAt).toLocaleDateString('es-MX')}</span></td><td><b>{o.customerName}</b><br/><span className="muted">{o.phone}</span></td><td>{o.items[0]?.product.name||'—'}</td><td>${Number(o.total).toLocaleString('es-MX')}</td><td><span className={`status ${o.paymentStatus==='PAID'?'paid':'pending'}`}>{o.paymentStatus==='PAID'?'Pagado':'Pendiente'}</span></td><td><span className="status">{statusLabel(o.status)}</span></td></tr>)}</tbody></table></div>}
    </div>
  </section></main>
}
