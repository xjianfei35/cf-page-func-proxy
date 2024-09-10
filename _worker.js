
function getWildcardFromDomain(domain) {
  const wildcardRegex = /^(\*)\.(.*)$/;
  const match = domain.match(wildcardRegex);
  return match ? match[1] : null;
}

export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      let fdomain = getWildcardFromDomain(url.hostname);
      url.hostname= fdomain+".naszx.us.kg";
      let new_request=new Request(url,request);
      return fetch(new_request);
      
      // Otherwise, serve the static assets.
      //return env.ASSETS.fetch(request);
    }
  };
