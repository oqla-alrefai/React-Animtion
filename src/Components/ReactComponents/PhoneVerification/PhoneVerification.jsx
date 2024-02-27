import { useState } from "react";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./phoneVerification.css";

function PhoneVerification() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [verified, setVerified] = useState(false);
  const [validity, setValidity] = useState(true);

  function onVerification() {
    setLoading(true);

    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    const formatPN = "+" + phoneNumber;
    signInWithPhoneNumber(auth, formatPN, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setVerified(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setValidity(false);
      });
  }

  const handleReset = () => {
    setPhoneNumber("");
    setOtp("");
    setLoading(false);
    setShowOTP(false);
    setVerified(false);
  };

  return (
    <section className="phone-verification-container">
      <h2>Phone Number Verification</h2>
      <div id="recaptcha-container"></div>
      {verified ? (
        <>
          {validity ? (
            <span>Phone Number is valid ✔️</span>
          ) : (
            <span>Phone Number is Invalid ❌</span>
          )}
          <button
            onClick={handleReset}
            className="phone-verification-reset-button"
          >
            <i className="ri-loop-left-line"></i>
          </button>
        </>
      ) : (
        <div className="phone-verification">
          {showOTP ? (
            <div className="otp-filling-section">
              <span className="icon-span">
                <i className="ri-door-lock-fill"></i>
              </span>
              <label className="phone-label">Enter Your OTP</label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="otp-container"
              ></OtpInput>
              <button className="verify-otp-button" onClick={onOTPVerify}>
                {loading ? <div className="spinner" /> : <></>}
                <span>Verify OTP</span>
              </button>
            </div>
          ) : (
            <div className="otp-filling-section">
              <span className="icon-span">
                <i className="ri-phone-fill"></i>
              </span>
              <label htmlFor="phone" className="phone-label">
                Verify Phone Number
              </label>
              <PhoneInput
                country={"jo"}
                value={phoneNumber}
                onChange={setPhoneNumber}
                className="phone-number-input"
              />
              <button onClick={onVerification} className="verify-otp-button">
                {loading ? <div className="spinner" /> : <></>}
                <span>Send Code</span>
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default PhoneVerification;
