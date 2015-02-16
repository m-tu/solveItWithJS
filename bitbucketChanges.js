$('.lines-added').text().replace(/\n/g,'').replace(/ /g,'').split('+').splice(1).reduce(function(pre, cur){
	return parseInt(pre) + parseInt(cur);
});