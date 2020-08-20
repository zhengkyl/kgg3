# Known Issues

In the WaveBlock component, a gap less than a pixel wide may appear between the wave svgs and the content block. This is easiest seen when resizing the page. The wave svgs are already ```display:block``` and the actual svg paths extend past the viewbox. It seems like a rounding/rendering issue. As far as I know it is unfixable, but also very hard to notice.

The carousel on the programs page is loaded after initial page load. Even though it is based on page size, I couldn't use css media queries due to how `pure-react-carousel` displays slides. Therefore it uses a js media query hook to figure itself out, so it is not statically generated.