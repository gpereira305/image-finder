import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context";

const url =
   "https://api.unsplash.com/search/photos?client_id=6QrWBcJJl672DGyNTGzzbNfM6SSqxZzHFbyZt5ZbzkQ";
export default function Gallery() {
   const { searchTerm, setSearchTerm } = useGlobalContext();

   const response = useQuery({
      queryKey: ["images"],
      queryFn: async () => {
         const result = await axios.get(`${url}&query=${searchTerm}`);
         return result.data;
      },
   });

   const results = response?.data?.results;
   // console.log(results);
   return (
      <section className="images-container">
         {(response.isLoading && <h2>Carregando...</h2>) ||
            (response.isError && <h2>Houve um erro</h2>) ||
            (results.length < 1 ? (
               <h2>Nenhum resultado encontrado</h2>
            ) : (
               <div className="images-grid">
                  {results.map((el) => (
                     <figure key={el?.id}>
                        <img
                           className="img"
                           src={el?.urls?.regular}
                           alt={el?.alt_description}
                           title={el?.alt_description}
                        />
                     </figure>
                  ))}
               </div>
            ))}
      </section>
   );
}
