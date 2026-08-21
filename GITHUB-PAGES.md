# Publicação no GitHub Pages

O projeto está preparado para publicação automática no GitHub Pages sempre que houver envio à branch `main`. O workflow compila a interface com a base `/concurso-enfermeiro-study/` e publica o conteúdo estático de `dist/public`.

Os ativos visuais permanecem acessíveis por URL pública para que a versão estática não dependa do proxy local de desenvolvimento. A URL esperada do Pages é `https://juniorxam.github.io/concurso-enfermeiro-study/`.

> A primeira execução do workflow configura ou atualiza a implantação. Caso o repositório solicite seleção manual da fonte de publicação, escolha **GitHub Actions** em **Settings → Pages**.
