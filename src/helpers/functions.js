const getId = ( url ) =>{
    const urlSplitted = url.split("/"); 
    return urlSplitted[6];
}

const getHexadecimnal = (str) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

const getCurrentPage = ( url ) => {
    let page = 0;
    if( url != null ){
        let ind0 = url.indexOf ("offset=") ;	
        let offset = "";
        if (ind0>=0)	
        {
            let ind1 = url.indexOf ("&limit");	
        
            if (ind1 > ind0)	{
                offset = url.substring (ind0+"offset=".length,	ind1);	
                page = parseInt( offset ) / 4;
            }
        }
    }
    return page+1;
}
const getCapitalized = ( str ) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



export { getId, getHexadecimnal, getCapitalized , getCurrentPage};