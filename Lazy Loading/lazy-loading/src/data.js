let data = new Map();
console.log(data,'data')
export function fetchData(url) {
    if(!data.has(url)){
        data.set(url,getData(url));
    }
    return data.get(url);
}

async function getData(url) {
    if(url === 'tswift/albums'){
        return getAlbums();
    }
}

async function getAlbums(){
    await new Promise(resolve => {
        setTimeout(resolve,3000);
    })
    return albums;
}
const albums = [{
    id:1,
    title:'Taylor Swift',
    year: 2006
},
{
    id:2,
    title:'Fearless',
    year: 2008
},
{
    id:3,
    title:'Speak Now',
    year:2010
},
{
    id:4,
    title:'Red',
    year:2012
},
{
    id:5,
    title:'1989',
    year:2014
},{
    id:6,
    title:'Lover',
    year:2019
},
{
    id:7,
    title:'Folklore',
    year:2020
},{
    id:8,
    title:'Evermore',
    year:2020
},{
    id:9,
    title:'Midnights',
    year:2022
}
];