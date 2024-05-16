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
const _0x3a27c3 = _0x5d01
;(function (_0x363fce, _0x266728) {
  const _0x5c8f5d = _0x5d01,
    _0x27fbc2 = _0x363fce()
  while (!![]) {
    try {
      const _0x2516b9 =
        (parseInt(_0x5c8f5d(0x10b)) / 0x1) * (parseInt(_0x5c8f5d(0xf2)) / 0x2) +
        -parseInt(_0x5c8f5d(0x10a)) / 0x3 +
        (-parseInt(_0x5c8f5d(0x101)) / 0x4) *
          (-parseInt(_0x5c8f5d(0x104)) / 0x5) +
        parseInt(_0x5c8f5d(0x109)) / 0x6 +
        -parseInt(_0x5c8f5d(0xf6)) / 0x7 +
        (-parseInt(_0x5c8f5d(0xec)) / 0x8) *
          (-parseInt(_0x5c8f5d(0x100)) / 0x9) +
        -parseInt(_0x5c8f5d(0xfc)) / 0xa
      if (_0x2516b9 === _0x266728) break
      else _0x27fbc2['push'](_0x27fbc2['shift']())
    } catch (_0x4e5195) {
      _0x27fbc2['push'](_0x27fbc2['shift']())
    }
  }
})(_0x331d, 0xc9e35)
let Cookie = $prefs['valueForKey'](_0x3a27c3(0xf4)) || ''
if (!Cookie) return $notify('掘金获取ck', '失败'), $done()
const baseUrl = 'https://api.juejin.cn/growth_api/v1',
  Title = _0x3a27c3(0x108),
  headers = { Cookie: Cookie },
  URL_INFO = {
    check_in: _0x3a27c3(0xfa),
    draw: _0x3a27c3(0xfe),
    get_cur_point: '/get_cur_point',
    lottery_config: _0x3a27c3(0x10c),
    get_counts: _0x3a27c3(0xee),
  }
let USER_INFO = {
    free_number: 0x0,
    cont_count: 0x0,
    sum_count: 0x0,
    point_count: 0x0,
  },
  notifyContent = ''
const handelResponse = async (_0x4ec4c4, _0x375eb8) => {
    const _0x5e5c28 = _0x3a27c3,
      _0x562e9a = _0x4ec4c4?.['data']
    switch (_0x375eb8) {
      case _0x5e5c28(0xfa):
        _0x562e9a?.[_0x5e5c28(0x111)]
          ? (notifyContent +=
              _0x5e5c28(0x105) + _0x562e9a?.[_0x5e5c28(0x111)] + '矿石')
          : (notifyContent += _0x4ec4c4[_0x5e5c28(0xed)])
        break
      case '/lottery/draw':
        const _0x4fbc58 = '抽中' + _0x562e9a?.[_0x5e5c28(0x102)]
        ;(notifyContent += _0x4fbc58), console['log'](_0x4fbc58)
        break
      case _0x5e5c28(0xef):
        USER_INFO[_0x5e5c28(0xff)] = _0x562e9a
        break
      case _0x5e5c28(0x10c):
        USER_INFO['free_number'] = _0x562e9a?.['free_count']
        break
      case _0x5e5c28(0xee):
        ;(USER_INFO[_0x5e5c28(0xf3)] = _0x562e9a?.[_0x5e5c28(0xf3)]),
          (USER_INFO['sum_count'] = _0x562e9a?.[_0x5e5c28(0xfd)])
        break
      default:
        console[_0x5e5c28(0x106)](_0x562e9a)
        break
    }
    return _0x562e9a
  },
  Request = (_0x29b850, _0x715229 = _0x3a27c3(0xea), _0x451e75 = {}) => {
    const _0x3306c7 = _0x3a27c3
    let _0x3b6a75 = {
      url: baseUrl + _0x29b850,
      headers: headers,
      method: _0x715229,
      body: JSON[_0x3306c7(0xf5)](_0x451e75),
      opts: { redirection: ![] },
    }
    return $task[_0x3306c7(0x10e)](_0x3b6a75)[_0x3306c7(0x10d)](
      (_0x349071) => {
        const _0x55b9f8 = _0x3306c7,
          _0x4c57db = JSON[_0x55b9f8(0xf9)](_0x349071?.[_0x55b9f8(0xfb)])
        return (
          console[_0x55b9f8(0x106)](_0x4c57db['err_msg']),
          handelResponse(_0x4c57db, _0x29b850)
        )
      },
      (_0x3f3304) => {
        const _0x16d9ab = _0x3306c7
        console['log'](
          _0x29b850 + _0x16d9ab(0xf8) + _0x3f3304[_0x16d9ab(0x103)]
        )
      }
    )
  }
;(async () => {
  const _0x52cd9b = _0x3a27c3
  await Promise[_0x52cd9b(0xf1)]([
    Request(URL_INFO['lottery_config'], _0x52cd9b(0xea)),
    Request(URL_INFO[_0x52cd9b(0x112)], _0x52cd9b(0xf0)),
    Request(URL_INFO[_0x52cd9b(0x10f)], _0x52cd9b(0xea)),
  ]),
    USER_INFO['free_number'] &&
      (await Request(URL_INFO[_0x52cd9b(0xf7)], _0x52cd9b(0xf0))),
    await Request(URL_INFO[_0x52cd9b(0x110)], _0x52cd9b(0xea)),
    console['log'](
      _0x52cd9b(0xeb) +
        USER_INFO[_0x52cd9b(0xf3)] +
        _0x52cd9b(0x107) +
        USER_INFO[_0x52cd9b(0xfd)] +
        _0x52cd9b(0x113) +
        USER_INFO[_0x52cd9b(0xff)]
    ),
    $notify(Title, '', notifyContent),
    $done()
})()
function _0x5d01(_0x3242c5, _0x390e28) {
  const _0x331d04 = _0x331d()
  return (
    (_0x5d01 = function (_0x5d0102, _0x1a5e16) {
      _0x5d0102 = _0x5d0102 - 0xea
      let _0x131a71 = _0x331d04[_0x5d0102]
      return _0x131a71
    }),
    _0x5d01(_0x3242c5, _0x390e28)
  )
}
function _0x331d() {
  const _0x2462c6 = [
    'draw',
    '接口调用失败：',
    'parse',
    '/check_in',
    'body',
    '24096950eHswmi',
    'sum_count',
    '/lottery/draw',
    'point_count',
    '234522ughMBA',
    '161064VChNJP',
    'lottery_name',
    'error',
    '160bwLzUT',
    '签到成功，获得',
    'log',
    '，累计签到天数',
    '掘金通知',
    '2831166DVXxlC',
    '1628937UDQbRQ',
    '285292ISLuiG',
    '/lottery_config/get',
    'then',
    'fetch',
    'get_counts',
    'get_cur_point',
    'incr_point',
    'check_in',
    '，当前矿石数',
    'GET',
    '连续签到天数',
    '352brZZhG',
    'err_msg',
    '/get_counts',
    '/get_cur_point',
    'POST',
    'all',
    '10mRkUJS',
    'cont_count',
    'xq-juejin-ck',
    'stringify',
    '3876446cGGUtB',
  ]
  _0x331d = function () {
    return _0x2462c6
  }
  return _0x331d()
}
