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
            "Ciencia ficción",
            "Comedia",
            "Superhéroes",
            "Acción y aventura",
          ],
          clasification: "13+",
          releaseYear: "2017",
          frontImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C7AD3A8394D805156F1014F3700CC9229C505F92AD876A01DF99613BFC46F94/scale?width=400&aspectRatio=1.78&format=jpeg",
          titleImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/37B39280FC3559D80A4BD57C9369136291B051E404634AA3E56D4863715B5B5F/scale?width=1440&aspectRatio=1.78&format=png",
          bgImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2593638EC184A73B3B0F1B0C8DB20568C9FC2099F53B935BDFB7FA4C493A040D/scale?width=1440&aspectRatio=1.78&format=jpeg",
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
            "Ciencia ficción",
            "Comedia",
            "Superhéroes",
            "Acción y aventura",
          ],
          clasification: "13+",
          releaseYear: "2014",
          frontImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FF2F8FCC985EE5C343E0808625F4C13B8AC8A192F99AAB7A1BA2521EFB304420/scale?width=800&aspectRatio=1.78&format=jpeg",
          titleImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C7F3133EFC5DC1E20FD812B300A42764EDDCF32D923ED0FC657F0C54E38408A/scale?width=1440&aspectRatio=1.78&format=png",
          bgImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1FDD3AA9C728AE358301A06B6A87B0BCFA1C100305EDBBFD1BE3D87A7A7E81B8/scale?width=1440&aspectRatio=1.78&format=jpeg",
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
          gender: ["Ciencia ficción", "Superhéroes", "Acción y aventura"],
          clasification: "13+",
          releaseYear: "2011",
          frontImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/95C976CA3FF6E5D7434874C3D705E133D8F1AF970ED3A319D90CD7C8BC36A83D/scale?width=800&aspectRatio=1.78&format=jpeg",
          titleImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DD548AF2B7A1297C5A06AA6CC70B266DCE9E7D2A75E87441BB20454B432C7D51/scale?width=1440&aspectRatio=1.78&format=png",
          bgImage:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CE5EDEFD571A39CA8298F6E2F52B4271FEFFC431D0CDEBFDABEF6BA2B633E465/scale?width=1440&aspectRatio=1.78&format=jpeg",
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
          category: "Star Wars",
          gender: ["Ciencia ficción", "Acción y aventura"],
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
          category: "Star Wars",
          gender: ["Ciencia ficción", "Acción y aventura"],
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
          category: "Star Wars",
          gender: ["Ciencia ficción", "Acción y aventura"],
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
      ];

      const movieSelected = movies.find((elemento)=> elemento.id === +params.id)
    return NextResponse.json(movieSelected)
}