const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1WEW4dhiywAs2g_68paL-GbE35-rd9_OhbcQ10T92hE4')

const run = async () => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        //Nome	Email	Whatsapp	Cupom 	Promo
        await sheet.addRow({
            Nome: 'Everton Eduardo',
            Email: 'evertonprogramadorcriativo@gmail.com',
            Whatsapp: '21 994334283',
            Cupom: 'Presente2022',
            Promo: 'test'
        })
    } catch (err) {
        console.log(err)
    }

}

run()

