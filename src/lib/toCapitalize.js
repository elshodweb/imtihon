export  const  toCapitalize =(str)=> {
      let arr = str.split("");
      return arr.splice(0,1).join("").toUpperCase() + arr.splice(0).join("");
}