// Copyright 2021 wcyat. MIT License <https://gitlab.com/wcyat/wcyat.me-dev/-/blob/master/LICENSE>.
let i = 0
const head1 = ['wcyat', 'About me', 'Gitlab', 'Gitlab', 'Gitlab', 'Gitlab']
const head2 = ['', '', '', 'Repositories', 'Repositories', 'Repositories']
const head3 = ['', '', '', 'C++', 'Python', 'html/javascript']
const p1 = [
  'Hi, welcome to my page!',
  'I am a student developer from Hong Kong, learning on my own. This website is written in html/javascript, the third language I have ever learnt.',
  'Find me on GitLab: <br><a href="https://gitlab.com/wcyat"><img alt="winnie" src="/images/winnie.png" length="100" width="100"></a>',
  '',
  '',
  ''
]
const list1 = [
  '',
  '',
  '',
  '<li><a href="/enable-hyperv-sandbox">enable-hyperv-sandbox</a></li>\n<li><a href="/simple-password-generator">simple-password-generator</a></li>',
  '<li><a href="/telegram-votebot">telegram-votebot</a></li>\n<li><a href="https://gitlab.com/wcyat/wendycheungbot">wendycheungbot</a></li>',
  '<li><a href="https://gitlab.com/wcyat/wcyat.gitlab.io">wcyat.me</a> (<a href="https://wcyat.me">wcyat.me</a>)</li>\n<li><a href="https://gitlab.com/wcyat/wcyat.me-dev">wcyat.me-dev</a> (this website)</li>'
]
const swbuttons = [
  '<input type="button" class="next" value="Next" onclick = "next()">',
  '<input type="button" class="next" value="Next" onclick = "next()">\n<input type="button" class="back" value="Back" onclick = "back()">',
  '<input type="button" class="return" value="Return" onclick = "next()">\n<input type="button" class="back" value="Back" onclick = "back()">'
]
const [b1, b2, b3] = swbuttons

function antibot () {
  const input = prompt('enter wcyat')
  if (input !== 'wcyat') {
    alert('forbidden')
    window.location.href = 'http://google.com'
  } else {
    window.location.href = '/content.html'
  }
}

function swcontents () {
  document.getElementById('head1').innerHTML = head1[i]
  document.getElementById('head2').innerHTML = head2[i]
  document.getElementById('head3').innerHTML = head3[i]
  document.getElementById('p1').innerHTML = p1[i]
  document.getElementById('list1').innerHTML = list1[i]
}

function next () {
  document.getElementById('switchbutton').innerHTML = b1
  if (i < head1.length - 1) {
    i++
    document.getElementById('switchbutton').innerHTML = b2
    if (i === head1.length - 1) {
      document.getElementById('switchbutton').innerHTML = b3
    }
  } else {
    i = 0
  }
  swcontents()
}

function back () {
  i--
  swcontents()
  if (i === 0) {
    document.getElementById('switchbutton').innerHTML = b1
  } else {
    document.getElementById('switchbutton').innerHTML = b2
  }
}
