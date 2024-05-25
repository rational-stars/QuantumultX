/**************************************

@Name：掘金签到+每天免费抽奖一次
@Author：rational_stars
@Done：2024 年 05 月 15 日 21:11:59
@Date：2024 年 05 月 26 日 00:22:43

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
const _0x9c018b = _0x101f
;(function (_0x3c0c24, _0x2b8d80) {
  const _0x368e75 = _0x101f,
    _0x1d2954 = _0x3c0c24()
  while (!![]) {
    try {
      const _0x4a4bed =
        (parseInt(_0x368e75(0x82)) / 0x1) * (parseInt(_0x368e75(0x96)) / 0x2) +
        (parseInt(_0x368e75(0x8d)) / 0x3) * (-parseInt(_0x368e75(0x9c)) / 0x4) +
        (-parseInt(_0x368e75(0xaf)) / 0x5) *
          (-parseInt(_0x368e75(0x83)) / 0x6) +
        (-parseInt(_0x368e75(0x90)) / 0x7) * (parseInt(_0x368e75(0x84)) / 0x8) +
        parseInt(_0x368e75(0xae)) / 0x9 +
        (-parseInt(_0x368e75(0xaa)) / 0xa) * (parseInt(_0x368e75(0x89)) / 0xb) +
        (-parseInt(_0x368e75(0xa8)) / 0xc) * (-parseInt(_0x368e75(0x85)) / 0xd)
      if (_0x4a4bed === _0x2b8d80) break
      else _0x1d2954['push'](_0x1d2954['shift']())
    } catch (_0x16ff6b) {
      _0x1d2954['push'](_0x1d2954['shift']())
    }
  }
})(_0x98eb, 0x21bec)
let Cookie = $prefs[_0x9c018b(0xab)](_0x9c018b(0x92)) || ''
if (!Cookie) return $notify('掘金获取ck', '失败'), $done()
const baseUrl = _0x9c018b(0xa6),
  Title = _0x9c018b(0x95),
  headers = { Cookie: Cookie },
  URL_INFO = {
    check_in: _0x9c018b(0x8b),
    draw: _0x9c018b(0xac),
    get_cur_point: _0x9c018b(0xa7),
    lottery_config: _0x9c018b(0xad),
    get_counts: _0x9c018b(0x98),
  }
let USER_INFO = {
    free_number: 0xa,
    cont_count: 0x0,
    sum_count: 0x0,
    point_count: 0x0,
  },
  notifyContent = ''
const handelResponse = async (_0x3dded5, _0x8187c) => {
    const _0x53f56d = _0x9c018b,
      _0x28d4df = _0x3dded5?.[_0x53f56d(0xa5)]
    switch (_0x8187c) {
      case '/check_in':
        _0x28d4df?.[_0x53f56d(0xa4)]
          ? (notifyContent +=
              _0x53f56d(0x99) + _0x28d4df?.[_0x53f56d(0xa4)] + '矿石')
          : (notifyContent += _0x3dded5[_0x53f56d(0x97)])
        break
      case '/lottery/draw':
        const _0x1a0dbf = '抽中' + _0x28d4df?.[_0x53f56d(0x9a)]
        ;(notifyContent += _0x1a0dbf), console[_0x53f56d(0xa2)](_0x1a0dbf)
        break
      case _0x53f56d(0xa7):
        USER_INFO['point_count'] = _0x28d4df
        break
      case _0x53f56d(0xad):
        USER_INFO[_0x53f56d(0x87)] = _0x28d4df?.[_0x53f56d(0x9e)]
        break
      case _0x53f56d(0x98):
        ;(USER_INFO[_0x53f56d(0x93)] = _0x28d4df?.[_0x53f56d(0x93)]),
          (USER_INFO[_0x53f56d(0xa0)] = _0x28d4df?.[_0x53f56d(0xa0)])
        break
      default:
        console['log'](_0x28d4df)
        break
    }
    return new Promise((_0x507554, _0x962f0d) => {
      _0x507554()
    })
  },
  Request = (_0x120111, _0xddbdb0 = _0x9c018b(0x81), _0x5f06d7 = {}) => {
    const _0x5c4414 = _0x9c018b
    let _0x5f89a2 = {
      url: baseUrl + _0x120111,
      headers: headers,
      method: _0xddbdb0,
      body: JSON[_0x5c4414(0x94)](_0x5f06d7),
      opts: { redirection: ![] },
    }
    return $task[_0x5c4414(0x88)](_0x5f89a2)['then'](
      async (_0x4ebed5) => {
        const _0x347dd3 = _0x5c4414,
          _0x30f793 = JSON['parse'](_0x4ebed5?.['body'])
        return (
          console[_0x347dd3(0xa2)](_0x30f793[_0x347dd3(0x97)]),
          await handelResponse(_0x30f793, _0x120111)
        )
      },
      (_0x53fcc9) => {
        const _0x266c98 = _0x5c4414
        console['log'](_0x120111 + _0x266c98(0x9d) + _0x53fcc9[_0x266c98(0x8e)])
      }
    )
  }
;(async () => {
  const _0x1e7112 = _0x9c018b
  Promise[_0x1e7112(0x9b)]([
    Request(URL_INFO[_0x1e7112(0x91)], 'POST'),
    Request(URL_INFO[_0x1e7112(0xa9)], 'GET'),
  ]),
    await Request(URL_INFO[_0x1e7112(0x86)], _0x1e7112(0x81)),
    console[_0x1e7112(0xa2)](_0x1e7112(0xb0) + USER_INFO[_0x1e7112(0x87)]),
    USER_INFO[_0x1e7112(0x87)] &&
      (await Request(URL_INFO[_0x1e7112(0x8f)], 'POST')),
    await Request(URL_INFO[_0x1e7112(0x8a)], _0x1e7112(0x81)),
    console[_0x1e7112(0xa2)](
      '连续签到天数' +
        USER_INFO['cont_count'] +
        _0x1e7112(0x8c) +
        USER_INFO['sum_count'] +
        _0x1e7112(0x9f) +
        USER_INFO[_0x1e7112(0xa3)]
    ),
    console['log'](_0x1e7112(0xa1)),
    $notify(Title, '', notifyContent),
    $done()
})()
function _0x101f(_0x55a386, _0x4f8ff0) {
  const _0x98eb49 = _0x98eb()
  return (
    (_0x101f = function (_0x101fc4, _0xb701a2) {
      _0x101fc4 = _0x101fc4 - 0x81
      let _0x5221ac = _0x98eb49[_0x101fc4]
      return _0x5221ac
    }),
    _0x101f(_0x55a386, _0x4f8ff0)
  )
}
function _0x98eb() {
  const _0x3f7ea9 = [
    '7FCPZKA',
    'check_in',
    'xq-juejin-ck',
    'cont_count',
    'stringify',
    '掘金通知',
    '3206BKXaVe',
    'err_msg',
    '/get_counts',
    '签到成功，获得',
    'lottery_name',
    'all',
    '4Qhkhwq',
    '接口调用失败：',
    'free_count',
    '，当前矿石数',
    'sum_count',
    '向前===>给个小星星吧===>\x20\x20https://github.com/rational-stars/QuantumultX\x20',
    'log',
    'point_count',
    'incr_point',
    'data',
    'https://api.juejin.cn/growth_api/v1',
    '/get_cur_point',
    '786084RfTuHJ',
    'get_counts',
    '280gxnkbt',
    'valueForKey',
    '/lottery/draw',
    '/lottery_config/get',
    '1220157xfMpIw',
    '357515MoFDYL',
    '免费抽奖次数：',
    'GET',
    '37gHFRnp',
    '18BPHgiJ',
    '181768OjFRmB',
    '13TPsePV',
    'lottery_config',
    'free_number',
    'fetch',
    '103004qWOIDE',
    'get_cur_point',
    '/check_in',
    '，累计签到天数',
    '155301IgYZID',
    'error',
    'draw',
  ]
  _0x98eb = function () {
    return _0x3f7ea9
  }
  return _0x98eb()
}
