// Test data. Need to get from database
const accordionData = [
  {
    title: "Section 1",
    content: "This is the content for section 1.",
  },
  {
    title: "Section 2",
    content: "This is the content for section 2.",
  },
  {
    title: "Section 3",
    content: "This is the content for section 3.",
  },
  {
    title: "Section 4",
    content: "This is the content for section 4.",
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
