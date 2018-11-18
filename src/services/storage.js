export function localStorage(e) {
    if (navigator.userAgent.indexOf("UCBrowser") > -1) {
        return e;
    }
    var t = {
        key: function (key) {
            return window.localStorage.key(key);
        },
        setItem: function (key, value) {
            return window.localStorage.setItem(key, value);
        },
        getItem: function (key) {
            return window.localStorage.getItem(key);
        },
        removeItem: function (key) {
            return window.localStorage.removeItem(key);
        },
        clear: function () {
            return window.localStorage.clear();
        },
        getAll: function () {
            return window.localStorage.valueOf();
        }
    };
    try {
        return null !== window.localStorage ?
            (window.localStorage.setItem("testkey", "foo"),
                window.localStorage.removeItem("testkey"),
                t) :
            e;
    } catch (a) {
        return e;
    }
}

export function cookieStorage() {
    var Cookies = {
        getItem: function (sKey) {
            return (
                decodeURI(
                    document.cookie.replace(
                        new RegExp(
                            "(?:(?:^|.*;)\\s*" +
                            encodeURI(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
                            "\\s*\\=\\s*([^;]*).*$)|^.*$"
                        ),
                        "$1"
                    )
                ) || null
            );
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires =
                            vEnd === Infinity ?
                                "; expires=" + "Fri, 31 Dec 9999 23:59:59 GMT" :
                                "; max-age=" + vEnd;
                        break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                        break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toGMTString();
                        break;
                }
            }
            document.cookie =
                encodeURI(sKey) +
                "=" +
                encodeURI(sValue) +
                sExpires +
                (sDomain ? "; domain=" + sDomain : "") +
                (sPath ? "; path=" + sPath : "") +
                (bSecure ? "; secure" : "");
            return true;
        },
        removeItem: function (sKey, sPath) {
            if (!sKey || !this.hasItem(sKey)) {
                return false;
            }
            document.cookie =
                encodeURI(sKey) +
                "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
                (sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function (sKey) {
            return new RegExp(
                "(?:^|;\\s*)" +
                encodeURI(sKey).replace(/[\-\.\+\*]/g, "\\$&") +
                "\\s*\\="
            ).test(document.cookie);
        },
        keys: /* optional method: you can safely remove it! */ function () {
            var aKeys = document.cookie
                .replace(
                    /((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,
                    ""
                )
                .split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                aKeys[nIdx] = decodeURI(aKeys[nIdx]);
            }
            return aKeys;
        }
    };
    return {
        key: function (t) {
            return Cookies.getItem(t);
        },
        setItem: function (t, a) {
            Cookies.setItem(t, a);
        },
        getItem: function (t) {
            return Cookies.getItem(t);
        },
        removeItem: function (t) {
            return Cookies.removeItem(t);
        },
        clear: function () {
            for (var t in Cookies.keys) Cookies.removeItem(t);
            return !0;
        }
    };
}
















export default localStorage

