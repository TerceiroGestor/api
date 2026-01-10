# TerceiroGestor API

API desenvolvida com foco em **modularidade**, **organização de responsabilidades** e **facilidade de evolução**, pensada para atender sistemas administrativos, educacionais e sociais que crescem ao longo do tempo.

## 🎯 Objetivo do Projeto

O **TerceiroGestor API** tem como objetivo servir como um backend flexível e escalável, permitindo que novos módulos sejam adicionados sem comprometer o funcionamento do sistema como um todo.

A ideia central é que o sistema **cresça por partes**, mantendo:
- Código organizado
- Baixo acoplamento
- Facilidade de manutenção
- Clareza de regras de negócio

## 🧩 Conceito de Modularidade

Cada funcionalidade do sistema é pensada como um **módulo independente**, por exemplo:

- Usuários
- Grupos
- Presença
- Atividades
- Indicadores
- Relatórios
- Autenticação

Cada módulo deve conter:
- Suas próprias regras de negócio
- Suas próprias rotas
- Seus próprios serviços
- Seus próprios modelos (quando aplicável)

Isso evita:
- Classes gigantes
- Regras misturadas
- Dependência excessiva entre partes do sistema

## 🏗️ Arquitetura (Visão Geral)

A API segue princípios inspirados em:

- **Separação de responsabilidades**
- **Single Responsibility Principle (SRP)**
- **Código orientado a domínio**
- **Boas práticas de APIs REST**

🏗️ Estrutura do Projeto

O TerceiroGestor API foi estruturado seguindo uma separação clara de responsabilidades, dividindo o sistema em Base da Aplicação (App), Infraestrutura/Core e Módulos de Domínio (Modules).

Essa organização permite que o projeto cresça de forma sustentável, mantendo o código limpo, previsível e de fácil manutenção.
```
./api
├── public/
│   └── index.php
├── src/
│   ├── App/
│   ├── Core/
│   ├── Modules/
│   └── routes.php
├── vendor/
├── composer.json
└── README.md


./api/src/Core/
├── Config/
├── Database/
├── Http/
└── Router/

./api/src/routes.php
src/App/
└── Controllers/

./api/src/Modules/
├── Group/
└── Person/

./api/src/Modules/Person/
├── PersonController.php
└── PersonRepository.php
```

> Cada módulo pode evoluir de forma independente, reduzindo impactos colaterais.

## 🔐 Autenticação

O sistema utiliza autenticação baseada em token, permitindo:
- Sessões seguras
- Controle de acesso por perfil
- Facilidade de integração com frontends web ou mobile

## 🚀 Benefícios do Modelo Adotado

✔ Facilidade para adicionar novas funcionalidades  
✔ Código mais legível e previsível  
✔ Melhor controle de regras de negócio  
✔ Ideal para projetos que evoluem com o tempo  
✔ Excelente para equipes pequenas ou crescimento futuro  

## 📌 Status do Projeto

🛠 Em desenvolvimento  
O projeto está em constante evolução e melhorias estruturais fazem parte do processo.

## 🤝 Contribuição

Sugestões e melhorias são bem-vindas.  
A proposta do projeto incentiva boas práticas e organização desde o início.

---

**Desenvolvido por:**  
Weverton Campos  
