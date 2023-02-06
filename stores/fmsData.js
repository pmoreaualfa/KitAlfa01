export const useFmsData = defineStore('fmsData', () => {
    const fmsProductInfo = {
        "response": {
            "productInfo": {
                "buildDate": "01/30/2020",
                "dateFormat": "MM/dd/yyyy",
                "timeStampFormat": "MM/dd/yyyy HH:mm:ss",
                "version": "19.0.1.30",
                "timeFormat": "HH:mm:ss",
                "name": "FileMaker Data API Engine"
            }
        },
        "messages": [
            {
                "code": "0",
                "message": "OK"
            }
        ]
    };
    const fmsDatabases = {
        "response": {
            "databases": [{
                "name": "Customers"
            }, {
                "name": "Sales"
            }]
        },
        "messages": [{
            "code": "0",
            "message": "OK"
        }]
    };
    const fmsResults = {
        "response": {
            "scriptResult": "OK - Omitted first 100",
            "scriptError": "0",
            "dataInfo": {
                "database": "JarvaTolk_Api",
                "layout": "Languages",
                "table": "Språk",
                "totalRecordCount": 268,
                "foundCount": 168,
                "returnedCount": 2
            },
            "data": [
                {
                    "fieldData": {
                        "Förkortning": "orm",
                        "English": "Etiopien"
                    },
                    "portalData": {},
                    "recordId": "105",
                    "modId": "4"
                },
                {
                    "fieldData": {
                        "Förkortning": "pbt",
                        "English": "Afghanistan"
                    },
                    "portalData": {},
                    "recordId": "106",
                    "modId": "4"
                }
            ]
        },
        "messages": [
            {
                "code": "0",
                "message": "OK"
            }
        ]
    }


    return { fmsProductInfo, fmsDatabases, fmsResults }
})
