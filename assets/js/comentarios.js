// ============================================================
// SCRIPT DE COMENTÁRIOS - 642 COMENTÁRIOS ÚNICOS
// Todos os comentários são relevantes para o guia de orações
// ============================================================

(function() {
  'use strict';

  // ========== NOMES ==========
  var nomes = [
    "Ana Paula", "Carlos Eduardo", "Mariana Silva", "José Augusto", "Fernanda Lima",
    "Rafael Santos", "Juliana Costa", "Lucas Oliveira", "Camila Rodrigues", "Paulo Henrique",
    "Tatiana Souza", "Bruno Almeida", "Patrícia Gomes", "Daniel Martins", "Larissa Fernandes",
    "André Carvalho", "Beatriz Nogueira", "Felipe Rocha", "Marcela Ribeiro", "Diego Pereira",
    "Renata Castro", "Thiago Melo", "Aline Duarte", "Rodrigo Lopes", "Vanessa Torres",
    "Fabrício Silva", "Letícia Araújo", "Gustavo Barbosa", "Priscila Santos", "Eduardo Oliveira",
    "Carolina Mendes", "Igor Ferreira", "Natália Costa", "Fernando Alves", "Luana Gomes",
    "Pedro Henrique", "Daniela Souza", "Alexandre Lima", "Caroline Reis", "Vinícius Moraes",
    "Isabela Ribeiro", "Ricardo Lopes", "Samara Cruz", "William Santos", "Cristina Machado",
    "Anderson Lima", "Jéssica Rocha", "Marcos Vinícius", "Mariane Silva", "Leandro Nascimento",
    "Patrícia Oliveira", "Rodrigo Silva", "Bruna Souza", "Guilherme Santos", "Amanda Costa",
    "Gabriela Lima", "Fábio Rodrigues", "Luciana Almeida", "Mateus Carvalho", "Débora Nogueira",
    "Renato Silva", "Helena Rocha", "Rafaela Santos", "Márcio Oliveira", "Evelyn Mendes",
    "Vitor Hugo", "Tainá Lopes", "Alexandre Dias", "Gabrielle Silva", "Wesley Oliveira",
    "Karen Costa", "André Luiz", "Tatiane Pereira", "José Roberto", "Bruna Tavares",
    "Eduarda Martins", "Mário Sérgio", "Vanessa Araújo", "Gustavo Henrique", "Mirella Santos"
  ];

  // ========== CIDADES ==========
  var cidades = [
    "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Porto Alegre, RS",
    "Curitiba, PR", "Salvador, BA", "Brasília, DF", "Fortaleza, CE",
    "Recife, PE", "Goiânia, GO", "Florianópolis, SC", "Campinas, SP",
    "Vitória, ES", "Manaus, AM", "Belém, PA", "Natal, RN", "João Pessoa, PB",
    "Maceió, AL", "Aracaju, SE", "Teresina, PI", "São Luís, MA", "Campo Grande, MS",
    "Cuiabá, MT", "Santos, SP", "Niterói, RJ", "Uberlândia, MG", "Caxias do Sul, RS",
    "Londrina, PR", "Feira de Santana, BA", "Joinville, SC", "Contagem, MG",
    "São José dos Pinhais, PR", "Diadema, SP", "Aparecida de Goiânia, GO", "Mauá, SP",
    "Campo Largo, PR", "Ouro Preto, MG", "Teófilo Otoni, MG", "Governador Valadares, MG"
  ];

  // ========== CORES ==========
  var cores = [
    "#9c7a2a", "#7a5a1f", "#7a2432", "#a8791f", "#b8860b",
    "#5a1a26", "#8f6a1c", "#4a1a22", "#6b4a1a", "#9a6a2a",
    "#2d5a27", "#8b4513", "#4a2c6b", "#1a4a6b", "#6b1a4a",
    "#2a6b4a", "#6b4a2a", "#4a6b2a", "#2a4a6b", "#6b2a4a",
    "#1a6b4a", "#4a2a6b", "#6b1a2a", "#2a6b1a", "#6b4a1a"
  ];

  // ========== FUNÇÕES ==========
  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomDate() {
    var now = Date.now();
    var days = Math.floor(Math.random() * 60) * 24 * 60 * 60 * 1000;
    var hours = Math.floor(Math.random() * 24) * 60 * 60 * 1000;
    var mins = Math.floor(Math.random() * 60) * 60 * 1000;
    return now - days - hours - mins;
  }

  function pad(n) { return n < 10 ? '0' + n : n; }

  function formatTime(ts) {
    var diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return diff + 's atrás';
    if (diff < 3600) return Math.floor(diff/60) + 'min atrás';
    if (diff < 86400) return Math.floor(diff/3600) + 'h atrás';
    if (diff < 604800) return Math.floor(diff/86400) + 'd atrás';
    var d = new Date(ts);
    return pad(d.getDate()) + '/' + pad(d.getMonth()+1) + '/' + d.getFullYear();
  }

  function initial(name) {
    return name.charAt(0).toUpperCase();
  }

  // ========== 642 COMENTÁRIOS ÚNICOS ==========
  function gerarComentarios(total) {
    var comentarios = [];
    var usados = new Set();

    // ===== CONSTRUÇÃO DE FRASES ÚNICAS =====
    // Todas as frases são sobre o guia de orações
    
    // 1. FRASES SOBRE EXPERIÊNCIA PESSOAL COM O GUIA (100)
    var experiencia = [
      "Este guia chegou em um momento muito delicado da minha vida, quando eu mais precisava de orientação espiritual.",
      "Minha avó sempre dizia que a oração move montanhas, e depois de usar esse guia, realmente acredito nisso.",
      "Eu estava passando por uma crise de fé, e as palavras desse material me trouxeram de volta ao caminho.",
      "Nunca fui muito religioso, mas algo nesse guia me tocou profundamente e mudou minha perspectiva.",
      "Minha esposa comprou e insistiu para eu ler, hoje agradeço por ela ter sido tão persistente.",
      "A primeira vez que usei uma das orações, senti um arrepio e soube que algo especial estava acontecendo.",
      "Eu orava sempre com pressa, mas esse guia me ensinou a desacelerar e realmente conversar com Deus.",
      "Depois de perder meu emprego, as orações de provisão me deram forças para continuar lutando.",
      "Minha filha me mostrou esse material e desde então não paramos mais de usar juntas.",
      "Sempre tive dificuldade de me concentrar na oração, mas as palavras desse guia fluem naturalmente.",
      "Quando meu pai ficou doente, a oração de cura foi meu refúgio e me trouxe muita paz.",
      "Comecei a usar por curiosidade, mas hoje é parte indispensável da minha rotina matinal.",
      "Esse guia me mostrou que não preciso de palavras bonitas, só de um coração sincero.",
      "Estava num período de ansiedade constante, e as orações me ajudaram a encontrar serenidade.",
      "Já havia comprado outros livros de oração, mas nenhum me tocou como esse guia.",
      "Minha mãe faleceu há pouco tempo, e as orações de conforto foram meu suporte emocional.",
      "Eu não sabia como orar pela minha família, agora tenho orações específicas para cada um.",
      "A simplicidade desse guia é sua maior força, não precisa de termos complicados.",
      "Depois que comecei a usar, percebi que minha paciência e compreensão melhoraram muito.",
      "Estava afastado da igreja, mas esse guia me reconectou com minha fé de forma gradual.",
      "Minha irmã me enviou o link e foi a melhor indicação que já recebi.",
      "Eu orava apenas quando estava em dificuldade, agora aprendi a orar em todos os momentos.",
      "As palavras desse guia parecem ter sido escritas especialmente para o que estou vivendo.",
      "Senti uma leveza no coração na primeira vez que usei a oração da noite.",
      "Meu marido notou minha mudança de comportamento e também quis começar a usar.",
      "Esse material me ensinou que orar é um diálogo, não um monólogo.",
      "Eu tinha vergonha de orar em voz alta, agora me sinto confortável e confiante.",
      "A oração de gratidão me fez perceber quantas bênçãos eu tenho e não valorizava.",
      "Estava com dificuldades financeiras e as orações de prosperidade me deram esperança.",
      "Minha fé era fraca, mas cada oração desse guia fortaleceu minha crença.",
      "Comecei a usar durante a quarentena e foi o que me manteve são espiritualmente.",
      "As reflexões antes das orações me fazem pensar sobre minhas atitudes diárias.",
      "Já emprestei para três amigas e todas compraram depois de usar.",
      "A oração pela paz interior me ajuda a lidar com o estresse do trabalho.",
      "Meu filho adolescente também começou a usar e isso me deixou muito feliz.",
      "Sinto que minha conexão com Deus ficou mais forte e genuína.",
      "Já fazia tempo que não me sentia tão motivada para orar diariamente.",
      "O formato digital é prático, mas acabei imprimindo para ter sempre à mão.",
      "A oração de proteção me acompanha em todas as viagens que faço.",
      "Sou muito criterioso com o que compro, mas esse guia superou todas as expectativas.",
      "Minha avó tinha um livro de orações antigo, esse guia me lembrou dele com toque moderno.",
      "Estava passando por um divórcio e as orações me deram forças para seguir em frente.",
      "Já recomendei para o grupo de oração da minha igreja e todos aprovaram.",
      "A forma como as orações são estruturadas facilita muito a compreensão.",
      "Sinto que Deus tem respondido minhas orações de maneiras que não esperava.",
      "Nunca imaginei que um PDF pudesse causar tanto impacto na minha vida espiritual.",
      "Comecei a usar há um mês e já noto diferenças significativas no meu dia a dia.",
      "As orações de cura me ajudaram a superar uma depressão profunda.",
      "Minha melhor amiga me indicou e hoje sou muito grata por isso.",
      "O guia me ajudou a entender que a oração não precisa ser longa para ser poderosa.",
      "Estava muito ansioso com o futuro, mas as orações me trouxeram tranquilidade.",
      "Minha mãe e eu usamos juntas todas as manhãs e virou nosso momento especial.",
      "A oração pela família me fez valorizar mais os momentos juntos.",
      "Já li várias vezes e cada leitura revela algo novo e significativo.",
      "Sinto que minha vida espiritual está mais ativa do que nunca.",
      "Comecei a usar por recomendação médica, acredita? E realmente me ajudou.",
      "As palavras são tão sinceras que parecem vir de alguém que me conhece profundamente.",
      "Meu irmão me mostrou esse guia e desde então não paramos de compartilhar experiências.",
      "Estava num momento de dúvidas, e as orações me deram clareza e direção.",
      "A simplicidade das orações é o que mais me encanta, não precisa de grandes palavras.",
      "Sinto que estou mais próximo de Deus e mais em paz comigo mesmo.",
      "Já usei em momentos de alegria e também em momentos de tristeza, sempre funciona.",
      "Minha tia me indicou e hoje indico para todo mundo que conheço.",
      "A oração de gratidão me fez enxergar beleza nas pequenas coisas da vida.",
      "Estava com medo de orar errado, mas esse guia me mostrou que não tem jeito certo.",
      "As orações me acompanham nos bons e maus momentos, são como um amigo fiel.",
      "Já estou no meu segundo ano usando e continuo descobrindo novas profundidades.",
      "Sinto que minha alma está mais leve e meu coração mais aberto.",
      "Comecei a usar depois de uma cirurgia e ajudou muito na minha recuperação.",
      "A oração de proteção me faz sentir segura onde quer que eu esteja.",
      "Minha família notou minha mudança de humor e isso me motivou ainda mais.",
      "Já li outros guias, mas esse tem uma autenticidade que toca a alma.",
      "As reflexões me ajudam a aplicar os ensinamentos no meu dia a dia.",
      "Sinto que tenho mais clareza mental depois que comecei a orar regularmente.",
      "Minha sogra me presenteou com esse guia e foi o melhor presente que ganhei.",
      "A oração pela paz me ajuda a dormir melhor e acordar mais descansada.",
      "Já fiz várias amigas comprarem e todas têm experiências positivas diferentes.",
      "Estava muito irritadiça, mas as orações me ajudaram a ser mais paciente.",
      "As palavras desse guia são um bálsamo para a alma em dias difíceis.",
      "Sinto que minha oração tem mais força e intenção depois que comecei a usar.",
      "Comecei por curiosidade, continuei pela necessidade e hoje é essencial.",
      "Minha avó diz que esse guia é uma bênção, e ela tem toda razão.",
      "A oração de cura me trouxe alívio quando mais precisei.",
      "Já superei várias dificuldades com a ajuda das orações desse guia.",
      "Sinto que minha fé se renovou completamente depois desse material.",
      "As orações me ensinaram a confiar mais no processo da vida.",
      "Minha irmã e eu temos um grupo de oração usando esse guia todas as noites.",
      "Estava procurando algo simples e profundo, e encontrei exatamente isso.",
      "A oração pela família me fez chorar de emoção na primeira vez que li.",
      "Já usei para meditar e também para momentos de reflexão profunda.",
      "Sinto que Deus está mais presente na minha rotina depois que comecei a usar.",
      "As palavras são tão bem escolhidas que parecem poemas.",
      "Minha vida mudou completamente depois que incorporei as orações na minha rotina.",
      "Comecei a usar em um momento de solidão e me senti acolhida.",
      "A oração de gratidão me ensinou a valorizar o que tenho.",
      "Já recomendei para meu chefe e ele também está usando.",
      "Sinto que minha espiritualidade se aprofundou de forma significativa.",
      "As orações são um refúgio em dias de tempestade emocional.",
      "Minha mãe e eu rezamos juntas e isso fortaleceu nossa relação.",
      "Estava com muitas dúvidas sobre o futuro, e as orações me deram direção.",
      "Já usei em momentos de alegria e também de tristeza profunda."
    ];

    // 2. FRASES SOBRE BENEFÍCIOS ESPECÍFICOS DO GUIA (90)
    var beneficios = [
      "Melhorou minha ansiedade de forma significativa em apenas duas semanas usando o guia.",
      "Ajudou minha filha a lidar com bullying na escola através das orações.",
      "Meu sono melhorou muito desde que comecei a orar antes de dormir com o guia.",
      "Reduziu meu estresse no trabalho e me fez mais produtivo.",
      "Aumentou minha paciência com os filhos e com o marido.",
      "Me ajudou a superar vícios com a ajuda das orações.",
      "Melhorou minha autoestima e me fez sentir mais amada por Deus.",
      "Ajudou meu marido a encontrar um novo emprego através da oração.",
      "Reduziu minhas crises de pânico de forma impressionante.",
      "Me ajudou a perdoar pessoas que me magoaram no passado.",
      "Melhorou minha comunicação com minha família.",
      "Aumentou minha gratidão pelas pequenas coisas da vida.",
      "Me ajudou a ter mais disciplina com minhas finanças.",
      "Melhorou minha saúde física e mental.",
      "Ajudou meu filho a se concentrar melhor nos estudos.",
      "Reduziu minha necessidade de controlar tudo e todos.",
      "Me ajudou a lidar melhor com a perda do meu pai.",
      "Melhorou minha relação com minha sogra.",
      "Aumentou minha confiança para tomar decisões importantes.",
      "Me ajudou a encontrar propósito na vida.",
      "Melhorou minha capacidade de perdoar a mim mesma.",
      "Ajudou minha irmã a superar a depressão pós-parto.",
      "Reduziu meus pensamentos negativos recorrentes.",
      "Me ajudou a ter mais esperança no futuro.",
      "Melhorou minha concentração durante o trabalho.",
      "Aumentou minha energia e disposição diária.",
      "Me ajudou a superar o luto pela perda do meu animal de estimação.",
      "Melhorou minha criatividade e inspiração.",
      "Ajudou meu pai a lidar melhor com a aposentadoria.",
      "Reduziu minha impulsividade e me fez mais ponderada.",
      "Me ajudou a ter mais empatia pelos outros.",
      "Melhorou minha capacidade de ouvir as pessoas.",
      "Aumentou minha coragem para enfrentar desafios.",
      "Me ajudou a superar o medo de dirigir.",
      "Melhorou minha relação com meu irmão distante.",
      "Ajudou minha amiga a superar o fim de um relacionamento.",
      "Reduziu minha dependência emocional dos outros.",
      "Me ajudou a ter mais clareza sobre meus objetivos.",
      "Melhorou minha capacidade de lidar com críticas.",
      "Aumentou minha gratidão pela minha família.",
      "Me ajudou a superar o trauma de um acidente.",
      "Melhorou minha paciência no trânsito.",
      "Ajudou meu primo a se livrar da ansiedade social.",
      "Reduziu minha necessidade de aprovação dos outros.",
      "Me ajudou a ter mais autoconfiança.",
      "Melhorou minha capacidade de relaxar e descansar.",
      "Aumentou minha fé em momentos de incerteza.",
      "Me ajudou a superar a culpa por erros do passado.",
      "Melhorou minha relação com minha mãe idosa.",
      "Ajudou minha vizinha a superar a solidão.",
      "Reduziu minha compulsão por compras.",
      "Me ajudou a ter mais foco nos meus projetos.",
      "Melhorou minha capacidade de aceitar mudanças.",
      "Aumentou minha paciência com os colegas de trabalho.",
      "Me ajudou a superar a vergonha de falar em público.",
      "Melhorou minha relação com meu filho adolescente.",
      "Ajudou minha mãe a lidar melhor com a menopausa.",
      "Reduziu minha irritação com barulhos.",
      "Me ajudou a ter mais compaixão pelos outros.",
      "Melhorou minha capacidade de resolver conflitos.",
      "Aumentou minha alegria e entusiasmo pela vida.",
      "Me ajudou a superar o medo da solidão.",
      "Melhorou minha relação com minhas irmãs.",
      "Ajudou meu sobrinho a superar a timidez.",
      "Reduziu minha ansiedade antes de provas importantes.",
      "Me ajudou a ter mais resiliência diante das dificuldades.",
      "Melhorou minha capacidade de perdoar.",
      "Aumentou minha serenidade em situações de pressão.",
      "Me ajudou a superar o ciúmes no relacionamento.",
      "Melhorou minha concentração na leitura da Bíblia.",
      "Ajudou minha tia a superar a síndrome do ninho vazio.",
      "Reduziu minha necessidade de estar sempre ocupada.",
      "Me ajudou a ter mais paciência no processo de cura.",
      "Melhorou minha capacidade de ouvir a Deus.",
      "Aumentou minha disposição para ajudar os outros.",
      "Me ajudou a superar a procrastinação.",
      "Melhorou minha relação com minhas colegas de trabalho.",
      "Ajudou minha prima a superar a ansiedade de separação.",
      "Reduziu meu medo de perder entes queridos.",
      "Me ajudou a ter mais esperança em dias nublados.",
      "Melhorou minha capacidade de ser grata.",
      "Aumentou minha fé para ver milagres.",
      "Me ajudou a superar a tristeza profunda.",
      "Melhorou minha relação com Deus e comigo mesma.",
      "As orações me ajudaram a encontrar paz interior.",
      "O guia transformou minha maneira de enxergar a vida.",
      "Minha saúde emocional melhorou significativamente.",
      "Aprendi a confiar mais em Deus com as orações do guia.",
      "As orações me deram forças para enfrentar cada dia."
    ];

    // 3. FRASES SOBRE DESCOBERTAS COM O GUIA (80)
    var descobertas = [
      "Descobri que orar não precisa ser complicado, só precisa ser sincero.",
      "Aprendi que Deus ouve até mesmo as orações mais simples.",
      "Percebi que posso orar em qualquer lugar, não só na igreja.",
      "Descobri o poder da oração diária na minha vida.",
      "Aprendi que a gratidão transforma a maneira como vemos o dia.",
      "Percebi que as orações da manhã definem meu dia inteiro.",
      "Descobri que orar me faz mais paciente com as pessoas.",
      "Aprendi que a oração é um diálogo, não uma fórmula.",
      "Percebi que Deus quer ouvir minhas preocupações mais profundas.",
      "Descobri que orar me traz paz em momentos de caos.",
      "Aprendi que posso orar mesmo quando não sei o que dizer.",
      "Percebi que a oração fortalece minha fé diariamente.",
      "Descobri que a oração me ajuda a tomar melhores decisões.",
      "Aprendi que posso orar antes de dormir e acordar mais leve.",
      "Percebi que as orações de gratidão me fazem feliz.",
      "Descobri que orar pela família muda a dinâmica do lar.",
      "Aprendi que a oração de cura é poderosa.",
      "Percebi que Deus trabalha através das minhas orações.",
      "Descobri que a oração me ajuda a perdoar mais facilmente.",
      "Aprendi que não preciso de palavras bonitas para orar.",
      "Percebi que a oração é meu momento com Deus.",
      "Descobri que posso orar usando minhas próprias palavras.",
      "Aprendi que a oração perseverante traz resultados.",
      "Percebi que orar muda minha perspectiva sobre os problemas.",
      "Descobri que a oração me dá força para continuar.",
      "Aprendi que posso orar em voz alta ou em silêncio.",
      "Percebi que Deus responde minhas orações de formas inesperadas.",
      "Descobri que a oração me ajuda a controlar a ansiedade.",
      "Aprendi que a oração pela manhã me prepara para o dia.",
      "Percebi que orar com fé faz toda diferença.",
      "Descobri que posso orar enquanto faço outras atividades.",
      "Aprendi que a oração é uma conversa com o Pai.",
      "Percebi que Deus conhece meu coração antes mesmo de eu orar.",
      "Descobri que a oração me ajuda a ser mais grata.",
      "Aprendi que posso orar sobre qualquer assunto.",
      "Percebi que a oração transforma minha mente.",
      "Descobri que orar me aproxima de Deus.",
      "Aprendi que a oração é um ato de amor.",
      "Percebi que Deus sempre ouve minhas orações.",
      "Descobri que a oração me traz clareza mental.",
      "Aprendi que posso orar mesmo quando estou com raiva.",
      "Percebi que a oração me ajuda a ser melhor pessoa.",
      "Descobri que Deus usa minhas orações para me abençoar.",
      "Aprendi que a oração é minha arma espiritual.",
      "Percebi que orar me faz mais consciente de mim mesma.",
      "Descobri que a oração tem poder transformador.",
      "Aprendi que posso orar por qualquer pessoa.",
      "Percebi que a oração me dá esperança.",
      "Descobri que Deus honra a oração sincera.",
      "Aprendi que a oração me fortalece espiritualmente.",
      "Percebi que orar é uma escolha diária.",
      "Descobri que a oração me ajuda a ser mais positiva.",
      "Aprendi que Deus se importa com minhas orações.",
      "Percebi que a oração me conecta ao divino.",
      "Descobri que posso orar em qualquer momento do dia.",
      "Aprendi que a oração me ajuda a superar dificuldades.",
      "Percebi que Deus é fiel para responder minhas orações.",
      "Descobri que a oração me traz tranquilidade.",
      "Aprendi que posso orar com meu coração aberto.",
      "Percebi que a oração me faz enxergar o melhor da vida.",
      "Descobri que Deus ouve até o meu suspiro.",
      "Aprendi que a oração é um presente precioso.",
      "Percebi que orar me faz sentir amada por Deus.",
      "Descobri que a oração me ajuda a ser mais compassiva.",
      "Aprendi que posso orar com fé e confiança.",
      "Percebi que a oração me orienta nas decisões.",
      "Descobri que Deus age através das minhas orações.",
      "Aprendi que a oração me dá paz no coração.",
      "Percebi que orar é um ato de entrega.",
      "Descobri que a oração me ajuda a soltar o que não posso controlar.",
      "Aprendi que Deus tem propósito em cada oração.",
      "Percebi que a oração me faz mais humana.",
      "Descobri que posso orar mesmo duvidando.",
      "Aprendi que a oração me aproxima das pessoas.",
      "Percebi que Deus usa a oração para me moldar.",
      "Descobri que a oração é minha âncora em dias tempestuosos.",
      "Aprendi que posso orar e deixar com Deus.",
      "Descobri que a oração me ajuda a ser mais paciente.",
      "Aprendi que cada oração tem seu propósito específico."
    ];

    // 4. FRASES SOBRE MOMENTOS ESPECÍFICOS DE ORAÇÃO (100)
    var momentos = [
      "Na manhã do casamento da minha filha, usei a oração de bênção do guia.",
      "No dia que perdi meu emprego, a oração de provisão me sustentou.",
      "Quando minha neta nasceu prematura, a oração de cura me deu forças.",
      "No aniversário de 50 anos do meu marido, fiz uma oração de gratidão.",
      "Quando meu filho fez o vestibular, orei pela sua sabedoria.",
      "No dia da formatura da minha irmã, agradeci por essa conquista.",
      "Quando meu pai foi diagnosticado com câncer, orei pela sua cura.",
      "No primeiro dia do ano, fiz uma oração de renovação.",
      "Quando comprei minha primeira casa, agradeci a Deus pela conquista.",
      "No nascimento do meu neto, orei pela sua vida e saúde.",
      "Quando superei a depressão, agradeci por cada dia de vitória.",
      "No dia que meu irmão se casou, orei pela felicidade do casal.",
      "Quando minha mãe fez cirurgia, orei pela sua recuperação.",
      "No dia que ganhei uma promoção, agradeci a Deus pela oportunidade.",
      "Quando meu sobrinho foi batizado, orei por sua caminhada cristã.",
      "No Natal em família, fiz uma oração de união e amor.",
      "Quando superei um vício, agradeci a Deus pela libertação.",
      "No dia da Páscoa, refleti sobre o sacrifício de Jesus.",
      "Quando minha amiga perdeu o marido, orei pelo seu conforto.",
      "No dia que comecei um novo negócio, orei por sabedoria.",
      "Quando meu filho se formou, agradeci por sua dedicação.",
      "No aniversário da minha mãe, fiz uma oração de bênção.",
      "Quando meu marido viajou a trabalho, orei pela sua proteção.",
      "No dia que me aposentei, agradeci por toda a trajetória.",
      "Quando minha filha se mudou de país, orei pela sua adaptação.",
      "No Domingo de Ramos, refleti sobre a entrada de Jesus em Jerusalém.",
      "Quando superei uma doença, agradeci pela minha recuperação.",
      "No dia do meu aniversário, agradeci por mais um ano de vida.",
      "Quando meu primo se casou, orei pela felicidade do casal.",
      "No Dia das Mães, fiz uma oração especial pela minha mãe.",
      "Quando minha irmã ganhou um bebê, orei pela saúde do recém-nascido.",
      "No dia que fiz uma viagem importante, orei por proteção.",
      "Quando meu pai se aposentou, agradeci por sua carreira.",
      "No Réveillon, fiz uma oração de agradecimento pelo ano.",
      "Quando meu filho passou no ENEM, agradeci a Deus.",
      "No dia que comecei terapia, orei por cura interior.",
      "Quando minha tia faleceu, orei pelo seu descanso eterno.",
      "No Dia dos Pais, fiz uma oração especial pelo meu pai.",
      "Quando comprei um carro novo, agradeci pela conquista.",
      "No dia que fui promovido, agradeci pela bênção.",
      "Quando minha sobrinha se formou, orei pela sua nova fase.",
      "No dia que fiz as pazes com meu irmão, agradeci pela reconciliação.",
      "Quando meu neto aprendeu a andar, agradeci por cada passo.",
      "No Dia dos Namorados, fiz uma oração pelo meu relacionamento.",
      "Quando superei um trauma, agradeci pela minha cura emocional.",
      "No dia que comecei um novo trabalho, orei por sabedoria.",
      "Quando minha filha engravidou, orei pela saúde do bebê.",
      "No dia que me batizei, agradeci por essa nova fase.",
      "Quando meu amigo se recuperou, agradeci pela sua saúde.",
      "No dia que fiz 60 anos, agradeci pela vida e experiência.",
      "Quando minha mãe completou 80 anos, fiz uma oração de gratidão.",
      "No dia que comecei a fazer faculdade, orei por sabedoria.",
      "Quando meu pai passou mal, orei pela sua recuperação.",
      "No Dia do Trabalho, agradeci pelo meu emprego.",
      "Quando minha irmã se divorciou, orei pelo seu recomeço.",
      "No dia que fui demitido, orei por um novo caminho.",
      "Quando meu filho viajou, orei pela sua proteção.",
      "No dia que comecei um novo hobby, agradeci por novas descobertas.",
      "Quando minha sobrinha passou no concurso, agradeci pela conquista.",
      "No Dia das Crianças, fiz uma oração pelas crianças do mundo.",
      "Quando meu marido fez aniversário, fiz uma oração de bênção.",
      "No dia que completei 10 anos de casada, agradeci pela família.",
      "Quando minha amiga se curou, agradeci pela saúde dela.",
      "No dia que mudei de cidade, orei por adaptação.",
      "Quando meu neto nasceu, agradeci pela nova vida.",
      "No dia que me formei, agradeci por cada etapa.",
      "Quando minha mãe fez aniversário, fiz uma oração especial.",
      "No dia que encontrei um amor, agradeci a Deus.",
      "Quando meu pai foi operado, orei pela cirurgia.",
      "No dia que viajei para fora, orei por proteção.",
      "Quando meu sobrinho se casou, orei pela sua nova família.",
      "No dia que fiz 40 anos, agradeci pela metade da vida.",
      "Quando minha filha foi para faculdade, orei pela sua jornada.",
      "No dia que comecei um projeto novo, orei por sucesso.",
      "Quando minha irmã se formou, agradeci por sua conquista.",
      "No Dia da Mulher, fiz uma oração por todas as mulheres.",
      "Quando meu marido viajou, orei por sua segurança.",
      "No dia que resolvi uma dívida, agradeci pela solução.",
      "Quando meu filho ganhou um prêmio, agradeci por sua dedicação.",
      "No dia que comecei a escrever, orei por inspiração.",
      "Quando minha amiga se casou, orei pelo novo casal.",
      "No dia que fiz uma cirurgia, orei pela minha saúde.",
      "Quando meu neto começou a escola, orei por seu aprendizado.",
      "No dia que comprei minha casa própria, agradeci pela conquista.",
      "Quando minha mãe se curou, agradeci pela sua saúde.",
      "No dia que fiz uma viagem espiritual, orei por crescimento.",
      "Quando meu pai fez aniversário, fiz uma oração de bênção.",
      "No dia que comecei dieta, orei por disciplina.",
      "Quando minha filha passou no vestibular, agradeci a Deus.",
      "No dia que fiz uma doação, agradeci por poder ajudar.",
      "Quando meu sobrinho se formou, orei por seu futuro.",
      "No dia que completei 70 anos, agradeci pela vida longa.",
      "Quando minha irmã viajou, orei pela sua viagem.",
      "No dia que comecei um curso novo, orei por aprendizado.",
      "Quando meu marido se aposentou, agradeci por sua carreira.",
      "No dia que me mudei para nova cidade, orei por adaptação.",
      "Quando minha neta começou a andar, agradeci a Deus.",
      "No dia que ganhei um neto, orei pela sua vida."
    ];

    // 5. FRASES SOBRE TESTEMUNHOS DO GUIA (90)
    var testemunhos = [
      "Meu filho parou de ter pesadelos depois que comecei a orar com ele usando o guia.",
      "Consegui fechar um contrato importante depois de orar por direção.",
      "Minha saúde melhorou significativamente após as orações de cura do guia.",
      "Meu relacionamento com meu esposo se transformou com as orações em família.",
      "Encontrei paz em meio ao caos da minha rotina com as orações.",
      "Minha ansiedade diminuiu e hoje consigo dormir melhor.",
      "Consegui perdoar meu pai depois de anos de mágoa com a oração.",
      "Minha filha voltou a falar comigo após meses de silêncio.",
      "Ganhei forças para enfrentar o tratamento do câncer.",
      "Minha depressão melhorou com a oração diária do guia.",
      "Consegui superar a morte do meu filho com a ajuda das orações.",
      "Meu casamento foi restaurado depois de anos de crise.",
      "Encontrei um propósito para minha vida depois de orar com o guia.",
      "Minha empresa cresceu depois que comecei a orar por ela.",
      "Meu filho se livrou das drogas com a ajuda das orações.",
      "Consegui me livrar de vícios que me atormentavam.",
      "Minha fé foi restaurada depois de um período de dúvidas.",
      "Meu irmão se converteu depois que orei por ele.",
      "Consegui superar o luto pela perda da minha mãe.",
      "Minha filha engravidou depois de anos tentando.",
      "Meu pai se curou de uma doença grave.",
      "Consegui sair da depressão pós-parto.",
      "Minha mente se acalmou e hoje penso com mais clareza.",
      "Meu filho foi aprovado no vestibular dos sonhos.",
      "Consegui perdoar a mim mesma por erros do passado.",
      "Minha família se uniu depois de muitos desentendimentos.",
      "Encontrei coragem para recomeçar em outra cidade.",
      "Meu filho autista melhorou a comunicação.",
      "Consegui emagrecer após orar por disciplina.",
      "Minha confiança aumentou e hoje falo em público sem medo.",
      "Meu marido conseguiu um emprego melhor.",
      "Consegui superar o medo de dirigir.",
      "Minha filha se casou com um homem abençoado.",
      "Meu pai se aposentou em paz depois de orar por direção.",
      "Consegui me livrar da insônia.",
      "Minha mãe se curou da depressão.",
      "Meu irmão voltou a frequentar a igreja.",
      "Consegui superar a culpa por não ter sido uma mãe perfeita.",
      "Minha empresa se recuperou da crise financeira.",
      "Meu filho superou a ansiedade escolar.",
      "Consegui me reconectar com Deus depois de anos afastado.",
      "Minha irmã se casou depois de muito tempo solteira.",
      "Meu pai aceitou Jesus depois de muitos anos resistindo.",
      "Consegui comprar minha casa própria.",
      "Minha mãe se curou da hipertensão.",
      "Meu filho se livrou da gagueira.",
      "Consegui superar o medo da solidão.",
      "Minha amiga se curou do câncer de mama.",
      "Meu irmão saiu das dívidas.",
      "Consegui me tornar uma pessoa mais paciente.",
      "Minha filha passou no concurso público.",
      "Meu pai se livrou do alcoolismo.",
      "Consegui superar a timidez extrema.",
      "Minha empresa contratou mais funcionários.",
      "Meu filho melhorou as notas na escola.",
      "Consegui me tornar mais grata pela vida.",
      "Minha mãe se aposentou em paz.",
      "Meu irmão encontrou um bom emprego.",
      "Consegui viajar para o exterior.",
      "Minha filha se curou da asma.",
      "Meu pai teve um novo amor.",
      "Consegui escrever meu primeiro livro.",
      "Minha amiga engravidou depois de anos tentando.",
      "Meu irmão superou a depressão.",
      "Consegui aprender a tocar violão.",
      "Minha mãe fez uma cirurgia bem sucedida.",
      "Meu filho se livrou do bullying.",
      "Consegui me mudar para o país dos meus sonhos.",
      "Minha empresa recebeu um prêmio.",
      "Meu pai se curou do diabetes.",
      "Consegui fazer a paz com minha sogra.",
      "Minha irmã se formou com honras.",
      "Meu filho ganhou uma bolsa de estudos.",
      "Consegui superar a perda do meu animal de estimação.",
      "Minha mãe se curou da artrite.",
      "Meu irmão se casou com uma mulher maravilhosa.",
      "Consegui publicar um artigo científico.",
      "Minha amiga se livrou da ansiedade.",
      "Meu pai aprendeu a usar o computador.",
      "Consegui abrir meu próprio negócio.",
      "Minha filha se formou em medicina.",
      "Meu irmão se tornou pastor.",
      "Consegui me tornar mais tolerante.",
      "Minha mãe viajou para a Europa.",
      "Meu filho aprendeu a tocar piano.",
      "Consegui me curar de uma doença crônica.",
      "Minha vida foi transformada pelas orações do guia.",
      "Encontrei a paz que tanto procurava com este guia."
    ];

    // ===== COMBINAR TODAS AS FRASES =====
    var todasFrases = [];
    
    todasFrases = todasFrases.concat(experiencia);
    todasFrases = todasFrases.concat(beneficios);
    todasFrases = todasFrases.concat(descobertas);
    todasFrases = todasFrases.concat(momentos);
    todasFrases = todasFrases.concat(testemunhos);

    // Remove duplicatas
    var frasesUnicas = [];
    var seen = new Set();
    for (var i = 0; i < todasFrases.length; i++) {
      var frase = todasFrases[i].trim();
      if (!seen.has(frase)) {
        seen.add(frase);
        frasesUnicas.push(frase);
      }
    }

    // Embaralha
    for (var i = frasesUnicas.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = frasesUnicas[i];
      frasesUnicas[i] = frasesUnicas[j];
      frasesUnicas[j] = temp;
    }

    // Se precisar de mais frases, gera combinações únicas
    while (frasesUnicas.length < total) {
      var f1 = randomItem(experiencia);
      var f2 = randomItem(beneficios);
      var f3 = randomItem(descobertas);
      
      var combinacoes = [
        f1 + " " + f2.toLowerCase(),
        f1 + " " + f3.toLowerCase(),
        f2 + " " + f1.toLowerCase(),
        f2 + " " + f3.toLowerCase(),
        f3 + " " + f1.toLowerCase(),
        f3 + " " + f2.toLowerCase(),
        f1 + ". " + f2,
        f1 + ". " + f3,
        f2 + ". " + f1,
        f2 + ". " + f3,
        f3 + ". " + f1,
        f3 + ". " + f2
      ];
      
      var nova = randomItem(combinacoes);
      if (!seen.has(nova) && nova.length < 250) {
        seen.add(nova);
        frasesUnicas.push(nova);
      }
    }

    // Seleciona as primeiras 'total' frases
    var selecionadas = frasesUnicas.slice(0, total);

    // Cria os comentários
    for (var k = 0; k < selecionadas.length; k++) {
      var nome = randomItem(nomes);
      var cidade = randomItem(cidades);
      var ts = randomDate();
      var cor = randomItem(cores);

      comentarios.push({
        nome: nome,
        cidade: cidade,
        texto: selecionadas[k],
        timestamp: ts,
        cor: cor,
        inicial: initial(nome)
      });
    }

    // Embaralha novamente
    for (var m = comentarios.length - 1; m > 0; m--) {
      var r = Math.floor(Math.random() * (m + 1));
      var aux = comentarios[m];
      comentarios[m] = comentarios[r];
      comentarios[r] = aux;
    }

    // Ordena por timestamp (mais recentes primeiro)
    comentarios.sort(function(a, b) { return b.timestamp - a.timestamp; });

    return comentarios;
  }

  // ========== GERAR HTML ==========
  function renderComentarios(comentarios) {
    var html = '';
    for (var i = 0; i < comentarios.length; i++) {
      var c = comentarios[i];
      html += '<div class="comment-item" style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px;">';
      html += '<div style="width:34px;height:34px;border-radius:50%;background:' + c.cor + ';display:flex;align-items:center;justify-content:center;font-family:\'Fraunces\',serif;font-weight:600;font-size:14px;color:#fff;flex-shrink:0;">' + c.inicial + '</div>';
      html += '<div style="min-width:0;flex:1;">';
      html += '<div style="display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;">';
      html += '<span style="font-size:13px;font-weight:600;color:var(--ink);">' + c.nome + '</span>';
      html += '<span style="font-size:11px;color:var(--ink-mute);">' + formatTime(c.timestamp) + '</span>';
      html += '<span style="font-size:10px;color:var(--ink-mute);">• ' + c.cidade + '</span>';
      html += '</div>';
      html += '<p style="font-size:13px;color:var(--ink-soft);margin:4px 0 0;line-height:1.5;">' + c.texto + '</p>';
      html += '</div>';
      html += '</div>';
    }
    return html;
  }

  // ========== EXECUTAR ==========
  var totalComentarios = 642;
  var lista = gerarComentarios(totalComentarios);
  var htmlCompleto = renderComentarios(lista);

  console.log('// ============================================================');
  console.log('// 642 COMENTÁRIOS COMPLETAMENTE ÚNICOS');
  console.log('// TODOS RELEVANTES PARA O GUIA DE ORAÇÕES');
  console.log('// ============================================================');
  console.log('Total gerado: ' + lista.length + ' comentários');
  console.log('============================================================');
  console.log('\n');
  console.log('// ========== HTML DOS COMENTÁRIOS ==========');
  console.log(htmlCompleto);
  console.log('\n');
  console.log('// ========== PRÉVIA DOS 10 PRIMEIROS ==========');
  for (var i = 0; i < Math.min(10, lista.length); i++) {
    console.log('  ' + (i+1) + '. ' + lista[i].nome + ' (' + lista[i].cidade + ') — ' + lista[i].texto.substring(0, 70) + '...');
  }

  console.log('\n');
  console.log('// ============================================================');
  console.log('// ESTATÍSTICAS:');
  console.log('// - Total de comentários: ' + lista.length);
  console.log('// - Frases únicas: ' + new Set(lista.map(c => c.texto)).size);
  console.log('// - Nomes únicos: ' + new Set(lista.map(c => c.nome)).size);
  console.log('// - Cidades únicas: ' + new Set(lista.map(c => c.cidade)).size);
  console.log('// ============================================================');

  // Exporta para uso
  window._comentariosGerados = {
    total: lista.length,
    lista: lista,
    html: htmlCompleto
  };

})();