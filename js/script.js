const moviearray = [
    {
        title: 'Ghost in the shell ',
        sortie: '1995',
        réalisateur: 'Mamoru Oshii',
        genre:['Animation', 'Science-fiction'],
        synopsis: 'Le major Motoko Kusanagi et son collègue Batou, deux cyborgs, travaillent dans l\'unité spéciale anti-terroriste du gouvernement de New Port City au Japon. Au cours d\'une de leurs enquêtes, ils sont chargés de capturer un redoutable pirate informatique, insaisissable, connu seulement par son pseudonyme de «Puppet Master»',
        trailer: 'https://www.youtube.com/watch?v=ZYYnfISC5f4',
        pictureUrl: '',
    },


    {
        title: 'Kiki la petite sorcière ',
        sortie: '1989',
        réalisateur: 'Hayao Miyazaki',
        genre:['Animation', 'Fantastique'],
        synopsis: ' A 13 ans, Kiki doit quitter ses parents et s\'établir pendant un an dans une autre ville, en exerçant un métier lié à son état de sorcière.',
        trailer: 'https://www.youtube.com/watch?v=iRvcJObwhyg&t=6s',
        pictureUrl: 'https://www.quai10.be/wp-content/uploads/2018/09/kiki.jpg',
    
    },

    
    {
        title: 'Midsommar',
        sortie: '2019',
        réalisateur: 'Ari Aster',
        genre:['Épouvante-Horreur', 'Thriller'],
        synopsis: 'Dani et Christian sont sur le point de se séparer quand la famille de Dani est touchée par une tragédie. Attristé par le deuil de la jeune femme, Christian ne peut se résoudre à la laisser seule et l’emmène avec lui et ses amis à un festival qui se déroule dans un village suédois isolé. ',
        trailer: 'https://www.youtube.com/watch?v=CyeA5lXoMl0',
        pictureUrl: 'https://1.bp.blogspot.com/-HDt4rDGur5E/XTV3uB2XBMI/AAAAAAAAXU0/2CMmukA9QCovpc0MGCzs5SeZmMDRYHcewCLcBGAs/s1600/midsommar-poster.jpg',   
    },


    {
        title: 'Ghostland ',
        sortie: '2018',
        réalisateur: 'Hayao Miyazaki',
        genre:['Epouvante-horreur'],
        synopsis: 'Suite au décès de sa tante, Colleen et ses deux filles héritent d’une maison. Mais dès la première nuit, des meurtriers pénètrent dans la demeure et Colleen doit se battre pour sauver ses filles.',
        trailer: 'https://www.youtube.com/watch?v=DyRSYcurNJw',
        pictureUrl: 'https://media.senscritique.com/media/000017597631/source_big/ghostland.jpg',   
        
    },
    {
        title: 'Mad Max fury road ',
        sortie: '2015',
        réalisateur: 'George Miller',
        genre:['post-apocalyptique', 'Road movie'],
        synopsis: 'Max est capturé et fait prisonnier dans la Citadelle dirigée par Immortan Joe. C’est alors qu\'il se retrouve embarqué dans une course poursuite explosive.',
        trailer: 'https://www.youtube.com/watch?v=mtolAJbj44s',
        pictureUrl: 'http://fr.web.img4.acsta.net/pictures/15/04/08/17/04/016881.jpg',
    
    },
    

    {
        title: 'Les Fils de l\'homme',
        sortie: '2006',
        réalisateur: 'Alfonso Cuarón ',
        genre:['post-apocalyptique', 'Drame'],
        synopsis: 'En 2027, aucun enfant n\'est venu au monde depuis près de vingt ans. Theo Faron, un ancien militant idéaliste, est contacté par Julian, son ex-épouse, qui lui demande d\'obtenir des papiers pour une jeune femme d\'origine africaine et de l\'escorter jusqu\'à un endroit sûr. En chemin, Theo découvre que celle-ci est enceinte et qu\'il est impératif de la mettre à l\'abri avec son enfant, seul espoir de l\'humanité.',
        trailer: 'https://www.youtube.com/watch?v=2VT2apoX90o',
        pictureUrl: 'http://fr.web.img4.acsta.net/medias/nmedia/18/36/31/42/18674404.jpg',
    
    },

    {
        title: 'La La Land ',
        sortie: '2016',
        réalisateur: 'Damien Chazelle',
        genre:['Comédie musicale', 'Romance'],
        synopsis: 'Au cœur de Los Angeles, une actrice en devenir prénommée Mia sert des cafés entre deux auditions. De son côté, Sebastian, passionné de jazz, joue du piano dans des clubs miteux pour assurer sa subsistance. Tous deux sont bien loin de la vie rêvée à laquelle ils aspirent…Le destin va réunir ces doux rêveurs, mais leur coup de foudre résistera-t-il aux tentations, aux déceptions, et à la vie trépidante d’Hollywood ?',
        trailer: 'https://www.youtube.com/watch?v=0pdqf4P9MB8',
        pictureUrl: 'https://filmspot.com.pt/images/filmes/posters/big/313369_pt.jpg',
    
    },

    {
        title: 'phantom of the paradise ',
        sortie: '1974',
        réalisateur: 'Brian De Palma',
        genre:['Comédie musicale', 'Épouvante-Horreur'],
        synopsis: 'Swan, producteur génial et sans scrupules, cherche le son qui lui permettra d\'inaugurer le «Paradise», son nouveau temple du rock. Il le trouve chez Winslow Leach, compositeur naïf, sous le charme de Phoenix, une belle choriste. Swan promet d\'embaucher Winslow, mais vole sa musique et le fait jeter en prison.',
        trailer: 'https://www.youtube.com/watch?v=T9yof8cwli4',
        pictureUrl: 'https://files.offi.fr/evenement/20651/images/600/b4da93581b8f7641855d898063bc7211.jpg',
    
    },

    {
        title: 'Her',
        sortie: '2014',
        réalisateur: 'Spike Jonze',
        genre:['Science-fiction', 'Romance'],
        synopsis: 'Los Angeles, dans un futur proche. Theodore Twombly, un homme sensible au caractère complexe, est inconsolable suite à une rupture difficile. Il fait alors l\'acquisition d\'un programme informatique ultramoderne, capable de s\'adapter à la personnalité de chaque utilisateur.',
        trailer: 'https://www.youtube.com/watch?v=dJTU48_yghs',
        pictureUrl: 'https://image.tmdb.org/t/p/original/nkWXW5blXGmOEoDejRgy83sSb6T.jpg',
    
    },

    {
        title: 'The Thing',
        sortie: '1982',
        réalisateur: 'John Carpenter',
        genre:['Science-fiction', ' Épouvante-Horreur'],
        synopsis: 'Au cœur de l’Antarctique, une équipe de chercheurs découvre un corps enfoui sous la neige depuis plus de 100 000 ans. Décongelée, la créature retourne à la vie en prenant la forme de celui qu’elle veut ; dès lors, le soupçon s’installe entre les hommes de l’équipe.',
        trailer: 'https://www.youtube.com/watch?v=5ftmr17M-a4',
        pictureUrl: 'https://media.senscritique.com/media/000011349635/source_big/The_Thing.jpg',
    
    },
    
]

let htmlCode = ``;

moviearray.forEach(function(singleMovieObjects) {

  htmlCode =
    htmlCode +
    `
    <article>
      <div>
        <img src="${singleMovieObjects.pictureUrl}" alt="${singleMovieObjects.imageAlt}">
      </div>
      <div>

        <h3>Title: ${singleMovieObjects.title}</h3>

            <p>Sortie: ${singleMovieObjects.sortie}</p>
            <p>réalisateur: ${singleMovieObjects.réalisateur}</p>
            <p>genre: ${singleMovieObjects.genre}</p>
            <p>synopsis: ${singleMovieObjects.synopsis}</p>
            <p>trailer: ${singleMovieObjects.trailer}</p>
      </div>
    </article>`;
});

const movieCards = document.querySelector(".all-movie-cards");

movieCards.innerHTML = htmlCode;
