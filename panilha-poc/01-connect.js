const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1WEW4dhiywAs2g_68paL-GbE35-rd9_OhbcQ10T92hE4')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log(doc.title)
    } catch (err) {
        console.log(err)
    }

}

run()

