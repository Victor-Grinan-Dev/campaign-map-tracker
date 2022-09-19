# Here is a writen guide to my problem:

## set up:

- clone the repo https://github.com/Victor-Grinan-Dev/campaign-map-tracker
- npm install
- npm run server2 for the lates database

## test

when the program is running, navegate to profile and inside profile there is a link to "My Army".

once there in the right side of thre panel fill the inputs and click "ad unit to formation", this will console.log an object of with the data that was entered.

also will console.log the list of all units entered. notice that reads undefined.

goto components/small_components/CreateUnit.jsx line 36 to check this handler.

## error

the same effect should have the left panel when you fill the inputs but instead the state reads undefined. (the list of units should be read from this formationslice state)

inside components/small_components/createFromation.jsx line 53 there is a comment explaning what happens when i try to export the selectors.

the before error that i was getting is inside app/store.js there is a comment about non serializable data. that I fixed with that line but still get no data results inside state.
