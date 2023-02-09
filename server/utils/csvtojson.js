const csvtojson = async (fileContent) => {
    const content = fileContent.split("\r");
    const headers = content[0].split(",")
    const result = [];

    for (let i = 1; i < content.length - 1; i++) {
        let obj = {}

        let str = content[i];
        let s = '';
        let flag = 0;

        for (let ch of str) {
            if (ch === '"' && flag === 0) {
                flag = 1
            } else if (ch === '"' && flag === 1) {
                flag = 0
            }

            if (ch === ',' && flag === 0) {
                ch = '|'
            } 

            if (ch !== '"') s += ch
        }

        let properties = s.split("|");

        for (let index in headers) {
            if (properties[index].includes(", ")) {
                obj[headers[index]] = properties[index]
                .split(", ").map(item => item.trim())
            }
            else obj[headers[index]] = properties[index]
        }

        result.push(obj);
    }

    return result;
}

export default csvtojson;