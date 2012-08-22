# SelectBr

Caixas de seleção para todos os estados e cidades brasileiras.

- Cross-browser, funciona onde funciona jQuery;
- Já vem com a lista de estados/cidades;
- Mantém seleção após submissão da página;
- Fácil de usar e não polui a marcação;
- Fallback para campos de texto comuns;

## Como usa ?

No seu HTML você escreve:

    <input type="text" data-brazil-state="1">
    <input type="text" data-brazil-city="1">

O número `1` alí identifica o parzinho de campos que devem estar conectados. Pode ser qualquer coisa, usei um número para facilitar. Assim você pode ter vários campos desses na mesma página.

No seu JavaScript:

    $(function() {
      $.selectbr();
    });

E pronto!

Lembre-se de hospedar também o `brazil.json` que é o arquivo que contém a lista de cidades e estados.

O caminho padrão para o arquivo é `/brazil.json` ou seja, na raiz do sei site, mas se você quiser colocá-lo em outro lugar, basta passar esse novo caminho como argumento da chamada do plugin:

    $.selectbr('/statis/brazil.json');

## Precisa do que ?

- jQuery 1.7 ou maior;

## Adorei, como posso colaborar ?

Pelo GitHub mesmo:

1. faça um fork do projeto clicando no botão ali em cima;
2. crie um novo branch para sua função/correção com o comando `git checkout -b novo_recurso`;
3. faça as alterações que deseja e suba suas modificações com `git commit -am "meu recurso faz isso, isso e aquilo; git push`"
4. volte aqui no GitHub, na página do seu fork e clique no botão de *Pull Request*;
5. nos comentários explique porque você fez as alterações que fez e o que mudou;

Agradeço desde já seu interesse e boa vontade!
