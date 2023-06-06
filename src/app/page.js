import CardCategory from "@/components/common/cardCategory/CardCategory";
import Movies from "@/components/page/movies/Movies";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/movies");
  const data = await res.json();
  return data;
};

// const getData = ()=>{
//   const data = fetch("http://www.omdbapi.com/?&apikey=d3d9c7eb&s=avengers%22)
//   data.then( res => res.json()).then(res =>{return res})
// }

// ESTO ES SERVER COMPONENT
export default async function Home() {
  const arrCategories = [
    {
      path: "/disney",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685642254/disney-app/common/scale_dqe8gx.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685642194/disney-app/video/1565217865-disney_ife6wf.mp4",
    },
    {
      path: "/pixar",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723130/disney-app/common/scale_x14p95.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723157/disney-app/video/1564676714-pixar_yhndpj.mp4",
    },
    {
      path: "/marvel",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723173/disney-app/common/scale_vsgmpq.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723193/disney-app/video/1564676115-marvel_xxp1ni.mp4",
    },
    {
      path: "/star-wars",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723210/disney-app/common/scale_xnp52l.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723225/disney-app/video/1608229455-star-wars_uubkro.mp4",
    },
    {
      path: "/national-geographic",
      img: "https://res.cloudinary.com/dishtratk/image/upload/v1685723240/disney-app/common/scale_jeuijf.png",
      video:
        "https://res.cloudinary.com/dishtratk/video/upload/v1685723250/disney-app/video/1564676296-national-geographic_bopzzb.mp4",
    },
  ];

  const arrGenders = [
    "comedia",
    "documental",
    "familiar",
    "animacion",
    "amistad",
  ];

  const movies = await getData();
  return (
    <main className="">
      <section className="w-full flex justify-start gap-2 flex-wrap">
        {arrCategories.map((card) => (
          <CardCategory key={card.path} cardCategory={card} />
        ))}
      </section>
      {arrGenders.map((gender) => (
        <Movies key={gender} movies={movies} gender={gender} />
      ))}
    </main>
  );
}
