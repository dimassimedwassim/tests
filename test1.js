function solution(N, A){
	let counters = new Array(N);
	counters.fill(0);
	

	A.forEach((op)=>{
		if((op <= N) && (op >=1) ){
			counters[op-1]++;

		}else if(op == N+1){
			let max = Math.max(...counters);
			counters.fill(max);

		}
	})
    
    return counters;

}