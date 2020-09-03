function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxA = Math.max(...A);
	let fibonacci = new Array(maxA+2);
    const max = Math.pow(2,30);

    fibonacci[0]=0;
    fibonacci[1]=1;

    for(let i=2; i<fibonacci.length ;i++){
    	fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
    	fibonacci[i]= fibonacci[i] % max;
    }

    result = A.map((n, index)=>{
    	return fibonacci[n+1] % (Math.pow(2,B[index]));
    })

    return result;
}
