import React from "react";

export default function SearchForm() {
   function handleSubmitSearch(e) {
      e.preventDefault();
      console.log(e.target.element.value);
   }

   return (
      <div>
         <h1 className="title">Search Images</h1>
         <form className="search-form" onSubmit={handleSubmitSearch}>
            <input
               type="text"
               name="search"
               id=""
               placeholder="search for cats"
               className="form-input search-input"
            />
            <button type="button" className="btn">
               Search
            </button>
         </form>
      </div>
   );
}
