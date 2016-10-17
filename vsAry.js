var vsAry = function(oAry, tAry) {
	var eqAry = [];
	var moreAry = [];
	var lessAry = [];

	/**
	 * eqAry:输出共同存在的元素
	 * moreAry:输出原始oAry冗余的元素
	 */
	oAry.map(function(ele) {
		tAry.indexOf(ele) != -1 ? eqAry.push(ele) : moreAry.push(ele);
 	});

	/**
	 * lessAry:输出原始oAry缺失的元素
	 */
 	tAry.map(function(ele) {
 		if(oAry.indexOf(ele) == -1){
 			lessAry.push(ele);
 		}
 	});

 	
 	
 	console.log('origin Ary:\n',oAry);
 	console.log('target Ary:\n',tAry);
	console.log('相等的元素:\n',eqAry);
	console.log('冗余的元素:\n',moreAry);
	console.log('错失的元素:\n',lessAry);

	return moreAry;

};

module.exports = vsAry;