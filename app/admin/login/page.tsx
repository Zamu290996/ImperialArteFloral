export default function Login({searchParams}:{searchParams:{error?:string}}){
  return <main className="login-wrap"><div className="card login-card">
    <div className="login-brand"><span className="brand-mark">✦</span><span className="eyebrow">Acceso interno</span><h1 style={{fontSize:38,margin:'14px 0 8px'}}>Administración</h1><p className="muted">Gestiona pedidos, catálogo y operación desde un solo lugar.</p></div>
    {searchParams.error?<div className="notice" style={{marginBottom:16}}>Correo o contraseña incorrectos. Intenta nuevamente.</div>:null}
    <form action="/api/auth/login" method="post"><label htmlFor="email">Correo</label><input id="email" name="email" type="email" autoComplete="username" required/><label htmlFor="password">Contraseña</label><input id="password" name="password" type="password" autoComplete="current-password" required/><button className="btn gold" style={{width:'100%'}}>Ingresar al panel</button></form>
  </div></main>
}
