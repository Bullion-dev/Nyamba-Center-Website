import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    partnershipType: "volunteer",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (API call)
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We will get back to you shortly.");
  };

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-xs uppercase font-semibold tracking-widest text-[#C3601E]">
          Partner With Us
        </span>
        <h1 className="text-4xl md:text-5xl font-montserrat font-medium text-[#16221A] mt-2 mb-4">
          Become a Strategic Partner
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-md text-[#16221A]/80 leading-relaxed">
          Join hands with us to advance community development, protect human rights, and empower women and children in the Northern Region of Ghana.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-[#16221A] text-[#F3E9D4] rounded-xl p-8 md:p-12 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-xs uppercase font-semibold tracking-wider opacity-90">
                Full Name / Contact Person
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#26392A] border border-[#F3E9D4]/20 rounded-md px-4 py-3 text-sm focus:outline-none 
                focus:border-[#C3601E] transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs uppercase font-semibold tracking-wider opacity-90">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#26392A] border border-[#F3E9D4]/20 rounded-md px-4 py-3 text-sm focus:outline-none
                 focus:border-[#C3601E] transition-colors"
                placeholder="johndoe@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organization Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="organization" className="text-xs uppercase font-semibold tracking-wider opacity-90">
                Organization / Company <span className="text-xs opacity-50">(Optional)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full bg-[#26392A] border border-[#F3E9D4]/20 rounded-md px-4 py-3 text-sm focus:outline-none 
                focus:border-[#C3601E] transition-colors"
                placeholder="NGO, Corp, Foundation..."
              />
            </div>

            {/* Partnership Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="partnershipType" className="text-xs uppercase font-semibold tracking-wider opacity-90">
                How would you like to partner?
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                className="w-full bg-[#26392A] border border-[#F3E9D4]/20 rounded-md px-4 py-3 text-sm focus:outline-none
                 focus:border-[#C3601E] transition-colors appearance-none cursor-pointer"
              >
                <option value="volunteer">Individual Volunteering</option>
                <option value="funding">Grant & Financial Funding</option>
                <option value="corporate">Corporate Partnership</option>
                <option value="advocacy">Advocacy & Human Rights Support</option>
                <option value="other">Other Collaboration</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase font-semibold tracking-wider opacity-90">
              Tell us about your intent
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#26392A] border border-[#F3E9D4]/20 rounded-md px-4 py-3 text-sm focus:outline-none 
              focus:border-[#C3601E] transition-colors resize-none"
              placeholder="Briefly describe how you or your organization would like to support our mission..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2 text-center md:text-right">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#C3601E] hover:bg-[#a84f16] text-[#F3E9D4] font-medium text-md px-8 py-3 rounded-md 
              transition-colors shadow-md cursor-pointer"
            >
              Submit Partnership Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;