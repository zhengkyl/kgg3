# KGG — The Community for Gamers

Kappa Gamma Gamma (KGG) is a college community that plays games together sometimes, but also hangout without playing games sometimes too.

[kgg.gg](https://www.kgg.gg)

## Known Issues

- In the WaveBlock component, a gap less than a pixel wide may appear between the wave svgs and the content block. This is easiest seen when resizing the page also on Chrome for some reason. It seems like a rounding/rendering issue. As far as I know it is unfixable.

  Things I've tried.

  - Wave svgs are already `display:block`.
  - Actual svg paths extend past the viewbox (didn't work so reverted).
  - Added border to elements flat edge (didn't work so reverted)

- On initial page load, the carousel on Programs page shows the mobile positioning of cards (odd number cards centered on first card). This causes a flash when it actually loads on everything but mobile. Even though it is based on page size, I couldn't use css media queries because the carousel is based on js. It defaults to mobile and uses a js media query hook to figure itself out later, so the statically generated page shows the mobile view.
