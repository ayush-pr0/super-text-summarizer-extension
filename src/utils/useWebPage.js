import { useContext } from "react";
import superContext from "./superContext";

const useWebPage = () => {
  const { setArticle, setPageData, setError } = useContext(superContext);

  async function checkChangeInData() {
    const { dataFetchTabId } = await chrome.storage.local.get([
      "dataFetchTabId",
    ]);
    const { currentTabId } = await chrome.storage.local.get(["currentTabId"]);
    if (currentTabId != dataFetchTabId) {
      setArticle({
        url: "",
      });
      setPageData("");
      setError(
        "Oop's..!! Data hasn't loaded or changed because of the tab switch. Please re-click on extension after page loads, or simply reload the page."
      );
      return true;
    }
    return false;
  }

  async function getActiveTabData() {
    const { tabURL } = await chrome.storage.local.get(["tabURL"]);
    const { pageData } = await chrome.storage.local.get(["pageData"]);
    if (!tabURL || !pageData) {
      const { error } = await chrome.storage.local.get(["error"]);
      setError(error);
    }
    setArticle({
      url: tabURL,
    });
    setPageData(pageData);
  }

  return { checkChangeInData, getActiveTabData };
};

export default useWebPage;
