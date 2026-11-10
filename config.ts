import { generateDeploymentConfig, loadEncryptedConfig } from "scripts";

const config = generateDeploymentConfig("plh_kids_teens_mx");

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-mx-content.git",
  content_tag_latest: "1.2.4",
};

config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", name: "library_field_values" },
  { id: "1hZt4L2JosXHqzyAsKeG9QWzxQQf54kmF", name: "kids_teens_global V3" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1gpkEat_BX_sORGV2O7VD88NIKPC_D0Ss", name: "ab_test_po_scale" },
  { id: "1d6iNDocEsALEZ9Z30Xg2FQ-98-1NJCVC", name: "test_po_refl"},
  { id: "1brg6jkdX06BsjaC9rz59gec5Pq8SONW5", name: "modules_mx" },
  { id: "1hgONPg9pMhIBgJjZVbX-n3USz-7dRKOf", name: "kids_teens_mx" }  
];

config.google_drive.assets_folders = [
  //{ id: "1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", name: "kids_global_assets" },
  //{ id: "11FFBdMbwQ8aiUkprH-qXYC-uONXmJLHs", name: "kids_teens_global V2 assets" },
  //{ id: "18QBUUI7k9KYKCJHWCnNAHo-_9z1oDf3G", name: "temp_assets_mx"}
];

config.canto = {
  url: "https://parentingforlifelonghealth.canto.com",
  sourceFolders: [
    {
      id: "VSU1U", name: "Mexico Canto Assets" /*,
      remote_assets: [
        {
          name: "assets_facilitator_female",
          condition: {
            type: "custom_field",
            field: "Facilitator Gender",
            value: "F",
          },
        },
        {
          name: "assets_facilitator_male",
          condition: {
            type: "custom_field",
            field: "Facilitator Gender",
            value: "M",
          },
        }
      ],
      */
    }
  ],
  languageMappings: {
    Spanish: "gb_en",
  },
  ...loadEncryptedConfig("canto.json"),
}

config.remote_assets = {
  provider: "firebase",
  bucketName: "plh-kids-teens-mx",
  folderName: "remote_assets",
}

config.android = {
  app_id: 'international.idems.plh_kids_teens_mx',
  app_name: 'Crianza+',
  logo_asset_path: "./app_data/assets/images/logos/icon-foreground.png",
  logo_background_color: "#25415B",
  zoom_enabled: true
};

config.ios = {
  app_id: "international.idems.plh-kids-teens-mx",
  app_name: "Crianza",
  app_display_name: "Crianza+",
  logo_asset_path: "./app_data/assets/images/logos/icon-foreground.png",
  logo_background_color: "#25415B",
  zoom_enabled: true
};

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
}

config.auth = {
  provider: 'firebase',
}

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

config.web.favicon_asset = "images/logos/crianza_logo.png";

config.api.db_name = "plh_kids_teens_mx";
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default ="gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Crianza+";
config.app_config.APP_HEADER_DEFAULTS.title = "Crianza+";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Crianza+";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Crianza+";
config.app_config.APP_THEMES.available = ["plh_kids_teens_mx"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_mx";
config.error_logging = { dsn: "https://17df9395def549e7835dfac8225d53e1@app.glitchtip.com/14124" };


export default config;
