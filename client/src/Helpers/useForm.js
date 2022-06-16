import { useState } from "react";

const useForm = (validate) => {

  
    const [values, setValues] = useState({
      email: "",
      password: ""
    });
  
    const [errors, setErrors] = useState({});
    // const [clicked, setClicked] = useState(false);
    
    // useEffect(() => {
    //     setIsSubmitting(true);
    //     // console.log("TEST HERE ");
    // //     if (JSON.stringify(errors) === '{}' && clicked) {
    // //       navigate("/profile", { state: { values: values } });
    // //     }
    //   }, [clicked]);
    
    //   const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    
    const handleSubmit = (e) => {
        console.log(errors);
        e.preventDefault();
        setErrors(validate(values));
        // setClicked(true);
      };
    return { values, errors,handleSubmit,handleChange };
}

    export default useForm;