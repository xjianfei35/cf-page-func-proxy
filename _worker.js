
function getWildcardFromDomain(domain) {
  const wildcardRegex = /^(\*)\.(.*)$/;
  const match = domain.match(wildcardRegex);
  return match ? match[1] : null;
}

export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if(url.pathname.startWith('/')){
      //let fdomain = getWildcardFromDomain(url.hostname);
      if(url.hostname="ebook4.naszx.us.kg")
        url.hostname= "ebook.naszx.us.kg";
      else if(url.hostname="git4.naszx.us.kg")
        url.hostname= "git.naszx.us.kg";
      else if(url.hostname="ddns4.naszx.us.kg")
        url.hostname= "ddns.naszx.us.kg";
      else if(url.hostname="xiaoya4.naszx.us.kg")
        url.hostname= "xiaoya.naszx.us.kg";
      else if(url.hostname="video4.naszx.us.kg")
        url.hostname= "video.naszx.us.kg";
      else if(url.hostname="ha4.naszx.us.kg")
        url.hostname= "ha.naszx.us.kg";
      else if(url.hostname= "music4.naszx.us.kg")
        url.hostname= "music.naszx.us.kg";
      else if(url.hostname= "alist4.naszx.us.kg")
        url.hostname= "alist.naszx.us.kg";
      else 
        url.hostname= "www.naszx.us.kg";
      let new_request=new Request(url,request);
      return fetch(new_request);
    }else  
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
  }
};
