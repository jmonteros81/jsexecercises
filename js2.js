function peopleLSkills(arr, langList, numSkills) { //receive Candidate list, the list of laguajes Skills and the minnumber of Language Skills    
    var peoplePerfil = []; //create the varaible list
    for (i = 0, arr[i].languages.sort(); i < arr.length; i++) { //the serach depend of the number of candidates
        aux = arr[i].languages.length //we obtantain the number of languiage list of each candidate
        if (aux >= numSkills) { //if the candidate  have min 3 skills languague, we proceed to validate
            for (y = 0, count = 0; y < aux; y++) {
                if (langList.includes(arr[i].languages[y])) {
                    count++
                    if (count == numSkills - 1) {
                        peoplePerfil.push(arr[i].name)
                        break
                    }
                }
            }
        }
    }
    return peoplePerfil
}



const people = [{ name: 'Javier', languages: ['PHP', 'Prolog', 'Ruby', 'Python', 'Java', 'Asambler'] },
    { name: 'Javo', languages: ['C#', 'JavaScript', 'Java'] },
    { name: 'Rose', languages: ['C#', 'Cobol', 'Asambler'] },
    { name: 'Francisco', languages: ['C', 'Cobol', 'Ruby', 'Python', 'Java'] },
    { name: 'Peter', languages: ['C', 'Cobol'] }
];


const languagesMin = ['PHP', 'JavaScript', 'Ruby', 'Python', 'Java'];
aux = languagesMin.sort()
const numSkills = 3
console.log("Our candidate is: " + peopleLSkills(people, aux, numSkills))
    /*console.log(languagesMin);
    console.log(aux);*/