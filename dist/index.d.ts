import minify from 'minify-html-literals';
import type { Plugin } from 'rollup';
export interface Options {
    include?: string | string[];
    exclude?: string | string[];
    options?: Partial<minify.Options>;
    failOnError?: boolean;
    minifyHTMLLiterals?: typeof minify.minifyHTMLLiterals;
    filter?: (id: string) => boolean;
}
export default function (options?: Options): Plugin;
