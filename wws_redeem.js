const list =
  `
LOFZUOCAT
MEA9TORPEDOCHKA
4ZJQJAZZYJONES
JINGLEBELLS2024
OHCYMARCHINGEGNERE
Y27JCH0M1N
Z1B3TCFREER
0FW5CLOWNIETV
246ECARBINECARLITO
2GMEDER7TEZWERG
4AZFZDRUVIK
ADP3LPASCH
BYU27KAMIL942
I7YH89KIJOBY
ID8PANDYTHECUPID
NTFVPHILSTIFTY
P582LORDZATH
UU7BQMAJORPAR
XHGDSTATSBLOKE
4BNYBATTLECHICK
72YDKUNCLE777
1DWDNEBELFUSS
9SR6EXPIOTETRUS
VD2MPRIVATEPINGUIN
Z1W8SRIVERFX
0KSDTNAIMONCHA
3PZ8TIERXCVSHINANO
2N841CZULY
3G82ELPROFEDEHISTORIA
AU4NTNEISCH
J5WBJAVO105
NPL4CHAOSMACHINEGR
PE6IZELDASAUCE
RJT3AEROSPACENEWS
V6HQOVERLORDBOU
Y10VMINIHANNIBAL65
GIMMECOAL
GW52SONEMG
JFXFJMCAPITAN
HAMBURGDOCKYARDREDDIT
ADVENTURE
IOWANAVALLEGENDS
`
const codes = list.split("\n").filter((x) => x.length > 0)
const input = document.querySelector("input[data-qa='redeem_code_input']")
const btn = document.querySelector("button[data-qa='redeem_code_button']")

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const createInputEvent = (v) => {
  return new InputEvent('input', {
    bubbles: true,
    cancelBubble: true,
    cancelable: true,
    composed: true,
    currentTarget: null,
    data: v,
    dataTransfer: null,
    isComposing: false,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 0,
    inputType: 'insertFromPaste',
    returnValue: true,
    sourceCapabilities: null,
    srcElement: input,
    target: input,
    timeStamp: 114514.1919810,
    type: 'input',
    view: null,
    which: 0
  })
}

for (let i = 0; i < codes.length; i++) {
  try {
    input.focus()
    input.value = codes[i]
    input.dispatchEvent(createInputEvent())
    btn.click()
    await delay(3000)
    const closeBtn = document.querySelector("#close-button")
    closeBtn.click()
    await delay(300000)
  } catch (e) {
    console.error(`Error occured when redeeming code: ${codes[i]}\nTry redeem it manually later.`)
  }
}

console.log('Done!')
