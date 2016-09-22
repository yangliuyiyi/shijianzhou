$(function(){
	$('.box').find('.box_button').click(function(){
		var center=$('.box_con').text();
		if(center==""){
			alert("请输入内容喔！");
			return;
		}
	//添加内容
	$('.nextbox').prepend('<div class="msg"><div class="dot"></div><span id="time">'+year+'-'+month+'-'+day+'&nbsp;&nbsp;<span id="hour">'+hours+':'+minute+'</span></span><br/><p style="padding: 4px;">'+center+"</p></div>");
	//清空内容
	$('.box_con').text('');
	});
	
	//判断输入长度
	$('.box_con').keydown(function(event){
		var len = $('.box_con').text().length;
		if(len>70){
			alert("够了，你别输入了，哪儿那么多话儿！");	
		}
	})
	
	var date = new Date();
	var year= date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hours=date.getHours();
	var minute=date.getMinutes();
	
	

	
})