import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186 from '@/components/plugins/plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186/src/wwPlugin.js';
import plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa from '@/components/plugins/plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/src/wwPlugin.js';
import plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811 from '@/components/plugins/plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811/src/wwPlugin.js';
import plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb from '@/components/plugins/plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
import plugin_d66a250d_8468_469e_ad33_ee028f632398 from '@/components/plugins/plugin-d66a250d-8468-469e-ad33-ee028f632398/src/wwPlugin.js';
import plugin_2adce8d5_2056_479d_a21a_068f55a8077f from '@/components/plugins/plugin-2adce8d5-2056-479d-a21a-068f55a8077f/src/wwPlugin.js';
import plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f from '@/components/plugins/plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186', plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186);
wwLib.wwPluginHelper.registerPlugin('plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa', plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa);
wwLib.wwPluginHelper.registerPlugin('plugin-832d6f7a-42c3-43f1-a3ce-9a678272f811', plugin_832d6f7a_42c3_43f1_a3ce_9a678272f811);
wwLib.wwPluginHelper.registerPlugin('plugin-69d4a5bb-09a3-4f3d-a94e-667c21c057eb', plugin_69d4a5bb_09a3_4f3d_a94e_667c21c057eb);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
wwLib.wwPluginHelper.registerPlugin('plugin-d66a250d-8468-469e-ad33-ee028f632398', plugin_d66a250d_8468_469e_ad33_ee028f632398);
wwLib.wwPluginHelper.registerPlugin('plugin-2adce8d5-2056-479d-a21a-068f55a8077f', plugin_2adce8d5_2056_479d_a21a_068f55a8077f);
wwLib.wwPluginHelper.registerPlugin('plugin-9c40819b-4a8f-468f-9ba5-4b9699f3361f', plugin_9c40819b_4a8f_468f_9ba5_4b9699f3361f);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"93d229e8-7ae5-4e15-9cc5-857f3403ccb1":"#3E4462","4216e60f-839b-407a-a76e-ab0c7acc8567":"#49D49D","bb6cef0b-da94-431f-98b4-193d1be9f5d9":"#F5F5F5","d128f5ed-e3e8-4430-81cd-d5b4a6646000":"#BAE7FF","833e9a77-9326-4786-86df-95befbf20268":"#91D5FF","f8eaf79c-b959-47d8-a367-f63432627d14":"#69C0FF","4c9df300-4efe-484e-a076-0ff85ff2accd":"#40A9FF","7b2a8a48-8d8f-4a11-bad0-273746b0e974":"#1890FF","b230807b-bf28-4cef-ba5e-5b75850f6d19":"#0050B3","abce58ec-df45-4d54-a4ad-0fdc06042211":"#096DD9","c05e2bb8-cdae-4860-9f3d-15f8da00c1d5":"#D2F4E7","38ada2be-68e1-4213-b874-ca0d2ed0e14f":"#A4EACE","b54946fb-5472-49ee-a84c-d616f5e61d78":"#49D49D","3dbb657a-c857-4cc2-b2e9-bd4973fb31b6":"#256A4F","ad9c80e8-d60c-4be0-9a8b-f376ddd1a0eb":"#123527","7f571b45-a5a5-4cac-bffb-e2337d3aeaf1":"#E6F7FF","d63a4e0c-68ea-4a63-a6c6-224a96fc1c79":"#003A8C","12cc7b9f-8998-4c3a-8b7d-115b0cf0ecef":"#002766","24a3d43f-134d-4f4d-a10c-8c3c370f77d7":"#FF4D4F","6fa506f5-ff22-4989-a3f4-0dec333d8fd9":"#FAAD14","3ec8372a-edc4-4edc-829b-466a8d7005f4":"#52C41A","79022ebb-7811-4a71-86c8-594f4bcba176":"#000000D9","b001d367-3346-4b20-b032-2608956e4903":"#FFFFFF","4c4bd238-cb2a-4167-8988-49dd0ed464e7":"#FAFAFA","f5e84161-fe73-4a0a-a187-7436b4bb579e":"#F5F5F5","33394ea2-30c8-4a6b-8012-e5f704e6d9a8":"#F0F0F0","44be01c4-1385-4ff4-b061-fab5fab6d479":"#D9D9D9","b876c7e0-590b-4da0-b5ae-02ce7eade45d":"#BFBFBF","bd385778-241d-42ea-9b43-3f50260c2394":"#8C8C8C","ab7d2bfd-990c-40d3-8486-7752a91893b0":"#595959","13f6bce8-8b7f-4f3b-9c53-57a9417932ad":"#434343","6a49a904-4442-48de-96b4-5e396d9ef21e":"#262626","b22796b0-210e-4ede-addb-a6665b23af45":"#1F1F1F","a84df14d-8402-46f9-a619-1cd9cd1ea369":"#141414","eb70dead-ab06-4e91-bcd0-6623bff7e949":"#000000","7f29f52f-6049-414c-ab11-980b49d0ee96":"#FF7875","b9db1519-44b8-4c3f-9a68-03e8db182491":"#00000040","2fc2dd48-ff5b-4ef3-b104-5f45d4c8266b":"#00000073","39e22f5b-b08f-4c0d-b69e-d8efc95444fb":"#0000000F","58907a6f-c2bd-4eba-a641-cb73c6b31b46":"#000000D9","d346739e-212e-42aa-9edf-c3925dfcbaf4":"#00000040","877f2cc4-5ae6-42ed-83c8-74a61876eb7c":"#FFFFFF","645661aa-1a08-4f88-8358-0954d6a0738b":"#FF85C0","fa1ad3dd-0803-4f35-a0e5-ae5fba2ff65f":"#FF4D4F","5a2ca303-836b-425e-91c6-8884bc8d35df":"#FADB14","8296d21d-5703-4a04-a168-10e51b228424":"#FA8C16","7d30293d-29b0-4fdb-802c-942fccd96f27":"#13C2C2","f53e8228-1644-49b4-97b3-422f34f90cf9":"#52C41A","cf681900-4b2c-47bd-9a7c-8980882d3139":"#1890FF","bf71c52e-d5d4-484d-b846-c7531f139e62":"#722ED1","080bfe9a-6db2-4305-b2fe-7ee9606d28bc":"#3E4462","461998a2-68e3-4b42-978d-daac63303cc9":"#EB2F96","bf3f33b6-9822-4294-bcd3-a1f4755f1c04":"#FA541C","773bf9d4-3bb4-46e2-bbff-dc4fb9576d1b":"#FAAD14","d78813cf-cbeb-4ad5-afb9-f7dac3b89b99":"#A0D911","aba65747-ea54-4521-b2d5-4b9d9b6c28ec":"#FFD8BF"} : {"93d229e8-7ae5-4e15-9cc5-857f3403ccb1":"#3E4462","4216e60f-839b-407a-a76e-ab0c7acc8567":"#49D49D","bb6cef0b-da94-431f-98b4-193d1be9f5d9":"#F5F5F5","d128f5ed-e3e8-4430-81cd-d5b4a6646000":"#BAE7FF","833e9a77-9326-4786-86df-95befbf20268":"#91D5FF","f8eaf79c-b959-47d8-a367-f63432627d14":"#69C0FF","4c9df300-4efe-484e-a076-0ff85ff2accd":"#40A9FF","7b2a8a48-8d8f-4a11-bad0-273746b0e974":"#1890FF","b230807b-bf28-4cef-ba5e-5b75850f6d19":"#0050B3","abce58ec-df45-4d54-a4ad-0fdc06042211":"#096DD9","c05e2bb8-cdae-4860-9f3d-15f8da00c1d5":"#D2F4E7","38ada2be-68e1-4213-b874-ca0d2ed0e14f":"#A4EACE","b54946fb-5472-49ee-a84c-d616f5e61d78":"#49D49D","3dbb657a-c857-4cc2-b2e9-bd4973fb31b6":"#256A4F","ad9c80e8-d60c-4be0-9a8b-f376ddd1a0eb":"#123527","7f571b45-a5a5-4cac-bffb-e2337d3aeaf1":"#E6F7FF","d63a4e0c-68ea-4a63-a6c6-224a96fc1c79":"#003A8C","12cc7b9f-8998-4c3a-8b7d-115b0cf0ecef":"#002766","24a3d43f-134d-4f4d-a10c-8c3c370f77d7":"#FF4D4F","6fa506f5-ff22-4989-a3f4-0dec333d8fd9":"#FAAD14","3ec8372a-edc4-4edc-829b-466a8d7005f4":"#52C41A","79022ebb-7811-4a71-86c8-594f4bcba176":"#000000D9","b001d367-3346-4b20-b032-2608956e4903":"#FFFFFF","4c4bd238-cb2a-4167-8988-49dd0ed464e7":"#FAFAFA","f5e84161-fe73-4a0a-a187-7436b4bb579e":"#F5F5F5","33394ea2-30c8-4a6b-8012-e5f704e6d9a8":"#F0F0F0","44be01c4-1385-4ff4-b061-fab5fab6d479":"#D9D9D9","b876c7e0-590b-4da0-b5ae-02ce7eade45d":"#BFBFBF","bd385778-241d-42ea-9b43-3f50260c2394":"#8C8C8C","ab7d2bfd-990c-40d3-8486-7752a91893b0":"#595959","13f6bce8-8b7f-4f3b-9c53-57a9417932ad":"#434343","6a49a904-4442-48de-96b4-5e396d9ef21e":"#262626","b22796b0-210e-4ede-addb-a6665b23af45":"#1F1F1F","a84df14d-8402-46f9-a619-1cd9cd1ea369":"#141414","eb70dead-ab06-4e91-bcd0-6623bff7e949":"#000000","7f29f52f-6049-414c-ab11-980b49d0ee96":"#FF7875","b9db1519-44b8-4c3f-9a68-03e8db182491":"#00000040","2fc2dd48-ff5b-4ef3-b104-5f45d4c8266b":"#00000073","39e22f5b-b08f-4c0d-b69e-d8efc95444fb":"#0000000F","58907a6f-c2bd-4eba-a641-cb73c6b31b46":"#000000D9","d346739e-212e-42aa-9edf-c3925dfcbaf4":"#00000040","877f2cc4-5ae6-42ed-83c8-74a61876eb7c":"#FFFFFF","645661aa-1a08-4f88-8358-0954d6a0738b":"#FF85C0","fa1ad3dd-0803-4f35-a0e5-ae5fba2ff65f":"#FF4D4F","5a2ca303-836b-425e-91c6-8884bc8d35df":"#FADB14","8296d21d-5703-4a04-a168-10e51b228424":"#FA8C16","7d30293d-29b0-4fdb-802c-942fccd96f27":"#13C2C2","f53e8228-1644-49b4-97b3-422f34f90cf9":"#52C41A","cf681900-4b2c-47bd-9a7c-8980882d3139":"#1890FF","bf71c52e-d5d4-484d-b846-c7531f139e62":"#722ED1","080bfe9a-6db2-4305-b2fe-7ee9606d28bc":"#3E4462","461998a2-68e3-4b42-978d-daac63303cc9":"#EB2F96","bf3f33b6-9822-4294-bcd3-a1f4755f1c04":"#FA541C","773bf9d4-3bb4-46e2-bbff-dc4fb9576d1b":"#FAAD14","d78813cf-cbeb-4ad5-afb9-f7dac3b89b99":"#A0D911","aba65747-ea54-4521-b2d5-4b9d9b6c28ec":"#FFD8BF"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"3926d417-acd8-46bf-8f82-eef12e690ec2":"2px","84348d37-3f13-4828-ac83-3b006c0640bc":"8px","987e217e-2d75-4b7a-b00a-a8571a849f8d":"4px","17c7d09e-626b-40f1-9647-7b3c6966b564":"8px","7f548761-4269-4751-a331-cdc38d7234f8":"12px","ddf1139c-9a3b-4d89-9026-27e5f2797544":"16px","4ce6d84d-2459-46d4-9d89-0de18ef196ab":"24px","8f06dd2f-d686-42f6-b31e-cce77009ff85":"32px","c0ba7496-bf4e-4b1b-8d96-506b23d922f4":"40px","f1445072-d8b2-48ad-916e-50ed6f329be5":"48px","4a312b9f-3537-4f7b-b297-4b291711e075":"64px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"6fa58b6b-7cab-4469-a344-aba5a42f3427":"700 38px/46px 'Inter', sans-serif","29abc4db-d87e-414c-bdc4-1b7d97a34508":"400 14px/22px var(--ww-default-font-family, sans-serif)","10938b51-8197-480c-b1d1-9cbce4a6637e":"700 30px/40px 'Inter', sans-serif","02a76bbb-41f2-40c4-aa62-0d8ee0f9ce8d":"700 24px/32px 'Inter', sans-serif","43961afa-2596-47c0-82d4-a8cdc83f1ef4":"700 20px/28px 'Inter', sans-serif","6812aa07-35a3-44a7-986a-57ab35469f78":"600 16px/24px 'Inter', sans-serif","1e590c8e-4ac8-4689-b53d-f816efc0b8a4":"600 14px/22px var(--ww-default-font-family, sans-serif)","3585029c-22f5-4795-ae36-eda815b892e5":"600 16px/24px var(--ww-default-font-family, sans-serif)","dcc9742f-3c2e-4eb5-acc2-d624a8ea2e37":"600 12px/18px var(--ww-default-font-family, sans-serif)","3dd91d84-10ad-48a3-b40d-826210c873e1":"400 12px/18px var(--ww-default-font-family, sans-serif)","ec35a7f8-1254-4ae3-8eba-9b8b7c5e6c6a":"400 16px/22px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
