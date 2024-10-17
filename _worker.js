
function getWildcardFromDomain(domain) {
  const wildcardRegex = /^(\*)\.(.*)$/;
  const match = domain.match(wildcardRegex);
  return match ? match[1] : null;
}

export default {
  async fetch(request, env) {
    let url = new URL(request.url);

    console.log("hostname:",url.hostname);
    console.log("pathname:",url.pathname);
    
    if(url.pathname.startsWith('/')){
      if(url.hostname=="ebook4.naszx.us.kg")
        url.hostname= "ebook.naszx.us.kg";
      else if(url.hostname=="git4.naszx.us.kg")
        url.hostname= "git.naszx.us.kg";
      else if(url.hostname=="ddns4.naszx.us.kg")
        url.hostname= "ddns.naszx.us.kg";
      else if(url.hostname=="xiaoya4.naszx.us.kg")
        url.hostname= "xiaoya.naszx.us.kg";
      else if(url.hostname=="video4.naszx.us.kg")
        url.hostname= "video.naszx.us.kg";
      else if(url.hostname=="ha4.naszx.us.kg")
        url.hostname= "ha.naszx.us.kg";
      else if(url.hostname=="music4.naszx.us.kg")
        url.hostname= "music.naszx.us.kg";
      else if(url.hostname=="alist4.naszx.us.kg")
        url.hostname= "alist.naszx.us.kg";
      else if(url.hostname=="ha4.naszx.us.kg")
        url.hostname= "ha.naszx.us.kg";
      else if(url.hostname=="qbit4.naszx.us.kg")
        url.hostname= "qbit.naszx.us.kg";
      else if(url.hostname=="openwrt4.naszx.us.kg")
        url.hostname= "openwrt.naszx.us.kg";
      else if(url.hostname=="route4.naszx.us.kg")
        url.hostname= "route.naszx.us.kg";
      else if(url.hostname=="nastool4.naszx.us.kg")
        url.hostname= "nastool.naszx.us.kg";
      else if(url.hostname=="jackett4.naszx.us.kg")
        url.hostname= "jackett.naszx.us.kg";
      else if(url.hostname=="joplin4.naszx.us.kg")
        url.hostname= "joplin.naszx.us.kg";
      else if(url.hostname=="terminal4.naszx.us.kg")
        url.hostname= "terminal.naszx.us.kg";
      else if(url.hostname=="webdav4.naszx.us.kg")
        url.hostname= "webdav.naszx.us.kg";
      else if(url.hostname=="mqtt4.naszx.us.kg")
        url.hostname= "mqtt.naszx.us.kg";
      else 
        url.hostname= "ebook.naszx.us.kg";

      console.log("hostname:",url.hostname);
      let new_request=new Request(url,request);
      return await fetch(new_request);
    }
    // Otherwise, serve the static assets.
    return env.ASSETS.fetch(request);
  }
};


