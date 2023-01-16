(async () => {
  const title = document.getElementById("title") as HTMLHeadElement;

  title.onclick = () => {
    window.api.helloWorld("Hello world!");
  };
})();
