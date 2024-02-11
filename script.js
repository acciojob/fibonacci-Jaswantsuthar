function fibonacci(num) {
// your code here
	let n1=0,n2=1;
	for (let i = 0; i <= num; i++) {
			num=n1+n2;
			n1=n2;
			n2=num;
		
	}

}

module.exports = fibonacci;
