export const mondaymicrourl = 'https://59vdwfeu91.execute-api.eu-west-2.amazonaws.com/UAT'
export const airtablemicrourl = 'https://nr8x0snfd2.execute-api.eu-west-2.amazonaws.com/UAT'
export const twilliotablemicrourl = 'https://a6fek3sduj.execute-api.eu-west-2.amazonaws.com/UAT'
export const emailhtml = (title, first_name, last_name, team) => {
    return `Hello ${title}  ${first_name} ${last_name} <br>
    Thanks for contacting us, Our customer relationship officer will get back to you shortly.<br>
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