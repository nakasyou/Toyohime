import tr from 'tor-request';

export default (url) => new Promise((resolve, reject)=>{
  tr.request(url, (err, res, body) => {
    if(err){
      reject(err);
    }
    const response = new Response(body, {
      status: res.statusCode,
    });
    response.raw = res;
    resolve(response);
  });
});

