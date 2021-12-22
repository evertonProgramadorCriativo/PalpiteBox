import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID) 
//dudu 22
const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4) + '-' + code.substr(4,4) + '-' + code.substr(8,4)
}
//dudu 22
export default async (req, res) => {
   // res.end( req.body)
    try {
            await doc.useServiceAccountAuth({ 
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
            })
        await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        //Nome	Email	Whatsapp	Cupom 	Promo
        const sheetConfig = doc.sheetsByIndex[0]
        await sheetConfig.loadCells('A2:B2')
        //console.log(sheet.title)
        const mostrarPromocaoCell = sheetConfig.getCell(1,0)
        console.log(mostrarPromocaoCell.value)

        const textoCell = sheetConfig.getCell(1,1)

        let Cupom = ''
        let Promo = ''

        if (mostrarPromocaoCell.value === 'Verdadeiro') {
            //TODO : gerar cupom
            Cupom = genCupom()
            Promo = textoCell.value
        }

        await sheet.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            'DataPreenchimento': moment().format('DD/MM/YYYY, h:mm:ss'),
            Cupom,
            Promo
        })
      //  res.end(req.body)
      res.end(JSON.stringify({
          showCoupom: Cupom !== '',
          Cupom,
          Promo
      }))
    } catch (err) {
        console.log(err)
        res.end('error')
    }

   // console.log(JSON.parse(req.body))
    
}