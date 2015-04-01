var mycookie = {
	get: function(name){
		var cName = encodeURIComponent(name) + "=",
		cStart = document.cookie.indexOf(cName),
		cValue = null;

		if(cStart > -1){
			var cEnd = document.cookie.indexOf(":", cStart);
			if(cEnd == -1){
				cEnd = document.cookie.length;
			}

			cValue = decodeURIComponent(document.cookie.substring(cStart+cName.length, cEnd));
		}

		return cValue;
	},

	set: function(name, value, expires, path, domain, secure){
		var cText = encodeURIComponent(name) + "=" +
		encodeURIComponent(value);

		if(expires instanceof Date){
			cText += "; expires=" + expires.toGMTString();
		}

		if(path){
			cText += "; path=" + path;
		}

		if(domain){
			cText += "; domain=" + domain;
		}

		if(secure){
			cText += "; secure=" + secure;
		}

		document.cookie = cText;
	}

	unset: function(name, path, domain, secure){
		this,set(name, "", new Date(0), path, domain, secure);
	}
}