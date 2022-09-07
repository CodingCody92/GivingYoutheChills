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

let newList = ('sam', 'mike', 'ye', 'arnold')

if (newList.length > 2) {
    console.log('long list')
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()