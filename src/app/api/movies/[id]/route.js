import { NextResponse } from "next/server";


export function GET( request, {params}) {
    console.log(params.id)
    const movies = [
      {
        id: 1,
        name: "Guardianes de la Galaxia Vol.2 de Marvel Studios",
        description:
          "Sigue las aventuras de los Guardianes al recorrer los tramos externos del cosmos. El equipo lucha por reunir a su nueva familia y descifran el misterio del linake de Peter Quill. Los viejos enemigos son aliados, y los personajes de la historieta clásica los ayudan mientras el Universo de Marvel se expande. Algunas secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles",
        category: "marvel",
        gender: [
          "ciencia-ficcion",
          "comedia",
          "superheroes",
          "accion-y-aventura",
        ],
        clasification: "13+",
        releaseYear: "2017",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473766/disney-app/movies/scale_v0dxue.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473797/disney-app/movies/scale_qcxpzt.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473815/disney-app/movies/scale_ozzlog.jpg",
        cast: [
          "Chris Pratt",
          "Bradley Cooper",
          "Vin Diesel",
          "Pom Klementieff",
          "Zoe Saldana",
          "Dave Bautista",
        ],
        duration: 137,
      },
      {
        id: 2,
        name: "Guardianes de la Galaxia de Marvel Studios",
        description:
          "Peter Quill es perseguido por cazarrecompensas luego de robar un orbe que busca Ronan, un villano que amenaza al universo. Para evadirlo, Quill hace una tregua con un cuarteto de inadaptados: Rocket, Groot, Gamora y Drax el Destructor. Al ver el poder del orbe y su peligro para el cosmos, Quill reúne a sus rivales para luchar por la galaxia. Algunas secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles.",
        category: "marvel",
        gender: [
          "ciencia-ficcion",
          "comedia",
          "superheroes",
          "accion-y-aventura",
        ],
        clasification: "13+",
        releaseYear: "2014",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473900/disney-app/movies/scale_p2fuz5.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473912/disney-app/movies/scale_jgk0ou.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473925/disney-app/movies/scale_fwo4cz.jpg",
        cast: [
          "Chris Pratt",
          "Bradley Cooper",
          "Vin Diesel",
          "Lee Pace",
          "Zoe Saldana",
          "Dave Bautista",
        ],
        duration: 122,
      },
      {
        id: 3,
        name: "Capitán América: El primer vengador de Marvel Studios",
        description:
          "Tras ser rechazado por el ejército, Steve Rogers se ofrece para una investigación secreta que lo convierte en el Capitán América, un superhéroe dedicado a defender los valores de su país y pelear por la libertad como la mejor arma contra el mal. Cuando el mal amenaza a todo el mundo, el soldado más grande va a la guerra contra HYDRA, la organización dirigida por el villano Red Skull.Algunas secuencias o patrones de luces intermitentes pueden afectar a espectadores fotosensibles.",
        category: "marvel",
        gender: ["ciencia-ficcion", "superheroes", "accion-y-aventura"],
        clasification: "13+",
        releaseYear: "2011",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473986/disney-app/movies/scale_jqdkgc.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685473998/disney-app/movies/scale_qf0dlx.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685474008/disney-app/movies/scale_yydgyt.jpg",
        cast: [
          "Chris Evans",
          "Tommy Lee Jones",
          "Hugo Weaving",
          "Hayley Atwell",
          "Sebastian Stan",
          "Dominic Cooper",
        ],
        duration: 126,
      },
      {
        id: 4,
        name: "Star Wars. El imperio contraataca. Episodio V",
        description:
          "Los rebeldes se dispersan. Han Solo y la princesa Leia son perseguidos por los imperiales, y Luke entrena con el maestro Jedi Yoda. Pero cuando Luke lucha contra Darth Vader, enfrenta la verdad de su pasado.",
        category: "star-wars",
        gender: ["ciencia-ficcion", "accion-y-aventura"],
        clasification: "10+",
        releaseYear: "1980",
        frontImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685458796/disney/el_imperio_contraataca_frontimg_khb3gj.jpg",
        titleImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685458796/disney/el_imperio_contraataca_titleimg_zapkp2.png",
        bgImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685458796/disney/el_imperio_contraataca_bgi_xawcsf.jpg",
        cast: [
          "Harrison Ford",
          "Mark Hamill",
          "Carrie Fisher",
          "Billy Dee Williams",
          "Anthony Daniels",
          "David Prowse",
        ],
        duration: 127,
      },
      {
        id: 5,
        name: "Star Wars. Una nueva esperanza. Episodio IV",
        description:
          "Luke Skywalker es empujado a la aventura cuando intercepta una llamada de auxilio de la prisionera princesa Leia. El evento lo lanza a una arriesgada misión para rescatarla de las garras de Darth Vader y el Imperio del mal",
        category: "star-wars",
        gender: ["ciencia-ficcion", "accion-y-aventura"],
        clasification: "10+",
        releaseYear: "1977",
        frontImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685459513/disney/una_nueva_esperanza_front_ghwzp8.jpg",
        titleImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685459514/disney/una_nueva_esperanza_titleimg_ajg5it.png",
        bgImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685459514/disney/una_nueva_esperanza_bgi_euus8m.jpg",
        cast: [
          "Harrison Ford",
          "Mark Hamill",
          "Carrie Fisher",
          "Peter Cushing",
          "Anthony Daniels",
          "Alec Guinness",
        ],
        duration: 124,
      },
      {
        id: 6,
        name: "Star Wars. El regreso del Jedi. Episodio VI",
        description:
          "Cuando el Imperio se prepara para aplastar la Rebelión con una Estrella de la Muerte más poderosa, la flota Rebelde ataca la estación espacial. Luke Skywalker se enfrenta a Darth Vader.",
        category: "star-wars",
        gender: ["ciencia-ficcion", "accion-y-aventura"],
        clasification: "10+",
        releaseYear: "1983",
        frontImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685459755/disney/el_regreso_del_jedi_front_i7jdk5.jpg",
        titleImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685459755/disney/el_regreso_del_jedi_titleimg_uexbog.png",
        bgImage:
          "https://res.cloudinary.com/dkwjizhdg/image/upload/v1685459756/disney/el_regreso_del_jedi_bgi_gwgjqh.jpg",
        cast: [
          "Harrison Ford",
          "Mark Hamill",
          "Carrie Fisher",
          "Anthony Daniels",
          "Peter Mayhew",
          "Billy Dee Williams",
        ],
        duration: 134,
      },
      {
        id: 7,
        name: "Toy Story",
        description:
          "Ambientado en un mundo donde los juguetes tienen vida propia, esta historia está vista a través de dos juguetes: Woody (Tom Hanks), un vaquero parlante a cuerda, y Buzz Lightyear (Tim Allen), una heroica figura de acción espacial. El cómico dúo finalmente aprende a dejar de lado sus diferencias cuando se separan de su dueño, Andy, y se encuentran en una desopilante misión llena de aventuras... donde solo sobrevivirán si forman una alianza.",
        category: "pixar",
        gender: [
          "familiar",
          "comedia",
          "animacion",
          "accion-y-aventura",
          "amistad",
        ],
        clasification: "0+",
        releaseYear: "1995",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685996904/disney-app/movies/scale_oc8i1q.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685996923/disney-app/movies/scale_wkoqxz.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685996945/disney-app/movies/scale_dtkvns.jpg",
        cast: [
          "Tom Hanks",
          "Tim Allen",
          "Don Rickles",
          "Jim Varney",
          "Wallace Shawn",
          "John Ratzenberger",
        ],
        duration: 81,
      },
      {
        id: 8,
        name: "Ratatouille",
        description:
          "De los creadores de Cars y Los Increíbles llega una comedia innovadora. En uno de los mejores restaurantes de París, Remy, una rata joven y decidida, sueña con convertirse en un reconocido chef francés. Dividido entre los deseos de su familia y su verdadera vocación, Remy y su amigo Linguini ponen en marcha una divertidísima cadena de eventos que deja a la Ciudad de las Luces patas arriba.",
        category: "pixar",
        gender: ["familiar", "comedia", "animacion"],
        clasification: "0+",
        releaseYear: "2007",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685997354/disney-app/movies/scale_xfrfop.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685997373/disney-app/movies/scale_kqdpqh.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685997387/disney-app/movies/scale_aypshv.jpg",
        cast: [
          "Patton Oswalt",
          "Ian Holm",
          "Lou Romano",
          "Brian Dennehy",
          "Peter Sohn",
          "Peter O'Toole",
        ],
        duration: 111,
      },
      {
        id: 9,
        name: "Cars",
        description: `"Rayo" McQueen (Owen Wilson) vive la buena vida hasta que llega a un desvío y se queda varado en Radiador Springs, un pueblo olvidado en la Ruta 66. Allí conoce a Sally, Mater, Doc Hudson (Paul Newman) y un montón de hilarantes personajes que lo ayudan a descubrir que hay más en la vida que trofeos y fama.`,
        category: "pixar",
        gender: ["deportes", "familiar", "comedia", "animacion"],
        clasification: "0+",
        releaseYear: "2006",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685998122/disney-app/movies/scale_pfqc77.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685998151/disney-app/movies/scale_n30ojb.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685998139/disney-app/movies/scale_pvgtks.jpg",
        cast: [
          "Owen Wilson",
          "Paul Newman",
          "Bonnie Hunt",
          "Larry the Cable Guy",
          "Cheech Marin",
          "Tony Shalhoub",
        ],
        duration: 116,
      },
      {
        id: 10,
        name: "El libro de la selva",
        description: `Una celebración musical de amistad, diversión y aventuras en esta clásica película animada, la última con el toque personal de Walt Disney. Acompañamos una emocionante aventura con Mowgli mientras viaja por la selva hacia la aldea con Bagheera, la pantera sabia. Conoceremos al Rey Louie, la hipnótica serpiente Kaa y el adorable oso Baloo, que le enseña a Mowgli las "necesidades básicas" de la vida y lo que significa la amistad. Este programa se presenta como fue creado originalmente. Puede contener representaciones culturales anticuadas.`,
        category: "disney",
        gender: ["familiar", "accion-y-aventura", "animacion"],
        clasification: "0+",
        releaseYear: "1967",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685999218/disney-app/movies/scale_jh9q4l.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685999231/disney-app/movies/scale_wjk3u8.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685999245/disney-app/movies/scale_fubagw.jpg",
        cast: [
          "Louis Prima",
          "George Sanders",
          "Sterling Holloway",
          "J. Pat O'Malley",
          "Bruce Reitherman",
          "Verna Felton",
        ],
        duration: 80,
      },
      {
        id: 11,
        name: "La noche de las narices frías",
        description: `Cruella De Vil es la villana más indignante de Disney. Inicia una aventura cuando secuestra a todos los cachorros dálmata en Londres, incluyendo a los 15 de la familia de Pongo y Perdita. A través del poder del "Crepúsculo del ladrido", Pongo lidera un heroico elenco de personajes en un dramático intento de rescatar a todos. Contiene imágenes de tabaco.`,
        category: "disney",
        gender: ["familiar", "accion-y-aventura", "animacion"],
        clasification: "0+",
        releaseYear: "1961",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685998758/disney-app/movies/scale_unwe9s.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685998771/disney-app/movies/scale_zmmaly.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1685998783/disney-app/movies/scale_spoyin.jpg",
        cast: [
          "Rod Taylor",
          "J. Pat O'Malley",
          "Betty Lou Gerson",
          "Martha Wentworth",
          "Ben Wright",
          "Cate Bauer",
        ],
        duration: 82,
      },
      {
        id: 12,
        name: "El planeta del tesoro",
        description: `Un mapa inspira la búsqueda de un tesoro. Jim Hawkins y un equipo cósmico, con la capitana Amelia, salen a la búsqueda. En un brilloso galeón espacial, Jim se encuentra con el cocinero androide, John Silver, que le enseñará el valor de la amistad y el poder de los sueños. Jim pronto se juntará con el nuevo y loco amigo robot, B.E.N., y el cambiante Morph para descubrir un tesoro más grandioso.`,
        category: "disney",
        gender: [
          "ciencia-ficcion",
          "familiar",
          "accion-y-aventura",
          "animacion",
        ],
        clasification: "0+",
        releaseYear: "2002",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686062619/disney-app/movies/scale_ljaxap.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686062631/disney-app/movies/scale_cb2wck.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686062641/disney-app/movies/scale_hfcsc2.jpg",
        cast: [
          "Joseph Gordon-Levitt",
          "Brian Murray",
          "Emma Thompson",
          "David Hyde Pierce",
          "Martin Short",
          "Dane A. Davis",
        ],
        duration: 100,
      },
      {
        id: 13,
        name: "Wild Life",
        description: `De los cineastas ganadores del Oscar® Chai Vasarhelyi y Jimmy Chin, "Misión para salvar el mundo" narra la historia de Kris y Doug Tompkins, quienes dejaron atrás el mundo de las marcas al aire libre de gran éxito que ayudaron a promover: Patagonia, The North Face y Esprit. - y dirigieron su atención a un esfuerzo visionario para crear Parques Nacionales a lo largo de Chile y Argentina.`,
        category: "national-geographic",
        gender: ["documental"],
        clasification: "12+",
        releaseYear: "2023",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686062998/disney-app/movies/scale_jvk2u9.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063014/disney-app/movies/scale_k6xwzk.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063025/disney-app/movies/scale_yaqeoz.jpg",
        cast: [
          "Kristine Tompkins",
          "Rick Ridgeway",
          "Jimmy Chin",
          "Claudio Alvarado",
          "Michelle Bachelet",
          "Dago Guzman",
        ],
        duration: 92,
      },
      {
        id: 14,
        name: "La verdadera Pantera Negra",
        description: `Las junglas cálidas, secas y caducifolias del sur de la India no son lugar para un leopardo con melanismo. Pero Saya es diferente. Es la única pantera negra en todo el bosque de Kabini, y tiene una cosa en mente: apoderarse de este paraíso de leopardos. Pero Scarface, el gobernante actual, no se rendirá fácilmente. Esta es una historia de asombrosa adaptabilidad y éxito, el viaje de Saya: la verdadera pantera negra.`,
        category: "national-geographic",
        gender: ["documental", "animales-y-naturaleza"],
        clasification: "12+",
        releaseYear: "2020",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063286/disney-app/movies/scale_nrevmo.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063300/disney-app/movies/scale_d5ambg.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063389/disney-app/movies/scale_bxng3s.jpg",
        cast: ["Salvatore Vecchio"],
        duration: 44,
      },
      {
        id: 15,
        name: "Perdidos en el Everest",
        description: `El 8 de junio de 1924, los exploradores británicos George Mallory y Andrew Irvine desaparecieron en el Monte Everest, a sólo 244 metros de llegar a la cima. Se cree que llevaban consigo una cámara. Esa cámara podría reescribir la historia. Un equipo de alpinistas busca el cuerpo de Irvine para resolver el mayor misterio del Everest.`,
        category: "national-geographic",
        gender: ["supervivencia", "documental", "animales-y-naturaleza"],
        clasification: "12+",
        releaseYear: "2020",
        frontImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063572/disney-app/movies/scale_d82ncn.jpg",
        titleImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063593/disney-app/movies/scale_sue6b3.png",
        bgImage:
          "https://res.cloudinary.com/dishtratk/image/upload/v1686063606/disney-app/movies/scale_yctvsq.jpg",
        cast: ["Tate Donovan"],
        duration: 60,
      },
    ];

      const movieSelected = movies.find((elemento)=> elemento.id === +params.id)
    return NextResponse.json(movieSelected)
}