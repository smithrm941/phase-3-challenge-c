# __part-1: Simple web app__

__GET and POST routes__

__While in the part-1 directory:__

Install dependencies with ```npm install```

Start the server with ```npm start```

### ___GET Route:___

GET a captialized word with three exclamation points: ```localhost:3000/api/shout/:word```

__Example:__

```curl -i localhost:3000/api/shout/exclamation``` responds with

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 14
ETag: W/"e-tu4eRkYs96MrbZq+SZhH+3rquGE"
Date: Mon, 14 Aug 2017 23:19:06 GMT
Connection: keep-alive

EXCLAMATION!!!%
```

### ___POST Route:___

POST a JSON object of arrays 'a' and 'b' at ```localhost:3000/api/array/merge```
with Postman or curl and get a concatenation of those two arrays back.

__Example:__
```curl -i -d '{"a": [3, 4], "b": [5, 6]}' -H "Content-Type: application/json" localhost:3000/api/array/merge```

the response is:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 20
ETag: W/"14-60MbenLelCbzwVNvhqb1QT6onyU"
Date: Mon, 14 Aug 2017 23:11:04 GMT
Connection: keep-alive

{"result":[3,4,5,6]}%
```

If either a or b are not an array, the response is:

```
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 47
ETag: W/"2f-1iH/kbeeTzEPFBNZpx/VIKCvQZg"
Date: Mon, 14 Aug 2017 23:17:58 GMT
Connection: keep-alive

{"error":"Input data should be type of array."}%

```
# __part-2: Command Line Hotel Management System__

__While in the part-2 directory:__

Install dependencies with ```npm install```

Create the database schema with ```npm run-script schema```

In ```load-data.sql``` put full paths to seed data in the ```COPY``` statements then use ```npm run-script load``` to load the seed data

After doing this, you'll be able to interact with the database with the following commands (arguments in brackets are optional):

__1)__ ```node ./hotel.js guests```

_lists all guest information_

Example (first 5 rows of results):
```
ID      Guest Name                    Email
--------------------------------------------------------------
1      Aurthur Velti                avelti0@live.com
2      Kurtis Pougher                kpougher1@oakley.com
3      Randy Thys                rthys2@reverbnation.com
4      Charlton Millson                cmillson3@tinyurl.com
5      Onida Reinhard                oreinhard4@twitter.com
```

__2)__ ```node ./hotel.js rooms [--available]```

_lists all rooms_ ```./hotel.js rooms```

_or available rooms only_ ```node ./hotel.js rooms --available```


Example (first 5 rows of results):


```
Room #  Capacity     Available
--------------------------------
2A      2             true
2B      3             true
2C      2             true
2D      6             true
3A      2             true
```


(note: room availability can be updated each day with ```npm run-script update``` )

__3)__ ```node ./hotel.js bookings [<room #>]```

_lists all upcoming bookings_ ```node ./hotel.js bookings```

_or upcoming bookings of a specific room number_ ```node ./hotel.js bookings <room #>```


Example without room number (first 5 rows):

```
Room #  Guest Name                Check-In                 Check-Out
---------------------------------------------------------------------
5A      Billi Coyne             2017-08-12                 2017-08-26
3A      Chicky Bouldon             2017-08-18                 2017-08-31
5A      Janie Powers             2017-08-18                 2017-08-28
3A      Kurtis Pougher             2017-08-27                 2017-09-03
3F      Chicky Bouldon             2017-09-30                 2017-10-10
```


Example with room number (```node ./hotel.js bookings 3D```):

```
Room #  Guest Name                     Check-In                  Check-Out
--------------------------------------------------------------------------
3D      Averil Sawkin               2018-01-09                 2018-01-11
```

Additionally, the ```test``` folder contains a file of database query tests that can be run with ```npm test```

# __part-3: Web interface for hotel manager__

__The part-3 directory contains:__
An HTML page that simulates a web interface for booking hotel rooms and the corresponding CSS, and JavaScript files. It does not interact with a database.
