function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function randomSetup()
{
	for(i = 1; i <= 6; i++)
	{
		text = "";
		for(r = 0; r < 13; r ++)
		{
			text += "<tr>";
			for(c = 0 ; c < 7; c++)
			{
				text += "<td>";
				
				rand = getRandomInt(1, 4);
				if(rand == 1)
				{
					text += "—";	
				}
				else if(rand == 2)
				{
					text += "|";	
				}
				else if(rand == 3)
				{
					text += "\\";	
				}
				else if(rand == 4)
				{
					text += "/";	
				}
				text += "</td>";
			}
			text += "</tr>";
		}
		
		document.getElementById("c"+i.toString()).innerHTML = text;
	}
}

function updateNum(num)
{
	if(num == 0)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>/</td><td>—</td><td>\\</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>\\</td><td>—</td><td>/</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 1)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>/</td><td>—</td><td>\\</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>\\</td><td>—</td><td>/</td><td>—</td><td>—</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 2)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>|</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>—</td></tr><tr><td>|</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 3)
	{
			return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>/</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 4)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>\\</td><td>—</td><td>/</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>\\</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 5)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>/</td></tr><tr><td>|</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>—</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>/</td><td>—</td><td>—</td><td>|</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 6)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>/</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>|</td><td>—</td><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 7)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 8)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>/</td><td>—</td><td>\\</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>\\</td><td>—</td><td>/</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>/</td><td>—</td><td>\\</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>\\</td><td>—</td><td>/</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	else if(num == 9)
	{
		return "<tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>\\</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>\\</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td><td>—</td><td>|</td></tr><tr><td>/</td><td>—</td><td>—</td><td>—</td><td>/</td><td>—</td><td>|</td></tr><tr><td>|</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>|</td></tr><tr><td>\\</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>/</td></tr><tr><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>";
	}
	
}

function compareThenUpdate(tableId, targetText)
{
	row = -1; col = -1;
	var table = document.getElementById(tableId);
	intag = false;
	
	for(i = 0; i < targetText.length; i++)
	{
		if(targetText.charAt(i) == '<')
		{
			intag = true;
			if(targetText.charAt(i+1)=='t' && targetText.charAt(i+2) == 'r')
			{
				  row += 1;
				  col = -1;
			}
			else if(targetText.charAt(i+1)=='t' && targetText.charAt(i+2) == 'd')
			{
				col += 1;
			}
		}
		else if(targetText.charAt(i) == '>')
		{
			intag = false;
		}
		else if(intag == false && targetText.charAt(i) != table.rows[row].cells[col].innerHTML)
		{
			if(table.rows[row].cells[col].innerHTML == '—')
			{
				table.rows[row].cells[col].innerHTML = '\\';
			}
			else if(table.rows[row].cells[col].innerHTML == '|')
			{
				table.rows[row].cells[col].innerHTML = '/';
			}
			else if(table.rows[row].cells[col].innerHTML == '/')
			{
				table.rows[row].cells[col].innerHTML = '—';
			}
			else if(table.rows[row].cells[col].innerHTML == '\\')
			{
				table.rows[row].cells[col].innerHTML = '|';
			}
		}
	}
}
function update()
{
	var date = new Date();
	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hr  = date.getHours();
	
	var hr_1 = Math.floor(hr/10);
	var hr_2 = hr % 10;
	var min_1 = Math.floor(min/10);
	var min_2 = min % 10;
	var sec_1 = Math.floor(sec/10);
	var sec_2 = sec % 10;
	
	/* direct update */
	/*
	document.getElementById("c1").innerHTML = updateNum(hr_1);
   	document.getElementById("c2").innerHTML = updateNum(hr_2);
	document.getElementById("c3").innerHTML = updateNum(min_1);
   	document.getElementById("c4").innerHTML = updateNum(min_2);
   	document.getElementById("c5").innerHTML = updateNum(sec_1);
	document.getElementById("c6").innerHTML = updateNum(sec_2);
	*/
	
	/*little rotation animation*/
	//for(i = 0; i < 4; i++) // at most rotate 4 times
	//{
		//setTimeout(function () {
			compareThenUpdate("c1", updateNum(hr_1));
			compareThenUpdate("c2", updateNum(hr_2));
			compareThenUpdate("c3", updateNum(min_1));
			compareThenUpdate("c4", updateNum(min_2));
			compareThenUpdate("c5", updateNum(sec_1));
			compareThenUpdate("c6", updateNum(sec_2));
		
		//}, 200);
	//}
}