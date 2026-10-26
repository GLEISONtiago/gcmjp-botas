import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = { title: 'GCMJP | Levantamento de Botas Táticas', description: 'Protótipo de levantamento de numeração de botas táticas da GCMJP' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body><header><div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,flexWrap:'wrap'}}><strong>GCMJP · Botas Táticas</strong><nav style={{display:'flex',gap:16}}><Link href="/">Início</Link><Link href="/formulario">Formulário</Link><Link href="/admin">Painel demo</Link></nav></div></header><main className="container">{children}</main><footer className="container muted" style={{fontSize:13}}>Protótipo demonstrativo não oficial · Sem coleta ou armazenamento de dados.</footer></body></html>; }
