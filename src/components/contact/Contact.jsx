import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // Prevent the form submission from refreshing the page
    e.preventDefault();

    // Replace these with your actual EmailJS Service ID, Template ID, and User ID
    const serviceID = "service_3zxxr8w";
    const templateID = "template_gk9kuvo";
    const userID = "MUf09X2xxyXkvZhIn";

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        e.target.reset(); // Reset the form after successful submission
        showSuccessToast();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        showErrorToast();
      });
  };

  const showSuccessToast = () => {
    toast.success("Thank you! Your message has been sent.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Toast will automatically close after 3 seconds
      style: {
        top: "-200px", // Adjust the top position
        width: "300px", // Adjust the width of the toast
      }
    });
  };

  const showErrorToast = () => {
    toast.error("Failed to send your message. Please try again.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Toast will automatically close after 3 seconds
      style: {
        top: "20px", // Adjust the top position
        width: "300px", // Adjust the width of the toast
      }
    });
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Full name"
                {...register("name", { required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-md-6">
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control theme-light"
                placeholder="Email address"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col-6 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control theme-light"
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <span className="invalid-feedback">Subject is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="form-group mb-3">
              <textarea
                rows="4"
                className="form-control theme-light"
                placeholder="Type comment"
                {...register("comment", { required: true })}
              ></textarea>
              {errors.comment && (
                <span className="invalid-feedback">Comment is required.</span>
              )}
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="btn-bar">
              <button className="px-btn px-btn-white">Send Message</button>
            </div>
          </div>
          {/* End .col-12 */}
        </div>
      </form>

      {/* Toast Container to display the toasts */}
      <ToastContainer />
    </>
  );
};

export default Contact;
