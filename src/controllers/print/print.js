const nowprint = ({printHeres}) => {
    return async function post(httpRequest) {
      try {
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        info.cookie = httpRequest.headers["Cookie"]; // add cookie to req body
        if (httpRequest.headers["Referer"]) {
          source.referrer = httpRequest.headers["Referer"];
        }
        const posted = await printHeres({
          ...info,
          source
        });
        return {
          headers: {
            "Content-Type": "application/json",
            "Last-Modified": new Date(posted.modifiedOn).toUTCString()
          },
          statusCode: 201,
          body: { posted }
        };
      } catch (e) {
        // TODO: Error logging
        console.log(e);
        return {
          headers: {
            "Content-Type": "application/json"
          },
          statusCode: 400,
          body: {
            error: e.message
          }
        };
      }
    };
  };
  
  module.exports = nowprint; 