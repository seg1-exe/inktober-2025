const artworks = [
    {
      id: 1,
      title: "La Chute des anges rebelles",
      artist: "Pieter Brueghel l'Ancien",
      year: 1562,
      description: "La Chute des anges rebelles (aussi connu sous le nom de L'archange Michel terrassant le dragon apocalyptique) est une peinture à l'huile du peintre Pieter Brueghel l'Ancien datée de 1562 et exposée aux musées royaux des beaux-arts de Belgique à Bruxelles, aux côtés de La Chute d'Icare et du Paysage d'hiver avec patineurs et trappe aux oiseaux.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pieter_Bruegel_the_Elder_-_The_Fall_of_the_Rebel_Angels_-_Google_Art_Project.jpg/1920px-Pieter_Bruegel_the_Elder_-_The_Fall_of_the_Rebel_Angels_-_Google_Art_Project.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/La_Chute_des_anges_rebelles"
    },
    {
      id: 2,
      title: "Le Jardin des délices",
      artist: "Jérôme Bosch",
      year: "1503-1504",
      description: "Le Jardin des délices est une peinture à l'huile sur bois du peintre néerlandais Jérôme Bosch, appartenant à la période des primitifs flamands. L'œuvre est structurée en triptyque, format souvent utilisé par les peintres du début du XVe siècle jusqu'au début du XVIIe siècle dans la partie septentrionale de l'Europe. Elle est le plus souvent datée de 1490 à 1500, bien que des chercheurs en avancent la création jusqu'aux années 1480.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/1920px-The_Garden_of_earthly_delights.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/Le_Jardin_des_d%C3%A9lices"
    },
    {
      id: 3,
      title: "Dante et Virgile",
      artist: "William Bouguereau",
      year: 1850,
      description: "Dante et Virgile est un tableau de William Bouguereau peint en 1850. Inspirée de la Divine Comédie de Dante Alighieri (et plus précisément d'une scène se déroulant au chant XXX de l'Enfer : Capocchio mordu au cou par Gianni Schicchi), cette huile sur toile est conservée au musée d'Orsay, à Paris.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg/800px-William_Bouguereau_-_Dante_and_Virgile_-_Google_Art_Project_2.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/Dante_et_Virgile"
    },
    {
      id: 4,
      title: "La Barque de Dante",
      artist: "Eugène Delacroix",
      year: 1822,
      description: "La Barque de Dante ou Dante et Virgile aux enfers est un des premiers tableaux d'Eugène Delacroix. Daté et signé 1822, il l'expose au Salon de la même année qui marquera son entrée officielle parmi les peintres. Bien que cette toile soit sujette à critique, l'État l'acquiert aussitôt.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/La_Barque_de_Dante_%28Delacroix_3820%29.jpg/1280px-La_Barque_de_Dante_%28Delacroix_3820%29.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/La_Barque_de_Dante_(Delacroix)"
    },
    {
      id: 5,
      title: "La Carte de l'Enfer",
      artist: "Sandro Botticelli",
      year: "1485 - 1495",
      description: "La Divine Comédie illustrée par Botticelli est un manuscrit ancien contenant le texte de la Divine Comédie et dont l'illustration a été entamée par Sandro Botticelli. De nos jours, tous les feuillets sont détachés, 84 d'entre eux sont conservés au Kupferstichkabinett de Berlin et huit autres à la Bibliothèque apostolique vaticane.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sandro_Botticelli_-_La_Carte_de_l%27Enfer.jpg/1920px-Sandro_Botticelli_-_La_Carte_de_l%27Enfer.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/Divine_Com%C3%A9die_illustr%C3%A9e_par_Botticelli"
    },
    {
      id: 6,
      title: "Le Triomphe de la Mort",
      artist: "Pieter Brueghel l'Ancien",
      year: 1562,
      description: "Le Triomphe de la Mort (1562) est une œuvre de Pieter Brueghel l'Ancien conservée au musée du Prado à Madrid (Espagne). Ce tableau est une allégorie mettant en scène diverses formes relatives à la mort : crime, exécution, maladie, combat, suicide, mort en couche, noyade. Allégorie de la mort à qui personne n'échappe, on y voit toutes les classes sociales, rois, cardinaux, joueurs de cartes, amants, égaux devant la mort. Un squelette à cheval porte une faux et commande à une horde de squelettes. Une claire inspiration de l'Apocalypse biblique aussi est l'image de deux squelettes munis de filets, tels des pêcheurs d'âmes. Dans le haut de la peinture on voit la mer et une terre déserte, annonciatrice du sort inévitable de cette bataille entre vivants et morts. Si le style est indéniablement inspiré par Jérôme Bosch , l’œuvre s'inspire des xylographies d'Hans Holbein le Jeune",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Triumph_of_Death_by_Pieter_Bruegel_the_Elder.jpg/1920px-The_Triumph_of_Death_by_Pieter_Bruegel_the_Elder.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/Le_Triomphe_de_la_Mort_(Brueghel)"
    },
    {
      id: 7,
      title: "La Porte de l'Enfer",
      artist: "Auguste Rodin",
      year: "1880 - 1917",
      description: "La Porte de l'Enfer est une sculpture monumentale (6,35 × 4 m) du sculpteur français Auguste Rodin, qui constitua tout au long de sa vie son plus important travail et d'où furent extraites pendant plus de 30 ans ses plus fameuses sculptures individuelles dont le célèbre Penseur.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/La_puerta_del_Infierno_.jpg/800px-La_puerta_del_Infierno_.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/La_Porte_de_l%27Enfer"
    },
    {
      id: 8,
      title: "Le Pandemonium",
      artist: "John Martin",
      year: 1841,
      description: "Le Pandemonium est une huile sur toile de 123 × 185 cm exécutée par le peintre anglais John Martin en 1841. Elle est actuellement exposée au Musée du Louvre à Paris. Le Pandémonium peut être considéré comme l'aboutissement de la carrière de John Martin. En effet, produite vers la fin de sa vie, la peinture reprend le style bien établi de l'artiste qui utilise la peinture d’histoire et de paysage pour ses œuvres. Ce tableau représente Satan devant la capitale de l'Enfer, le Pandémonium, regroupant une armée de créatures démoniaques. Cette peinture est inspirée du poème épique et biblique Le Paradis perdu de John Milton qui aborde l'origine de l'Homme d'un point de vue chrétien, du péché originel et qui dénonce les valeurs guerrières mises en valeur dans les épopées classiques.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/38/Pandemonium.jpg",
      sourceUrl: "https://fr.wikipedia.org/wiki/La_Porte_de_l%27Enfer"
    },
  ];