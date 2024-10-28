function generateHashtag (str) {
    //   PREP [Parameters, Returns, Examples, Psuedo-code]
        // Parameters:
              // always taking a string
              // string must not be empty
              // should remove spaces
              // string must not be more than 140 chart
              // string must start with an hashtag "#"
              // new sting must begin with a capital letter
              // new string must not have spaces in it
      
        // Psuedo-code:
              // if string is empty return false
              // if result was longer than 140 chars return false 
              // convert string to array the capitalize all the first letters of the string in the array
              // remove all the spaces in the string 
              // capitalize the first letter of the string
              // string must start with a #
           
                //Solution:
              if(str === '' ) {
                  return false
               }
              else {
                  let arrStr = str.split(' ')
                  let renew = arrStr.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
                             .join('')
                  return renew  >= 140 ? false : '#' + renew;

              } 

            // if (str.trim() === '') {
            //     return false;
            // }
        
            // // Create the hashtag by capitalizing each word and joining without spaces
            // let hashtag = '#' + str.split(' ')
            //                       .map(ele => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase())
            //                       .join('');
            
            // // Check if the resulting hashtag exceeds 140 characters
            // return hashtag.length > 140 ? false : hashtag;



                //Turnerary Solution:
            //   return str === '' || str.length >= 140 ? false : '#' + str.split(' ').map(ele => ele.charAt(0).toUpperCase() + ele.slice(1)).join('');
    }
    
        // Returns:
              //console.log(generateHashtag("")) //-> Examples = false
              //console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) // -> Examples = false
            //   console.log(generateHashtag("Codewars is nice")) //-> Examples = "#CodewarsIsNice", "Should capitalize first letters of words."
            //   console.log(generateHashtag("Do We have A Hashtag")) //-> Examples = "#DoWeHaveAHashtag"
                //  console.log(generateHashtag("Codewars"))




                



 



    
