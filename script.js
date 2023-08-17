const inputText = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");

inputText.addEventListener("input", () => {
  const text = inputText.value;
  const words = text.split(/\s+/).filter((word) => word !== "");
  wordCount.textContent = words.length;
});
