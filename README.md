# GCMJP Botas Táticas

Protótipo inicial de levantamento de numeração de botas táticas da Guarda Civil Municipal de João Pessoa.

**Não utilizar em produção ou com dados reais.** Não há banco de dados, autenticação, persistência, protocolos reais ou retificação.

## Execução local

Node.js 20.9+:

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Rotas

- `/` — página inicial.
- `/formulario` — simulação de identificação e numeração conforme a tabela Kallucci.
- `/admin` — esqueleto demonstrativo do painel, sem dados reais.

## Regras e pendências

A tabela de palmilha está em `src/lib/medidas.ts`. Não se deve interpolar ou arredondar medidas não fornecidas. Antes de uso oficial, validar a tabela com o fornecedor, obter lista oficial de lotações, definir padrão de matrícula e implementar banco de dados, proteção contra duplicidade, autenticação administrativa, código seguro de retificação, auditoria, relatórios e revisão de privacidade/LGPD.

Esta entrega não conecta Supabase e não publica na Vercel.
