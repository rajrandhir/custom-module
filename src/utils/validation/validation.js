const validation = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "invalid email"
    } else if (!values.password) {
        errors.password = "password is required!!";
    } else if (values.password.length < 8) {
        errors.password = 'password should be more than 8 charecter!!'
    } 
    return errors;
}
export default validation;