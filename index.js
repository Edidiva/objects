
//question1
function instagramPost(Handle_of_author,content,image_link_posted,Number_of_views,Number_of_likes ){
this.Handle_of_author = Handle_of_author;
this.content = content;
this.image_link_posted =image_link_posted;
this.Number_of_views = Number_of_views;
this.Number_of_likes = Number_of_likes ;
}

//Q2
newPost = new instagramPost("Edidiva_frosh","A new Nigeria", "https://www.instagram.com/p/CfuN5eONSHW/", 0, 0);
newPost1 = new instagramPost("Edidiva_frosh","Nigeria decides", "https://www.instagram.com/p/CfuN5eONSHW/", 1, 2)
console.log(newPost)
//answer
// instagramPost {
//     Handle_of_author: 'Edidiva_frosh',
//     content: 'A new Nigeria',
//     image_link_posted: 'https://www.instagram.com/p/CfuN5eONSHW/',
//     Number_of_views: 0,
//     Number_of_likes: 0
//   }
console.log(newPost1)
//answer
//   instagramPost {
//     Handle_of_author: 'Edidiva_frosh',
//     content: 'Nigeria decides',
//     image_link_posted: 'https://www.instagram.com/p/CfuN5eONSHW/',
//     Number_of_views: 1,
//     Number_of_likes: 2

//question 3a
function createPerson(name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender,
  };
}

const Musa= createPerson("Musa", 27, "male");

console.log(Musa);
//answer
//{ name: 'Musa', age: 27, gender: 'male' }

//Q3b
function createJambScores(ENG, GOVT, LIT, CRK){
    return{
        ENG : ENG,
        GOVT : GOVT,
        LIT : LIT,
        CRK : CRK

    }
}

let jambScore = createJambScores(70,85,82,94);
//{ ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }
Object.assign(Musa, jambScore);
console.log({Musa:Musa});
//answer
// { Musa: {
//     name: 'Musa',
//     age: 27,
//     gender: 'male',
//     ENG: 70,
//     GOVT: 85,
//     LIT: 82,
//     CRK: 94
// }
// }

// Q4
//Object assign method
let Edikan = Object.assign({}, Musa);
Edikan.name = "Edikan";
console.log(Edikan);
//answer
// {
//     name: 'Edikan',
//     age: 27,
//     gender: 'male',
//     ENG: 70,
//     GOVT: 85,
//     LIT: 82,
//     CRK: 94
//   }

//spread operator method
let Mboutidem = {...Musa};
console.log({Mboutidem});
//answer
// {
//     Mboutidem: {
//       name: 'Musa',
//       age: 27,
//       gender: 'male',
//       ENG: 70,
//       GOVT: 85,
//       LIT: 82,
//       CRK: 94
//     }
//   }

//Q5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }


 for (let party in presidentialCandidates){
    console.log(presidentialCandidates[party]);

 }
 //answer
 //Omoyele Sowore
// Christopher Imumolen
// Bola Ahmed Tinubu
// Peter Obi
// Rabiu Kwankwaso
// Atiku Abubakar

