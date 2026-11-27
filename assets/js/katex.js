// Render kramdown math blocks with KaTeX (no jQuery).
document.querySelectorAll('script[type^="math/tex"]').forEach(function (script) {
  var display = script.type.indexOf('mode=display') !== -1;
  var el = document.createElement(display ? 'div' : 'span');
  el.className = display ? 'equation' : 'inline-equation';
  el.innerHTML = katex.renderToString((display ? '\\displaystyle ' : '') + script.textContent);
  script.replaceWith(el);
});
