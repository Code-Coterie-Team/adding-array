function SumOfTwo(string){

    let arrays=string.split("/");
    let array1=arrays[0].split(",").map(Number);
    let array2=arrays[1].split(",").map(Number);
    let numbers=[];
    const maxl=Math.max(array1.length,array2.length);
    for(let i=0 ; i<maxl ; i++){
        numbers.push((array1[i] || 0) + (array2[i] || 0));
    }
    console.log(array1);
    console.log(array2);
    console.log(numbers);
}


var sum=SumOfTwo("1,2,2/34,5,89,90");