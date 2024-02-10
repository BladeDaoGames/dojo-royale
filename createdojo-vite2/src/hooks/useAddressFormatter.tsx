const useAddressFormatter = () => {
  const formatAddress = (address: string | undefined): string => {
    if (address && address.length >= 8) {
      return `${address.substring(0, 4)}...${address.substring(
        address.length - 4
      )}`;
    }
    return address || "";
  };

  return { formatAddress };
};

export default useAddressFormatter;
