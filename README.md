When getting started with programming, sometimes it can be very hard to understand when to break out of various statements, and the reasons why we break when we do. 

I'll begin with a short definition of terms:

`stop execution` - general term to describe stopping a function, for loop, block of code, etc. 
`return` - used when stopping execution of a function, will provide the value following the return statement to the location where the function was called.
`break` - stop execution of a for loop, stopping all iterations, and continuing on after the loop.
`continue` - stop execution of the current iteration of the loop, begin on the next iteration. 

The Earth is at the edge of it's existence, the Sun will triple in size billions of years before we thought it would! You are the scientist in charge of finding us a new planet, in a new galaxy. Over the years other researchers have compiled lists of galaxies, and details about the planets, which you now have access to. So far, you've been able to compile lists of all galaxies, and whether or not they are inhabitable, however the only way thay we can tell that they are inhabitable or not is through the name of the planet. These planets have a very specific naming schema, so they can be easily parsed by javascript (which for some reason has become the language of the future).  

```javascript
// Here are some example galaxies. Each galaxy has a list of planets. 
// any planets that have 'HAB' are habitable. 
// The actual lists of planets coulde be hundreds of thousands of items.

var Andromeda = ['2015_XX_HAB', '4098_RC_12', '5342_AC', '2313_AC_b', '2013_AC', '5830_B9_HAB']
var Messeir_81 = ['JRS_2009_AC', 'JRS_1243_b', 'KRS_4563_q', 'KRL_3212', 'JRS_1423']
var Triangulum_Galaxy = ['QV_11', 'VC_1242', '6732_HAB_b', '4365_AC_c']
```

> returning in the middle vs returning at the end of a loop

You've been tasked to find out which galaxies even contain habititable planets at all. With the examples given above, this is pretty easy. You look at each element, and the first time that you see 'HAB' in the name, you know that that galaxy has habitable planets, and don't have to read the rest of the planets. In the case of Messeir_81, there is not one, and we would have to read every planet before being able to absolutely determine that the galaxy does not have any habitable planets. 

```javascript
// we'll call this 'hasTypeOfPlanets', just in case we want to find a different type of planet. 
// Passing in galaxy, and type of planet (which will be a RegEx value used to search on strings)
function hasTypeOfPlanets(galaxy, planetType) {
  for (var i = 0; i < galaxy.length; i++) { // loop over the entire galaxy
    if (galaxy[i].match(planetType)) { // if any given planet regex matches the planetType
      return true; // return true from the function, stopping the loop and function because we now know that the galaxy has that type of planet
    }
  }
  return false; // only return false once you've completed checking every planet in the galaxy 
}
hasTypeOfPlanets(Andromeda, /HAB/g); // true
hasTypeOfPlanets(Messeir_81, /HAB/g); // false
hasTypeOfPlanets(Triangulum_Galaxy, /HAB/g); // true
```

> when to not stop execution of a loop

Now we've narrowed down our planet search by a lot, there's a lot of galaxies out there, and we can't be flying around looking for a planet. Suddenly red lights start to flash, an alarm goes off, holograms of Will Smith and Bruce Willis appear. Aliens are clearly invading, but luckily the researchers have already included information about which planets may have already been invaded. We need to find a list of planets that are habitable, and have not been invaded. With the examples, we could read each one, and then write down each planet that has 'HAB' and does not have 'XX'.

```javascript
// this is very similar to the previous function, with some important differences.
function planetsNotInvaded(galaxy) {
  let notInvaded = []; // a place to store all matched planets
  for (var j = 0; j < strArray.length; j++) {
    if (gaxlaxy[j].match(/^(XX).*HAB.*/g)) { // if the current planet is habitable, and not invaded
      found.push(strArray[j]); // record the current planet
    }
  }
  return found; // return a list of planets after the loop has finished
}
```

> when to use a negative comparison to return from within a loop.

Now we've reached our new home planet, lovingly named Earth 2S (after Earth2, Earth 2, and Earth+ were all denied.) and safe from aliens. While there's no aliens around, there are strange plants, and strangely divided areas. Some of the plants in some of these areas have been giving people allergic reactions. The researchers have once again curated a list of the areas, labeled as to whether we should avoid them or not. The colony needs to close off some areas, needs to mark that the area has been quarantined, and find out which one they need to close off next.

```javascript
var zones = [
 { name: 'Kanto', safe: true },
 { name: 'Johto', safe: true },
 { name: 'Hoenn', safe: true },
 { name: 'Sinnoh', safe: false },
 { name: 'Unova', safe: false },
 { name: 'Kalos', safe: false },
 { name: 'Alola', safe: false }
]

function setZoneSafe() {
  for (var i = 0; i < zones.length; i++) { // loop over our zones
    if(!zones[i].safe) { // if the zone is NOT safe, 
      zones[i].safe = true; // set it to safe,
      return zones[i+1].name; // and return our next zone
    }
  }
  return "All Zones Safe!" // once all zones have been set to safe, the for loop will finish, and we'll know that the colony is safe.
}
```

Hopefully this helped you understand when, how, and why to break out of a function or a loop -- and how to save the planet from impending doom!
