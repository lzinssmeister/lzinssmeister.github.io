/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fontawesome\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-linkedin-sign' : '&#xf08c;',
			'icon-instagram' : '&#xf16d;',
			'icon-tumblr-sign' : '&#xf174;',
			'icon-dribbble' : '&#xf17d;',
			'icon-twitter-sign' : '&#xf081;',
			'icon-dribbble-sign' : '&#xe000;',
			'icon-chevron-down' : '&#xf078;',
			'icon-envelope-alt' : '&#xf0e0;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};