function gameObject() {
    const gameInfo = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {"Alan Anderson": {
                        number: "0",
                        shoe: "16",
                        points: "22",
                        rebounds: "12",
                        assists:"12",
                        steals: "3",
                        blocks: "1",
                        slamDunks: "1",
                    },
                    "Reggie Evans": {
                        number: "30",
                        shoe: "14",
                        points: "12",
                        rebounds: "12",
                        assists:"12",
                        steals: "12",
                        blocks: "12",
                        slamDunks: "7",
                    },
                    "Brook Lopez": {
                        number: "11",
                        shoe: "17",
                        points: "17",
                        rebounds: "19",
                        assists:"10",
                        steals: "3",
                        blocks: "1",
                        slamDunks: "15",
                    },
                    "Mason Plumlee": {
                        number: "1",
                        shoe: "19",
                        points: "26",
                        rebounds: "12",
                        assists:"6",
                        steals: "3",
                        blocks: "8",
                        slamDunks: "5",
                    },
                    "Jason Terry": {
                        number: "31",
                        shoe: "15",
                        points: "19",
                        rebounds: "2",
                        assists:"2",
                        steals: "4",
                        blocks: "11",
                        slamDunks: "1",
                    },
        }},
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{"Jeff Adrien": { 
                        number: "4",
                        shoe: "18",
                        points: "10",
                        rebounds: "1",
                        assists:"1",
                        steals: "2",
                        blocks: "7",
                        slamDunks: "2",
                    },
                    "Bismak Biyombo": {
                        number: "0",
                        shoe: "16",
                        points: "12",
                        rebounds: "4",
                        assists:"7",
                        steals: "7",
                        blocks: "15",
                        slamDunks: "10",
                    },
                    "DeSagna Diop": {
                        number: "2",
                        shoe: "14",
                        points: "24",
                        rebounds: "12",
                        assists:"12",
                        steals: "4",
                        blocks: "5",
                        slamDunks: "5",
                    },
                    "Ben Gordon": {
                        number: "8",
                        shoe: "15",
                        points: "33",
                        rebounds: "3",
                        assists:"2",
                        steals: "1",
                        blocks: "1",
                        slamDunks: "0",
                    },
                    "Brendan Haywood":{
                        number: "33",
                        shoe: "15",
                        points: "6",
                        rebounds: "12",
                        assists:"12",
                        steals: "22",
                        blocks: "5",
                        slamDunks: "12",
                    },
            },
        },
    }
    //console.log(gameObject());
    return gameInfo
}
console.log(gameObject());

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())

//   //Todd's ok? logic Accepts player name, returns points scored. 
//   function numPointsScored(name) {
//       let object = gameObject();
//         let homePlayers = Object.keys(object['home']['players'])
//         //let awayPlayers = Object.keys(object[away][players])
//         let ticker = homePlayers.indexOf(name)
//         if (ticker === -1) {
//             let result = object['away']['players'][name]['points']
//             return result
//         } else {
//             let result = object['home']['players'][name]['points']
//             return result
//         };
        
//   };
//   console.log(numPointsScored());

  function shoeSize(name) {
    let object = gameObject();
      let homePlayers = Object.keys(object['home']['players'])
      //let awayPlayers = Object.keys(object[away][players])
      let ticker = homePlayers.indexOf(name)
      if (ticker === -1) {
          let result = object['away']['players'][name]['shoe']
          return result
      } else {
          let result = object['home']['players'][name]['shoe']
          return result
      };
      
};
console.log(numPointsScored());
//------------------------------
//   function shoeSize (name) {
//       let object = gameObject(); 
//       for (let key in object) {
//           let value = object[key] 
//           console.log(object.values(object))
//       };
//   };
// console.log (shoeSize())
//---------------------------

// function numPointsScored(name) {
//         let pointsScored = gameObject();
//             for (let key in pointsScored['home']['players']) {
//         let value = pointsScored['home']['players'][key];
//         if (value === name) {
//             let result = pointsScored['home']['players'][key][points]
//             break
//         }
//         console.log(numPointsScored(name, value));
//     }
//     }


