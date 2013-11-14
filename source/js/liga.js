/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
	'use strict';
	function supportsProperty(p) {
		var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
			i,
			div = document.createElement('div'),
			ret = p in div.style;
		if (!ret) {
			p = p.charAt(0).toUpperCase() + p.substr(1);
			for (i = 0; i < prefixes.length; i += 1) {
				ret = prefixes[i] + p in div.style;
				if (ret) {
					break;
				}
			}
		}
		return ret;
	}
	var icons;
	if (!supportsProperty('fontFeatureSettings')) {
		icons = {
			'verb': '&#x76;',
			'am': '&#x76;',
			'verbwould': '&#xe601;',
			'would': '&#xe601;',
			'verbwillbe': '&#xe602;',
			'verbwere': '&#xe603;',
			'were': '&#xe603;',
			'verbwas': '&#xe604;',
			'was': '&#xe604;',
			'verbto': '&#xe605;',
			'verbshould': '&#xe607;',
			'should': '&#xe607;',
			'verbarrowdown': '&#xe608;',
			'verbte': '&#xe608;',
			'verbarrowleft': '&#xe609;',
			'verbtensepast': '&#xe609;',
			'verbmight': '&#xe60a;',
			'might': '&#xe60a;',
			'verbisfuture': '&#xe60b;',
			'verbisarrowright': '&#xe60b;',
			'verbsingularfuture': '&#xe60b;',
			'verbing': '&#xe60c;',
			'ing': '&#xe60c;',
			'verbhave': '&#xe60d;',
			'have': '&#xe60d;',
			'verbhas': '&#xe60e;',
			'has': '&#xe60e;',
			'verbhad': '&#xe60f;',
			'had': '&#xe60f;',
			'verbdone': '&#xe610;',
			'done': '&#xe610;',
			'verbdo': '&#xe611;',
			'do': '&#xe611;',
			'verbdid': '&#xe612;',
			'did': '&#xe612;',
			'verbcould': '&#xe613;',
			'could': '&#xe613;',
			'verbcan': '&#xe614;',
			'can': '&#xe614;',
			'verbbeen': '&#xe615;',
			'been': '&#xe615;',
			'verbarefuture': '&#xe616;',
			'verbareleftarrow': '&#xe616;',
			'verbpluralfuture': '&#xe616;',
			'verbare': '&#xe617;',
			'verbpluralpresent': '&#xe617;',
			'verbplural': '&#xe617;',
			'are': '&#xe617;',
			'verbis': '&#xe618;',
			'verbsingularpresent': '&#xe618;',
			'verbsingular': '&#xe618;',
			'is': '&#xe618;',
			'adjective': '&#xe600;',
			'adjsize': '&#xe619;',
			'adjshape': '&#xe61a;',
			'adjquestion': '&#xe61b;',
			'adjquantity': '&#xe61c;',
			'adjqualifier': '&#xe61d;',
			'adjorigin': '&#xe61e;',
			'adjopinion': '&#xe61f;',
			'adjmaterial': '&#xe620;',
			'adjcolor': '&#xe621;',
			'adjage': '&#xe622;',
			'noun': '&#xe623;',
			'nountobe': '&#xe624;',
			'nounthing': '&#xe625;',
			'nounthingplural': '&#xe626;',
			'nounthings': '&#xe626;',
			'nounpossessive': '&#xe627;',
			'p': '&#xe628;',
			'nounpossessiveplace': '&#xe629;',
			'nounpossessivename': '&#xe62a;',
			'nounplace': '&#xe62b;',
			'nounplaceplural': '&#xe62c;',
			'nounplaces': '&#xe62c;',
			'nounname': '&#xe62d;',
			'noungerund': '&#xe62e;',
			'nouning': '&#xe62e;',
			'noundummy': '&#xe62f;',
			'prep': '&#xe630;',
			'on': '&#xe630;',
			'above': '&#xe630;',
			'under': '&#xe630;',
			'in': '&#xe630;',
			'with': '&#xe630;',
			'across': '&#xe630;',
			'among': '&#xe630;',
			'prepwho': '&#xe631;',
			'prepwhere': '&#xe632;',
			'prepwhen': '&#xe633;',
			'article': '&#xe634;',
			'articlethose': '&#xe635;',
			'those': '&#xe635;',
			'articlethis': '&#xe636;',
			'this': '&#xe636;',
			'articlethese': '&#xe637;',
			'these': '&#xe637;',
			'articlethe': '&#xe638;',
			'the': '&#xe638;',
			'articlethat': '&#xe639;',
			'that': '&#xe639;',
			'articlesome': '&#xe63a;',
			'some': '&#xe63a;',
			'articlea': '&#x61;',
			'a': '&#x61;',
			'adverb': '&#xe63b;',
			'adverbtime': '&#xe63c;',
			'adverbplace': '&#xe63d;',
			'adverbmanner': '&#xe63e;',
			'adverbfrequency': '&#xe63f;',
			'adverbdegree': '&#xe640;',
			'pronoun': '&#xe641;',
			'she': '&#xe641;',
			'he': '&#xe641;',
			'it': '&#xe641;',
			'her': '&#xe641;',
			'him': '&#xe641;',
			'me': '&#xe641;',
			'you': '&#xe641;',
			'us': '&#xe641;',
			'we': '&#xe641;',
			'they': '&#xe641;',
			'i': '&#xe641;',
			'pronounsubject': '&#xe642;',
			'pronounsubj': '&#xe642;',
			'pronounpossessivesubject': '&#xe643;',
			'pronounposssubject': '&#xe643;',
			'pronounposssubj': '&#xe643;',
			'hers': '&#xe644;',
			'his': '&#xe644;',
			'its': '&#xe644;',
			'mine': '&#xe644;',
			'ours': '&#xe644;',
			'our': '&#xe644;',
			'theirs': '&#xe644;',
			'their pronounpossessive': '&#xe644;',
			'pronounposs': '&#xe644;',
			'pronounobject': '&#xe645;',
			'pronounobj': '&#xe645;',
			'pronounpossessiveobject': '&#xe646;',
			'pronounpossobject': '&#xe646;',
			'pronounpossobj': '&#xe646;',
			'0': 0
		};
		delete icons['0'];
		window.icomoonLiga = function (els) {
			var classes,
				el,
				i,
				innerHTML,
				key;
			els = els || document.getElementsByTagName('*');
			if (!els.length) {
				els = [els];
			}
			for (i = 0; ; i += 1) {
				el = els[i];
				if (!el) {
					break;
				}
				classes = el.className;
				if (/icon-/.test(classes)) {
					innerHTML = el.innerHTML;
					if (innerHTML && innerHTML.length > 1) {
						for (key in icons) {
							if (icons.hasOwnProperty(key)) {
								innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
							}
						}
						el.innerHTML = innerHTML;
					}
				}
			}
		};
		window.icomoonLiga();
	}
}());