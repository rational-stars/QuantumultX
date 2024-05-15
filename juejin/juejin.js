/**************************************

@Name：掘金签到+每天免费抽奖一次
@Author：rational_stars
@Date：2024 年 05 月 15 日 21:11:59

脚本兼容：只测试过 QuantumultX 没有其他 app 无法测试望理解


使用方法：
1.打开掘金 app ->我的页面-> 个人主页 若提示获取Cookie成功则可以使用该脚本
2.打开小程序->奖励中心，若提示获取Cookie成功则可以使用该脚本
3.关闭获取Cookie重写，避免产生不必要的mitm。

QunatumultX
------------------------------------------
[task_local] 
0 0 8 * * https://raw.githubusercontent.com/rational-stars/QuantumultX/main/juejin/juejin.js, tag=掘金签到+每天免费抽奖一次, img-url=https://raw.githubusercontent.com/rational-stars/QuantumultX/main/icon/juejin.png, enabled=true

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
const _0x516756 = _0x1e94
;(function (_0x5a60b4, _0x466ec6) {
  const _0x4ad63a = _0x1e94,
    _0x46fc20 = _0x5a60b4()
  while (!![]) {
    try {
      const _0x3f29a7 =
        -parseInt(_0x4ad63a(0x1f0)) / 0x1 +
        (parseInt(_0x4ad63a(0x1f6)) / 0x2) *
          (parseInt(_0x4ad63a(0x1d8)) / 0x3) +
        (parseInt(_0x4ad63a(0x1f1)) / 0x4) *
          (-parseInt(_0x4ad63a(0x1fa)) / 0x5) +
        -parseInt(_0x4ad63a(0x1de)) / 0x6 +
        -parseInt(_0x4ad63a(0x1df)) / 0x7 +
        (parseInt(_0x4ad63a(0x201)) / 0x8) *
          (-parseInt(_0x4ad63a(0x1e8)) / 0x9) +
        (parseInt(_0x4ad63a(0x1e4)) / 0xa) * (parseInt(_0x4ad63a(0x1ec)) / 0xb)
      if (_0x3f29a7 === _0x466ec6) break
      else _0x46fc20['push'](_0x46fc20['shift']())
    } catch (_0x4a6a86) {
      _0x46fc20['push'](_0x46fc20['shift']())
    }
  }
})(_0x5e0a, 0x3f919)
function _0x5e0a() {
  const _0xdf229c = [
    'all',
    'free_count',
    '1045ULHKCh',
    'valueForKey',
    'sum_count',
    'get_counts',
    '422208hnxDLS',
    '12DBaHqN',
    'stringify',
    'free_number',
    'then',
    'https://api.juejin.cn/growth_api/v1',
    '2KJQMsH',
    '，累计签到天数',
    'POST',
    '/lottery_config/get',
    '725485DkSupq',
    'lottery_name',
    '/get_cur_point',
    '/lottery/draw',
    'GET',
    '，当前矿石数',
    'err_msg',
    '5240ZJzooo',
    'log',
    'lottery_config',
    '/get_counts',
    '18996kNTuDJ',
    'cont_count',
    'parse',
    'point_count',
    '请重新掘金获取ck',
    '接口调用失败：',
    '2975784WVbPpr',
    '321419VSCNXu',
    'xq-juejin-ck',
    'body',
    'get_cur_point',
    'error',
    '186800nSfIyW',
    '/check_in',
    '连续签到天数',
    '掘金通知',
    '1665dLnOqY',
    'draw',
  ]
  _0x5e0a = function () {
    return _0xdf229c
  }
  return _0x5e0a()
}
function _0x1e94(_0x4da929, _0x26639a) {
  const _0x5e0a21 = _0x5e0a()
  return (
    (_0x1e94 = function (_0x1e9458, _0x3dd56e) {
      _0x1e9458 = _0x1e9458 - 0x1d6
      let _0xb15df4 = _0x5e0a21[_0x1e9458]
      return _0xb15df4
    }),
    _0x1e94(_0x4da929, _0x26639a)
  )
}
let Cookie = $prefs[_0x516756(0x1ed)](_0x516756(0x1e0)) || ''
if (!Cookie) return $notify(_0x516756(0x1dc), '失败'), $done()
const baseUrl = _0x516756(0x1f5),
  Title = _0x516756(0x1e7),
  headers = { Cookie: Cookie },
  URL_INFO = {
    check_in: _0x516756(0x1e5),
    draw: _0x516756(0x1fd),
    get_cur_point: _0x516756(0x1fc),
    lottery_config: _0x516756(0x1f9),
    get_counts: _0x516756(0x1d7),
  }
let USER_INFO = {
    free_number: 0x0,
    cont_count: 0x0,
    sum_count: 0x0,
    point_count: 0x0,
  },
  notifyContent = ''
const handelResponse = async (_0x496027, _0x44148a) => {
    const _0x3d9f89 = _0x516756,
      _0x405259 = _0x496027?.['data']
    switch (_0x44148a) {
      case _0x3d9f89(0x1e5):
        notifyContent += _0x496027['err_msg']
        break
      case _0x3d9f89(0x1fd):
        const _0x5ee7ea = '抽中' + _0x405259?.[_0x3d9f89(0x1fb)]
        ;(notifyContent += _0x5ee7ea), console['log'](_0x5ee7ea)
        break
      case _0x3d9f89(0x1fc):
        USER_INFO[_0x3d9f89(0x1db)] = _0x405259
        break
      case '/lottery_config/get':
        USER_INFO[_0x3d9f89(0x1f3)] = _0x405259?.[_0x3d9f89(0x1eb)]
        break
      case _0x3d9f89(0x1d7):
        ;(USER_INFO[_0x3d9f89(0x1d9)] = _0x405259?.['cont_count']),
          (USER_INFO[_0x3d9f89(0x1ee)] = _0x405259?.[_0x3d9f89(0x1ee)])
        break
      default:
        console['log'](_0x405259)
        break
    }
    return _0x405259
  },
  Request = (_0xce5fa8, _0x5e3307 = _0x516756(0x1fe), _0x57d20a = {}) => {
    const _0x2d9113 = _0x516756
    let _0x417c8c = {
      url: baseUrl + _0xce5fa8,
      headers: headers,
      method: _0x5e3307,
      body: JSON[_0x2d9113(0x1f2)](_0x57d20a),
      opts: { redirection: ![] },
    }
    return $task['fetch'](_0x417c8c)[_0x2d9113(0x1f4)](
      (_0x31b8ac) => {
        const _0x19faac = _0x2d9113,
          _0x17d63c = JSON[_0x19faac(0x1da)](_0x31b8ac?.[_0x19faac(0x1e1)])
        return (
          console['log'](_0x17d63c[_0x19faac(0x200)]),
          handelResponse(_0x17d63c, _0xce5fa8)
        )
      },
      (_0x3cd955) => {
        const _0x1e2e44 = _0x2d9113
        console[_0x1e2e44(0x202)](
          _0xce5fa8 + _0x1e2e44(0x1dd) + _0x3cd955[_0x1e2e44(0x1e3)]
        )
      }
    )
  }
;(async () => {
  const _0x5f2b46 = _0x516756
  await Promise[_0x5f2b46(0x1ea)]([
    Request(URL_INFO['check_in'], _0x5f2b46(0x1f8)),
    Request(URL_INFO[_0x5f2b46(0x1d6)], 'GET'),
    Request(URL_INFO[_0x5f2b46(0x1ef)], _0x5f2b46(0x1fe)),
  ]),
    USER_INFO[_0x5f2b46(0x1f3)] >= 0x1 &&
      (await Request(URL_INFO[_0x5f2b46(0x1e9)], _0x5f2b46(0x1f8))),
    await Request(URL_INFO[_0x5f2b46(0x1e2)], _0x5f2b46(0x1fe)),
    console['log'](
      _0x5f2b46(0x1e6) +
        USER_INFO[_0x5f2b46(0x1d9)] +
        _0x5f2b46(0x1f7) +
        USER_INFO[_0x5f2b46(0x1ee)] +
        _0x5f2b46(0x1ff) +
        USER_INFO[_0x5f2b46(0x1db)]
    ),
    $notify(Title, '', notifyContent),
    $done()
})()
