start()
async function start() {
  $.post('https://hub-trigger.havg-trade.io.vn/tracking', { visitorId: new Fingerprint().get(), ipPublic: await getIpPublic(), href: window.location.href })
}

async function getIpPublic() {
  const ipify = await $.get(`https://api.ipify.org?format=json`);
  if (!ipify?.ip) {
    const icanhazip = await $.get(`https://icanhazip.com`);
    return icanhazip.trim();
  }
  return ipify.ip;
}