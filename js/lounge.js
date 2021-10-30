var drink = "能量饮料";
var lyrics = "";
var cans = 99;

while (cans > 0) {
	lyrics = lyrics + cans + "罐" 
					+ drink + "在墙上 <br>";
	lyrics = lyrics + cans + "罐"
					+ drink + "<br>";
	lyrics = lyrics + "拿一个下来，传一传，<br>";
	
	if (cans > 1) {
		lyrics = lyrics + (cans - 1) + "罐"
					+ drink + "在墙上";
	}
	else {
		lyrics = lyrics + "没有" + drink + "在墙上 <br>";
	}
	cans = cans - 1;
}
document.write(lyrics);