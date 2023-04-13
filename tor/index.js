import tr from 'tor-request';

export default (url) => new Promise((resolve)=>{
  tr.request(url, (err, res, body) => {
    const response = new Response(body, {
      status: res.statusCode,
    });
    response.raw = res;
    resolve(response);
  });
});

