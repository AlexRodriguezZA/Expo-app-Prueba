//el objetivo de esta función es que si el usuario en el search para buscar el dispositivo
//en vez de colocar TEXT1, TEXT2 coloca TEXT1 TEXT2 me agregue la coma en el medio de la palabra 
//para asi poder hacer una buena busqueda.
export const formatSearchQuery = (search) => {
    // Elimina espacios adicionales y divide la cadena en términos
    const searchTerms = search.trim().split(/\s+/);
  
    // Elimina comas duplicadas y crea la cadena de búsqueda con comas entre los términos
    const formattedSearch = searchTerms.map((term) => term.replace(/,+$/, '')).join(",");
  
    return formattedSearch;
  };
  