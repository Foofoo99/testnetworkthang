function validateForm()
{
	let x = document.forms[0][0].value;
	if (x == "player1" || x == "player2")
	{
		return true;
	}
	else
	{
		alert("Invalid username");
		return false;
	}
}