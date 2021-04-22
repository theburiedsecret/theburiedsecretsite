var dateTitle =[
	["09/22/2004", "Buried Secret"],
	["04/14/2005", "Unbreakable"],
	["07/26/2006", "Lady In The Water"],
	["07/27/2010", "The Last Airbender"],
	["04/12/2016", "Hello Again."],
	["05/13/2016", "Sixth Sense"],
	["02/03/2017", "Split"],
	["09/22/2017", "Signs!"],
	["10/15/2018", "Lady In The Water, Now"],
	["01/30/2019", "Glass"],
	["12/15/2023", "Goodbye"]
];

function showTitle(i){
	document.getElementById(i).innerHTML = dateTitle[i][1];
}

function hideTitle(i){
	document.getElementById(i).innerHTML = dateTitle[i][0];
}