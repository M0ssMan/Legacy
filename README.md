# playground 

I've created this repo to play around with code.  Going through my coding bootcamp I've often found the desire to test certain theories I have about coding but due to the time constraints of the school I've had little time.  This repo will be an area for me to conduct my test and appease my curiosity.  I will detail the tests conducted in each branch.

##Projects##


##Tests##

###Branch Cookies###
Hypothesis:  If the server sends a cookie on its response headers back to client-side the browser will automatically append the data to memory in the cookies storage (client-side) and send the cookies back to server side on every request thereafter.
Test:  I will set up a basic client/server have the client send a request to the server then have the server respond with a cookie.  The server will log all header information for every request to see if on any subsequent requests if the cookie header is present.  Also I will check where cookies are stored client side to see if this hypothesis is true.
Conclusion: True. Server code was written to attach the cookies in vanilla node and on subsequent requests the cookie headers were present.  The important part of this is that no extra code was written on my end to add this data and therefore client-side most likely the browser is automating this task.
