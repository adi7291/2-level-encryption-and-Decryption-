import React from "react";
  
// const arrayInput =[{"UserName": "MCPL002" },{"PassWord" : "1234"}]

const jsoninputData={
    "UserName": "MCPL002" ,
    "PassWord" : "1234"
}
const stringInputData = JSON.stringify(jsoninputData)

console.log(stringInputData)
function stringToHex(param) {
  var arr = [];
   let newArr=[]
  let randBefore = Math.floor((Math.random()*89999)+10000)
  let randAfter = Math.floor((Math.random()*89999)+10000)


    console.log(randAfter)
    console.log(randBefore)
  for (let i = 0; i < param.length; i++) {
    arr[i] =    param.charCodeAt(i).toString(16) ;
  }
    const hexString = arr.join( "")
    console.log("first encryption" ,hexString)

 for (let j = 0; j < hexString.length; j++) {
    newArr[j] =    hexString.charCodeAt(j).toString(16);

  }
  console.log("second encryption" ,newArr.join(''))

  const encryptedData= randBefore + newArr.join('') +randAfter
console.log(encryptedData);
return encryptedData
}
 

// function decrypt(para){

//     const removeRandomData = para.slice(5,-5).toString()
//     console.log(removeRandomData)
//         let firstdecrypt=""
//     for( let i=0 ; i<removeRandomData.length ; i += 2){
//         firstdecrypt += String.fromCharCode(parseInt(removeRandomData.substr(i, 2), 16));
        
//     }
//     console.log(firstdecrypt)
   
    
    
// }

// function decrypt2(para){

//     // const removeRandomData = para.slice(5,-5).toString()
//     console.log(para)
//         let second=""
//     for( let i=0 ; i<para.length ; i += 2){
//         second += String.fromCharCode(parseInt(para.substr(i, 2), 16));
        
//     }
//     console.log(second) 
// }


var encryptedData= stringToHex(stringInputData);

let arr=[]
for (let i = 0; i < encryptedData.length; i++) {
  arr[i] =    encryptedData.charCodeAt(i).toString(16) ;
}
  const hash_data = arr.join( "")
  console.log("first encryption" ,hash_data)

//  decrypt("58669376232323535373336353732346536313664363532323361323234643433353034633330333033323232326332323530363137333733353736663732363432323361323233313332333333343232376458011")
//   decrypt2("7b22557365724e616d65223a224d43504c303032222c2250617373576f7264223a2231323334227d")
function Rough() {

    

    React.useEffect(()=>{

        let requestBody={
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
            },
           
            
            body: JSON.stringify({ payload:hash_data,hash :hash_data })
          
        }
         console.log(JSON.stringify({ payload:hash_data,hash :hash_data }))
        fetch('http://192.168.1.89/sandeep/app/index.php/LcoRestServices/validateLogin', requestBody)
            .then(response => response.json())
            .then(data => console.log("ITP"+data));

    })

  return <div>{stringInputData}</div>;
}

export default Rough;
