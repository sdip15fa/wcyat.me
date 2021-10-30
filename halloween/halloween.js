function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function count() {
  if (document.getElementById("time").innerHTML == 0) {
    window.open("https://js.johnniewong.tech/dev/4/", "_blank");
    window.location.href = "https://js.johnniewong.tech/dev/4/";
  } else if (document.getElementById("time").innerHTML > 0) {
    document.getElementById("time").innerHTML -= 1;
    await sleep(1000);
    count();
  }
}

count();
