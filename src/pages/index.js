import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderComponent from "../../components/HeaderComponent";
import NavComponent from "../../components/NavComponent";
import requests from "../../utils/requests";
import Results from "../../components/Results";

const inter = Inter({ subsets: ["latin"] });

export default function Home({results}) {
  return (
    <div>
      <head>
        <title>Hulu 2.0</title>
      </head>
        <HeaderComponent />
        <NavComponent  />
        <Results results={results} />
    </div>
  );
}


export async function getServerSideProps(context){
  const genre = context.query.genre

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`) 
   .then((res)=>res.json())

  return{
     props :{
       results: request.results,
     }
  }
}