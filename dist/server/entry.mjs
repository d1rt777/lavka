import { t as __exportAll } from "./chunks/chunk-D7D4PA-g.js";
import { setGlobalContext_prodBuildEntry } from "vike/__internal";
//#region \0virtual:vike:server:constantsGlobalThis
globalThis.__VIKE__IS_DEV = false;
globalThis.__VIKE__IS_CLIENT = false;
globalThis.__VIKE__IS_DEBUG = false;
//#endregion
//#region \0virtual:vike:global-entry:server
var _virtual_vike_global_entry_server_exports = /* @__PURE__ */ __exportAll({
	neverLoaded: () => neverLoaded,
	pageConfigGlobalSerialized: () => pageConfigGlobalSerialized,
	pageConfigsSerialized: () => pageConfigsSerialized,
	pageFilesEager: () => pageFilesEager,
	pageFilesExportNamesEager: () => pageFilesExportNamesEager,
	pageFilesExportNamesLazy: () => pageFilesExportNamesLazy,
	pageFilesLazy: () => pageFilesLazy,
	pageFilesList: () => pageFilesList
});
var pageFilesLazy = {};
var pageFilesEager = {};
var pageFilesExportNamesLazy = {};
var pageFilesExportNamesEager = {};
var pageFilesList = [];
var neverLoaded = {};
var pageConfigsSerialized = [{
	pageId: "/src/pages/index",
	isErrorPage: void 0,
	routeFilesystem: {
		"routeString": "/",
		"definedAtLocation": "/src/pages/index/"
	},
	loadVirtualFilePageEntry: () => ({
		moduleId: "virtual:vike:page-entry:server:/src/pages/index",
		moduleExportsPromise: import("./entries/src_pages_index.mjs")
	}),
	configValuesSerialized: {
		["isClientRuntimeLoaded"]: {
			type: "computed",
			definedAtData: null,
			valueSerialized: {
				type: "js-serialized",
				value: true
			}
		},
		["clientRouting"]: {
			type: "standard",
			definedAtData: {
				"filePathToShowToUser": "vike-react/config",
				"fileExportPathToShowToUser": ["default", "clientRouting"]
			},
			valueSerialized: {
				type: "js-serialized",
				value: true
			}
		}
	}
}];
var pageConfigGlobalSerialized = { configValuesSerialized: {} };
pageFilesLazy[".page"] = { .../* @__PURE__ */ Object.assign({}) };
pageFilesExportNamesEager[".page"] = { .../* @__PURE__ */ Object.assign({}) };
pageFilesLazy[".page.server"] = { .../* @__PURE__ */ Object.assign({}) };
pageFilesExportNamesEager[".page.server"] = { .../* @__PURE__ */ Object.assign({}) };
pageFilesEager[".page.route"] = { .../* @__PURE__ */ Object.assign({}) };
pageFilesExportNamesEager[".page.client"] = { .../* @__PURE__ */ Object.assign({}) };
//#endregion
//#region \0virtual:@brillout/vite-plugin-server-entry:serverEntry
{
	const assetsManifest = {
  "_chunk-DjF9EUXp.js": {
    "file": "assets/chunks/chunk-DjF9EUXp.js",
    "name": "renderPageClient"
  },
  "_src_App-ac5f32af.CYyoke_2.css": {
    "file": "assets/static/src_App-ac5f32af.CYyoke_2.css",
    "src": "_src_App-ac5f32af.CYyoke_2.css"
  },
  "_src_index-b3c78705.CSyoIcZD.css": {
    "file": "assets/static/src_index-b3c78705.CSyoIcZD.css",
    "src": "_src_index-b3c78705.CSyoIcZD.css"
  },
  "node_modules/vike/dist/client/runtime-client-routing/entry.js": {
    "file": "assets/entries/entry-client-routing.CqxbY-o_.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/client/runtime-client-routing/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-DjF9EUXp.js"
    ],
    "dynamicImports": [
      "virtual:vike:page-entry:client:/src/pages/index"
    ]
  },
  "src/assets/banner.png": {
    "file": "assets/static/banner.CFE0ktVD.png",
    "src": "src/assets/banner.png"
  },
  "src/assets/fermer.png": {
    "file": "assets/static/fermer.8-Oux33a.png",
    "src": "src/assets/fermer.png"
  },
  "src/assets/social/max.png": {
    "file": "assets/static/max.fl0S2_CD.png",
    "src": "src/assets/social/max.png"
  },
  "src/assets/social/telegram.png": {
    "file": "assets/static/telegram.CtsVJz6y.png",
    "src": "src/assets/social/telegram.png"
  },
  "src/assets/social/vk.png": {
    "file": "assets/static/vk.DVd6Cui2.png",
    "src": "src/assets/social/vk.png"
  },
  "virtual:vike:page-entry:client:/src/pages/index": {
    "file": "assets/entries/src_pages_index.GRiK529x.js",
    "name": "entries/src/pages/index",
    "src": "virtual:vike:page-entry:client:/src/pages/index",
    "isEntry": true,
    "imports": [
      "_chunk-DjF9EUXp.js"
    ],
    "css": [
      "assets/static/src_index-b3c78705.CSyoIcZD.css",
      "assets/static/src_App-ac5f32af.CYyoke_2.css"
    ],
    "assets": [
      "assets/static/banner.CFE0ktVD.png",
      "assets/static/fermer.8-Oux33a.png",
      "assets/static/vk.DVd6Cui2.png",
      "assets/static/max.fl0S2_CD.png",
      "assets/static/telegram.CtsVJz6y.png"
    ]
  }
};
	setGlobalContext_prodBuildEntry({
		virtualFileExportsGlobalEntry: _virtual_vike_global_entry_server_exports,
		assetsManifest,
		buildInfo: {
			"versionAtBuildTime": "0.4.262",
			"usesClientRouter": false,
			"viteConfigRuntime": {
				"root": "/Users/macbook/Documents/projects/lavka",
				"build": { "outDir": "/Users/macbook/Documents/projects/lavka/dist/" },
				"_baseViteOriginal": "/lavka/",
				"vitePluginServerEntry": {}
			}
		}
	});
}
//#endregion
export {};
