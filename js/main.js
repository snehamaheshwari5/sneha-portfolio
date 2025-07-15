document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "Diabetes Prediction",
    tools: "Python • scikit-learn • pandas",
    desc: "Built a random forest model to predict diabetes risk with 85% accuracy.",
    url: "https://github.com/snehamaheshwari/diabetes-predictor"
  },
  {
    title: "Income Inequality Analysis",
    tools: "R • ggplot2",
    desc: "Analyzed Indian income data and visualized Gini coefficients by state.",
    url: "https://github.com/snehamaheshwari/income-inequality-india"
  }
];

const container = document.getElementById("projectCards");
projects.forEach(p => {
  container.innerHTML += `
    <a href="${p.url}" target="_blank" class="block bg-white p-4 rounded shadow hover:shadow-md">
      <h3 class="font-semibold text-lg">${p.title}</h3>
      <p class="text-sm text-gray-600">${p.tools}</p>
      <p>${p.desc}</p>
    </a>`;
});
