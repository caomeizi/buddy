// 按图片知识点批量生成章节 Markdown 到 docs/bank/
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'docs', 'bank')
fs.mkdirSync(outDir, { recursive: true })

const chapters = [
  {
    file: '01-intro',
    title: '课堂小老师',
    subtitle: '银行对公柜台账户管理小知识，新人一看就懂的对公账户常识。',
    img: '01.webp',
    points: [
      '本系列共 18 篇，用图文形式讲清对公账户从开户、日常使用到销户归档的全流程要点。',
      '面向柜面新人与企业财务人员，内容侧重合规与风控常识。'
    ]
  },
  {
    file: '02-account-types',
    title: '对公账户分四类',
    subtitle: '基本户、一般户、专用户、临时户，用途不一样。',
    img: '02.webp',
    points: [
      '基本户：公司主账户，一家只能开一个，可转账、可取现金。',
      '一般户：可开多个，只能转账，不能取现。',
      '专用户：专款专用，按规定用途使用。',
      '临时户：临时经营或验资使用，最长不超过 2 年。'
    ]
  },
  {
    file: '03-opening-principles',
    title: '开户三原则',
    subtitle: '实名制、核受益所有人、查真实经营。',
    img: '03.webp',
    points: [
      '实名制：核实公司和法人真实身份。',
      '受益所有人：找到真正控制企业的自然人。',
      '真实经营：确认企业确实在做生意。'
    ]
  },
  {
    file: '04-checklist',
    title: '开户资料清单',
    subtitle: '营业执照、法人身份证、印章、授权书……少一样都可能再跑第二趟。',
    img: '04.webp',
    points: [
      '营业执照正本。',
      '法人身份证原件。',
      '经办人身份证 + 授权书。',
      '公章、财务章、法人私章。',
      '受益所有人信息。',
      '专户 / 临时户补充用途证明。'
    ]
  },
  {
    file: '05-process',
    title: '开户流程一步步',
    subtitle: '核证件、核身份、核经营、录信息、开产品、设限额。',
    img: '05.webp',
    points: [
      '检查证件有效期和真伪。',
      '法人 / 经办人身份核验。',
      '核实真实经营和受益所有人。',
      '采集印鉴，录入账户信息。',
      '设置限额，划分风险等级。'
    ]
  },
  {
    file: '06-cannot-open',
    title: '这些情况不能开户',
    subtitle: '资料异常、身份异常、经营异常，都要谨慎。',
    img: '06.webp',
    points: [
      '营业执照过期、吊销、注销。',
      '法人或单位在失信、惩戒名单。',
      '无法说明经营范围，拒绝配合核查。',
      '疑似出租、出借、出售账户。'
    ]
  },
  {
    file: '07-seal',
    title: '预留印鉴小知识',
    subtitle: '印章是账户支付的重要凭证，要管好、用好、核验好。',
    img: '07.webp',
    points: [
      '预留印鉴：公章或财务章 + 法人私章；印鉴卡专人保管，上锁管理。',
      '转账、支票业务要核验印鉴。',
      '换章、丢章要及时办理变更或挂失。',
      '严禁空白纸提前盖章。'
    ]
  },
  {
    file: '08-update',
    title: '信息变了要更新',
    subtitle: '公司改名、换法人、换地址，都要来银行更新。',
    img: '08.webp',
    points: [
      '可变更：名称、法人、地址、电话、经营范围、受益所有人。',
      '先变营业执照，再变银行账户信息。',
      '账号一般不变，但档案信息要更新。',
      '同步更新网银、对账、代扣协议。'
    ]
  },
  {
    file: '09-close',
    title: '销户前先清理',
    subtitle: '结清交易、交回重空、划转余额，基本户最后销。',
    img: '09.webp',
    points: [
      '结清贷款、票据、代扣、保证金等业务。',
      '账户无冻结、无查封、无未结交易。',
      '交回未使用重要空白凭证。',
      '余额转入同名对公账户。',
      '销基本户前，先销一般户、专户、临时户。'
    ]
  },
  {
    file: '10-dormant',
    title: '久悬不动户',
    subtitle: '长期不用、联系不上、对账失败，会转入久悬管理。',
    img: '10.webp',
    points: [
      '久悬账户：长期无交易、联系失败、对账失败。',
      '后果：可能停止对外支付。',
      '恢复：客户重新联系银行，配合核查。',
      '重点：久悬不是销户，状态要分清。'
    ]
  },
  {
    file: '11-reconcile',
    title: '对公要对账',
    subtitle: '定期核对账目，发现异常及时处理。',
    img: '11.webp',
    points: [
      '方式：纸质对账单、网银电子对账。',
      '频率：高风险按月 / 按季，普通按季 / 半年。',
      '连续对账失败要提升风险等级。',
      '柜员不得代客户对账、代签确认。'
    ]
  },
  {
    file: '12-transaction-rules',
    title: '交易有规矩',
    subtitle: '取现看账户类型，公转私看真实用途。',
    img: '12.webp',
    points: [
      '取现：基本户、合规专户、临时户按规定取；大额取现要预约和审核。',
      '公转私：要有真实用途，如工资、报销、劳务费；不能随便大额转私人。'
    ]
  },
  {
    file: '13-remote-channel',
    title: '非柜面渠道要管控',
    subtitle: '网银不是越方便越好，限额和风险要匹配。',
    img: '13.webp',
    points: [
      '新开户可设置初始交易限额。',
      '高风险客户可限制网银额度。',
      '可疑交易可暂停非柜面渠道。',
      '正常经营后可按需调整额度。',
      '调整必须有依据、有审批、有记录。'
    ]
  },
  {
    file: '14-freeze',
    title: '冻结扣划要依法',
    subtitle: '有权机关持正规文书办理，柜员按规定审核。',
    img: '14.webp',
    points: [
      '这是执法文书，不是普通业务。',
      '依法办理，记录完整。',
      '按规定流程来，不随意操作。'
    ]
  },
  {
    file: '15-no-lending',
    title: '账户不能乱借',
    subtitle: '出租、出借、出售账户，风险很大。',
    img: '15.webp',
    points: [
      '对公账户不得出租、出借、出售。',
      '涉案账户会被止付、冻结。',
      '法人和相关责任人可能被惩戒。',
      '重点关注：快进快出、深夜公转私、资金异常。'
    ]
  },
  {
    file: '16-blank-vouchers',
    title: '重空要管好',
    subtitle: '支票、结算单，领用要登记，销户要交回。',
    img: '16.webp',
    points: [
      '重要空白凭证包括支票、结算单、单位定期存单等。',
      '领用、使用、结余都要对上。',
      '每日盘点，账实相符。',
      '严禁在空白凭证上预先盖章。'
    ]
  },
  {
    file: '17-red-line',
    title: '柜面红线',
    subtitle: '这些事情，柜员绝对不能做。',
    img: '17.webp',
    points: [
      '不得为资料不全客户开户。',
      '不得代客户填单、代签字、代盖章。',
      '不得帮客户绕开限额和公转私管控。',
      '不得泄露客户账户信息。',
      '不得私自保管客户印章和证照。',
      '不得擅自解除涉案账户管控。'
    ]
  },
  {
    file: '18-archive',
    title: '一户一档，合规收尾',
    subtitle: '开户、变更、销户资料要完整归档。',
    img: '18.webp',
    points: [
      '一户一档：开户、变更、销户资料齐全。',
      '纸质和电子档案都要保存。',
      '调阅档案要审批登记。',
      '保管年限按监管要求执行。',
      '档案完整，事后检查才安心。'
    ]
  }
]

for (const ch of chapters) {
  const points = ch.points.map(p => `- ${p}`).join('\n')
  const md = `# ${ch.title}

> ${ch.subtitle}

![${ch.title}](/images/bank/${ch.img})

## 要点

${points}
`
  fs.writeFileSync(path.join(outDir, `${ch.file}.md`), md, 'utf8')
  console.log(`生成 ${ch.file}.md`)
}

console.log(`\n共生成 ${chapters.length} 个章节`)
