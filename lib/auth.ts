import {SignJWT,jwtVerify} from 'jose'; import {cookies} from 'next/headers';
const s=new TextEncoder().encode(process.env.SESSION_SECRET||'dev-secret'); const C='imperial_session';
export async function createSession(userId:string){const t=await new SignJWT({userId}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(s);cookies().set(C,t,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',path:'/'})}
export async function clearSession(){cookies().set(C,'',{expires:new Date(0),path:'/'})}
export async function getSessionUserId(){const t=cookies().get(C)?.value;if(!t)return null;try{const {payload}=await jwtVerify(t,s);return String(payload.userId)}catch{return null}}
