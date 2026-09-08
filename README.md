# Imperial Arte Floral — NOVATECHZ
Sistema full-stack con catálogo, configurador, pedidos, pago demo, administración, alertas de WhatsApp y módulo PBX/conmutador preparado para integración.

## Puesta en marcha local
1. PostgreSQL disponible.
2. Copiar `.env.example` a `.env`.
3. `npm install`
4. `npx prisma generate`
5. `npm run db:push`
6. `npm run db:seed`
7. `npm run dev`

## Producción
Para que pagos, WhatsApp y telefonía funcionen con dinero/mensajes/llamadas reales, se requieren cuentas y credenciales de los proveedores externos. El conmutador necesita definir proveedor VoIP, número virtual, extensiones, IVR, desvíos y grabación.
