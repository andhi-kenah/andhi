const h26x = <HTMLElement>(
  document.getElementById("header")
);
const sp4x = <HTMLElement>(document.getElementById('scroll-down'))

if (document.body.clientWidth < 903) {
    onscroll = () => {
        if (scrollY <= 100) {
            h26x.style.backgroundColor = 'transparent';
        } else {
            h26x.style.backgroundColor = '#282a32ee';
        }
    }
}
