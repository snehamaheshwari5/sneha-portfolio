document.getElementById("year").textContent = new Date().getFullYear();

const projects = [
  {
    title: "Diabetes Prediction",
    tools: "Python · scikit-learn · pandas",
    desc: "Built a random forest model to predict diabetes risk using Pima Indian dataset.",
    url: "https://github.com/snehamaheshwari/diabetes-predictor"
  },
  {
    title: "Income Inequality in India",
    tools: "R · ggplot2 · dplyr",
    desc: "Analyzed household survey data to compute Gini coefficients across Indian states.",
    url: "https://github.com/snehamaheshwari/income-inequality-india"
  },
  {
    title: "Spotify EDA",
    tools: "Python · seaborn · matplotlib",
    desc: "Visualized music trends from Spotify’s Top 200 dataset over time.",
    url: "https://github.com/snehamaheshwari/spotify-eda"
  }
];

const container = document.getElementById("projectCards");
projects.forEach(p => {
  container.innerHTML += `
    <a href="${p.url}" target="_blank" class="bg-white border-l-4 border-lavender p-4 rounded shadow hover:shadow-lg transition">
      <h4 class="text-lg font-semibold text-lavenderDark">${p.title}</h4>
      <p class="text-sm text-gray-600">${p.tools}</p>
      <p>${p.desc}</p>
    </a>`;
});
