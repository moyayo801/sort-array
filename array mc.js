var arr=[-3,8,7,6,5,-4,3,2,1];


console.log(arr);
for (var i = 0; i < arr.length; i++) {     
    for (var j = i+1; j < arr.length; j++) {     
       if(arr[i] > arr[j]) {    
           temp = arr[i];    
           arr[i] = arr[j];    
           arr[j] = temp;    
       }     
    }     
}    
console.log(arr);   