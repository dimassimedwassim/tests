function solution(A) {
    
    let sortedA = A.sort((item1,item2)=> Math.abs(item1)-Math.abs(item2));

    //S = A[i] where |Ai| = max(abs_values(A))
    let s = sortedA[sortedA.length-1];
    
    for(i=sortedA.length-2; i>=0; i--){
        if( Math.abs (s+ sortedA[i]) <= Math.abs(s)){
            s+= sortedA[i];
        }
        else{
            s-= sortedA[i];
        }
    }
    
    return Math.abs(s);
 
}