/**
 * jekyll-socials sets title from YAML keys with Ruby .capitalize (e.g. "Linkedin username", "Github username").
 * Override with a short label for LinkedIn and the GitHub profile name from the URL.
 */
(function () {
  function fixSocialLinkTitles() {
    document.querySelectorAll('.social a[href]').forEach(function (anchor) {
      var href = anchor.getAttribute('href');
      if (!href) return;
      try {
        var u = new URL(href, window.location.href);
        var host = u.hostname.replace(/^www\./, '');
        if (host === 'linkedin.com' && u.pathname.indexOf('/in/') !== -1) {
          anchor.setAttribute('title', 'LinkedIn');
          return;
        }
        if (host === 'github.com') {
          var seg = u.pathname.split('/').filter(Boolean)[0];
          if (seg) {
            anchor.setAttribute('title', 'GitHub');
          } else {
            anchor.setAttribute('title', 'GitHub');
          }
        }
      } catch (_e) {
        /* ignore invalid href */
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixSocialLinkTitles);
  } else {
    fixSocialLinkTitles();
  }
})();
