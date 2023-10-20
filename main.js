const [paste, convert, go] = document.querySelectorAll("button");
const [originalURL, newURL] = document.querySelectorAll("input");

window.onload = () => originalURL.focus();

convert.addEventListener("click", (e) => {
  const str = originalURL.value;
  if (str === "" || !str.includes("amazon")) return;

  const dp =
    str.lastIndexOf("dp/") === -1
      ? str.lastIndexOf("product/") + 8
      : str.lastIndexOf("dp/") + 3;
  const dpVal = str.slice(dp, dp + 10);
  newURL.value = "https://www.amazon.com/dp/" + dpVal;

  go.parentElement.href = newURL.value;
});

paste.addEventListener("click", (e) => {
  navigator.clipboard.readText().then((x) => (originalURL.value = x));
});
