import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"ae6bc3cd-e209-4f89-8eea-368ab778f543","homePageId":"925f77b4-60a5-4dac-9211-0cdc31de29d8","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"light","langs":[{"lang":"fr","default":true,"isDefaultPath":true}],"background":{"backgroundSize":"cover","backgroundImage":null},"workflows":[],"pages":[{"id":"66bfb005-83e6-4650-8466-120f3fb4fb62","linkId":"66bfb005-83e6-4650-8466-120f3fb4fb62","name":"Foncier","folder":"Navigation/","paths":{"fr":"foncier","default":"foncier"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"42ed723e-8b86-41dd-8e47-417997a240c4","sectionTitle":"Drawer","linkId":"05e26ad2-8df3-4162-b888-cb791e02968c"},{"uid":"042e4fe9-ac47-4210-91c9-e8eaa2b1bc3b","sectionTitle":"Section","linkId":"8339c2ef-72be-42e8-8fa1-32206686e392"},{"uid":"3b8cca26-f85e-4f40-a923-f2ffdca8c854","sectionTitle":"Content Section","linkId":"eebdef99-6d88-45a7-8076-8dcd2ce9549f"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"56218a3f-2e66-4fd0-ac9a-420763a493a0","linkId":"56218a3f-2e66-4fd0-ac9a-420763a493a0","name":"Contract","folder":"Navigation/","paths":{"fr":"finance-copy","default":"finance-copy"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"65f310ea-9cdf-4bb2-b80c-e69e06677af1","sectionTitle":"Section","linkId":"883789e1-892f-408c-ac01-5fe8f0f0b211"},{"uid":"901dc0ac-c829-4861-b96d-686a0c18bb7a","sectionTitle":"Drawer","linkId":"2b1af225-474e-4fb0-b1d4-046ae9c54ade"},{"uid":"931233a1-3508-406d-bdd7-99e24c7d2bd4","sectionTitle":"Section: Liste des Contrats","linkId":"e313b1e7-a18d-4940-8eba-01c31525a623"},{"uid":"87759884-124f-4340-a19c-0a73d67c03a3","sectionTitle":"Section: Détails d'un Contrat","linkId":"c4b314af-5fc4-4037-8b30-0cb485eee1f2"},{"uid":"f389f2a0-d3b0-4556-92fb-e525fd10e867","sectionTitle":"Section: Création d'un Contrat","linkId":"7cc424db-d994-4719-9b52-f014eb92a531"},{"uid":"a099bc44-0fd5-4770-bfc8-0798e0f027e8","sectionTitle":"Section: Suivi des Échéances","linkId":"d415c9c0-6ff1-496a-82ab-3cf8872d9528"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"fbd84196-192f-4333-8327-26e651fb4132","linkId":"fbd84196-192f-4333-8327-26e651fb4132","name":"Missions","folder":"Navigation/","paths":{"fr":"task","default":"task"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"a78e129a-05f0-4284-b71b-5b7a2996834e","sectionTitle":"Section","linkId":"e345f6d2-ed06-4738-886a-0c99f863b2cc"},{"uid":"903bd574-168e-4b9e-aba1-d84adae2da1b","sectionTitle":"Drawer","linkId":"ac92dc34-2e6d-4f58-9cdb-7e3720946cd0"},{"uid":"d8105552-fce3-4ab4-ae5a-0b41354e9e5f","sectionTitle":"Content Section: Liste des Tâches","linkId":"81bc27b9-bba7-4abb-a29d-8010c4ea5d6b"},{"uid":"785a3e1c-ad1e-4718-803d-050d9a01bdb8","sectionTitle":"Content Section: Détails d'une Tâche","linkId":"b89e36cd-90fa-4b93-b66f-14c8db75a8ec"},{"uid":"76680811-3fa5-4e03-80e7-1a9052289295","sectionTitle":"Content Section: Création d'une Tâche","linkId":"962f11c6-ffd8-47d3-ae11-8b0bda8e9341"},{"uid":"4b449e79-1f4c-4bbf-9fe9-e314afaeab7c","sectionTitle":"Content Section: Calendrier des Tâches","linkId":"51e841d0-3bd3-48af-84ba-65bd1cb20de6"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6713a0f7-7064-4124-ba01-db0d0bba521b","linkId":"6713a0f7-7064-4124-ba01-db0d0bba521b","name":"Board","folder":"Navigation/","paths":{"fr":"board","default":"board"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"7cab60a9-c9dd-41a6-abc3-349c29565c90","sectionTitle":"Dashboard Content","linkId":"8e849ac8-eff4-401c-b255-c50ac2a0ee90"},{"uid":"672a16ca-c0dd-4fb0-9e2f-e4ea931c1c37","sectionTitle":"Email verification","linkId":"1d5e5d4f-5bef-4831-9fe5-362d7962dfb0"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f1b277fb-83a0-472e-8a29-9ec935df8a83","linkId":"f1b277fb-83a0-472e-8a29-9ec935df8a83","name":"Réglages","folder":"Navigation/","paths":{"fr":"reglage","default":"reglage"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"43db0945-d88c-4966-a06c-6a3dae942d7b","sectionTitle":"Drawer","linkId":"afbb8124-a1e6-48a9-b7ba-78a4028394dc"},{"uid":"e9e5e7b9-a459-41fa-a5b7-4ff4e74a6b9d","sectionTitle":"Dashboard Content","linkId":"3efeeba0-8f6d-4116-8723-42ecd152dd04"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d874f0a1-6d12-448f-bca4-791225b681d4","linkId":"d874f0a1-6d12-448f-bca4-791225b681d4","name":"Opérations","folder":null,"paths":{"fr":"operations","default":"operations"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"6d9fc4a9-7c0d-4ff5-895d-e4e4f34a1118","sectionTitle":"Sidemenu","linkId":"b1670bc9-f8db-47b1-9e10-52688526062e"},{"uid":"999b2e72-e923-470d-9993-9e68ae093f66","sectionTitle":"Header","linkId":"620f88e0-9ecb-4aff-bf12-6f1df77f80d0"},{"uid":"eb5fcea4-1a6b-461e-9752-caedb969d960","sectionTitle":"Controller","linkId":"f51a5ba8-2817-45fb-bd35-58a8fce97dd3"},{"uid":"78929a91-2768-418f-86de-3a16e179f8ba","sectionTitle":"Drawer","linkId":"8d7d7f27-2b5f-4d88-848b-ed8ef630c90e"},{"uid":"3dfdfc70-04da-4862-af12-0c27380e6130","sectionTitle":"Section","linkId":"5dd487a4-c63c-4840-bdce-2a5485aaaecb"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e3bd389a-0c4c-42af-ba5b-6fbf726bee39","linkId":"e3bd389a-0c4c-42af-ba5b-6fbf726bee39","name":"Financier","folder":"Navigation/","paths":{"fr":"financier","default":"financier"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"d7cf4c84-8ce9-425b-9b2e-e85405717bfa","sectionTitle":"Section","linkId":"dd1e3049-4bde-4fe2-b6cc-4537efe75f21"},{"uid":"60a114b5-cd3f-4f42-9a33-d64c74d8a96a","sectionTitle":"Drawer","linkId":"751a50ca-d506-4d4d-8785-0ec3ff732758"},{"uid":"1098d5a1-7363-4d6b-9771-f2f7dee76959","sectionTitle":"Content Section","linkId":"9e4c3d09-90fa-4901-93b7-0c4bc31c86f0"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a22e5065-d7da-4ed6-b34a-a5a3c273cfaa","linkId":"a22e5065-d7da-4ed6-b34a-a5a3c273cfaa","name":"Chat","folder":"Navigation/","paths":{"fr":"chat","default":"chat"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"941dcab9-ff95-4df7-9d63-1583d686b3df","sectionTitle":"Section","linkId":"b0d625b7-55fe-41d2-ba6b-74f3e070bbf7"},{"uid":"a677c99c-04fc-4435-94c3-098bf3f4d0b8","sectionTitle":"Drawer","linkId":"d802a52f-f897-4f56-bba2-301a5ecf77e3"},{"uid":"460d99d6-f254-4016-958b-85b8f503e9c3","sectionTitle":"Content Section: Liste des Tâches","linkId":"95960d7e-3a32-49d8-8a5e-bc69ec866065"},{"uid":"968ce387-3bd3-4d8a-b458-ec5d76137b59","sectionTitle":"Content Section: Détails d'une Tâche","linkId":"bc49275a-a17a-4442-9c76-0ca779e5781f"},{"uid":"3666411e-b1f4-4be3-b5fa-214c813ff30a","sectionTitle":"Content Section: Création d'une Tâche","linkId":"5ce1526f-f0cc-4fc2-997e-5c04dfe28df4"},{"uid":"c006aaf0-6127-4b93-b0f4-3a866faa9be2","sectionTitle":"Content Section: Calendrier des Tâches","linkId":"f36b57d7-9fe8-438f-9b22-6d4d1e74a978"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"696b697e-fbed-407d-b070-fbd7696e5a29","linkId":"8e106f57-c664-4b2a-90e5-97bfc461d9d2","name":"Signup/login","folder":"Idendification/","paths":{"en":"","fr":"signup_login/{{Statut|login}}","default":"signup_login/{{Statut|login}}"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"137664e1-9cf2-4bfe-868d-29e322f485d9","sectionTitle":"Section","linkId":"573109e8-2813-4b4d-b0b7-9bbc1ee2c1ef"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b36a1cf6-12b6-454b-a5d6-946b2862413d","linkId":"b36a1cf6-12b6-454b-a5d6-946b2862413d","name":"test","folder":null,"paths":{"fr":"test","default":"test"},"langs":["fr"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"925f77b4-60a5-4dac-9211-0cdc31de29d8","linkId":"925f77b4-60a5-4dac-9211-0cdc31de29d8","name":"Landing Page","folder":null,"paths":{"fr":"landing-page","default":"landing-page"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"09bbbab9-d62d-44d8-a9e2-d17f23946ecd","sectionTitle":"Navbar Section","linkId":"c6c62f41-cfd3-413a-b4be-8dda94970f25"},{"uid":"576e0bc3-a615-4832-a431-6f603d26fe55","sectionTitle":"Hero Section","linkId":"8e7663d5-7000-4928-ae3b-7327fa72bd90"},{"uid":"8067a607-2143-42e2-bf36-9822b021673d","sectionTitle":"Features Section","linkId":"a835c933-f133-46f8-9875-e71ef01e7bbb"},{"uid":"5f00cc61-c988-4034-930b-86be2cb28829","sectionTitle":"Benefits Section","linkId":"00299684-24e7-4fc9-9ecd-7747524bdd26"},{"uid":"72b339a7-91a7-44c8-8d8f-503ec37c772b","sectionTitle":"Testimonials Section","linkId":"8586df61-a6b2-42f1-bee3-e9b98700c5e8"},{"uid":"a42ad6ac-ae2e-4da5-be1e-cb102c3c0ab4","sectionTitle":"FAQ Section","linkId":"da63ea15-936e-4ec9-b0ce-cf301c96050e"},{"uid":"5bc937a3-297f-497f-9724-f18285c3a6a3","sectionTitle":"CTA Section","linkId":"9d7c04ea-1ae7-4ee8-aaa5-9ebaaace2c1a"},{"uid":"9efee293-1945-4533-9d20-92f5c3fa92d6","sectionTitle":"Footer Section","linkId":"7e2c0aa1-4199-4248-a22f-5d8c026f33eb"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6baf0af5-2cef-49b9-9c9e-88258c4b958d","linkId":"6baf0af5-2cef-49b9-9c9e-88258c4b958d","name":"Profil","folder":null,"paths":{"fr":"profil","default":"profil"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"6d9fc4a9-7c0d-4ff5-895d-e4e4f34a1118","sectionTitle":"Sidemenu","linkId":"b1670bc9-f8db-47b1-9e10-52688526062e"},{"uid":"0e0f4404-82c1-4dda-a5e9-200b5433f982","sectionTitle":"Header","linkId":"a03d6ff2-8016-45c9-b04b-dda5413327ab"},{"uid":"793aadaf-d04a-4d42-86d8-69f0bbce1810","sectionTitle":"Section","linkId":"ad5604d1-3922-4c81-b9e0-fa4b55c794c4"},{"uid":"51e0901e-a0e2-4e5e-9865-1e3376102d46","sectionTitle":"Drawer","linkId":"007e5eef-91e3-42df-9b5a-e902d0c27951"},{"uid":"a0921010-e4f6-4e37-8870-79e04670fa99","sectionTitle":"Alert","linkId":"925444c7-0c31-4e78-b58d-d7d86f3fcd52"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"24524a91-ccb6-4411-8a01-0ea4dd70d6eb","linkId":"24524a91-ccb6-4411-8a01-0ea4dd70d6eb","name":"Brouillon","folder":null,"paths":{"fr":"brouillon","default":"brouillon"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"9b09b820-95c2-4f63-b4c5-8f5b61a27366","sectionTitle":"Navigation Bar","linkId":"874e09af-0c15-4b46-8d2e-2a73c002ba2b"},{"uid":"182e5aa4-7fc5-496c-994a-45691163b2aa","sectionTitle":"Main Container","linkId":"f07a0c3c-4d08-455d-ad43-20216218a0cd"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8676e32c-3d5c-40ef-a0ca-369b09e4bb8e","linkId":"8676e32c-3d5c-40ef-a0ca-369b09e4bb8e","name":"Commercial","folder":"Navigation/","paths":{"fr":"finance-copy-copy","default":"finance-copy-copy"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"db892c2e-cc18-48f4-8ce0-3cf6b8632d0c","sectionTitle":"Section","linkId":"b4d069bc-e9b6-480d-94da-ca6512f0d3f9"},{"uid":"0428b8f3-9b80-4793-b680-e044a7f21974","sectionTitle":"Section: Liste des Lots","linkId":"f7850524-1a48-4c46-86d8-6ca88cc6125d"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a422f993-7fa3-4b6a-87a1-e118636f3752","linkId":"a422f993-7fa3-4b6a-87a1-e118636f3752","name":"Factures","folder":"Navigation/","paths":{"fr":"finance-copy-copy-copy","default":"finance-copy-copy-copy"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"2917080c-8e0c-4baf-a78e-5f473bc124aa","sectionTitle":"Section","linkId":"02fe29fb-9151-4e2c-8794-fe7731e3b27e"},{"uid":"f3e4ac51-4c29-407d-8e22-7b7c8f1a514e","sectionTitle":"Invoice Content Section","linkId":"d9005c0b-d89d-4a3d-ae3a-7354d1f09a34"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e8cbb3b3-13f8-4193-97c2-0203f2f3b32d","linkId":"e8cbb3b3-13f8-4193-97c2-0203f2f3b32d","name":"Offres","folder":"Navigation/","paths":{"fr":"offres","default":"offres"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"1a681060-7a98-4c3e-80de-a87cd20f8e5d","sectionTitle":"Section","linkId":"2206d035-37a6-4b5e-a92a-a63153a839ad"},{"uid":"9796d01e-e5af-4d9e-9a8e-ef48fa3ec926","sectionTitle":"Invoice Content Section","linkId":"93330d8c-87ad-47f6-8323-5af8c80fb025"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"922c93df-6275-4b11-a604-2f880709c2c8","linkId":"922c93df-6275-4b11-a604-2f880709c2c8","name":"Etudes","folder":"Navigation/","paths":{"fr":"etudes","default":"etudes"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"43c76e6b-caa9-461f-b1fb-6357c2524a88","sectionTitle":"Section","linkId":"42f7b5cb-11ae-4724-9ac5-a8783516a7cf"},{"uid":"469e9ef3-3918-47ff-ba59-83a0deac9eb6","sectionTitle":"Invoice Content Section","linkId":"add0efff-6059-4bc1-9bb1-699deb66a3d1"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5621c412-a7f4-421d-9be0-222cb1b81494","linkId":"5621c412-a7f4-421d-9be0-222cb1b81494","name":"Contacts","folder":"Navigation/","paths":{"fr":"contacts","default":"contacts"},"langs":["fr"],"cmsDataSetPath":null,"sections":[{"uid":"0034f89c-baa1-41d8-880c-3c3967d39c7f","sectionTitle":"Navbar Section","linkId":"85199860-4f6a-44e7-b280-7af1efb48ae5"},{"uid":"f3ecb3ef-e449-428c-9e7c-5d465fd2479f","sectionTitle":"Sidemenu","linkId":"cabfff87-840a-4048-b033-a33ab0735cc1"},{"uid":"22277505-c42a-425e-8a7e-d10d0c58309a","sectionTitle":"Section","linkId":"f817dbed-cca1-47a5-a23f-6b9935b61607"},{"uid":"9a28996f-8f88-441f-a20d-0ec167c60b9f","sectionTitle":"Drawer","linkId":"23c6f303-eeb1-45fd-b0d5-ea7de5e33484"},{"uid":"f150b304-2bd7-4a4b-af13-46c1ddb44170","sectionTitle":"Content Section: Liste des Tâches","linkId":"c9113b3a-121f-4de4-81cc-cbe7bf881508"},{"uid":"b4cbd840-befd-46cd-beec-7ec4a060a017","sectionTitle":"Content Section: Détails d'une Tâche","linkId":"3f2e391b-5313-4a04-82c3-b2e03ad80d5f"},{"uid":"70abea6b-e707-48b8-9d10-4c6859fe01b0","sectionTitle":"Content Section: Création d'une Tâche","linkId":"c4a32c7b-6a8d-4809-854b-b378f1201959"},{"uid":"a5aec2b5-2c31-4288-923a-ae365e1af91b","sectionTitle":"Content Section: Calendrier des Tâches","linkId":"5f4d50a3-a3cf-44d1-a801-458989afc3f4"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"2adce8d5-2056-479d-a21a-068f55a8077f","name":"Mapbox","namespace":"mapbox"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"d66a250d-8468-469e-ad33-ee028f632398","name":"OpenAI","namespace":"openai"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 53;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
