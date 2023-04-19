chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

if(window.location.href === 'https://www.midjourney.com/app/rank-pairs/'){
  console.log('In Rank Pairing Page, started auto ranking')
  setInterval(()=>{

    if(document.getElementsByClassName('flex relative grow justify-center items-center w-full h-full').length!== 0) {
      (document.getElementsByClassName('flex relative grow justify-center items-center w-full h-full')[getRandomInt(4)].children[0] as HTMLDivElement).click();   
    } else {
      location.reload();
    }

  }, (getRandomInt(15)*1000+1500))
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
