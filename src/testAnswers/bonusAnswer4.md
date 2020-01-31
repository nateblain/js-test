### Answer To Bonus Question 4

```
async function check(req, res) {
  try {
    const a = await sendFirstHttpRequest();
    const b = await sendSecondHttpRequest();
    res.send("requests sent successfully");
  } catch (error) {
    // send back an error
    res.send(error.stack);
  }
}
```
```
const check = async (req, res) => {
  try {
    await sendFirstHttpRequest();
    await sendSecondHttpRequest();
    res.send("requests sent successfully");
  } catch (error) {
    // send back an error
    res.send(error.message);
  }
}
```

* I am not positive as to what is being asked in this question but above are a few small changes.
* Since this is an api response, I would not send the whole stack trace back to the client, since it probably doesn't care what this is.
* If the response values were in fact different types, I would wrap them in a monad so that that the code is more functional. Obviously this won't be fully functional, since it is side-effecting due to the fact that it is an output response to some client.
* The a and b constants are unnecessary because nothing is done with them.
* Additionally, since catch in Javascript is more expensive you could use a wrapper to chain "then" and "catch" to a promise and handle branching code respectively if an error is returned from the wrapper.
