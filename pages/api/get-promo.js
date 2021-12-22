import { GoogleSpreadsheet } from 'google-spreadsheet'
 
//dudu 22
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) 
//dudu 22
const fromBase64 = value => {
    const buff = new Buffer.from(value, 'base64')
    return buff.toString('ascii') //dudu 22
}

export default async (req, res) => {
   // console.log(process.env.VAR1)
   console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))

    try {
        await doc.useServiceAccountAuth({ 
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
            })
        await doc.loadInfo()
       // console.log(doc.title)

        const sheet = doc.sheetsByIndex[0]
        await sheet.loadCells('A2:B2')
        //console.log(sheet.title)
        const mostrarPromocaoCell = sheet.getCell(1,0)
        console.log(mostrarPromocaoCell.value)

        const textocell = sheet.getCell(1,1)
        console.log(textocell.value)
       
        res.end(JSON.stringify({
                showCoupon: mostrarPromocaoCell.value === 'Verdadeiro',
                message: textocell.value
            }))

    } catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }

   
}