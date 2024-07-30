import data from './test/data.json';

export function getData(){
    return  data['products'];
}

export function getProduct(id, data){
    if(data == null) return;
    let temp = null;
    for (let i = 0; i < data.length; i++) {
        const current = data[i];
       if( id == current['id']){
            temp =current;
            break;
       }      
    }
    return temp;
}