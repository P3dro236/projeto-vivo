# Projeto Simulador de Planos VIVO

## Descrição
Este projeto é um simulador de planos da VIVO, desenvolvido utilizando Electron, jQuery e Bootstrap. Ele permite que os usuários selecionem diferentes planos, adicionem ou removam planos e gerem um PDF com as informações selecionadas.

## Estrutura do Projeto
- `package.json`: Arquivo de configuração do projeto, contendo informações sobre dependências, scripts e metadados do projeto.
- `src/index.html`: Página HTML principal do projeto, contendo a estrutura básica da interface do usuário.
- `src/scripts/main.js`: Script principal que inicializa a aplicação, configurando os planos e adicionando listeners aos botões.
- `src/scripts/buttons.js`: Contém funções para adicionar, remover e atualizar planos na interface do usuário.
- `src/scripts/listeners.js`: Define os listeners para os botões de adicionar e remover planos, bem como para o botão de gerar PDF.
- `src/scripts/plans.js`: Contém a lista de planos disponíveis.
- `createPdf.js`: Script para gerar um PDF utilizando Puppeteer.

## Funcionalidades
- Adicionar Plano: Permite adicionar um novo plano à lista de planos selecionados.
- Remover Plano: Permite remover um plano da lista de planos selecionados.
- Atualizar Planos: Atualiza a lista de opções de planos disponíveis.
- Gerar PDF: Gera um PDF com as informações dos planos selecionados.

## Melhorias e Sugestões
1. **Validação de Formulário**: Adicionar validações mais robustas para garantir que os usuários selecionem planos válidos antes de adicionar ou gerar o PDF.
2. **Internacionalização**: Implementar suporte para múltiplos idiomas, permitindo que o aplicativo seja utilizado por uma audiência mais ampla.
3. **Testes Automatizados**: Adicionar testes automatizados para garantir a qualidade e a estabilidade do código.
4. **Melhoria na Interface do Usuário**: Melhorar a interface do usuário para torná-la mais intuitiva e amigável.
5. **Feedback Visual**: Adicionar feedback visual (como animações ou mensagens de confirmação) para ações como adicionar ou remover planos.
6. **Persistência de Dados**: Implementar uma forma de salvar os dados selecionados localmente, para que os usuários possam retomar de onde pararam.
7. **Refatoração de Código**: Refatorar o código para melhorar a legibilidade e a manutenção, utilizando práticas recomendadas de desenvolvimento.
8. **Documentação**: Melhorar a documentação do código, adicionando comentários detalhados e instruções de uso.

## Dependências
- Electron: Framework para criar aplicações desktop com JavaScript, HTML e CSS.
- jQuery: Biblioteca JavaScript para manipulação de DOM.
- Bootstrap: Framework CSS para desenvolvimento de interfaces responsivas.
- Puppeteer: Biblioteca para controle de navegadores headless, utilizada para gerar PDFs.

## Scripts
- `start`: Inicia a aplicação Electron.
- `test`: Script de teste placeholder.

## Autor
- Pedro Henrique Gonçalves

## Licença
- ISC License.