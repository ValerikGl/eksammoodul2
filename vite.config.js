import vituum from 'vituum';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import tailwindcss from '@vituum/vite-plugin-tailwindcss';

export default {
    plugins: [
        tailwindcss(),
        vituum(),
        nunjucks({
            root: 'src',
        }),
            

    ],
}