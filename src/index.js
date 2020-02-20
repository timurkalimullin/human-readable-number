module.exports = function toReadable (number) {
    let res = [];

    const read_3 = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty"
    },
    read_2 = {
      0: "",
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
    };
  
  if (number == 0) {res = "zero"};
  
  for (let i in read_3) {
    if (number == i) {
      res = read_3[i];
    }
  }
  
  if (number > 20 && number < 100) {
    number = number.toString().split("");
    number[0] = read_2[`${number[0]}`];
    number[1] = read_3[`${number[1]}`];
    res = number.join(" ").replace(/\s$/, "");
  }
  
  if (number >=100 && number <1000) {
    if (number == 100) {res = "one hundred"} 
    else if (String(parseInt(number)).slice(1,3)>0 && String(parseInt(number)).slice(1,3)<20) {
      let ind =  String(parseInt(number)).slice(1,3);
      number = number.toString().split("");
      number[0] = number[0]>0?read_3[`${number[0]}`] + " hundred":"";
      number[1] = read_3[`${parseInt(ind)}`];
      number[2] = "";
      number.map((el,i)=> el.length==0?number.splice(i,1):el);
      res = number.join(" ").replace(/\s$/, "");
    }
    else {
    number = number.toString().split("");
    number[0] = number[0]>0?read_3[`${number[0]}`] + " hundred":"";
    number[1] = number[1]!=0?read_2[`${number[1]}`]:"";
    number[2] = number[2]!=0?read_3[`${number[2]}`]:"";
    number.map((el,i)=> el.length==0?number.splice(i,1):el)
    res = number.join(" ").replace(/\s$/, "");
    }
  }
    return res;
}





