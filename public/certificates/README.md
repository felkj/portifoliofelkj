# 📄 Certificados PDF Locais

Esta pasta contém os PDFs das suas certificações que você deseja armazenar localmente.

## Como Adicionar um Certificado PDF

### 1. **Copiar o PDF para esta pasta**
   - Coloque seu arquivo PDF aqui (ex: `java-fundamentos.pdf`, `github-essentials.pdf`)
   - **Pasta correta:** `public/certificates/`

### 2. **Atualizar o arquivo de dados**
   - Abra `src/data/certifications.js`
   - Adicione/atualize a certificação com:
   
   ```javascript
   {
     id: 3,
     title: "Java Fundamentos",
     issuer: "FIAP",
     date: "2025",
     credentialUrl: null,                    // Deixe null se usar PDF local
     certificatePdfPath: "java-fundamentos.pdf",  // Nome do arquivo
     badgeUrl: "https://...",
     description: "..."
   }
   ```

### 3. **Pronto!**
   - Quando clicar em "Ver Comprovante", o PDF abrirá no navegador em nova aba
   - **Não faz download** — apenas visualiza como se estivesse navegando

## 📝 Exemplo Prático

Se você tiver um arquivo chamado `aws-certified.pdf`:

```javascript
{
  id: 1,
  title: "AWS Certified Cloud Practitioner",
  issuer: "AWS",
  date: "2025",
  credentialUrl: null,
  certificatePdfPath: "aws-certified.pdf",
  badgeUrl: "https://...",
  description: "Certificação AWS..."
}
```

## ⚠️ Notas Importantes

- Use **apenas o nome do arquivo**, sem caminho completo
- Coloque o arquivo nesta pasta (`public/certificates/`)
- O arquivo será servido quando você fizer `npm start` ou `npm run build`
- Para URLs externas (Credly, EF SET, etc), use `credentialUrl` em vez de `certificatePdfPath`

## 🔄 Ordem de Prioridade

O componente verifica nesta ordem:
1. Se tem `credentialUrl` (URL externa) → usa essa
2. Se tem `certificatePdfPath` (PDF local) → usa essa
3. Se não tem nenhum dos dois → botão não aparece

## 📂 Estrutura Final

```
portifólioFelipeSilva/
├── public/
│   ├── certificates/
│   │   ├── java-fundamentos.pdf
│   │   ├── github-essentials.pdf
│   │   └── README.md (este arquivo)
│   └── ...
├── src/
│   └── ...
```
