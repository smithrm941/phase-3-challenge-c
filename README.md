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



## Part 2: Command Line Hotel Management System

## Part 3: Web interface for hotel manager
