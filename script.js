// Test data. Need to get from database
const accordionData = [
  {
    title: "Section 1",
    content:
      "</p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
  },
  {
    title: "Section 2",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    title: "Section 3",
    content:
      "<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p><p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
  },
  {
    title: "Section 4",
    content:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function createAccordion(data) {
  const accordion = document.getElementById("accordion");
  const fragment = document.createDocumentFragment();

  data.forEach((item, index) => {
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    const accordionTitle = document.createElement("button");
    accordionTitle.className = "accordion-title";
    accordionTitle.setAttribute("aria-expanded", "false");
    accordionTitle.setAttribute("aria-controls", `content${index}`);
    accordionTitle.textContent = item.title;

    const accordionContent = document.createElement("div");
    accordionContent.id = `content${index}`;
    accordionContent.className = "accordion-content";
    accordionContent.innerHTML = `<p>${item.content}</p>`;

    accordionItem.appendChild(accordionTitle);
    accordionItem.appendChild(accordionContent);
    fragment.appendChild(accordionItem);
  });

  // Adding all elements to the DOM at once
  accordion.appendChild(fragment);

  // Event Delegation for Optimization
  accordion.addEventListener("click", (event) => {
    if (event.target.classList.contains("accordion-title")) {
      const button = event.target;
      const content = button.nextElementSibling;

      document.querySelectorAll(".accordion-content").forEach((item) => {
        if (item !== content) {
          item.classList.remove("show");
          item.style.display = "none";
          item.previousElementSibling.setAttribute("aria-expanded", "false");
        }
      });

      if (content.style.display === "block") {
        content.style.display = "none";
        button.setAttribute("aria-expanded", "false");
      } else {
        content.style.display = "block";
        button.setAttribute("aria-expanded", "true");
      }
    }
  });

  // Ensuring keyboard accessibility
  accordion.addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target.classList.contains("accordion-title")
    ) {
      event.preventDefault();
      event.target.click();
    }
  });
}

createAccordion(accordionData);
