/**************************************

@Name：掘金签到+每天免费抽奖一次
@Author：rational_stars
@Done：2024 年 05 月 15 日 21:11:59
@Date：2024 年 05 月 25 日 23:55:15

脚本兼容：只测试过 QuantumultX 没有其他 app 无法测试望理解


使用方法：
1.打开掘金 app ->我的页面-> 个人主页 若提示获取Cookie成功则可以使用该脚本
2.关闭获取Cookie重写，避免产生不必要的mitm。

QunatumultX
------------------------------------------
[task_local] 
20 5 0 * * * https://raw.githubusercontent.com/rational-stars/QuantumultX/main/juejin/juejin.js, tag=掘金签到+每天免费抽奖一次, img-url=https://raw.githubusercontent.com/rational-stars/QuantumultX/main/icon/juejin.png, enabled=true

[rewrite_local]
^https:\/\/api\.juejin\.cn\/user_api\/v1\/user\/dynamic url script-request-header https://raw.githubusercontent.com/rational-stars/QuantumultX/main/juejin/juejin-re.js

[mitm]
hostname = api.juejin.cn

====================================
⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。
******************************************/
const _0x5a6927 = _0x3f8b
;(function (_0x4a459f, _0x48871a) {
  const _0x5b3e19 = _0x3f8b,
    _0x333495 = _0x4a459f()
  while (!![]) {
    try {
      const _0x1ac8a5 =
        parseInt(_0x5b3e19(0x8d)) / 0x1 +
        -parseInt(_0x5b3e19(0x89)) / 0x2 +
        (-parseInt(_0x5b3e19(0x81)) / 0x3) * (parseInt(_0x5b3e19(0x8c)) / 0x4) +
        parseInt(_0x5b3e19(0x9b)) / 0x5 +
        parseInt(_0x5b3e19(0x8e)) / 0x6 +
        (-parseInt(_0x5b3e19(0x93)) / 0x7) *
          (-parseInt(_0x5b3e19(0xae)) / 0x8) +
        (parseInt(_0x5b3e19(0x80)) / 0x9) * (-parseInt(_0x5b3e19(0x96)) / 0xa)
      if (_0x1ac8a5 === _0x48871a) break
      else _0x333495['push'](_0x333495['shift']())
    } catch (_0x4c7119) {
      _0x333495['push'](_0x333495['shift']())
    }
  }
})(_0x1536, 0x63adb)
let Cookie = $prefs[_0x5a6927(0x87)](_0x5a6927(0xac)) || ''
if (!Cookie) return $notify(_0x5a6927(0x90), '失败'), $done()
function _0x1536() {
  const _0x114962 = [
    'data',
    'body',
    'check_in',
    '接口调用失败：',
    'error',
    'then',
    '连续签到天数',
    'parse',
    'xq-juejin-ck',
    '签到成功，获得',
    '1448TNWlCL',
    '1359cbEOga',
    '3diExhT',
    'cont_count',
    'stringify',
    '/check_in',
    'lottery_name',
    'fetch',
    'valueForKey',
    '掘金通知',
    '383932twrNXy',
    'draw',
    'free_count',
    '2088764LoNnjb',
    '462319kYJNeq',
    '4581870QEwwMy',
    'incr_point',
    '掘金获取ck',
    'err_msg',
    '/get_cur_point',
    '5089NTEEJQ',
    'GET',
    'https://api.juejin.cn/growth_api/v1',
    '44930VLcXbC',
    'POST',
    'free_number',
    '/get_counts',
    'log',
    '2216660gyQvVo',
    'get_cur_point',
    'point_count',
    '，当前矿石数',
    'sum_count',
    '，累计签到天数',
    '/lottery/draw',
    '/lottery_config/get',
    'lottery_config',
  ]
  _0x1536 = function () {
    return _0x114962
  }
  return _0x1536()
}
const baseUrl = _0x5a6927(0x95),
  Title = _0x5a6927(0x88),
  headers = { Cookie: Cookie },
  URL_INFO = {
    check_in: _0x5a6927(0x84),
    draw: _0x5a6927(0xa1),
    get_cur_point: _0x5a6927(0x92),
    lottery_config: _0x5a6927(0xa2),
    get_counts: _0x5a6927(0x99),
  }
let USER_INFO = {
    free_number: 0x0,
    cont_count: 0x0,
    sum_count: 0x0,
    point_count: 0x0,
  },
  notifyContent = ''
