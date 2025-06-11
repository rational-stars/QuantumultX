// Loon 脚本：自动更新 afun 的订阅 token
const api = "https://boxjs.com/query/data/xq-afun";

$httpClient.get(api, function (error, response, data) {
  if (error) {
    console.log("❌ 获取失败: " + error);
    $done();
    return;
  }

  let json;
  try {
    json = JSON.parse(data);
  } catch (e) {
    console.log("❌ 返回内容不是 JSON");
    $done();
    return;
  }

  const newSubUrl = json.val?.trim();

  if (!newSubUrl || !/^https?:\/\/.+/i.test(newSubUrl)) {
    console.log("❌ 无效订阅地址: " + newSubUrl);
    $done();
    return;
  }

  // 匹配旧的 afun 订阅地址（只替换 sbgfw.trafficmanager.net 的）
  const regex = /https:\/\/sbgfw\.trafficmanager\.net\/api\/v1\/client\/subscribe\?token=[\w-]+/g;

  $configuration.get((confText) => {
    if (!regex.test(confText)) {
      console.log("⚠️ 未匹配到旧订阅地址，未做修改");
      $done();
      return;
    }

    const updated = confText.replace(regex, newSubUrl);

    $configuration.set(updated, () => {
      console.log("✅ 成功替换订阅地址为：\n" + newSubUrl);
      $done();
    });
  });
});