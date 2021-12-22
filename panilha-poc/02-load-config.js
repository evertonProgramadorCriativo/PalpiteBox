const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1WEW4dhiywAs2g_68paL-GbE35-rd9_OhbcQ10T92hE4')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)

        const sheet = doc.sheetsByIndex[0]
        await sheet.loadCells('A2:B2')
        console.log(sheet.title)
        const mostrarPromocaoCell = sheet.getCell(1,0)
        console.log(mostrarPromocaoCell.value)

        const textocell = sheet.getCell(1,1)
        console.log(textocell.value)

    } catch (err) {
        console.log(err)
    }

}

run()

