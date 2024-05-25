/**************************************

@Name：掘金签到+每天免费抽奖一次
@Author：rational_stars
@Done：2024 年 05 月 15 日 21:11:59
@Date：2024 年 05 月 16 日 10:03:35

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
const _0x2ce9ef = _0xd32c
;(function (_0x59073b, _0x4a8768) {
  const _0x1adf71 = _0xd32c,
    _0x5b6540 = _0x59073b()
  while (!![]) {
    try {
      const _0x2983f3 =
        parseInt(_0x1adf71(0x92)) / 0x1 +
        -parseInt(_0x1adf71(0x9e)) / 0x2 +
        (-parseInt(_0x1adf71(0xb5)) / 0x3) * (parseInt(_0x1adf71(0xa4)) / 0x4) +
        parseInt(_0x1adf71(0xb0)) / 0x5 +
        parseInt(_0x1adf71(0xa5)) / 0x6 +
        (parseInt(_0x1adf71(0xaf)) / 0x7) * (-parseInt(_0x1adf71(0xab)) / 0x8) +
        (parseInt(_0x1adf71(0x98)) / 0x9) * (parseInt(_0x1adf71(0xb1)) / 0xa)
      if (_0x2983f3 === _0x4a8768) break
      else _0x5b6540['push'](_0x5b6540['shift']())
    } catch (_0x1fed3d) {
      _0x5b6540['push'](_0x5b6540['shift']())
    }
  }
})(_0x206b, 0xb5331)
function _0xd32c(_0xadccc5, _0x40b36e) {
  const _0x206b6c = _0x206b()
  return (
    (_0xd32c = function (_0xd32c9b, _0x5696bf) {
      _0xd32c9b = _0xd32c9b - 0x8d
      let _0x1a337c = _0x206b6c[_0xd32c9b]
      return _0x1a337c
    }),
    _0xd32c(_0xadccc5, _0x40b36e)
  )
}
let Cookie = $prefs[_0x2ce9ef(0x90)](_0x2ce9ef(0xb2)) || ''
if (!Cookie) return $notify('掘金获取ck', '失败'), $done()
const baseUrl = _0x2ce9ef(0xa3),
  Title = _0x2ce9ef(0x8f),
  headers = { Cookie: Cookie },
  URL_INFO = {
    check_in: _0x2ce9ef(0xb4),
    draw: _0x2ce9ef(0xa7),
    get_cur_point: _0x2ce9ef(0x8e),
    lottery_config: '/lottery_config/get',
    get_counts: _0x2ce9ef(0x9d),
  }
let USER_INFO = {
    free_number: 0x0,
    cont_count: 0x0,
    sum_count: 0x0,
    point_count: 0x0,
  },
  notifyContent = ''
const handelResponse = async (_0x5b2967, _0xc93b87) => {
    const _0x3eeb3b = _0x2ce9ef,
      _0x3eb4c8 = _0x5b2967?.[_0x3eeb3b(0xa0)]
    switch (_0xc93b87) {
      case _0x3eeb3b(0xb4):
        _0x3eb4c8?.[_0x3eeb3b(0x96)]
          ? (notifyContent +=
              '签到成功，获得' + _0x3eb4c8?.[_0x3eeb3b(0x96)] + '矿石')
          : (notifyContent += _0x5b2967[_0x3eeb3b(0x95)])
        break
      case _0x3eeb3b(0xa7):
        const _0x3c7390 = '抽中' + _0x3eb4c8?.[_0x3eeb3b(0xa8)]
        ;(notifyContent += _0x3c7390), console[_0x3eeb3b(0xa1)](_0x3c7390)
        break
      case '/get_cur_point':
        USER_INFO[_0x3eeb3b(0x8d)] = _0x3eb4c8
        break
      case _0x3eeb3b(0x99):
        USER_INFO[_0x3eeb3b(0x9b)] = _0x3eb4c8?.['free_count']
        break
      case _0x3eeb3b(0x9d):
        ;(USER_INFO[_0x3eeb3b(0x9f)] = _0x3eb4c8?.[_0x3eeb3b(0x9f)]),
          (USER_INFO[_0x3eeb3b(0x9c)] = _0x3eb4c8?.[_0x3eeb3b(0x9c)])
        break
      default:
        console['log'](_0x3eb4c8)
        break
    }
    return _0x3eb4c8
  },
  Request = (_0x4ff030, _0x314f21 = _0x2ce9ef(0xa6), _0x3a2338 = {}) => {
    const _0x502137 = _0x2ce9ef
    let _0x554fe5 = {
      url: baseUrl + _0x4ff030,
      headers: headers,
      method: _0x314f21,
      body: JSON[_0x502137(0xac)](_0x3a2338),
      opts: { redirection: ![] },
    }
    return $task[_0x502137(0x94)](_0x554fe5)[_0x502137(0x97)](
      (_0x15c05a) => {
        const _0x440147 = _0x502137,
          _0x46e754 = JSON[_0x440147(0xb3)](_0x15c05a?.[_0x440147(0x93)])
        return (
          console['log'](_0x46e754[_0x440147(0x95)]),
          handelResponse(_0x46e754, _0x4ff030)
        )
      },
      (_0x14a8a0) => {
        const _0x39072c = _0x502137
        console[_0x39072c(0xa1)](
          _0x4ff030 + _0x39072c(0xad) + _0x14a8a0['error']
        )
      }
    )
  }
function _0x206b() {
  const _0x24ad4c = [
    'valueForKey',
    '连续签到天数',
    '73620OxhWgk',
    'body',
    'fetch',
    'err_msg',
    'incr_point',
    'then',
    '369yIBZyw',
    '/lottery_config/get',
    'get_counts',
    'free_number',
    'sum_count',
    '/get_counts',
    '1636784rvzDor',
    'cont_count',
    'data',
    'log',
    '，当前矿石数',
    'https://api.juejin.cn/growth_api/v1',
    '4711616Cualdd',
    '6746700joIcxB',
    'GET',
    '/lottery/draw',
    'lottery_name',
    'draw',
    'lottery_config',
    '136fZYrMi',
    'stringify',
    '接口调用失败：',
    'POST',
    '3206Edvcjk',
    '4253770SlpUuQ',
    '170110OGEBwl',
    'xq-juejin-ck',
    'parse',
    '/check_in',
    '3LEuVGe',
    'point_count',
    '/get_cur_point',
    '掘金通知',
  ]
  _0x206b = function () {
    return _0x24ad4c
  }
  return _0x206b()
}
;(async () => {
  const _0x21b08a = _0x2ce9ef
  Promise['all']([
    Request(URL_INFO['check_in'], _0x21b08a(0xae)),
    Request(URL_INFO[_0x21b08a(0x9a)], _0x21b08a(0xa6)),
  ]),
    await Request(URL_INFO[_0x21b08a(0xaa)], 'GET'),
    USER_INFO[_0x21b08a(0x9b)] &&
      (await Request(URL_INFO[_0x21b08a(0xa9)], _0x21b08a(0xae))),
    await Request(URL_INFO['get_cur_point'], _0x21b08a(0xa6)),
    console['log'](
      _0x21b08a(0x91) +
        USER_INFO[_0x21b08a(0x9f)] +
        '，累计签到天数' +
        USER_INFO[_0x21b08a(0x9c)] +
        _0x21b08a(0xa2) +
        USER_INFO[_0x21b08a(0x8d)]
    ),
    $notify(Title, '', notifyContent),
    $done()
})()
