/* BACKEND CONFIG UNTUK SEMUA SUMBER */

const CONFIG = {

  /* SOURCE VIDEO */
  videy: "https://cdn2.videy.co/",
  xfollow: "https://www.xxxfollow.com/media/fans/post_public/",
  xfree: "https://cdn.xfree.com/xfree-prod/",
  quax_x: "https://qu.ax/x/",
  quax_f: "https://qu.ax/f/",

  /* SMARTLINK FULL HD */
  smartlink_url: "https://omg10.com/4/10410353",

  /* HISTATS ID */
  histats_id: "4996898"

};

/* AUTO ENCODE SEMUA URL */

function encodeURL(url){
  return btoa(url);
}

const ENCODED = {
  videy: encodeURL(CONFIG.videy),
  xfollow: encodeURL(CONFIG.xfollow),
  xfree: encodeURL(CONFIG.xfree),
  quax_x: encodeURL(CONFIG.quax_x),
  quax_f: encodeURL(CONFIG.quax_f),
  smartlink: encodeURL(CONFIG.smartlink_url)
};
