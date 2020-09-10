let wel = "bilibili";

function getVal(){
	if(wel==document.getElementById('textInput').value)
	{
		$("#logo").css("display","none");
		$("#search").css("display","none");
		$("#ganbei").css("display","flex");
	}
}