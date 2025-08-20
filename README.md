# 🏆 G12 - Clubes Brasileiros e Títulos do Brasileirão  

## 📌 Sobre o projeto  
Esse projeto foi desenvolvido como prática de back-end.  
O objetivo é **criar uma base de dados no Supabase** com informações dos principais clubes do Brasil e seus títulos do **Campeonato Brasileiro**, e depois **conectar essa base ao Node.js** usando a biblioteca `@supabase/supabase-js`.  

## 🚀 Tecnologias utilizadas  
- **Node.js**  
- **Supabase (PostgreSQL na nuvem)**  
- **JavaScript (ESM modules)**  
- **Git/GitHub**  

## ⚙️ Funcionalidades  
- Criar uma tabela de clubes brasileiros com:
  - Nome do clube  
  - Estado  
  - Quantidade de títulos do Brasileirão  
- Conectar ao **Supabase** e buscar os dados via API.  
- Exibir no console um relatório organizado com `console.table()`.  

### 📊 Exemplo de saída
```bash
┌─────────┬────────────────────┬─────────────────────┬─────────────┐
│ (index) │ nome               │ estado              │ brasileirao │
├─────────┼────────────────────┼─────────────────────┼─────────────┤
│ 0       │ Flamengo           │ Rio de Janeiro      │ 8           │
│ 1       │ Corinthians        │ São Paulo           │ 7           │
│ 2       │ Palmeiras          │ São Paulo           │ 12          │
└─────────┴────────────────────┴─────────────────────┴─────────────┘
