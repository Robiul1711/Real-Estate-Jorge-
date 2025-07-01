import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, ScrollRestoration } from "react-router-dom";
import bank from "../../assets/images/bank.png";
import { MdDelete } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

const PaymentDetails = () => {
  const [image, setImage] = useState("");

  const handleUploadImage = () => {
    document.getElementById("image_input").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-6 lg:px-0 py-10 space-y-6">
      <ScrollRestoration />

      {/* Back link */}
      <div className="flex items-center gap-2 self-start">
        <Link to="/dashboard/add-funds">
          <IoArrowBackOutline className="text-xl" />
        </Link>
        <p className="font-medium text-sm sm:text-base">Back to Dashboard</p>
      </div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111827]">
          Payment Details
        </h2>
        <p className="text-[#6B7280] text-sm">
          Step 2 of 3: Complete your bank transfer and submit proof
        </p>
      </div>

      {/* Bank Details Card */}
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <img src={bank} alt="bank" className="w-10 h-10 object-contain" />
          <h2 className="text-lg font-bold text-[#111827]">
            Bank Transfer Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm text-[#111827] mb-1">Bank Name:</h3>
            <p className="text-[#4B5563] text-sm">PropertyPath Bank Ltd</p>
          </div>
          <div>
            <h3 className="text-sm text-[#111827] mb-1">Routing Number:</h3>
            <p className="text-[#4B5563] text-sm">123456789</p>
          </div>
          <div>
            <h3 className="text-sm text-[#111827] mb-1">Account Name:</h3>
            <p className="text-[#4B5563] text-sm">
              PropertyPath Investment Ltd
            </p>
          </div>
          <div>
            <h3 className="text-sm text-[#111827] mb-1">SWIFT Code:</h3>
            <p className="text-[#4B5563] text-sm">PPBANKUS</p>
          </div>
          <div>
            <h3 className="text-sm text-[#111827] mb-1">Account Number:</h3>
            <p className="text-[#4B5563] text-sm">123456890123</p>
          </div>
          <div>
            <h3 className="text-sm text-[#111827] mb-1">Transfer Amount:</h3>
            <p className="text-black font-bold text-base">$200</p>
          </div>
        </div>

        <p className="text-[#854D0E] bg-[#FEFCE8] text-sm p-4 rounded-lg mt-4">
          Important: Please use the exact amount shown above and include your
          account email in the transfer reference.
        </p>
      </div>

      {/* Transaction ID Input */}
      <div className="w-full max-w-xl flex flex-col space-y-2">
        <label
          htmlFor="transaction_id"
          className="text-base font-semibold text-[#111827]"
        >
          Transaction ID / Reference Number
        </label>
        <input
          id="transaction_id"
          type="text"
          placeholder="Enter transaction ID from your bank"
          className="border border-[#D1D5DB] rounded-md px-4 py-2.5 text-sm"
        />
      </div>

      {/* Upload Section */}
      <div className="w-full max-w-xl">
        <h2 className="text-base font-semibold text-[#111827] mb-2">
          Payment Screenshot
        </h2>
        <div className="mt-3  ">
          <input
            type="file"
            name="image"
            id="image_input"
            className="hidden"
            onChange={handleFileChange}
          />
          {image === "" ? (
            <div
              className="w-full flex flex-col items-center justify-center border border-dashed border-[#D1D5DB] rounded-md py-8 px-4 cursor-pointer"
              onClick={handleUploadImage}
            >
              <FiUpload className="text-2xl text-[#777777]" />
              <p className="text-sm text-[#777777]">
                Browse to upload your file
              </p>
            </div>
          ) : (
            <div className="relative w-full h-[300px]">
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-md"
              />
              <MdDelete
                className="text-2xl text-white bg-black/70 p-1 absolute top-2 right-2 rounded-full cursor-pointer"
                onClick={() => setImage("")}
              />
            </div>
          )}
        </div>
      </div>

      <Link to={"/dashboard/payment-success"} className="w-xl">
        <button className="w-full mt-4 px-4 py-3 text-sm bg-black text-white rounded-lg shadow-md cursor-pointer">
          Submit Payment Proof
        </button>
      </Link>

      {/* Footer Note */}
      <p className="text-[#6B7280] text-sm text-center mt-4 px-2">
        Your request will be reviewed within 24–48 hours. You'll receive a
        notification once approved.
      </p>
    </div>
  );
};

export default PaymentDetails;
