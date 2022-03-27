
const content = "Hello my site"
/********************* ES5 ***********************/

const htmlContent = '<!DOCTYPE html>' +
                    '<html lang="en">' +
                    '<head>' +
                        '<title>Document</title>' +
                    '</head>' +
                    '<body>' +
                        content + 
                    '</body>' +
                    '</html>' 
console.log(htmlContent);

/********************* ES6 ***********************/
// (``) กดปุ่ม window + กดปุ่มเปลี่ยนภาษาค้างไว้

const htmlContentNew = `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <title>Document</title>
                        </head>
                        <body> 
                            ${content}
                            ${5 + 3}
                        </body>
                        </html>

                        `
console.log(htmlContentNew);

