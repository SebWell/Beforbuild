import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"fr/foncier":{"outputDir":"./fr/foncier","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/foncier/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/foncier/"}]},"fr/finance-copy":{"outputDir":"./fr/finance-copy","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/finance-copy/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/finance-copy/"}]},"fr/task":{"outputDir":"./fr/task","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/task/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/task/"}]},"fr/board":{"outputDir":"./fr/board","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/board/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/board/"}]},"fr/reglage":{"outputDir":"./fr/reglage","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/reglage/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/reglage/"}]},"fr/operations":{"outputDir":"./fr/operations","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/operations/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/operations/"}]},"fr/financier":{"outputDir":"./fr/financier","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/financier/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/financier/"}]},"fr/chat":{"outputDir":"./fr/chat","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/chat/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/chat/"}]},"fr/signup_login/:param":{"outputDir":"./fr/signup_login/:param","lang":"fr","title":"Vide | Commencer à partir de zéro","cacheVersion":53,"meta":[{"name":"title","content":"Vide | Commencer à partir de zéro"},{"itemprop":"name","content":"Vide | Commencer à partir de zéro"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:title","content":"Vide | Commencer à partir de zéro"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/signup_login/:param/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/signup_login/:param/"}]},"fr/test":{"outputDir":"./fr/test","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/test/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/test/"}]},"fr/":{"outputDir":"./fr/","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/"}]},"fr/profil":{"outputDir":"./fr/profil","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/profil/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/profil/"}]},"fr/brouillon":{"outputDir":"./fr/brouillon","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/brouillon/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/brouillon/"}]},"fr/finance-copy-copy":{"outputDir":"./fr/finance-copy-copy","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/finance-copy-copy/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/finance-copy-copy/"}]},"fr/finance-copy-copy-copy":{"outputDir":"./fr/finance-copy-copy-copy","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/finance-copy-copy-copy/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/finance-copy-copy-copy/"}]},"fr/offres":{"outputDir":"./fr/offres","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/offres/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/offres/"}]},"fr/etudes":{"outputDir":"./fr/etudes","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/etudes/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/etudes/"}]},"fr/contacts":{"outputDir":"./fr/contacts","lang":"fr","cacheVersion":53,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"noindex, nofollow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/contacts/"},{"rel":"alternate","hreflang":"fr","href":"https://ae6bc3cd-e209-4f89-8eea-368ab778f543.weweb-preview.io/fr/contacts/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
