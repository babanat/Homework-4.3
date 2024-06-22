let birthday = prompt('When is your birthday?')
!!birthday ? alert(`${birthday}`) : alert('you did not want to enter your birthday')

let city = prompt('Where are you living?');
if (city === 'Washington') {
alert('You live in the USA capital');
}
else if (city === 'London') {
alert('You live in the capital of Great Britain');
}
else if (city === 'Kyiv') {
alert('You live in the capital of Ukraine');
}
!!city ? alert(`You live in ${city}`) : alert('you did not want to enter your city')

let sport = prompt('What kind of sport do you like?') 
!!sport ? alert(`You like ${sport}`) : alert('you did not want to enter your sport')
if (sport === 'Box') {
alert('Cool!You want be like Aleksandr Usyk?');
}
else if (sport === 'Football') {
alert('Cool!You want be like Cristiano Ronaldo?');
}
else if (sport === 'Basketball') {
alert('Cool!You want be like Lebron James?');
}


