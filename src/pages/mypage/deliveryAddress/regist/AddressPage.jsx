import DaumPostcodeEmbed from "react-daum-postcode";

const AddressPage = () => {
  const handleComplete = (data) => {
    // send data back to opener window
    if (window.opener) {
      window.opener.postMessage(data, window.location.origin);
      window.close();
    }
  };
  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};
export default AddressPage;
