const getId = ( url ) =>{
    const urlSplitted = url.split("/"); 
    return urlSplitted[6];
}

const getHexadecimnal = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

const getCurrentPage = ( url ) => {
    let page = 0;
    if( url != null ){
        let ind0 = url.indexOf("offset=") ?? 0;	
        let ind1 = url.indexOf("&limit") ?? 0;	
        let offset = "";
        if (ind0 >= 0) {
            if (ind1 > ind0)	{
                offset = url.substring (ind0+"offset=".length,	ind1) ?? 0;	
                page = parseInt( offset ) / 4;
            }
        }
    }
    return page+1;
}
const getCapitalized = ( str ) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const mockPokemon = {
    url : "fakeurl.com",
    name : "Fake Pokemon",
    previous : "",
    next : "",
    forms : [
      {
        url : "fakeurl.com",
        name : "Fake Pokemon"
      }
    ],
    sprites :{
      other : {
        home : {}
      }
    },
    types : [
        {
            type : ""
        }
    ],
    moves : [{
        name : ""
    }]
}

const mockResponse = { 
    previous : "",
    next : "",
    results : [
    {
      url : "fakeurl.com",
      name : "Fake Pokemon"
    }
    ] 
} ;

export { getId, getHexadecimnal, getCapitalized , getCurrentPage, mockPokemon, mockResponse};