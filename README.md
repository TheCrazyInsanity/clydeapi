# clydeapi
A basic unofficial api to interact with discord's AI, clyde.
WARNING: This requires a user account to run, this IS against discord's TOS and may lead to a ban, you have been warned!

How to use:
There is one function this library gives, askClyde, it takes 3 inputs
prompt: String with what to ask it, this is equivalent to sending a message to it normally. (It is not required to put @Clyde)
token: The token of your discord account
channelid: The channel id with which to send the messages, i reccommend this channel id be a DM with clyde because anybody else talking can break this library

It then returns a promise that resolves to a string containing clydes exact response.

Current issues:
Cant have two messages at once in the same channel, this can be solved by creating many channels and rotating between them however this is obviously not ideal

To install:
```bash
npm i @thecrazyinsanity2/clydeapi
```
- Usage example:
```javascript
const token="user token here"
const guildid="guild id here"
const catid="category id here"

const clydeapi = require("./index.js")
clydeapi.promMultiAsk(guildid, catid, "Wow! What a great example script for clydeapi!", token).then(value => {
    console.log("Clyde says: " + value)
}).catch(error => {
    console.log(error)
})
```
