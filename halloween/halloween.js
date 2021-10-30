function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function count () {
  if (document.getElementById('time').innerHTML == 0) {
    window.location.href = 'https://js.johnniewong.tech/dev/4/'
  }
  document.getElementById('time').innerHTML -= 1;
  sleep(1000)
  count()
}

count()
