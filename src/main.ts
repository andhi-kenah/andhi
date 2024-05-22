document.addEventListener("DOMContentLoaded", () => {
  const h26x = <HTMLElement>document.querySelector("header");
  const sc3x: NodeListOf<HTMLElement> = document.querySelectorAll("section");
  const nd3x: NodeListOf<HTMLElement> = document.querySelectorAll(
    "header nav ul li a .nav-indicator"
  );
  const nv3x: NodeListOf<HTMLElement> = document.querySelectorAll(
    "header nav ul li a .nav-title"
  );
  const m4al = <HTMLElement> document.querySelector(
    'a[title="Mail"]'
  );
  if (document.body.clientWidth < 903) {
    onscroll = () => {
      scrollY <= 100
        ? (h26x.style.backgroundColor = "transparent")
        : (h26x.style.backgroundColor = "#282a32ee");
    };
  }
  const obCbk: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry, i) => {
      const id = entry.target.getAttribute("id");
      const nv = document.querySelector(
        `header nav ul li a[href="#${id}"] .nav-title`
      );
      const nd = document.querySelector(
        `header nav ul li a[href="#${id}"] .nav-indicator`
      );
      if (entry.isIntersecting) {
        nv3x.forEach((n) => n.classList.remove("nav-active"));
        nd3x.forEach((d) => d.classList.remove("indicator-active"));
        if (nv3x[i]) {
          nv?.classList.add("nav-active");
          nd?.classList.add("indicator-active");
        }
      }
    });
  };
  const obOp: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };
  const ob: IntersectionObserver = new IntersectionObserver(
    obCbk,
    obOp
  );
  sc3x.forEach((section) => {
    ob.observe(section);
  });
  m4al.addEventListener('click', (e) => {
    const cp = m4al.getAttribute('href')?.slice(7);
    if (cp) {    
        navigator.clipboard.writeText(cp).then(() => {
            console.log(`Copied to clipboard: ${cp}`);
          }).catch(err => {
            console.error('Failed to copy text: ', err);
          });
    }
  })
});
