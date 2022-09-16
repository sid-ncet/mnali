function buyACar(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('buy a car')
        },5000)
    })
}
function planTrip(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('plan a trip')
        },3000)
    })
}
function mnali(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('reached mnali')
        },2000)
    })
}
// buyACar().then((msg)=>{
//     console.log(msg)
//     planTrip().then((msg2)=>{
//         console.log(msg2)
//         mnali().then((msg3)=>{
//             console.log(msg3)
//         })
//     })
// })
 
async function abc(){
    const msg=await buyACar()
    console.log(msg)
    const msg1=await planTrip();
    console.log(msg1)
    const msg2=await mnali();
    console.log(msg2)

}
abc()
