# Firebase Hosting: preparazione e migrazione

La configurazione pubblica la cartella corrente, inclusi `index.html`, `machines.js` e i PDF del catalogo. Usare il branch di pubblicazione `gh-pages`, non `main`, che contiene dati segnaposto. Questa preparazione non attiva Firebase e non modifica DNS o GitHub Pages.

## Preparare e provare Firebase

1. Accedere alla [console Firebase](https://console.firebase.google.com/) con l'account Google autorizzato e creare o selezionare il progetto corretto. Non condividere credenziali.
2. Installare Firebase CLI (`npm install -g firebase-tools`), poi dalla copia locale di questo branch eseguire:

   ```sh
   firebase login
   firebase projects:list
   firebase use --add
   firebase deploy --only hosting
   ```

   In `firebase use --add` scegliere il progetto appena autorizzato. Il deploy pubblica il sito sull'indirizzo Firebase predefinito; verificare catalogo e apertura dei PDF prima di procedere. Non eseguire il deploy finché il progetto e l'account non sono stati autorizzati.
3. Lasciare GitHub Pages attivo come backup: il branch `gh-pages` e il file `CNAME` non vanno rimossi o modificati per questa prova.

## Spostare il dominio live (solo dopo autorizzazione)

1. Ottenere l'autorizzazione esplicita del titolare del dominio per spostare il traffico live e assicurarsi che l'accesso a Google/Firebase e a GoDaddy sia disponibile.
2. In Firebase Console aprire **Hosting → Add custom domain** e inserire `www.emti-srl.store` (aggiungere il dominio senza `www` solo se si desidera gestirlo separatamente).
3. Seguire la procedura Firebase e copiare dalla console i record DNS richiesti, inclusi eventuali record di verifica. Non indovinare né riutilizzare valori trovati altrove: Firebase può fornire valori diversi per progetto o dominio.
4. Solo dopo l'autorizzazione, accedere a GoDaddy e inserire/sostituire esclusivamente i record indicati dalla console Firebase. Attendere la verifica DNS e che Firebase segnali il dominio connesso e HTTPS attivo prima di considerare conclusa la migrazione.

Firebase configura e rinnova automaticamente il certificato HTTPS per il dominio personalizzato dopo la verifica DNS; propagazione e provisioning possono richiedere tempo. Mantenere GitHub Pages e il suo branch come backup anche dopo il passaggio. Per aggiornare il sito, pubblicare i cambiamenti sul branch corretto e ripetere il deploy Firebase dopo aver verificato i file.
