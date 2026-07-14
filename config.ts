import { generateDeploymentConfig, loadEncryptedConfig } from "scripts";

const config = generateDeploymentConfig("plh_kids_teens_mx");

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-mx-content.git",
  content_tag_latest: "1.1.3",
};

config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", name: "library_field_values" },
  { id: "1jCeiY4AUIzAqjsym4woqc-gD9wkYlw_U", name: "kids_teens_global V2" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1hgONPg9pMhIBgJjZVbX-n3USz-7dRKOf", name: "kids_teens_mx" },
];

config.google_drive.assets_folders = [
  { id: "1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", name: "kids_global_assets" },
  { id: "11FFBdMbwQ8aiUkprH-qXYC-uONXmJLHs", name: "kids_teens_global V2 assets" }
];

config.canto = {
  url: "https://parentingforlifelonghealth.canto.com",
  sourceFolders: [
    {
      id: "KU9TL", name: "Mexico Canto Assets",
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
  app_name: 'Crianza con Conciencia +',
  logo_asset_path: "./app_data/assets/android/icon-foreground.png",
  logo_background_color: "#FFFFFF",
  zoom_enabled: true
};

config.ios = {
  app_id: "international.idems.plh-kids-teens-mx",
  app_name: "Crianza con Conciencia +",
  logo_asset_path: "./app_data/assets/android/icon-foreground.png",
  logo_background_color: "#FFFFFF",
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

config.web.favicon_asset = "images/logos/favicon.png";

config.api.db_name = "plh_kids_teens_mx";
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default ="gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "MexicoApp";
config.app_config.APP_HEADER_DEFAULTS.title = "MexicoApp";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from MexicoApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from MexicoApp";
config.app_config.APP_THEMES.available = ["plh_kids_teens_pa"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_pa";
config.error_logging = { dsn: "https://17df9395def549e7835dfac8225d53e1@app.glitchtip.com/14124" };


export default config;
