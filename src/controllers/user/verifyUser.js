const verifyLogin = ({ readUsers }) => {
  return async function post(httpRequest) {
    const headers = {
      "Content-Type": "application/json", 
    };
    try {
      //get the httprequest body
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"]; 
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      const posted = await readUsers({
        ...info,
        source,
      });

      return {
        headers: {
          "Content-Type": "application/json", 
        },
        statusCode: 200,
        body: { posted },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = verifyLogin;
