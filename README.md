# PoeppelmanAPI

This API is powered by GraphQL. Its deployed using Heroku and its only route is found at:                                         
https://poeppelman-api.herokuapp.com/api

Requests are made with a single query object, structured as follows: 


    query { 
                                                                                                              
      poeppelman( gameQuery: {  
  
        RecTeam_Score: "12",                                                                                                    
        PullTeam_Score: "11",                                                                                                     
        RecTeam_RecToStartGame: "1",                                                                                            
        SecondHalf: "1",                                                                                                              
        Time_StartofSim: "77",                                                                                                             
        CapOn: "0",                                                                                                                       
        OLE_Rate: "0.7"                                                                                                                   
      }) {
    
	    RecTeam_Win_Prob
        RecTeam_Avg_Score
        PullTeam_Win_Prob
        PullTeam_Avg_Score
    
          }
    }

This query requests the RecTeam_Win_Prob, RecTeam_Avg_Score, PullTeam_Win_Prob, and PullTeam_Avg_Score 
from a game with these specifications. All the properties in the gameQuery object are necessary, and the request will not work 
without them. 

RecTeam_RecToStartGame, SecondHalf, and CapOn should all be a "1" if true, and a "0" if false.

OLE_Rate means Offensive Line Efficiency, and can be either "0.7" or "0.63". This typically corresponds to men's and women's play respectively, but whichever is more appropriate to the game at hand is what should be applied.

Another note is that its important that all the values are strings, and not the integer 1 or 77.

The data is only simulated until 85min (Time_StartofSim) - values above that will not return anything.
