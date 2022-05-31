export const mockPrefectures = (): mockPrefecture[] => {
  return [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ].map((value, index) => {
    return { prefName: value, prefCode: String(index) }
  })
}

export const mockHighchartsOptions = (): Highcharts.Options => {
  const options: Highcharts.Options = {
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: [
        1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025, 2030, 2035,
        2040, 2045,
      ].map(String),
    },
    series: [
      {
        type: "line",
        name: "東京都",
        data: [
          12817, 12707, 12571, 12602, 12199, 11518, 10888, 10133, 9275, 8431,
          7610, 6816, 6048, 5324,
        ],
      },
    ],
  }
  return options
}
