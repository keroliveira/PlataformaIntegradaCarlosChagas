/* ALTERNÂNCIA DE TEMA CLARO/ESCURO */
const botaoTema = document.querySelector("#alternar-tema");
const iconeTema = botaoTema?.querySelector(".icone-tema");

if (botaoTema && iconeTema) {
  botaoTema.addEventListener("click", () => {
    const temaEscuroAtivo = document.body.classList.toggle("tema-escuro");
    iconeTema.textContent = temaEscuroAtivo ? "☀" : "☾";
    botaoTema.setAttribute(
      "aria-label",
      temaEscuroAtivo ? "Ativar tema claro" : "Ativar tema escuro"
    );
    botaoTema.setAttribute("aria-pressed", String(temaEscuroAtivo));
  });
}

/* IDIOMAS: a preferência fica salva entre as duas páginas */
const traducoes = {
  pt: {
    marcaPlataforma: "Plataforma Integrada",
    marcaCarlos: "Carlos Chagas",
    menuConheca: "CONHEÇA A PLATAFORMA",
    menuContato: "FALE CONOSCO",
    menuEmail: "E-MAIL INSTITUCIONAL",
    menuAjuda: "AJUDA",
    idioma: "ENGLISH",
    idiomaAria: "Mudar para inglês",
    navPrincipal: "Navegação principal",
    acessosLabel: "Acessos à plataforma",
    sobreCarlosLabel: "Sobre Carlos Chagas",
    tituloCarlos: "Carlos Chagas",
    textoCarlos: "Após dois anos de investigações em Lassance (MG) e em Manguinhos (Fiocruz), Carlos Chagas descreveu, em 1909, tanto a doença que leva seu nome como seu agente etiológico (Trypanosoma) e seus transmissores (insetos hematófagos, Trialomideos). Esse feito de descobrir todos os elos da cadeia epidemiológica de uma doença infecciosa foi absolutamente inédito na história da medicina. O nome desta plataforma de dados é uma homenagem do CNPq ao naturalista, médico e sanitarista brasileiro Carlos Chagas.",
    acesso1: "Coordenadores de Programas de Iniciação Científica (PIBIC/PIBITI/PICME)",
    acesso2: "Outros bolsistas",
    acesso3: "Membros de comitês de assessoramento",
    acesso4: "Responsáveis por auxílios",
    acesso5: "Novos usuários",
    acesso6: "Mapas de investimentos",
    acesso7: "Bolsistas de produtividade PQ e DT",
    acesso8: "Gestores institucionais",
    acesso9: "Coordenadores de pós-graduação",
    tituloSobre: "Sobre a Plataforma",
    paragrafo1: "A mais recente base de dados lançada pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico para unir todas as informações referentes aos pesquisadores e usuários da Agência é a Plataforma Integrada Carlos Chagas.",
    paragrafo2: "É uma homenagem do CNPq ao pesquisador, médico e sanitarista Carlos Ribeiro Justiniano das Chagas, responsável pela descoberta do parasita Trypanosoma cruzi, agente causador da tripanossomíase — conhecida como doença de Chagas — e também pela sua contribuição para o conhecimento sobre a epidemiologia da malária.",
    paragrafo3: "A Plataforma Carlos Chagas nasce com importantes funções. Reunindo os dados sobre bolsas, auxílios, encaminhamento de projetos e pedidos de bolsas, andamento dos processos, emissão de pareceres, assinaturas de termos de concessão, relatórios técnicos e de prestação de contas, entre outras facilidades, para pesquisadores brasileiros e estrangeiros, a Plataforma oferece um ambiente personalizado para o seu usuário que poderá acessar todas as informações operacionais disponíveis na Agência.",
    voltar: "Voltar à página principal",
    desenvolvido: "Desenvolvido por",
    rodapeLabel: "Rodapé"
  },
  en: {
    marcaPlataforma: "Integrated Platform",
    marcaCarlos: "Carlos Chagas",
    menuConheca: "ABOUT THE PLATFORM",
    menuContato: "CONTACT US",
    menuEmail: "INSTITUTIONAL EMAIL",
    menuAjuda: "HELP",
    idioma: "PORTUGUÊS",
    idiomaAria: "Switch to Portuguese",
    navPrincipal: "Main navigation",
    acessosLabel: "Platform access",
    sobreCarlosLabel: "About Carlos Chagas",
    tituloCarlos: "Carlos Chagas",
    textoCarlos: "After two years of research in Lassance, Minas Gerais, and at Manguinhos (Fiocruz), Carlos Chagas described, in 1909, both the disease that bears his name and its causative agent (Trypanosoma), as well as its vectors (blood-feeding insects known as triatomines). Discovering every link in the epidemiological chain of an infectious disease was unprecedented in the history of medicine. The name of this data platform honors the Brazilian naturalist, physician, and public health specialist Carlos Chagas.",
    acesso1: "Coordinators of Scientific Initiation Programs (PIBIC/PIBITI/PICME)",
    acesso2: "Other scholarship holders",
    acesso3: "Advisory committee members",
    acesso4: "Grant holders and administrators",
    acesso5: "New users",
    acesso6: "Research investment maps",
    acesso7: "PQ and DT productivity scholarship holders",
    acesso8: "Institutional managers",
    acesso9: "Graduate program coordinators",
    tituloSobre: "About the Platform",
    paragrafo1: "The latest database launched by the National Council for Scientific and Technological Development (CNPq), designed to bring together information about the Agency's researchers and users, is the Carlos Chagas Integrated Platform.",
    paragrafo2: "The platform honors Carlos Ribeiro Justiniano das Chagas, a Brazilian researcher, physician, and public health specialist who discovered the parasite Trypanosoma cruzi, which causes Chagas disease, and contributed to knowledge about malaria epidemiology.",
    paragrafo3: "The Carlos Chagas Platform brings together important services and functions. It provides Brazilian and international researchers with access to information about scholarships, research grants, project submissions, scholarship applications, process tracking, expert reviews, grant agreements, technical reports, and financial accountability reports, among other services. The platform offers users a personalized environment through which they can access the Agency's available operational information.",
    voltar: "Back to the home page",
    desenvolvido: "Developed by",
    rodapeLabel: "Footer"
  }
};

function aplicarIdioma(idioma) {
  const idiomaValido = idioma === "en" ? "en" : "pt";
  const textos = traducoes[idiomaValido];

  document.documentElement.lang = idiomaValido === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((elemento) => {
    const chave = elemento.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(textos, chave)) {
      elemento.textContent = textos[chave];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((elemento) => {
    const chave = elemento.dataset.i18nAria;
    if (Object.prototype.hasOwnProperty.call(textos, chave)) {
      elemento.setAttribute("aria-label", textos[chave]);
    }
  });

  const botaoIdioma = document.querySelector("#alternar-idioma");
  if (botaoIdioma) {
    botaoIdioma.textContent = textos.idioma;
    botaoIdioma.setAttribute("aria-label", textos.idiomaAria);
  }

  const botaoVoltar = document.querySelector(".acoes-laterais a");
  if (botaoVoltar) {
    botaoVoltar.setAttribute("aria-label", textos.voltar);
  }

  localStorage.setItem("idiomaPreferido", idiomaValido);
}

const idiomaInicial = localStorage.getItem("idiomaPreferido") || "pt";
aplicarIdioma(idiomaInicial);

document.querySelector("#alternar-idioma")?.addEventListener("click", () => {
  const idiomaAtual = localStorage.getItem("idiomaPreferido") || "pt";
  aplicarIdioma(idiomaAtual === "pt" ? "en" : "pt");
});
