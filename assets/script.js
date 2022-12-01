const moviearray = [
    {
        title: 'Ghost in the shell ',
        sortie: '1995',
        réalisateur: 'Mamoru Oshii',
        genre:['Animation', 'Science-fiction'],
        synopsis: 'Le major Motoko Kusanagi et son collègue Batou, deux cyborgs, travaillent dans l\'unité spéciale anti-terroriste du gouvernement de New Port City au Japon. Au cours d\'une de leurs enquêtes, ils sont chargés de capturer un redoutable pirate informatique.',
        trailer: 'https://www.youtube.com/watch?v=ZYYnfISC5f4',
        pictureUrl: 'https://image.tmdb.org/t/p/original/cJDJlZCmaRDT7ODedZyOJwavp42.jpg',
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
        synopsis: 'En 2027, aucun enfant n\'est venu au monde depuis près de vingt ans. Theo Faron, un ancien militant idéaliste, est contacté par Julian, son ex-épouse, qui lui demande d\'obtenir des papiers pour une jeune femme et de l\'escorter jusqu\'à un endroit sûr. En chemin, Theo découvre que celle-ci est enceinte et qu\'il est impératif de la mettre à l\'abri avec son enfant, seul espoir de l\'humanité.',
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
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

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

            <p class="card-genre">${singleMovieObjects.genre}</p>
            <h3>${singleMovieObjects.title}</h3>
            <p>${singleMovieObjects.sortie}</p>
            <p> ${singleMovieObjects.réalisateur}</p>
            <p class="synopsis">${singleMovieObjects.synopsis}</p>
            <a href="${singleMovieObjects.trailer}"><svg xmlns="http://www.w3.org/2000/svg" width="5em"viewBox="0 0 700 700"><path d="M366.2 166.655a183.754 183.754 0 0 0-195.277 195.283c5.78 91.437 79.98 165.631 171.418 171.407a183.753 183.753 0 0 0 195.276-195.283c-5.78-91.439-79.978-165.632-171.418-171.407z" style="fill:#fff"/><path d="M593.973 101.065H106.027A81.265 81.265 0 0 0 25 182.092v335.816a81.265 81.265 0 0 0 81.027 81.027h487.946A81.265 81.265 0 0 0 675 517.908V182.092a81.265 81.265 0 0 0-81.027-81.027zm-251.632 432.28c-91.437-5.776-165.638-79.97-171.418-171.407A183.754 183.754 0 0 1 366.2 166.655c91.44 5.775 165.637 79.968 171.418 171.407A183.753 183.753 0 0 1 342.34 533.345z" style="fill:#ff4747"/><path d="M481.685 347.31a2.97 2.97 0 0 0-2.87-2.189 2.988 2.988 0 0 0-1.33.312l-53.028 33.816v-35.943a8.565 8.565 0 0 0-8.54-8.54h-5.952a47.42 47.42 0 1 0-68.744-53.211 47.55 47.55 0 1 0-68.743 53.21H262.06a8.565 8.565 0 0 0-8.54 8.541V445.71a8.565 8.565 0 0 0 8.54 8.54h153.855a8.565 8.565 0 0 0 8.54-8.54v-54.75l27.507 17.539 25.523 16.275a3.022 3.022 0 0 0 2.892-.13 2.955 2.955 0 0 0 1.411-2.517V348.08a2.921 2.921 0 0 0-.104-.772zm-94.319-75.6a21.391 21.391 0 1 1-21.493 21.391 21.442 21.442 0 0 1 21.493-21.39zm-46.145 32.938a47.415 47.415 0 0 0 19.958 27.982h-39.917a47.42 47.42 0 0 0 19.959-27.982zm-46.146-32.938a21.391 21.391 0 1 1-21.493 21.391 21.442 21.442 0 0 1 21.493-21.39z" style="fill:#ff4747"/></svg></a>
      </div>

    </article>`
});

const movieCards = document.querySelector(".all-movie-cards");

movieCards.innerHTML = htmlCode;

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
