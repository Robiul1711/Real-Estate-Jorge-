import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-4 mr-94">
        <Link to="/dashboard/add-funds">
          <IoArrowBackOutline />
        </Link>
        <p className="font-medium">Back to Dashboard</p>
      </div>
      <div className="mr-30">
        <h2 className="text-[29px] font-bold text-[#111827]">
          Payment Details
        </h2>
        <p className="text-[#6B7280]">
          Step 2 of 3: Complete your bank transfer and submit proof
        </p>
      </div>

      <div className="my-3 bg-white p-8 rounded-lg w-[550px]">
        <div className="flex items-center gap-4">
          <img src={bank} alt="bank" />
          <h2 className="text-[20px] font-bold text-[#111827]">
            Bank Transfer Details
          </h2>
        </div>
        <div className="my-3 flex justify-between">
          <div>
            <h2 className="text-[15px] text-[#111827] mb-1">Bank Name :</h2>
            <p className="text-[#4B5563]">PropertyPath Bank Ltd</p>
          </div>
          <div>
            <h2 className="text-[15px] text-[#111827] mb-1">
              Routing Number :
            </h2>
            <p className="text-[#4B5563]">123456789</p>
          </div>
        </div>
        <div className="my-3 flex justify-between">
          <div>
            <h2 className="text-[15px] text-[#111827] mb-1">Account Name :</h2>
            <p className="text-[#4B5563]">PropertyPath Investment Ltd</p>
          </div>
          <div>
            <h2 className="text-[15px] text-[#111827] mb-1">SWIFT Code :</h2>
            <p className="text-[#4B5563]">PPBANKUS</p>
          </div>
        </div>
        <div className="my-3 flex justify-between">
          <div>
            <h2 className="text-[15px] text-[#111827] mb-1">
              Account Number :
            </h2>
            <p className="text-[#4B5563]">123456890123</p>
          </div>
          <div>
            <h2 className="text-[15px] text-[#111827] mb-1">
              Transfer Amount :
            </h2>
            <p className="text-black font-bold text-lg">$200</p>
          </div>
        </div>
        <p className="text-[#854D0E] bg-[#FEFCE8] p-5 rounded-lg">
          Important: Please use the exact amount shown above and include your
          account email in the transfer reference.
        </p>
      </div>
      <h2 className="text-[20px] font-semibold text-[#111827] my-4 mr-52">
        Transaction ID / Reference Number
      </h2>
      <input
        type="text"
        placeholder="Enter transaction ID from your bank"
        className="border border-[#D1D5DB] rounded-md w-[35%] px-4 py-2.5"
      />
      <h2 className="text-[20px] font-semibold text-[#111827] my-4 mr-52">
        Payment Screenshot
      </h2>
      <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center w-[45%]">
        <input
          type="file"
          name="image"
          id="image_input"
          className="hidden"
          onChange={handleFileChange}
        />
        {image === "" ? (
          <div
            className="w-full md:w-[90%] flex items-center dark:border-slate-600 justify-center flex-col gap-4 border-[#e5eaf2] border rounded-md py-6 cursor-pointer"
            onClick={handleUploadImage}
          >
            <FiUpload className="text-[2rem] text-[#777777] dark:text-[#abc2d3]" />
            <p className="text-[#777777] dark:text-[#abc2d3]">
              Browse to upload you file
            </p>
          </div>
        ) : (
          <div className="relative w-full md:w-[80%] h-[300px]">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover"
            />
            <MdDelete
              className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
              onClick={() => setImage("")}
            />
          </div>
        )}
      </div>
      <button className="px-4 py-3 text-[15px] bg-black text-white border rounded-lg my-1 cursor-pointer shadow-md w-[35%]">
        Submit Payment Proof
      </button>
      <p className="text-[#6B7280] mt-4">
        Your request will be reviewed within 24-48 hours. You'll receive a
        notification once approved.
      </p>
    </div>
  );
};

export default PaymentDetails;