function _0x3f8b(_0x3bf70c, _0x5122f6) {
  const _0x1536cb = _0x1536()
  return (
    (_0x3f8b = function (_0x3f8b8b, _0x45d4ca) {
      _0x3f8b8b = _0x3f8b8b - 0x80
      let _0x15aa3a = _0x1536cb[_0x3f8b8b]
      return _0x15aa3a
    }),
    _0x3f8b(_0x3bf70c, _0x5122f6)
  )
}
const handelResponse = async (_0x25dc3d, _0x4ef855) => {
    const _0x2999fe = _0x5a6927,
      _0x59e0c1 = _0x25dc3d?.[_0x2999fe(0xa4)]
    switch (_0x4ef855) {
      case '/check_in':
        _0x59e0c1?.[_0x2999fe(0x8f)]
          ? (notifyContent +=
              _0x2999fe(0xad) + _0x59e0c1?.[_0x2999fe(0x8f)] + '矿石')
          : (notifyContent += _0x25dc3d[_0x2999fe(0x91)])
        break
      case _0x2999fe(0xa1):
        const _0x52fb6d = '抽中' + _0x59e0c1?.[_0x2999fe(0x85)]
        ;(notifyContent += _0x52fb6d), console[_0x2999fe(0x9a)](_0x52fb6d)
        break
      case _0x2999fe(0x92):
        USER_INFO[_0x2999fe(0x9d)] = _0x59e0c1
        break
      case _0x2999fe(0xa2):
        USER_INFO[_0x2999fe(0x98)] = _0x59e0c1?.[_0x2999fe(0x8b)]
        break
      case '/get_counts':
        ;(USER_INFO[_0x2999fe(0x82)] = _0x59e0c1?.[_0x2999fe(0x82)]),
          (USER_INFO['sum_count'] = _0x59e0c1?.[_0x2999fe(0x9f)])
        break
      default:
        console[_0x2999fe(0x9a)](_0x59e0c1)
        break
    }
    return _0x59e0c1
  },
  Request = (_0x461467, _0x2df95a = _0x5a6927(0x94), _0x22282f = {}) => {
    const _0x5d8e76 = _0x5a6927
    let _0x1665af = {
      url: baseUrl + _0x461467,
      headers: headers,
      method: _0x2df95a,
      body: JSON[_0x5d8e76(0x83)](_0x22282f),
      opts: { redirection: ![] },
    }
    return $task[_0x5d8e76(0x86)](_0x1665af)[_0x5d8e76(0xa9)](
      (_0x46354e) => {
        const _0x109fc3 = _0x5d8e76,
          _0x2682b2 = JSON[_0x109fc3(0xab)](_0x46354e?.[_0x109fc3(0xa5)])
        return (
          console[_0x109fc3(0x9a)](_0x2682b2[_0x109fc3(0x91)]),
          handelResponse(_0x2682b2, _0x461467)
        )
      },
      (_0xaa450d) => {
        const _0x26fd81 = _0x5d8e76
        console[_0x26fd81(0x9a)](
          _0x461467 + _0x26fd81(0xa7) + _0xaa450d[_0x26fd81(0xa8)]
        )
      }
    )
  }
;(async () => {
  const _0x5e4e73 = _0x5a6927
  Promise['all']([
    Request(URL_INFO[_0x5e4e73(0xa6)], _0x5e4e73(0x97)),
    Request(URL_INFO['get_counts'], 'GET'),
  ]),
    await Request(URL_INFO[_0x5e4e73(0xa3)], _0x5e4e73(0x94)),
    console['log']('免费抽奖次数：' + USER_INFO[_0x5e4e73(0x98)]),
    USER_INFO[_0x5e4e73(0x98)] &&
      (await Request(URL_INFO[_0x5e4e73(0x8a)], _0x5e4e73(0x97))),
    await Request(URL_INFO[_0x5e4e73(0x9c)], 'GET'),
    console[_0x5e4e73(0x9a)](
      _0x5e4e73(0xaa) +
        USER_INFO[_0x5e4e73(0x82)] +
        _0x5e4e73(0xa0) +
        USER_INFO[_0x5e4e73(0x9f)] +
        _0x5e4e73(0x9e) +
        USER_INFO[_0x5e4e73(0x9d)]
    ),
    $notify(Title, '', notifyContent),
    $done()
})()
