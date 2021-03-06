var templateLoader = (function() {
    let cache = {};

    function get(templateName) {
        let promise = new Promise((resolve, reject) => {
            if (cache[templateName]) {
                resolve(cache[templateName]);
            } else {
                $.get(`${templateName}.handlebars`, template => {
                    let funcTemplate = Handlebars.compile(template);
                    cache[templateName] = funcTemplate;
                    resolve(funcTemplate);
                });
            }
        });

        return promise;
    }

    return {
        get
    };
})();