module.exports = function main(innumbers) {
	var upper=['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
	var mider=['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
	var lower=['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
    var rowstr='';
	for(j=0;j<3;j++){
		
	
		for(i=0;i<innumbers.length;i++){
			
		  switch(j){
			case 0:	
			    if(i==0)
					rowstr=rowstr+upper[innumbers.charAt(i)];
				else
					rowstr=rowstr+" "+upper[innumbers.charAt(i)];break;
			case 1:
				 if(i==0)
					rowstr=rowstr+mider[innumbers.charAt(i)];
				else
					rowstr=rowstr+" "+mider[innumbers.charAt(i)];break;
			case 2:
				 if(i==0)
					rowstr=rowstr+lower[innumbers.charAt(i)];
				else
					rowstr=rowstr+" "+lower[innumbers.charAt(i)];break;
			default:
				break;
			
		  }
		}
		rowstr=rowstr+"\n";
	
	}
	
    return rowstr;
};