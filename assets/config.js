/*
  このサイトは1つのDiscord Botを紹介するためのテンプレートです。
  下記の値を実際のBot情報に書き換えてください。空欄のリンクは表示されません。
*/
window.SITE_CONFIG = {
  bot: {
    name: { ja: "Bot名", en: "Bot Name" },
    iconUrl: "",
    description: {
      ja: "ここにBotの概要を入力してください。",
      en: "Add a short introduction to your Discord bot here."
    },
    tags: { ja: ["機能タグ"], en: ["Feature tag"] },
    inviteUrl: "",
    guideUrl: "",
    supportUrl: "",
    features: [
      { title: { ja: "機能名", en: "Feature name" }, description: { ja: "機能の説明を入力してください。", en: "Describe this feature here." } }
    ],
    commands: [
      { name: " /example", description: { ja: "コマンドや操作方法の説明。", en: "Describe the command or how to use it." } }
    ],
    faqs: [
      { question: { ja: "利用料金はかかりますか？", en: "Is the bot free to use?" }, answer: { ja: "利用条件をここに記載してください。", en: "Add the usage terms here." } }
    ]
  }
};