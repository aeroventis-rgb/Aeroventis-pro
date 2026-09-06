# Aeroventis Pro — application Android interne

Application Expo/React Native conçue pour l’équipe Aeroventis :

- calcul indicatif de puissance en BTU/h ;
- création et partage de devis PDF ;
- gestion locale des clients et chantiers ;
- suivi des demandes SAV et entretiens ;
- fonctionnement hors ligne avec stockage sur le téléphone.

## Tester sur Android

1. Installer Node.js puis lancer `npm install` dans ce dossier.
2. Installer **Expo Go** sur le téléphone Android.
3. Lancer `npm start`, puis scanner le QR code avec Expo Go.

## Générer un APK

Installer EAS CLI avec `npm install -g eas-cli`, se connecter avec `eas login`, puis lancer `eas build -p android --profile preview`. La génération nécessite un compte Expo.

Le projet inclut aussi le workflow GitHub Actions **Construire APK Aeroventis**. Après publication sur GitHub, ce workflow compile automatiquement `app-debug.apk`, un APK de test installable, et le place dans les artefacts de l'exécution.

## Limite de la V1

Les données sont locales à chaque appareil. Pour une équipe utilisant plusieurs téléphones, une V2 devra ajouter authentification, base de données partagée, sauvegardes et droits d’accès.

Le calcul BTU est une présélection commerciale, pas un bilan thermique réglementaire. Il faut valider sur site l’isolation, l’orientation, les vitrages, les apports internes et les conditions climatiques.
