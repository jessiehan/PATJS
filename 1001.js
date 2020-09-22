process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
	  var num1=parseInt(chunk.split(' ')[0],10);
	  var num2=parseInt(chunk.split(' ')[1],10);
	  var sum=(num1+num2).toString();
 	  process.stdout.write(formatNumber(sum));
 	  
  }
});

 
function formatNumber(str){
	var isN=false;
	if(str.indexOf('-')>=0){
		isN=true;
	}
	var str=str.replace('-','');
	var len=str.length;
	var array=[];
	var j=0;
	for(var i=len-1;i>=0;i--){
		if(j%3===0&&j!==0&&len>3){
			array.push(',');
		}
		array.push(str.charAt(i));		
		j++;
		
	}
	return isN?('-'+array.reverse().join('')):array.reverse().join('');
	
	
}