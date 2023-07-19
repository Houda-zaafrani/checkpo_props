# Getting Started with Create React App with name props

# I create folder "data" that have the file "data.js"

# ############# data.js

# this file contain our array "playerList" of objects : name, team, nationality, jerseyNumber, age, Image_URL,"playerList" was exported.

# ############# PlayerCard.js

# we import card from bootstap that will contain our data for evry player

# step of creating card :

# 1- install bootstrap with npm install react-bootstrap bootstrap

# 2- copy css bootstrap in App.css

# 3- choose the card

# 4- copy the code of carde

# we declare props {player} like argument in our component 'PlayerCard'

# change the date of bootstrap card to the value of our object by calling evry value using props 'player' "player.keyOfObject

# ############# ListPlayers.js

# in PlayerCard.js we have the card structure of evry player, now we will display all the players in our array of object 'playerList'

# in the component ListPlayers we have like argument the array pf object 'playerList'

# we use array function map() to display all players.We map in evry 'player'(props in the component 'PlayerCard') and display his information in the card

# ############# App.js

# we import in this file our array 'playerList' and file ListPlayer.js that contain all players
