import tr from 'tor-request';

tr.setTorAddress("127.0.0.1",9050)
console.log("Your not tor ip is "+await(await fetch("https://api.ipify.org")).text())
tr.request('https://api.ipify.org', (err, res, body)=>{
  if (!err && res.statusCode == 200) {
    console.log("Your public (through Tor) IP is: " + body);
  }else{
    console.log(err)
  }
});