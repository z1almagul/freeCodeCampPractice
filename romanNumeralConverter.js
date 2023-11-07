const library =[
  {roman: 'M',arabic: 1000},
  {roman: 'CM',arabic: 900},
  {roman: 'D',arabic: 500},
  {roman: 'CD',arabic: 400},
  {roman: 'C',arabic: 100},
  {roman: 'XC',arabic: 90},
  {roman: 'L',arabic: 50},
  {roman: 'XL',arabic: 40},
  {roman: 'X',arabic: 10},
  {roman: 'IX',arabic: 9},
  {roman: 'V',arabic: 5},
  {roman: 'IV',arabic: 4},
  {roman: 'I',arabic: 1}];

function convertToRoman(num) {
  let converted=[];
  library.forEach(element => {
    while(num>=element.arabic){
      if(num<element.arabic)
      console.log("yes");
      else{
        converted.push(element.roman);
        num-=element.arabic;
      }
      if(num===0) break;
    }
    
  });
 return converted.join("");
}

console.log(convertToRoman(36));
