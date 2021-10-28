// Copyright 2021 wcyat. MIT License <https://gitlab.com/wcyat/wcyat.gitlab.io/-/blob/master/LICENSE>.
let lastelement = ''
let text = ''

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function changecopystate () {
  if (lastelement !== '') {
    document.getElementById(lastelement).innerHTML = 'Copy'
  }
};

async function copytoclipboard (textid, buttonid) {
  if (document.getElementById(buttonid).innerHTML.includes('Copy')) {
    changecopystate()
    lastelement = buttonid
    text = document.getElementById(textid).innerHTML
    navigator.clipboard.writeText(text)
    document.getElementById(buttonid).innerHTML = 'Copied to clipboard'
    await sleep(5000)
    changecopystate()
  } else {
    alert('Already copied to clipboard!')
  }
};
