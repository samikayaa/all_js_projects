// Project: Hesabı Kim Ödeyecek?

// Beklenen çıktı:
// {
//     Argentina: 8,
//     Brazil: 14,
//     Czechoslovakia: 2,
//     England: 4,
// }

// Örnek Maç Datası
// {
//     "Year": 1980,
//     "Stage": "Final",
//     "Home Team Name": "Turkey",
//     "Home Team Goals": 3,
//     "Away Team Goals": 2,
//     "Away Team Name": "Brazil"
//     // ... diğer bilgiler
// }

//const {matchsData} = require('./matchsData.js');

const finallerdekiGolSayilari = (matchsData) => {

    const finalMatchs = fifaData.filter((match) => match['Stage']==='Fianl'); //final maçlarını listeledim.

    const countGoals = {}; //sonuç formatımı atamak üzere boş obje tanımladım.

    finalMatchs.forEach((exampleMatch) => {
        let homeTeam = exampleMatch['Home Team Name'];
        let homeGoals = exampleMatch['Home Team Goals'];
        
        let awayTeam = exampleMatch['Away Team Name'];
        let awayGoals = exampleMatch['Away Team Goals'];

        if (!countGoals[homeTeam]) {
            countGoals[homeTeam] = 0; //sonuç objemde bu takım yer almıyor ise takım ismini objeme 0 değeri ile birlikte ekledim.
        }
        countGoals[homeTeam] += homeGoals; //takımın final maçında attığı gol sayısını da yanına eklemiş oldum.
    
        if (!countGoals[awayTeam]) {
            countGoals[awayTeam] = 0;
        }
        countGoals[awayTeam] += awayGoals;
    
    });

    return countGoals;

}
