# preview-deploy

Prend des screenshots Playwright de l'appli, les montre à l'utilisateur, et ne déploie sur Vercel **que** si l'utilisateur valide.

## Étapes à suivre impérativement

1. **Build** l'appli Next.js :
   ```bash
   npm run build
   ```

2. **Démarre** le serveur de prévisualisation en arrière-plan :
   ```bash
   npm run start &
   SERVER_PID=$!
   sleep 3
   ```

3. **Lance le script Playwright** pour capturer les screenshots :
   ```bash
   node scripts/playwright-screenshot.js http://localhost:3000
   ```

4. **Envoie les screenshots à l'utilisateur** via l'outil SendUserFile avec tous les fichiers du dossier `screenshots/`.

5. **Pose la question** (via AskUserQuestion) : "Les screenshots te conviennent-ils ? Je déploie sur Vercel ?"
   - Option 1 : "✅ Oui, déployer" → passe à l'étape 6
   - Option 2 : "❌ Non, j'ai des corrections à faire" → arrête tout, laisse l'utilisateur corriger

6. **Si l'utilisateur valide** : déploie sur Vercel production :
   ```bash
   kill $SERVER_PID 2>/dev/null
   vercel deploy --prod --yes
   ```

7. Confirme l'URL de production déployée.

## Notes
- Arrête toujours le serveur de prévisualisation après usage (`kill $SERVER_PID`).
- Si `vercel` n'est pas encore configuré (pas de `.vercel/`), lance `vercel link --yes` d'abord.
- Ne déploie JAMAIS sans validation explicite de l'utilisateur.
