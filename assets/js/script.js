'use strict'

document.addEventListener('DOMContentLoaded', function () {

	const reg = document.getElementById('reg');
	const str = document.getElementById('str');
	const btn = document.getElementById('btn');
	const result = document.getElementById('result');
	const flag = document.getElementsByClassName('regex__flag');

	let strValue = str.value;
	let regValue = reg.value;
	let flags = '';
	let regExp = new RegExp(regValue, flags);

	reg.addEventListener('input', function () {
		regValue = reg.value;
	});

	for (let i = 0; i < flag.length; i++) {
		flag[i].addEventListener('click', function () {
			if (flag[i].checked === true) {
				let flagValue = flag[i].nextElementSibling.innerText;
				flags += flagValue;
			}
			else  {
				let replaceExp = flag[i].nextElementSibling.innerText;
				flags = flags.replace(flag[i].nextElementSibling.innerText, '');
			}
		});
	}

	btn.addEventListener('click', function () {
		if ( str.value === '' || reg.value === '') {
			result.innerHTML = '<p class="regex__result-error">Please, enter your data for test</p>'
		}
		else {
			regExp = new RegExp(regValue, flags);
			let strTemp = str.value.match(regExp) || [];
			if ( strTemp.length > 0 ) {
				result.innerHTML = '';
				for (let i = 0; i < strTemp.length; i++) {
					result.innerHTML += '<p>Match ' + (i + 1) + ': </p><p class="regex__result-elem">' + strTemp[i] + '</p>'
				}
			}
			else {
				result.innerHTML = '<p class="regex__result-error">No matches</p>'
			}
		}
	});
	
});