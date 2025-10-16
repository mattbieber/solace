## Hi!

I enjoyed working on this take home challenge.  A rundown of the changes I made: 

Incidentally, I upgraded many of the packages FYI.  

> **Note:**  I also used some boiler plate pulled from my own projects for things like styles and such, but it is all my code.  Also, no AI was used.  My time spent was piece-mealed, but ~3 hours (went a little over)



- For the backend I switched the endpoint to a `POST` to accommodate a rquest body for filter criteria
- I did seed a local Postgres Db and use the Drizzle stuff
- I switched the filtering method to a non-`onChange` style to an explicit API-style call, so the filtering is done at the database level.  I did this in light of *consider we have hundreds of thousands of advocates.* That would be a first implementation.  In a real-world setting I would implement something like a paging concept or experiment with a debounced query approach.  
- I kept the `layout` and `page` components as server side to render as much on the server as possible 
- Added Context API for state management
- I also messed with the file structure just a bit



### Given more time I would have...

- Added sorting to the column headers
- Like I mentioned above, deboucing  a real-time search or paging
- Added feedback items like spinners, skeletons
- Taken re-renders into more consideration - not gone with Context API, and make the component tree more robust to where all state is sitting in one spot
- Implemented tests
- Been tighter in typing (TypeScript)
- Given more attention accessibility



Thanks!



Matt

