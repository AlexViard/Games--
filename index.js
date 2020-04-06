function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let i = 0;

let random = getRandomIntInclusive(1,5);

while (i < 10)
{
  let proposition = prompt("Proposez un chiffre")

  if (proposition < random)
  {
    alert("Le chiffre à trouver est plus grand !")
    i++;
  }
  else if (proposition > random)
  {
    alert("Le chiffre à trouver est plus petit !")
    i++;
  }
  else
  {
    alert("Bravo ! Tu as gagné !")
    break
  }
}

if (i == 10)
  alert("Perdu ! Essaye encore")
