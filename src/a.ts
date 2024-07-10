// basic types
let a : number = 35

// genaric example
interface Ip {
    title : string,
    id : number,
    description : string;
}

interface Iu {
    id : number,
    name : string,
    age : number;
}

const fetchP =  async(path : string) : Promise <Ip[]> => {
    const response = await fetch(`http://google.com/${path}`);

    return response.json();

};