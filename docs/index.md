---
hide: [navigation]
---

# Home

Raccolta di appunti, file, slides, etc. relativi al corso di Informatica L31,
dell'Università di Bari "Aldo Moro".

!!! warning "Attenzione"
    Gli appunti sono in fase di stesura e cambiano continuamente.

## Utilizzo offline

Per poter sfogliare gli appunti offline bisogna innanzitutto clonare la
repository dopodiché, utilizzando [Mask][mask][^manual-install]:

```bash linenums="0" title=""
mask bootstrap && mask build
```

Il sito sarà presente nella cartella `./site/` e lo si può sfogliare con un
qualsiasi web browser aprendo il file `index.md`. La pagina visualizzata
dovrebbe essere proprio questa.

## Come contribuire

Per contribuire:

1. clonare la repository:

    <!-- markdownlint-disable code-block-style -->
    === ":material-git: Git"

        ```sh linenums="0" title=""
        git clone https://github.com/sRavioli/L31.git
        ```

    === ":material-github: GitHub CLI"

        ```sh linenums="0" title=""
        gh repo clone sRavioli/L31
        ```
    <!-- markdownlint-enable code-block-style -->

2. recarsi nella cartella (`#!bash cd L31`) e installare i pacchetti python
   richiesti (richiesti: python e [mask][mask]):

    ```bash linenums="0" title=""
    mask bootstrap
    ```

3. avviare il server:

    ```sh linenums="0" title=""
    mask serve --dirty
    ```

    Verrà fatto partire un server al link <http://localhost:8000/L31> che
    ospiterà gli appunti. L'opzione `--dirty` permette di avere dei tempi di
    caricamento più brevi poiché mkdocs compilerà solo la pagina corrente.
    Per interrompere il server bisogna premere ++ctrl+c++.

4. effettuare le modifiche;
5. creare un nuovo ramo con :material-git: Git:

    ```sh linenums="0" title=""
    git checkout -b feat/nuova-feature
    ```

    effettuare gli eventuali commit sullo stesso

    ```sh linenums="0" title=""
    git commit -m "feat: add new feature"
    ```

    effettuare il push del nuovo ramo:

    ```sh linenums="0" title=""
    git push -u origin feat/nuova-feature
    ```

6. recarsi su :material-github: GitHub e aprire una pull request.

## Keymaps

Il sito possiede della mappature dei tasti personalizzate:

- ++h++ e ++l++ – naviga verso la pagina precedente e verso la successiva (se)
  esistono);
- ++k++ e ++j++ – scorri verso l'alto e verso il basso;
- ++g++ e ++shift+g++ – scorri verso l'inizio e verso la fine della pagina;
- ++shift+k++ e ++shift+j++ – naviga verso l'intestazione precedente e verso
  l'intestazione successiva;
- ++shift+h++ – torna alla pagina principale.

[mask]: https://github.com/jacobdeichert/mask#installation

[^manual-install]:
    Nel caso in cui non sia possibile usare [mask][mask], è possibile eseguire
    manualmente i due script. Bisogna aprire il file `maskfile.md`, e recarsi
    nelle sezioni `## bootstrap` e `## build` e eseguire i comandi lì presenti,
    esclusi i messaggi (`#!bash mask msg ... "..."`).
