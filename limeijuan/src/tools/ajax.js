function Ajax(options) {
    return new Promise((resolve, reject) => {
        var defaults = {
            url: 'data.json',
            methods: 'get',
            async: true,
            data: "",
            success: function() {}
        };
        var obj = Object.assign({}, defaults, options),
            url = obj.url,
            methods = obj.methods,
            async = obj.async,
            str = obj.data;
        var xml = null;
        if (window.XMLHttpRequest) {
            xml = new XMLHttpRequest()
        } else {
            xml = new ActiveXObject('Microsoft.XMLHTTP')
        }

        xml.onreadystatechange = function() {
            if (xml.readyState === 4) {
                if (xml.status === 200) {
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject({ "message": '请求失败' })
                }
            }
        }

        if (methods === "get") {
            xml.open(methods, url + '?' + str, async);
            xml.send(null);
        } else {
            xml.open(methods, url, async);
            xml.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xml.send(str);
        }
    })
}
module.exports = Ajax