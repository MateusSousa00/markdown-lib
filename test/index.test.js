import getArchive from "../src/index";

const arrayResult = [
  {
    FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList",
  },
];

describe("getArchive::", () => {
  it("must be a function", () => {
    expect(typeof getArchive).toBe("function");
  });

  it("must return array with results", async () => {
    const result = await getArchive("/home/mateus/Desktop/alura/markdown-lib/test/archives/text1.md");
    expect(result).toEqual(arrayResult);
  });

  it('must return message "There are no links"', async () => {
    const result = await getArchive("/home/mateus/Desktop/alura/markdown-lib/test/archives/text1-no-links.md")
    expect(result).toBe('There are no links');
  })
});
