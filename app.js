// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

let Ready = {
    isReady: 'yes',
    areSure: 'yes',
}

if (Ready.isReady === 'yes') {
    console.log('You are ready!!')
}

let colors = ('blue', 'orange')

if (colors.length > 1) {
    console.log('blue and orange')
}

let longList = ('jared', 'frank', 'oscar', 'lee', 'franklin', 'jay', 'auntie', 'jess', 'leyah')

for (let people of longList) {
    if (people.length > 2) {
        console.log(people)
    }
}