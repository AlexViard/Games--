let firstSoloLetter = (string) =>
{
  let i = 0;
  let j = 1;

  j = 1;


  while (j != string.length)
  {
    if (j == i)
    {
       j++;
    }
    if (string[i] == string[j])
    {
      j=0;
      i++;
    }
    else if (string[i] != string[j])
    {
      j++;
    }
  }

  if (j != i)
  {
    console.log(string[i]);
  }
  else
  {
    console.log(null);
  }
}


firstSoloLetter("");
