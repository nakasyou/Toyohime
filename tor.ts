import tr from 'npm:tor-request';
console.log("Your not tor ip is "+await(await fetch("https://api.ipify.org")).text())
tr.request('https://api.ipify.org', (err, res, body)=>{
  if (!err && res.statusCode == 200) {
    console.log("Your public (through Tor) IP is: " + body);
  }else{
    console.log(err)
  }
});