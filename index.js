const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => 
{
  return tutorials.map(el => {
    return el.split(" ").map ( words => {
      return words[0].toUpperCase() + words.slice(1);
    }).join(" ");
  })
}

// {
//   return tutorials.map( (arr) => {
//       const words = arr.split(" ");
  
//       const upperFirst = words.map( word => word.charAt(0).toUpperCase() + word.slice(1)
//       );
  
//       const final = upperFirst.join("");
//       return final;
//     })
//   } 


titleCased();
