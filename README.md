This project lets the user plot airports points on a map. 

## Use the website online here:
https://camolezi.github.io/xmobots-project

## How to use:
After login, click Show Examples airports to display the set of example Airpots. 

You can upload your own airport file to the application, the expected format is: 
```json
 "aerodromes":[
       {
          "name":"Base Aérea Anapolis",
          "city":"Anapolis",
          "description":"AUTH/COOR APP ANAPOLIS E ACC BRASILIA ACONTECERA CENTRO COORD 161419.01S/0485820.09W (ANAPOLIS, GO) RAIO 12KM RTO",
          "created_at":"14/10/1990",
          "runways":[
             {
                "designation":"09/27",
                "width":40,
                "length":1026
             }
          ]
       },

```

The description field must contain DMS coordinates of the airport: 
