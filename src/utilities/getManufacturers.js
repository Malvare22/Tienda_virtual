export function getManufacturers(data){
    let manufacturers = new Set();
    data.forEach(element => {
        manufacturers.add(element['manufacturer']);
    });

    return [...manufacturers];
}