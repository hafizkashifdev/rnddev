import axios from 'axios';
export default async function handler(req, res) {
    console.log(req.body)
    axios.all([
        await axios.post('https://99u9btxatc.execute-api.eu-west-2.amazonaws.com/default/airtableContactUs', {
            id: "appPG7AJz7x2TTWT8",
            type: "RND",
            title: req.body.title,
            fullname: req.body.firstname + " " + req.body.lastname,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone_number,
            organization: req.body.company,
            designation: req.body.companydesignation,
            comments: req.body.message
        }),
        await axios.post('https://naykxdjalh.execute-api.eu-west-2.amazonaws.com/default/SaleSite7C-Us-MondayRoute', {
            Title: req.body.title,
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            Phone: req.body.phone_number,
            Email: req.body.email,
            Comments: req.body.message,
            boardId: 1377220002,
            Organization: req.body.company,
            Designation: req.body.companydesignation,
            boardType: "RND",
            PhoneShortCode: req.body.PhoneShortCode,
        })
    ]).then(resp => {
        console.log(resp);
        res.status(200).json({ message: "Data sent sucessfully" });
    }).catch(err => {
        res.status(400).json({ message: "Data sent Failed" });
    })
}