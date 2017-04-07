function clickPolygon(){
	alert('test');
	
}
function dealMap(){
	$('#svgAppend').empty();
	var pix = 2400/($('#img_huxing').width());
	
	var arrToObj = {};//二维数组转成对象 - 数组
	var areaPointsObj = {};//以对象格式存放每个热区的坐标值

	var dataArr = data[pageNo];//当前图片的数据坐标点集合
	//二维数组转成对象 - 数组
	for(var i = 0;i < dataArr.length;i++){
		var item = dataArr[i];
		arrToObj[i] = item;
	}

	//遍历对象
	for(var prop in arrToObj){
		var itemArr = arrToObj[prop];
		
		areaPointsObj[prop] = [];
		var firstx = (itemArr[0].x)/pix;
		var firsty = (itemArr[0].y)/pix;
		
		for(var i = 0;i < itemArr.length;i++){
			areaPointsObj[prop].push((itemArr[i].x)/pix);
			areaPointsObj[prop].push((itemArr[i].y)/pix);
		}
		
		//为了保证路径闭合，将第一个坐标点作为最后一组坐标点
		areaPointsObj[prop].push(firstx);
		areaPointsObj[prop].push(firsty);
	}

	var htmlArr = [],htmlArr2 = [];
	for(var prop in areaPointsObj){
		//svg的用这快，可以有样式展现 fill="transparent" stroke="#00ae66" stroke-width="4"
		var html2 = '<polygon class="hoverable" points="'+areaPointsObj[prop].join(",")+'" onclick="clickPolygon()" />';
		
		htmlArr2.push(html2);
	}

	
	var str = '<svg id="svgBox" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0">' + htmlArr2.join('') + '</svg>';
	$('#svgAppend').append(str);//必须用append  用html在ie下不支持
}

		
		
		
		
		
		
		