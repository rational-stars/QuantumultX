// Loon 脚本：自动更新订阅链接
// cron "0 8 * * *" script-path=https://yourdomain.com/loon-auto-sub.js, tag=自动更新订阅链接

const boxjsURL = "https://boxjs.com/query/data/xq-afun"; // 获取最新链接的接口
const LOON_KEY = "afun_sub_url"; // Loon 中变量名

(async () => {
  try {
    const res = await fetch(boxjsURL);
    const data = await res.json();

    // 自动识别 URL 字段
    const newURL = data?.val;

    if (!newURL || !newURL.startsWith("https")) {
      throw new Error("未获取到合法的订阅链接");
    }

    $persistentStore.write(newURL, LOON_KEY);
    $notification.post("Loon 订阅更新成功", "", `已更新为：${newURL}`);
  } catch (err) {
    $notification.post("订阅更新失败", "", err.message);
  } finally {
    $done();
  }
})();