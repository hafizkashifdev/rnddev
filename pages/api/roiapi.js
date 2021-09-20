import axios from 'axios';

export default async function handler(req, res) {
    // const body = JSON.parse(req.body)
    console.log(req.body)
    axios.all([
        await axios.post('https://ot59pqebh2.execute-api.eu-west-2.amazonaws.com/default/airtableROI', {
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
            message: req.body.message,

        }),
        await axios.post('https://i0nbf7aw8f.execute-api.eu-west-2.amazonaws.com/default/ROI-SaleSiteRoute-monday', {
            Title: req.body.title,
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            Type: "Customer",
            Phone: req.body.phone_number,
            Email: req.body.email,
            Message: req.body.message,
            boardId: 1377220525,
            Organization: req.body.company,
            Designation: req.body.companydesignation,
            boardType: "RND",
            PhoneShortCode: req.body.PhoneShortCode,
        })
    ]).then(resp => {
        res.status(200).json({ message: "Data sent sucessfully" });
    }).catch(err => {
        res.status(400).json({ message: "Data sent Failed" });
    })
}