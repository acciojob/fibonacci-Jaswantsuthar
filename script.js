function fibonacci(num) {
// your code here
	let n1=0,n2=1,n3;
	for (let i = 0; i <= num; i++) {
			
		
			n3=n1+n2;
			n1=n2;
			n2=n3;
	}
	return n2;
}

module.exports = fibonacci;
