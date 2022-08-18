import fetch from "node-fetch";

function handleError(error) {
  throw new Error(error.message);
}

async function checkStatus(arrayUrls) {
  try {
    //promises async await
    const arrayStatus = await Promise.all(
      arrayUrls.map(async (url) => {
        const res = await fetch(url);
        return res.status;
      })
    );
    return arrayStatus;
  } catch (error) {
    handleError(error);
  }
}

function generateUrlArray(arrayLinks) {
  //loop to every { key: value } object -> [value]
  return arrayLinks.map((obcjectLink) => Object.values(obcjectLink).join());
}

export default async function validateUrls(arrayLinks) {
  const links = generateUrlArray(arrayLinks);
  const statusLinks = await checkStatus(links);
  //spread operator
  const results = arrayLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index],
  }));
  return results;
}
