import DaumPostcodeEmbed from "react-daum-postcode";

const AddressPage = () => {
  const handleComplete = (data) => {
    if (window.opener) {
      window.opener.postMessage(
        { type: "SELECT_ADDRESS", address: data.address },
        window.location.origin
      );
      window.close();
    }
  };
  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};
export default AddressPage;
