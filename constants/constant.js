export const mondaymicrourl = 'https://90k2z6uixf.execute-api.us-west-2.amazonaws.com'
export const airtablemicrourl = 'https://rkoh18sgre.execute-api.us-west-2.amazonaws.com'
export const twilliotablemicrourl = 'https://1ga6wy07u1.execute-api.us-west-2.amazonaws.com'
export const emailhtml = (title, first_name, last_name, team) => {
    return `Hello ${title}  ${first_name} ${last_name} <br>
    Thanks for contacting us , As our customer relationship officer will get back to you shortly.<br>
    Regards <br>
    Team ${team}`
}
export const emailtitle = (appname) => {
    return `Thanks for contacting us from ${appname}`
}
export const ContactBoardId = 1377220002
export const RYIBoardId = 1377220525
export const AirTableBase = 'appPG7AJz7x2TTWT8'
export const contactUstable = "Contact Us"
export const RYItable = "Register Your Interest"