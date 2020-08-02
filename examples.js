const NanoClient = require("./lib");

// with your own node
const client = new NanoClient({
  url: 'http://localhost:7076'
});

// with https://mynano.ninja/api
/*
const client = new NanoClient({
  apiKey: 'yourapikey'
});
*/

async function queryDemo() {
  try {
    // query the account balance
    var account = await client.account_balance('nano_38ehm7498rmbwjjb5kinnpse7c1kbzuqxsefguqicrjnceae3pxw75pndwut');

    // query the current block count
    var count = await client.block_count();

    // custom RPC command (e.g. block_info)
    var block_info = await client._send('block_info', {
      "json_block": true,
      "hash": "87434F8041869A01C8F6F263B87972D7BA443A72E0A97D7A3FD0CCC2358FD6F9"
    });

  } catch (error) {
    console.error("\nError: " + error.message);
    return
  }

  console.log("Account balance:", account);
  console.log("Block count:", count);
  console.log("Block info:", block_info.block_account);
}

queryDemo();
