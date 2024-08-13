// 定义一个数组，保存当前所有页面的class name
var page_index = ["page-1","page-2","page-3","page-4","page-5","page-6","page-7","page-8","page-9","page-10","page-11","page-12","page-13","page-14","page-15","page-16","page-17","page-18","page-19","page-20","page-21","page-22","page-23","page-24","page-25","page-26","page-27","page-28","page-29","page-30","page-31","page-32","page-33","page-34","page-35","page-36","page-37","page-38","page-39","page-40","page-41","page-42","page-43","page-44","page-45","page-46","page-47","page-48","page-49","page-50","page-51","page-52","page-53","page-54","page-55","page-56","page-57","page-58","page-59","page-60","page-61","page-62","page-63","page-64","page-65","page-66","page-67","page-68","page-69","page-70","page-71","page-72","page-73","page-74","page-75","page-76","page-77","page-78","page-79","page-80","page-81","page-82","page-83","page-84","page-85","page-86","page-87","page-88","page-89","page-90","page-91","page-92","page-93","page-94","page-95","page-96","page-97","page-98","page-99"];

// 输入pagename，打开指定的div，隐藏其他的div
function page_option(pagename){
	var tar_index = page_index.indexOf(pagename);
	page_index.slice(tar_index, 1);
	for (var j = 0; j < page_index.length ; j++){
		var close_div = document.getElementsByClassName(page_index[j]);
		for (var i = 0; i<close_div.length;i++) {
			   close_div[i].style.display="none";
		};
	}
	
	var opendiv = document.getElementsByClassName(pagename);
	for (var i = 0; i<opendiv.length;i++) {
		   opendiv[i].style.display="block";
	};
}

// 点击 返回第一页按钮 执行的操作
function first_click(){
	page_option("page-1");
	document.getElementById('currentPage').value=1;
}

// 点击 跳到最后一页按钮 执行的操作  ------源代码
//function last_click(){
	//var total_page = document.getElementById('totalPage').value;
	//page_option(page_index[page_index.length - 1]);
	///document.getElementById('currentPage').value=total_page;
//}

function last_click(){
	var total_page = document.getElementById('totalPage').value;
	var pagename = page_index[parseInt(total_page)-1];
	//page_index[parseInt(page_index.length)-1];
		page_option(pagename);
	//document.getElementById('currentPage').value=page_index.length;
	document.getElementById('currentPage').value=total_page

}

// 点击 上一页按钮 执行的操作
function prev_click(){
	var cur_page = document.getElementById('currentPage').value;
	if (cur_page > 1){
		document.getElementById('currentPage').value=parseInt(cur_page)-1;
		var pagename = page_index[parseInt(cur_page)-2];
		page_option(pagename);
	}
}

//function next_click(){
	//var cur_page = document.getElementById('currentPage').value;
	//var total_page = document.getElementById('totalPage').value;
	//if (0 < cur_page < total_page){
	//	document.getElementById('currentPage').value=parseInt(cur_page)+1;
	//	var pagename = page_index[parseInt(cur_page)+2];		
	//	page_option(pagename);
	//}
//}

// 点击 下一页按钮 执行的操作


function next_click() {
    var cur_page = document.getElementById('currentPage').value;
    if (cur_page < page_index.length) {
        document.getElementById('currentPage').value=parseInt(cur_page)+1;		
		var pagename = page_index[parseInt(cur_page)];
		page_option(pagename);
    }  
}

// 手动改变当前页码时执行的操作
function choose_page(){
	var cur_page = document.getElementById('currentPage').value;
	var pagename = page_index[parseInt(cur_page)-1];
	page_option(pagename);
}

// 鼠标事件，经过每一条资讯时改变标题的颜色
function light(obj){
	obj.firstElementChild.style.color="#FF9900";
}

function normal(obj){
	obj.firstElementChild.style.color="#000000";
}