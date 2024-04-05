import * as yup from 'yup';

export const validationSchema = [
    yup.object({
        fullName: yup.string().required('Full Name Is Required'),
        address1: yup.string().required('Address Line 1 Is Required'),
        address2: yup.string().required('Address Line 2 Is Required'),
        city: yup.string().required('City Is Required'),
        state: yup.string().required('State Is Required'),
        zip: yup.string().required('Zip Is Required'),
        country: yup.string().required('Country Is Required')
    }),
    yup.object(),
    yup.object({
        nameOnCard: yup.string().required('Name On Card Is Required')
    })
]