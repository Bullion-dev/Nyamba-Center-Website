
import { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("momo");

  const donationAmount = amount === "other" ? customAmount : amount;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!donationAmount || Number(donationAmount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    alert(
      `Thank you for choosing to donate GH₵${donationAmount} through ${
        paymentMethod === "momo" ? "Mobile Money" : "Bank Transfer"
      }. Payment instructions will be provided here.`
    );
  };

  return (
    <div className="bg-[#F3E9D4] text-[#16221A]">

      {/* Hero Section */}
      <section className="bg-[#16221A] text-[#F3E9D4] px-6 py-20 text-center">
        <span className="text-[#C3601E] uppercase tracking-widest text-xs font-semibold">
          Support Our Mission
        </span>

        <h1 className="text-4xl md:text-5xl font-montserrat font-medium mt-4 mb-6">
          Your Generosity Creates Change
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed opacity-80">
          Your contribution helps us empower women, protect children,
          and strengthen communities across Northern Ghana.
          Every donation makes a difference.
        </p>
      </section>

      {/* Donation Form */}
      <section className="max-w-3xl mx-auto px-6 py-16">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-montserrat font-medium mb-3">
            Make a Donation
          </h2>

          <p className="text-sm opacity-70">
            Choose an amount and your preferred payment method.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#16221A] text-[#F3E9D4] p-6 md:p-10 rounded-xl shadow-xl space-y-8"
        >

          {/* Donation Amount */}
          <div>
            <label className="block text-sm font-semibold mb-4">
              Select Donation Amount (GH₵)
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {["50", "100", "200", "500"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(value);
                    setCustomAmount("");
                  }}
                  className={`border rounded-md py-3 font-semibold transition-colors ${
                    amount === value
                      ? "bg-[#C3601E] border-[#C3601E] text-white"
                      : "border-[#F3E9D4]/30 hover:border-[#C3601E]"
                  }`}
                >
                  GH₵{value}
                </button>
              ))}

            </div>

            <button
              type="button"
              onClick={() => setAmount("other")}
              className={`mt-3 w-full border rounded-md py-3 transition-colors ${
                amount === "other"
                  ? "bg-[#C3601E] border-[#C3601E] text-white"
                  : "border-[#F3E9D4]/30 hover:border-[#C3601E]"
              }`}
            >
              Enter a custom amount
            </button>

            {amount === "other" && (
              <input
                type="number"
                min="1"
                step="0.01"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount in GH₵"
                className="mt-4 w-full bg-[#26392A] border border-[#F3E9D4]/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#C3601E]"
                required
              />
            )}
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-semibold mb-4">
              Select Payment Method
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <button
                type="button"
                onClick={() => setPaymentMethod("momo")}
                className={`border rounded-md p-5 text-left transition-colors ${
                  paymentMethod === "momo"
                    ? "border-[#C3601E] bg-[#26392A]"
                    : "border-[#F3E9D4]/30"
                }`}
              >
                <span className="block font-semibold">Mobile Money</span>
                <span className="text-xs opacity-70">
                  Pay using MoMo
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("bank")}
                className={`border rounded-md p-5 text-left transition-colors ${
                  paymentMethod === "bank"
                    ? "border-[#C3601E] bg-[#26392A]"
                    : "border-[#F3E9D4]/30"
                }`}
              >
                <span className="block font-semibold">Bank Transfer</span>
                <span className="text-xs opacity-70">
                  Transfer directly to our account
                </span>
              </button>

            </div>
          </div>

          
{/* Payment Instructions */}
<div className="bg-[#26392A] border border-[#F3E9D4]/10 rounded-lg p-5">

  {paymentMethod === "momo" ? (
    <>
      <h3 className="font-semibold text-lg mb-4">
        Mobile Money Payment
      </h3>

      <div className="space-y-3 text-sm">
        <div>
          <p className="opacity-60 text-xs uppercase">Account Name</p>
          <p className="font-semibold">Nyamba Centre</p>
        </div>

        <div>
          <p className="opacity-60 text-xs uppercase">MoMo Number</p>
          <p className="font-semibold">0552652439</p>
        </div>

        <div>
          <p className="opacity-60 text-xs uppercase">Pay ID</p>
          <p className="font-semibold">070626</p>
        </div>
      </div>
    </>
  ) : (
    <>
      <h3 className="font-semibold text-lg mb-4">
        Bank Transfer Details
      </h3>

      <div className="space-y-3 text-sm">
        <div>
          <p className="opacity-60 text-xs uppercase">Bank Name</p>
          <p className="font-semibold">Fidelity Bank</p>
        </div>

        <div>
          <p className="opacity-60 text-xs uppercase">Account Name</p>
          <p className="font-semibold">Nyamba Centre</p>
        </div>

        <div>
          <p className="opacity-60 text-xs uppercase">Account Number</p>
          <p className="font-semibold">1050182706512</p>
        </div>

        <div>
          <p className="opacity-60 text-xs uppercase">Branch</p>
          <p className="font-semibold">Ring Road Central</p>
        </div>
      </div>
    </>
  )}

</div>


          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#C3601E] hover:bg-[#a84f16] text-white font-semibold py-4 rounded-md transition-colors"
          >
            Continue with Donation
          </button>

          <p className="text-xs text-center opacity-60">
            Thank you for supporting NYAMBA CENTER's mission.
          </p>

        </form>
      </section>

    </div>
  );
}

export default Donate;
