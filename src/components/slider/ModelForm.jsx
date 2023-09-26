import React, { useState } from "react";

const ModalForm = ({ showModal, setShowModal, handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = "Name is required";
    }

    // Add more validation rules for other fields (phone, email, etc.) here

    setErrors(newErrors);
    return isValid;
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
    setErrors({});
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleSubmit(formData);
      handleCloseModal();
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p className="register-heading">Get a Quote</p>
            <form onSubmit={handleSubmitForm}>
              <div className="input_box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              {/* Add more fields (Phone, Email, Company, Service, Message) here */}
              {/* For Service field, you can use a dropdown select */}

              <div className="button-wrapper">
                <button type="submit" id="form_submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
