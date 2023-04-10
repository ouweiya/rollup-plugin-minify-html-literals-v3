import minify from 'minify-html-literals';
import { createFilter } from '@rollup/pluginutils';
export default function (options = {}) {
    if (!options.minifyHTMLLiterals) {
        options.minifyHTMLLiterals = minify.minifyHTMLLiterals;
    }
    if (!options.filter) {
        options.filter = createFilter(options.include, options.exclude);
    }
    const minifyOptions = options.options || {};
    return {
        name: 'minify-html-literals',
        transform(code, id) {
            if (options.filter(id)) {
                try {
                    const result = options.minifyHTMLLiterals(code, { ...minifyOptions, fileName: id });
                    return result;
                }
                catch (error) {
                    const message = error instanceof Error ? error.message : error;
                    if (options.failOnError) {
                        this.error(message);
                    }
                    else {
                        this.warn(message);
                    }
                }
            }
            return null;
        },
    };
}
//# sourceMappingURL=index.js.map