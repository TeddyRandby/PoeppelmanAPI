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

