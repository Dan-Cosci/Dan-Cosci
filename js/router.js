window.addEventListener("DOMContentLoaded", async () => {
  
  const app = document.getElementById("app");
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");
  
  footer.innerHTML = await fetch("components/footer.html").then((res) =>
    res.text()
  );
  
  navbar.innerHTML = await fetch("components/navbar.html").then((res) =>
    res.text()
  );
  
  
  async function loadPage(page) {
    try {
      const res = await fetch(`pages/${page}.html`);
      if (!res.ok) throw new Error("Page not found");
      app.innerHTML = await res.text();
    } catch (err) {
      app.innerHTML = "<h2>404 - Page not found</h2>";
    }
  }
  
  function router() {
    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
  }
  
  window.addEventListener("hashchange", router);
  router();
});
