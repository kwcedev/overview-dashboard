Après chaque modification de fichier, fais automatiquement dans cet ordre :
1. git add . && git commit -m "update" && git push
2. source .env && netlify deploy --prod --dir="." --site="$NETLIFY_SITE_ID" --auth="$NETLIFY_AUTH_TOKEN"

Ne demande pas confirmation pour le git push ni pour le déploiement Netlify.
