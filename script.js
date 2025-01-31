let soz = [
    'Non', 'Banan', 'Mashina', 'Asal', 'Olma' ,'Aziza', 'Gul', 'Ramziddin'
]
let borSoz = []
let yoqSoz = []


for(i = 0 ; i < soz.length ; i++){
    if(soz[i].includes('n') || soz[i].includes('N')){
        borSoz.push(soz[i]);
    }
    else{
        yoqSoz.push(soz[i])
    }
} 
console.log(borSoz)
console.log(yoqSoz)